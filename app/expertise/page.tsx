"use client";
import React, { useEffect } from "react";
import Me from "../components/Me";
export default function Page() {
  return (
    <div className="relative w-dvw flex items-center justify-around flex-col -mt-32 md:-mt-10">
      <Me />
      <div className=" -z-20 -mt-72 absolute w-dvw max-w-[1400px] flex md:-mt-48 xl:-mt-20">
        <div className="relative flex scale-75  sm:scale-100 sm:px-10 md:scale-[1.1] md:px-32 lg:scale-[1.2] lg:px-52 xl:scale-[1.4] xl:px-80">
          <img
            className="w-[100px] -mr-10 -mt-40"
            src="./designer.svg"
            alt=""
          />
          <div className="playfair text-[70px] ">
            <div className="-mb-8">Erfan</div>
            <div>Sefat</div>
          </div>
          <img
            className="w-[100px] -ml-10 -mt-36"
            src="./developer.svg"
            alt=""
          />
        </div>
      </div>
      <div className="bg-cover bg-clip-content bg-[url('/Table.png')] w-[2800px] h-[90px] sm:h-[100px] md:h-[120px] bg-bottom"></div>
      <div className="bg-black h-32 w-[2800px] blur-3xl -z-10 -mt-10"></div>
    </div>
  );
}
