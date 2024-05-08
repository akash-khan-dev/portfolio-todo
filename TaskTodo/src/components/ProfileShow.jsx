import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { BsImages } from "react-icons/bs";
import { Modal } from "antd";
import { RiLogoutCircleLine } from "react-icons/ri";
import profilepciture from "../../public/images/avatar.png";
import { useDispatch, useSelector } from "react-redux";
import { Bounce, ToastContainer, toast } from "react-toastify";
import { userInfo } from "../ReduxFeature/Slice/UserSlice";

const ProfileShow = () => {
  const dispatch = useDispatch();
  const [userState, setUserState] = useState();
  const [selectedFile, setSelectedFiles] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [profile, setProfilePic] = useState([]);

  const choosefile = useRef();
  const user = useSelector((user) => user.userInformation.user);
  useEffect(() => {
    const getUser = async () => {
      try {
        const UserURL = `http://localhost:8000/api/v1/user/${user._id}`;
        const data = await axios.get(UserURL);
        setUserState(data.data.data);
      } catch (err) {
        toast.error(err.response.data.message, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
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
      formData.append("userId", user._id);

      // eslint-disable-next-line no-unused-vars
      const data = await axios.post(URL, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    } catch (error) {
      toast.error(error.response.data.message, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      console.error("Error uploading file: ", error);
    }
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleLogOut = () => {
    localStorage.removeItem("user");
    dispatch(userInfo(null));
  };

  useEffect(() => {
    const getProfile = async () => {
      try {
        const url = "http://localhost:8000/api/v1/profile/show";

        const data = await axios.get(url);
        const profileArray = [];
        data.data.data.forEach((item) => {
          if (user._id === item.userId) {
            profileArray.push(item);
          }
        });
        setProfilePic(profileArray);
      } catch (error) {
        toast.error(error.response.data.message, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      }
    };
    getProfile();
  }, []);

  const profileImage = profile.length > 0 && profile[0].image;
  return (
    <>
      <ToastContainer />
      <div className="absolute top-16 left-16">
        <div className="relative flex items-center group justify-center duration-300 transition-all">
          <div className=" w-24 h-24 rounded-full overflow-hidden  bg-green-500">
            <img
              className="w-[100%] h-[100%] object-cover"
              src={`http://localhost:8000/${profileImage}`}
              alt=""
            />
          </div>
          <div
            onClick={() => choosefile.current.click()}
            className="absolute w-24 h-24 rounded-full flex items-center justify-center cursor-pointer   z-10 "
            style={{
              backgroundColor: " rgba(0, 0, 0, 0.30)",
            }}
          ></div>
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
        <div className="mt-96">
          <RiLogoutCircleLine
            size={25}
            className="ml-10 cursor-pointer"
            onClick={handleLogOut}
          />
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
