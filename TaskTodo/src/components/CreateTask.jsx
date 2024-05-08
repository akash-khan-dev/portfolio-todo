import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import axios from "axios";
import { Bounce, ToastContainer, toast } from "react-toastify";
import BeatLoader from "react-spinners/BeatLoader";
import { useSelector } from "react-redux";

const CreateTask = () => {
  const [loading, setLoading] = useState(false);
  const [inputValue, setInputValue] = useState({
    title: "",
    description: "",
  });

  const HandleChange = (e) => {
    const { name, value } = e.target;
    setInputValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const user = useSelector((user) => user.userInformation.user);
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const URL = "http://localhost:8000/api/v1/task/create";
      // eslint-disable-next-line no-unused-vars
      const data = await axios.post(URL, {
        title: inputValue.title,
        description: inputValue.description,
        userId: user._id,
      });
      setLoading(false);
      setInputValue({
        title: "",
        description: "",
      });
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
      setLoading(false);
    }
  };

  return (
    <>
      <div className="mt-5">
        <ToastContainer />
        <form onSubmit={handleSubmit} className="flex gap-3">
          <div>
            <label className="block font-normal text-sm text-[#BEBEBE] pb-1">
              Title
            </label>
            <input
              onChange={HandleChange}
              name="title"
              value={inputValue.title}
              className="border-2 border:w-[4px] border-blue-300 outline-none py-1 px-1 rounded-md"
              type="text"
            />
          </div>
          <div>
            <label className="block font-normal text-sm text-[#BEBEBE] pb-1">
              Description
            </label>
            <input
              onChange={HandleChange}
              name="description"
              value={inputValue.description}
              className="border-2 border:w-[4px] border-blue-300 outline-none py-1 px-1 rounded-md"
              type="text"
            />
          </div>
          <div className="mt-[25px]">
            {loading ? (
              <button disabled className="bg-blue-300 px-9 py-2 rounded-md">
                <BeatLoader />
              </button>
            ) : (
              <button
                type="submit"
                className="bg-blue-300 px-9 py-2 rounded-md"
              >
                <FaPlus color="white" />
              </button>
            )}
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateTask;
