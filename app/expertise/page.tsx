"use client";
import React, { useEffect } from "react";
import Me from "../components/Me";
export default function Page() {
  return (
    <main className="w-dvw flex items-center justify-center flex-col">
      <Me />
      <div className="bg-cover bg-clip-content bg-[url('/Table.png')] w-[2500px] h-[120px] bg-center"></div>
    </main>
  );
}
