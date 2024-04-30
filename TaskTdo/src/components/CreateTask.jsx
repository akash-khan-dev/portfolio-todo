import { FaPlus } from "react-icons/fa";
const CreateTask = () => {
  return (
    <>
      <div className="mt-5">
        <form className="flex gap-3">
          <div>
            <label className="block font-normal text-sm text-[#BEBEBE] pb-1">
              Title
            </label>
            <input
              className="border-2 border:w-[4px] border-blue-300 outline-none py-1 px-1 rounded-md"
              type="text"
            />
          </div>
          <div>
            <label className="block font-normal text-sm text-[#BEBEBE] pb-1">
              Description
            </label>
            <input
              className="border-2 border:w-[4px] border-blue-300 outline-none py-1 px-1 rounded-md"
              type="text"
            />
          </div>
          <div className="mt-[25px]">
            <button className="bg-blue-300 px-9 py-2 rounded-md">
              <FaPlus color="white" />
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateTask;
