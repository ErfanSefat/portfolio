"use client";
import Link from "next/link";
import React, { useEffect, useRef } from "react";

export default function BotBar() {
  return (
    <div className="flex w-dvw justify-between font-thin my-10">
      <div className="flex flex-col ml-9">
        <div className="opacity-40 ml-2 w-fit mb-1">Profiles</div>
        <div className="flex">
          <LinkButton
            name="Behance"
            link="https://www.behance.net/erfansefat"
          />
          <div className="h-1 w-3.5"></div>
          <LinkButton
            name="Telegram"
            link="https://www.behance.net/erfansefat"
          />
          <div className="h-1 w-3.5"></div>
          <LinkButton
            name="LinkedIn"
            link="https://www.behance.net/erfansefat"
          />
          <div className="h-1 w-1"></div>
          <LinkButton name="Github" link="https://www.behance.net/erfansefat" />
        </div>
      </div>
      <div className="flex flex-col items-end mr-11">
        <div className="opacity-40 ml  mb-1">Get in Touch</div>
        <div className="flex gap-24 mr-[18px]">
          <LinkButton
            name="ErfanSefat@yahoo.com"
            link="https://www.behance.net/erfansefat"
          />
          <LinkButton
            name="+989199158065"
            link="https://www.behance.net/erfansefat"
          />
        </div>
      </div>
    </div>
  );
}

const LinkButton = ({ name, link }: { name: string; link: string }) => {
  const selector = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (selector)
      selector.current?.addEventListener("mouseover", (e) => {
        let x = e.offsetX;
        let y = e.offsetY;
        let boxWidth = 220;
        let boxHeight = 30;
        let moveX = x - boxWidth / 2;
        let moveY = y - boxHeight / 2;
        selector.current!.style.transform = `translateX(${moveX / 14}px)
            translateY(${moveY / 3}px)`;
      });
    selector.current?.addEventListener("mouseleave", (e) => {
      selector.current!.style.transform = `translateX(${0}px)
            translateY(${0}px)`;
    });
  });
  return (
    <div className="flex justify-center w-20" ref={selector}>
      <div className="w-fit flex justify-center">
        <div className=" h-fit w-0 border-b flex justify-center hover:w-[100%]">
          <Link className="pb-1" href={link}>
            {name}
          </Link>
        </div>
      </div>
    </div>
  );
};
