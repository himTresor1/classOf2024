import React from "react";
import "../../App.css";

import tresor1 from "./tresor1.png";

function Tresor() {
  return (
    <div className="h-[1090px] w-screen bg-[#F9F3F1] flex flex-row ">
      <div className="w-[50%]  ">
        <div className="   w-[90%]  mt-[18rem] ml-[10rem] ">
          <h1 className="font-bold text-[2rem]">AMIZERO TRESOR</h1>
          <div className=" w-[95%]  stand">
            <h1 className="font-bold text-[7rem]">Stand with pride. </h1>
          </div>
          <h1 className="font-semibold text-[1rem]">
            “With fam , nothing we can’t do!Find yourself a real fam!
          </h1>
        </div>
        <div className="button">
          <button className=" ml-[40%]  mt-[5rem] w-[13rem] h-[4rem] bg-black  outline-none border-[2px] border-black text-white font-bold">PORTFOLIO</button>
        </div>
      </div>
      <div className="w-[50%]">
        <img className="  ml-[6rem] mt-[3rem]  h-[90%]" src={tresor1} alt="" />
      </div>

    </div>
  );
}

export default Tresor;
