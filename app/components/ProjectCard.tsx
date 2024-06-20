"use client";
import Image from "next/image";
import { useEffect } from "react";

const ProjectCard = ({
  overfunc,
  leavefunc,
  name,
  desc,
  imgsrc,
  year,
  type,
}: {
  overfunc: any;
  leavefunc: any;
  name: string;
  desc: string;
  imgsrc: string;
  year: string;
  type: string;
}) => {
  return (
    <div
      onMouseOver={overfunc}
      onMouseLeave={leavefunc}
      className="w-fit projectCard p-[1px] bg-gradient-to-br from-white-1 via-white-2 to-white-3 rounded-[16px] backdrop-blur-xl cursor-pointer hover:drop-shadow-rich4 hover:scale-105"
    >
      <div className="px-[8px] pt-[8px] pb-[13px] inline-flex flex-col items-center bg-card-background  rounded-[15px]	relative">
        <Image
          className="rounded-[9px] mb-3 drop-shadow-rich1"
          src={imgsrc}
          width={336}
          height={252}
          alt={name}
        />
        <div className="m-[1px] bg-black rounded-[6px] absolute h-6 w-14 blur-lg right-4 top-7 opacity-80"></div>
        <div className="bg-gradient-to-br from-white-1 via-white-4 to-white-3 rounded-[7px] backdrop-blur-[3px] drop-shadow-rich3 absolute right-4 top-4">
          <div className="m-[1px] bg-card-background2 rounded-[6px] px-2 py-1 text-[11px]">
            {type}
          </div>
        </div>

        <div className="w-[320px]">
          <div className="text-base">{name}</div>
          <div className="flex text-sm justify-between opacity-50">
            <div>{desc}</div>
            <div>{year}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProjectCard;
