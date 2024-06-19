import React from "react";

export default function MovingBlubs() {
  return (
    <div className="mr-[700px] mt-52 -z-10 absolute">
      <div className="absolute h-fit w-[1000px]  animate-reverse-spin">
        <div className="h-[400px] w-[800px] bg-red-500 blur-[200px] rounded-[1000px] absolute z-[-1] top-[-60px] left-[-60px] opacity-35"></div>
      </div>
      <div className="absolute h-[fit] w-[700px]  animate-spin-slow">
        <div className="h-[400px] w-[400px] bg-yellow-500 blur-[200px] rounded-[1000px] absolute z-[-1] top-[50px] right-[-60px] opacity-35"></div>
      </div>
      <div className="absolute h-fit w-[200px]  animate-spin-slow2">
        <div className="h-[400px] w-[400px] bg-blue-500 blur-[200px] rounded-[1000px] absolute z-[-1] top-[100px] left-[20px] opacity-40"></div>
      </div>
    </div>
  );
}
