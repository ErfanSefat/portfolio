"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
const NavigationBar = () => {
  const pathname = usePathname();
  return (
    <div className="bg-white-3 rounded-[40px] pb-[1px] mt-8 mb-20 h-fit">
      <div className="flex w-fit bg-[rgb(22,22,22)] p-1 rounded-[30px] relative">
        <div
          className={clsx(
            "bg-white-2 absolute rounded-[20px] bg-gradient-to-br from-white-1 via-transparent to-white-3",
            { "right-1": pathname === "/expertise" }
          )}
        >
          <div className="m-[0.8px] w-[110px] h-[29px] rounded-[20px] bg-card-background z-[10]"></div>
        </div>
        <Navbuttons name={"Projects"} pic={"/projects_icon.svg"} where={"/"} />
        <Navbuttons
          name={"Expertise"}
          pic={"/expertise_icon.svg"}
          where={"/expertise"}
        />
      </div>
    </div>
  );
};
const Navbuttons = ({
  name,
  pic,
  where,
}: {
  name: string;
  pic: string;
  where: string;
}) => {
  return (
    <Link
      href={where}
      className="cursor-pointer flex w-[110px]  justify-center py-1 pr-[2px] items-center z-[0] text-[15px]"
    >
      <Image src={pic} height={16} width={16} className="mr-[5px]" alt="" />
      {name}
    </Link>
  );
};
export default NavigationBar;
