import React from "react";
import "../../App.css";
import pacifiquemImage from './M.pac.jpg';

function Pacifiquem() {
  return (
    <div className="flex flex-row gap-0 w-screen h-screen bg-black mt-[-3.85rem]">
      <div className="w-[40vw] h-[100%] justify-center items-center">
        <div className=" w-[100%] h-[100%] flex justify-center items-center">
          <img src={pacifiquemImage} alt="M.pac's Image" className="border-transparent border-x-neutral-500 border-opacity-70 rounded-3xl"/>
        </div>
      </div>
      <div className="w-[60vw] h-[100%] flex flex-col justify-center items-center">
        <div className=" flex flex-col gap-8 justify-center text-white">
          <h2 className=" text-2xl text-[#CEEF06]">Pacifique Murangwa</h2>
          <div className="w-[60%]">
            <h1 className=" text-7xl tracking-wide leading-tight font-semibold">As crisp as real life .</h1>
          </div>
          <h3 className="tracking-[.1rem]">″First, solve the problem. Then, write code .‶</h3>
          <div className="w-[60%] flex items-center justify-center">
            <button className="bg-white w-[50%] text-black inline-block py-4 font-semibold text-lg mt-4">
              <a href="https://pacifiquem.engineer">Portfolio</a>
            </button>
          </div>
        </div>
        <div>

        </div>
      </div>
    </div>
  )
}

export default Pacifiquem;
