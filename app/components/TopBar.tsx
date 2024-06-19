"use client";
import Image from "next/image";
import NavigationBar from "./NavigationBar";
import React, { useEffect, useRef } from "react";

export default function TopBar() {
  const logo = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (logo)
      logo.current?.addEventListener("mousemove", (e) => {
        let x = e.offsetX;
        let y = e.offsetY;
        let boxWidth = 30;
        let boxHeight = 30;
        let moveX = x - boxWidth / 2;
        let moveY = y - boxHeight / 2;
        logo.current!.style.transform = `translateX(${moveX}px)
            translateY(${moveY}px)`;
      });
    logo.current?.addEventListener("mouseleave", (e) => {
      logo.current!.style.transform = `translateX(${0}px)
            translateY(${0}px)`;
    });
  }, []);
  return (
    <div className="flex w-[85%] justify-between mt-5 max-w-[2000px] fixed drop-shadow-rich4">
      <div
        className="bg-white-3 rounded-[40px] pb-[1px] mt-8 mb-20 m-2 cursor-pointer"
        ref={logo}
      >
        <div className="flex w-fit bg-[rgb(22,22,22)] p-1 rounded-[30px] ">
          <Image src="./logo.svg" height={30} width={30} alt="logo"/>
        </div>
      </div>
      <NavigationBar />
    </div>
  );
}
