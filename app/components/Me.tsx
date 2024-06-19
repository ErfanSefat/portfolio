import React from "react";
import Image from "next/image";
export default function Me() {
  return (
    <div className="relative w-[100%] max-w-[2000px] mt-[500px] -mb-28">
      <Image
        className=" absolute bottom-0 right-[110px]"
        src={"/laptop-shadow.png"}
        height={300}
        width={500}
        alt="laptop"
      />
    </div>
  );
}
