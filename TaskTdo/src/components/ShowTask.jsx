import axios from "axios";
import { useEffect, useState } from "react";
import { MdDeleteOutline } from "react-icons/md";
import { Bounce, ToastContainer, toast } from "react-toastify";
export const ShowTask = () => {
  const [taskState, setTaskState] = useState([]);
  useEffect(() => {
    const getAllTasks = async () => {
      try {
        const URL = "http://localhost:8000/api/v1/task/showtasks";
        const data = await axios.get(URL);
        setTaskState(data.data.data);
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
    getAllTasks();
  }, [taskState]);

  const handleClick = async (item) => {
    try {
      const URl = "http://localhost:8000/api/v1/task/complete";
      const data = await axios.post(URl, {
        title: item.title,
        description: item.description,
        userId: item.userId,
      });
      const DeleteURL = `http://localhost:8000/api/v1/task/taskdelete/${item._id}`;
      await axios.delete(DeleteURL);
    } catch (err) {
      toast.error(err.response.data.message, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  };
  const handleDelete = async (item) => {
    try {
      const URL = `http://localhost:8000/api/v1/task/taskdelete/${item._id}`;
      const data = await axios.delete(URL);
    } catch (err) {
      toast.error(err.response.data.message, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  };
  return (
    <>
      <ToastContainer />
      {taskState &&
        taskState.map((data, i) => (
          <div key={i} className="mt-10 flex items-center gap-5">
            <div className="w-[12%]">
              <button
                onClick={() => handleClick(data)}
                className="py-1 px-4 bg-blue-300 rounded-md font-medium text-white"
              >
                Done
              </button>
            </div>
            <div className="flex w-[88%] border-b-2">
              <div className="w-[90%]">
                <h4 className=" font-semibold text-lg text-[#444444] leading-[20px]">
                  {data.title}
                </h4>
                <p className="font-normal text-sm text-[#BEBEBE] leading-[16px]">
                  {data.description}
                </p>
              </div>
              <div className="w-5%">
                <button
                  onClick={() => handleDelete(data)}
                  className="py-1 px-2  rounded-md"
                >
                  <MdDeleteOutline size={30} color="#FF9999" />
                </button>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};
