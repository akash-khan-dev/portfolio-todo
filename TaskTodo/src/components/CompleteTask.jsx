import axios from "axios";
import { useEffect, useState } from "react";
import { MdCheck, MdDeleteOutline } from "react-icons/md";
import { useSelector } from "react-redux";
import { Bounce, ToastContainer, toast } from "react-toastify";

export const CompleteTask = () => {
  const [completeDataState, setCompleteDataState] = useState([]);
  const user = useSelector((user) => user.userInformation.user);
  useEffect(() => {
    const getCompleteTask = async () => {
      try {
        const URL = "http://localhost:8000/api/v1/task/showcompletetasks";
        const data = await axios.get(URL);
        const completeTaskArr = [];
        data.data.data.forEach((task) => {
          if (task.userId == user._id) {
            completeTaskArr.push(task);
          }
        });
        setCompleteDataState(completeTaskArr);
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
    getCompleteTask();
  }, [completeDataState]);

  const handleDelete = async (item) => {
    try {
      const URL = `http://localhost:8000/api/v1/task/completetaskdelte/${item._id}`;
      // eslint-disable-next-line no-unused-vars
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
      {completeDataState.length > 0 && (
        <div className="py-11">
          <div className="text-center">
            <h2 className="font-semibold text-3xl text-[#444444]">
              Complete Task
            </h2>
          </div>
          {completeDataState.map((data, i) => (
            <div key={i} className="mt-10 flex items-center gap-5 mb-11">
              <div className="w-[8%]">
                <MdCheck size={30} color="#08CC27" />
              </div>
              <div className="flex w-[88%] border-b-2">
                <div className="w-[90%]">
                  <h4 className=" font-semibold text-lg text-[#BEBEBE] leading-[20px]">
                    <del>{data.title}</del>
                  </h4>
                  <p className="font-normal text-sm text-[#BEBEBE] leading-[16px]">
                    <del>{data.description}</del>
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
        </div>
      )}
    </>
  );
};
