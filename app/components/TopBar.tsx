import NavigationBar from "./NavigationBar";
import React from "react";

export default function TopBar() {
  return (
    <div className="flex items-center w-dvw justify-between px-11">
      <div className="bg-white-3 rounded-[40px] pb-[1px] mt-8 mb-20">
        <div className="flex w-fit bg-[rgb(22,22,22)] p-1 rounded-[30px]">
          <img src="./logo.svg"  className="h-[30px]"/>
        </div>
      </div>
      <NavigationBar />
    </div>
  );
}
