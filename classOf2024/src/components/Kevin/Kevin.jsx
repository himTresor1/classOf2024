import React from "react";

const Kevin = () => {
  return (
    <div className="h-[100vh] w-[75%] flex items-center bg-yellow-100">
      <div className="w-[20%] h-[70%] bg-red-700"></div>
      <div className=" text-[1.2rem] font-semibold text-white w-[80%] h-full bg-blue-200">
        <div className="bg-yellow-400 h-[90%] flex justify-around">
            <div className="w-[40%] bg-gray-200">
                <h3 className="font-semibold text-[#CEEF06] text-[2rem]">TYPE MASTER</h3>
                <h2 className="">Kevin</h2>
                <h2 className="">Banjo</h2>
            </div>
            <div className="w-[50%] bg-red-300 flex flex-col justify-between items-center">
                <div className="h-[28rem] w-[25rem] bg-[yellow]"></div>
                <div className="h-[20rem] w-[20rem] bg-[red]"></div>
            </div>
        </div>
        <h2>Any fool can write code that a computer can understand.</h2>
        <h2>
          Good programers write code that humans can understand. ~ Martin Fowler
        </h2>
      </div>
    </div>
  );
};

export default Kevin;
