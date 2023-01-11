import React from "react"
import Design1 from "../../assets/design-1.jpg"
import Kev1 from "../../assets/kevin-1.jpg"
import Kev2 from "../../assets/kevin-2.jpg"

const Kevin = () => {
  return (
    <div className="h-[100vh] w-[75%] flex items-center bg-black">
      <div className="w-[20%] h-[65%]">
        <img src={Design1} alt="" className="object-cover h-full w-full"/>
      </div>
      <div className=" text-[1.2rem] font-semibold text-white w-[80%] h-full">
        <div className="h-[90%] flex justify-around items-center">
          <div className="mt-[7rem] h-[80%] w-[40%] flex flex-col items-center">
            <h3 className="font-semibold text-[#CEEF06] text-[2rem]">
              TYPE MASTER
            </h3>
            <h2 className="text-[9rem]">Kevin</h2>
            <h2 className="text-[9rem]">Banjo</h2>
            <button className="outline-none h-[4rem] w-[13.5rem] bg-white text-black text-[1rem]">
              PORTFOLIO
            </button>
          </div>
          <div className="w-[50%] h-full flex flex-col justify-around items-end">
            <div className="h-[27rem] w-[25rem]">
            <img src={Kev1} alt="" className="object-cover w-full h-full object-top" />
            </div>
            <div className="h-[24rem] w-[27rem]">
              <img src={Kev2} alt="" className="object-cover w-full h-full object-top " />
            </div>
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
