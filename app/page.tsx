"use client";
import ProjectCard from "./components/ProjectCard";
import Filter from "./components/Filter";
import Intro from "./components/Intro";
import React, { useEffect, useRef, useState } from "react";

export default function Page() {
  const [projectsdata, setProjects] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(
          "https://erfansefat.github.io/ProjectData.json"
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error("Fetch Projects failed:", error);
      }
    };
    fetchProjects();
  }, []);
  const a = [
    { imgsrc: "/cover_design.png", key: 1 },
    { imgsrc: "/frame2.png", key: 2 },
    { imgsrc: "/frame3.png", key: 3 },
  ];
  const bg = useRef<HTMLDivElement>(null);
  function changecolor({ color }: { color: string }) {
    if (bg.current) {
      bg.current.style.backgroundColor = `${color}`;
    }
  }
  function resetcolor() {
    if (bg.current) bg.current.style.backgroundColor = "#161616";
  }

  return (
    <div className="flex flex-col items-center ">
      <div
        className="w-dvw h-dvh fixed rounded-[50%] blur-[300px] opacity-50"
        ref={bg}
      ></div>

      <Filter />
      <div className="flex flex-wrap gap-5 max-w-[800px] justify-center mx-5">
        {projectsdata?.Projects?.map((e: any) => (
          <ProjectCard
            overfunc={() => changecolor({ color: e.color })}
            leavefunc={() => resetcolor()}
            key={e.key} // Ensure each element has a unique key
            name={e.title}
            desc={e.desc}
            year={e.year}
            type={e.type}
            link={e.link}
            imgsrc={e.imgsrc}
          />
        ))}
      </div>
    </div>
  );
}
