import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { BsImages } from "react-icons/bs";
import { Modal } from "antd";
import profilepciture from "../../../TodoBackend/images/1714711124786-46016453-WhatsApp Image 2024-04-01 at 00.15.10_1d0e8881.jpg";
import { useSelector } from "react-redux";

const ProfileShow = () => {
  const [userState, setUserState] = useState();
  const [selectedFile, setSelectedFiles] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [uploadUrl, setUploadUrl] = useState(null);

  const choosefile = useRef();
  const user = useSelector((user) => user.userInformation.user);
  useEffect(() => {
    const getUser = async () => {
      try {
        const UserURL = `http://localhost:8000/api/v1/user/${user._id}`;
        const data = await axios.get(UserURL);
        setUserState(data.data.data);
      } catch (e) {
        console.log(e.message);
      }
    };
    getUser();
  }, []);

  const handleFiledChange = (e) => {
    const files = e.target.files[0];
    setSelectedFiles(files);
    showModal();
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleUpdatedProfile = async () => {
    try {
      const URL = "http://localhost:8000/api/v1/profile/upload";
      const formData = new FormData();
      formData.append("avatar", selectedFile);

      // eslint-disable-next-line no-unused-vars
      const data = await axios.post(URL, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setUploadUrl(data.data.data);
    } catch (error) {
      console.error("Error uploading file: ", error);
    }
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  console.log(uploadUrl);

  return (
    <>
      <div className="absolute top-16 left-16">
        <div className="relative flex items-center group justify-center">
          <div className=" w-24 h-24 rounded-full overflow-hidden  ">
            <img
              className="w-[100%] h-[100%] object-cover"
              src={profilepciture}
              alt="profile"
            />
          </div>
          <div
            onClick={() => choosefile.current.click()}
            className="absolute w-24 h-24 rounded-full flex items-center justify-center cursor-pointer -z-10 group-hover:z-10 "
            style={{
              backgroundColor: " rgba(0, 0, 0, 0.50)",
            }}
          >
            <BsImages color="white" />
          </div>
        </div>
        <input
          type="file"
          className="hidden"
          ref={choosefile}
          onChange={handleFiledChange}
        />
        <div>
          <h5 className="text-center font-semibold text-lg text-[#444444] mt-2">
            {userState?.name}
          </h5>
        </div>
        <Modal
          title="Confirm Upload Your Profile"
          open={isModalOpen}
          onOk={handleUpdatedProfile}
          onCancel={handleCancel}
        ></Modal>
      </div>
    </>
  );
};

export default ProfileShow;
