import { MdCheck, MdDeleteOutline } from "react-icons/md";

export const CompleteTask = () => {
  return (
    <>
      <div className="py-11">
        <div className="text-center">
          <h2 className="font-semibold text-3xl text-[#444444]">
            Complete Task
          </h2>
        </div>
        <div className="mt-10 flex items-center gap-5 mb-11">
          <div className="w-[8%]">
            <MdCheck size={30} color="#08CC27" />
          </div>
          <div className="flex w-[88%] border-b-2">
            <div className="w-[90%]">
              <h4 className=" font-semibold text-lg text-[#BEBEBE] leading-[20px]">
                <del>Leiteadfadwsf;ladskfl;kadsl;fkl;</del>
              </h4>
              <p className="font-normal text-sm text-[#BEBEBE] leading-[16px]">
                <del> 3 caixas</del>
              </p>
            </div>
            <div className="w-5%">
              <button className="py-1 px-2  rounded-md">
                <MdDeleteOutline size={30} color="#FF9999" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
