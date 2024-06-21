"use client";
import clsx from "clsx";
import Link from "next/link";
import React, { useEffect, useRef } from "react";

export default function BotBar() {
  return (
    <div className="relative flex flex-col w-dvw justify-between font-thin mb-10 mt-32 md:flex-row">
      <div className="absolute bg-blue-400 rounded-[50%] blur-[150px] h-32 w-[50dvw] -left-10 -bottom-20 md:left-[25dvw] md:-bottom-40 -z-50"></div>
      <div className="flex flex-col ml-9">
        <div className="opacity-40 ml-2 w-fit mb-1">Profiles</div>
        <div className="flex flex-wrap w-[200px] gap-y-1 md:w-fit md:gap-0">
          <LinkButton
            ml={"ml-[8px] md:ml-0"}
            name="Behance"
            link="https://www.behance.net/erfansefat"
          />
          <LinkButton
            ml={"ml-[19px] md:ml-1"}
            name="Github"
            link="https://www.behance.net/erfansefat"
          />
          <LinkButton
            ml={"ml-[6px] md:ml-0.5"}
            name="LinkedIn"
            link="https://www.behance.net/erfansefat"
          />
          <LinkButton
            ml={"ml-[30px] md:ml-2"}
            name="Telegram"
            link="https://www.behance.net/erfansefat"
          />
        </div>
      </div>
      <div className="flex flex-col ml-11 mt-8 md:items-end md:mr-11 md:ml-0 md:mt-0">
        <div className="opacity-40 ml  mb-1">Get in Touch</div>
        <div className="flex flex-wrap w-[100px]  gap-y-1 mr-0 ml-11 md:mr-[18px] md:gap-24 md:w-fit">
          <LinkButton
            ml={"ml-[7px] md:ml-0"}
            name="ErfanSefat@yahoo.com"
            link="https://www.behance.net/erfansefat"
          />
          <LinkButton
            ml={"ml-[-16px] md:-ml-2"}
            name="+989199158065"
            link="https://www.behance.net/erfansefat"
          />
        </div>
      </div>
    </div>
  );
}

const LinkButton = ({
  name,
  link,
  ml,
}: {
  name: string;
  link: string;
  ml: string;
}) => {
  const selector = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (selector)
      selector.current?.addEventListener("mouseover", (e) => {
        let x = e.offsetX;
        let y = e.offsetY;
        let boxWidth = 60;
        let boxHeight = 20;
        let moveX = x - boxWidth / 2;
        let moveY = y - boxHeight / 2;
        selector.current!.style.transform = `translateX(${moveX / 5}px)
            translateY(${moveY / 2}px)`;
      });
    selector.current?.addEventListener("mouseleave", (e) => {
      selector.current!.style.transform = `translateX(${0}px)
            translateY(${0}px)`;
    });
  });

  return (
    <div
      className={`flex justify-center w-20 ${ml}`}
      ref={selector}
    >
      <div className="w-fit flex justify-center">
        <div className=" h-fit w-0 border-b flex justify-center hover:w-[100%]">
          <Link className="pb-1" href={link}>
            <span className="mr-1 md:hidden">↗</span>
            {name}
          </Link>
        </div>
      </div>
    </div>
  );
};
