"use client";
import ProjectCard from "./components/ProjectCard";
import Filter from "./components/Filter";
import Intro from "./components/Intro";
import React, { useRef } from "react";
export default function Page() {
  const a = [
    { imgsrc: "/frame1.png", key: 1 },
    { imgsrc: "/frame2.png", key: 2 },
    { imgsrc: "/frame3.png", key: 3 },
  ];
  const bg = useRef();
  function changecolor({ url }: { url: string }) {
    if (bg) {
      bg.current.style.backgroundImage = `url(${url})`;
    }
  }
  function resetcolor() {
    if (bg) bg.current.style.backgroundImage = "url(/empty.png)";
  }
  return (
    <div className="flex flex-col items-center relative">
      <div
        className="w-dvw h-dvh fixed bg-no-repeat bg-center rounded-[1000px] bg-cover blur-[300px] z-[-1] opacity-30"
        id="bgbg"
        ref={bg}
      ></div>
      <Intro />
      <Filter />
      <div className="flex flex-wrap gap-5 max-w-[800px] justify-center mx-5">
        {a.map((e) => (
          <ProjectCard
            overfunc={() => changecolor({ url: e.imgsrc })}
            leavefunc={() => resetcolor()}
            key={e.key} // Ensure each element has a unique key
            name="Project's Title"
            desc="This is a description"
            year="2020"
            type="Design"
            imgsrc={e.imgsrc}
          />
        ))}
      </div>
    </div>
  );
}
