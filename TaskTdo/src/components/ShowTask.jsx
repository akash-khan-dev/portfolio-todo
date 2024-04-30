import { MdDeleteOutline } from "react-icons/md";

export const ShowTask = () => {
  return (
    <>
      <div className="mt-10 flex items-center gap-5">
        <div className="w-[12%]">
          <button className="py-1 px-4 bg-blue-300 rounded-md font-medium text-white">
            Done
          </button>
        </div>
        <div className="flex w-[88%] border-b-2">
          <div className="w-[90%]">
            <h4 className=" font-semibold text-lg text-[#444444] leading-[20px]">
              Leiteadfadwsf;ladskfl;kadsl;fkl;
            </h4>
            <p className="font-normal text-sm text-[#BEBEBE] leading-[16px]">
              3 caixas
            </p>
          </div>
          <div className="w-5%">
            <button className="py-1 px-2  rounded-md">
              <MdDeleteOutline size={30} color="#FF9999" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
