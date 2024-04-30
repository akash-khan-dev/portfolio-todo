import { MdOutlineShoppingBag } from "react-icons/md";
const HomeTop = () => {
  return (
    <>
      <div className="flex justify-center items-center">
        <div className="w-32 h-32 bg-blue-300 rounded-full flex justify-center items-center">
          <MdOutlineShoppingBag size={65} color="white" />
        </div>
      </div>
      <div className="text-center mt-4">
        <h1 className="font-fontFamily font-bold text-4xl text-[#444444]">
          List of Taks
        </h1>
        <p className="font-fontFamily font-normal text-lg text-[#BEBEBE] mt-1">
          Facilite sua ida ao supermercado!
        </p>
        <div className="relative after:absolute after:content-[''] after:w-32 after:h-[1.5px] after:bg-blue-300 after:top-2 after:left-[50%] after:-translate-x-1/2"></div>
      </div>
    </>
  );
};

export default HomeTop;
