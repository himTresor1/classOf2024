import React from "react";
import Design1 from "../../assets/design-1.jpg";
import Kev1 from "../../assets/kevin-1.jpg";
import Kev2 from "../../assets/kevin-2.jpg";

const Kevin = () => {
  return (
    <div className="h-[150vh] w-full border-b-[3px] flex items-center bg-black">
      <div className="w-[23%] h-[80%]">
        <img src={Design1} alt="" className="object-cover h-full w-full" />
      </div>
      <div className=" text-[1.2rem] font-semibold text-white w-[80%] h-full">
        <div className="h-[86%] flex justify-center items-center">
          <div className="mt-[10rem] h-[80%] w-[45%] flex flex-col items-center mr-[1rem]">
            <h3 className="font-semibold text-[#CEEF06] text-[2rem] mr-8">
              FRONTEND & TYPING MASTER
            </h3>
            <h2 className="text-[12rem]">Kevin</h2>
            <h2 className="text-[12rem]">Banjo</h2>
            <button className="outline-none h-[5rem] w-[18rem] bg-white text-black text-[1rem] hover:bg-black hover:text-white hover:border-[2px] border-white">
              PORTFOLIO
            </button>
          </div>
          <div className="w-[43%] h-full flex flex-col justify-start items-end">
            <div className="h-1/2 w-[82%]">
              <img
                src={Kev1}
                alt=""
                className="object-cover w-full h-full object-top"
              />
            </div>
            <div className="h-[45%] w-[90%] mt-[2.8rem]">
              <img
                src={Kev2}
                alt=""
                className="object-cover w-full h-full object-top "
              />
            </div>
          </div>
        </div>
        <div>
            <h2 className="ml-[3rem]">Any fool can write code that a computer can understand.</h2>
            <h2 className="ml-[3rem] mt-[0.5rem]">
              Good programers write code that humans can understand. ~ Martin
              Fowler
            </h2>
          </div>  
      </div>
    </div>
  );
};

export default Kevin;
