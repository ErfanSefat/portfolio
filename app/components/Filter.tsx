"use client"
import clsx from "clsx";
import { useState } from "react";
const Filter = () => {
  return (
    <div className="flex">
      <Cat name={"Design"} />
      <Cat name={"Code"} />
    </div>
  );
};
const Cat = ({ name }: { name: string }) => {
  const [status, setStatus] = useState(false);
  function handle() {
    setStatus(!status);
  }
  return (
    <div className="cursor-pointer flex items-center mx-10 mb-5 w-20" onClick={handle}>
      <div className={clsx("h-3 w-3 bg-white-1 rounded-lg mr-2 border opacity-50 duration-100", {" bg-blue-700 opacity-100": status})}></div>
      {name}
    </div>
  );
};

export default Filter;
