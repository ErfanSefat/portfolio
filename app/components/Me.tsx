import React from "react";
export default function Me() {
  return (
    <div>
      <div className="relative flex flex-row-reverse w-dvw max-w-[1400px] -mb-10 px-3 mt-52 ">
        <div className="flex flex-col items-center sm:scale-110 sm:px-10 md:scale-[1.2] md:px-20 lg:scale-[1.3] lg:px-40 xl:scale-[1.4] xl:px-60">
          <img
            className="w-[230px] mb-[-80px] drop-shadow-bottomtotop -z-10"
            src="./animoji.png"
            alt="Animoji"
          />
          <img
            className="w-[210px] -mb-3 lg:-mb-1"
            src="./laptop-shadow.png"
            alt="Laptop"
          />
        </div>
      </div>
    </div>
  );
}
