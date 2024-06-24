"use client";
import ProjectCard from "./components/ProjectCard";
import React, { useEffect, useRef, useState } from "react";
import clsx from "clsx";
export default function Page() {
  const [projectsdata, setProjects] = useState(null);
  const [filterCodes, setFilterCodes] = useState(false);
  const [filterDesigns, setFilterDesigns] = useState(false);
  useEffect(() => {
    const types = document.querySelectorAll(".thisistype");
    if (filterCodes === true) {
      types.forEach((e) => {
        if (e.innerHTML === "Code")
          e.parentElement!.parentElement!.parentElement!.style.display = "none";
      });
    } else {
      types.forEach((e) => {
        if (e.innerHTML === "Code")
          e.parentElement!.parentElement!.parentElement!.style.display = "flex";
      });
    }
  }, [filterCodes, setFilterCodes]);
  useEffect(() => {
    const types = document.querySelectorAll(".thisistype");
    if (filterDesigns === true) {
      types.forEach((e) => {
        if (e.innerHTML === "Design")
          e.parentElement!.parentElement!.parentElement!.style.display = "none";
      });
    } else {
      types.forEach((e) => {
        if (e.innerHTML === "Design")
          e.parentElement!.parentElement!.parentElement!.style.display = "flex";
      });
    }
  }, [filterDesigns, setFilterDesigns]);
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
  const safeProjectsdata = projectsdata || { Projects: [] };
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
      <div className="flex z-50">
        <div
          className="cursor-pointer flex items-center mx-10 mb-20 w-20"
          onClick={() => {
            setFilterCodes(!filterCodes);
          }}
        >
          <div
            className={
              "flex items-center justify-center h-3 w-3 rounded-lg mr-2 border border-white-1 duration-100 bg-white-3"
            }
          >
            <div
              className={clsx("w-1.5 h-1.5 bg-gradient-to-b from-white to-white-1 rounded-lg drop-shadow-sm", {
                " opacity-0": filterCodes,
                "opacity-100": !filterCodes,
              })}
            ></div>
          </div>
          Code
        </div>
        <div
          className="cursor-pointer flex items-center mx-10 mb-20 w-20"
          onClick={() => {
            setFilterDesigns(!filterDesigns);
          }}
        >
          <div className="flex items-center justify-center h-3 w-3 rounded-lg mr-2 border border-white-1 duration-100 bg-white-3">
            <div
              className={clsx("w-1.5 h-1.5 bg-gradient-to-b from-white to-white-1 rounded-lg", {
                " opacity-0": filterDesigns,
                "opacity-100": !filterDesigns,
              })}
            ></div>
          </div>
          Design
        </div>
      </div>

      <div
        className="w-dvw h-dvh fixed rounded-[50%] blur-[300px] opacity-50"
        ref={bg}
      ></div>
      <div className="flex flex-wrap gap-5 max-w-[800px] justify-center mx-5">
        {safeProjectsdata?.Projects?.map((e: any) => (
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
