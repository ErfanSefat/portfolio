import React from "react";

export default function AboutBox() {
  return (
    <div className="flex flex-col xl:flex-row xl:flex-wrap w-[90dvw] max-w-[1300px] gap-x-[10%] justify-center items-center xl:items-start">
      <div className="flex flex-wrap min-w-[280px] w-[60%] xl:w-[30%] h-fit border-t relative pt-5 gap-2 mt-12 mb-12">
        <div className="absolute -top-9 font-bold text-[20px]">Skills</div>
        <Exboxes text="HTML" color="bg-red-900" />
        <Exboxes text="CSS" color="bg-lime-800" />
        <Exboxes text="TypeScript" color="bg-cyan-950" />
        <Exboxes text="React" color="bg-sky-800" />
        <Exboxes text="NextJS" color="bg-pink-950" />
        <Exboxes text="Prisma" color="bg-purple-900" />
        <Exboxes text="Tailwind" color="bg-green-950" />
        <Exboxes text="Figma" color="bg-yellow-900" />
        <Exboxes text="Photoshop" color="bg-blue-900" />
      </div>
      <div className="relative flex flex-col xl:flex-row xl:flex-wrap min-w-[280px] w-[60%] border-t mt-12 pt-2">
        <div className="absolute -top-9 font-bold text-[20px]">
          Work Experience
        </div>
        <WorkBoxes
          startyear={"2021"}
          endyear={"2023"}
          title={"Graphic Designer"}
          desc={"At Employment & Entrepreneurship Department of IKIU."}
        />
        <WorkBoxes
          startyear={"2020"}
          endyear={"Now"}
          title={"Freelancing"}
          desc={"Freelance Graphic Design and Front-End Development."}
        />
      </div>
    </div>
  );
}

const Exboxes = ({ text, color }: { text: string; color: any }) => {
  return (
    <div className={`rounded-lg h-fit ${color}`}>
      <div className="w-fit projectCard p-[1px] bg-gradient-to-b from-white-1 to-white-2 rounded-lg backdrop-blur-xl">
        <div className={`rounded-lg ${color}`}>
          <div className="h-[100%] px-2 py-0.5 items-center bg-gradient-to-t from-white-1 to-white-2  rounded-lg">
            <div className="drop-shadow-text">{text}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
const WorkBoxes = ({
  startyear,
  endyear,
  title,
  desc,
}: {
  startyear: string;
  endyear: string;
  title: string;
  desc: string;
}) => {
  return (
    <div className="relative font-thin text-[13px] w-[280px] xl:w-fit h-fit pl-3 border-l my-10 sm:mx-5">
      <div className="absolute -bottom-6 -left-1">{startyear}</div>
      <div className="absolute -top-6 -left-1">{endyear}</div>
      <div className="py-2">
        <div className="font-bold text-[18px]">{title}</div>
        <div>{desc}</div>
      </div>
    </div>
  );
};
