import Image from "next/image";
const NavigationBar = () => {
  return (
    <div className="bg-white-3 rounded-[40px] pb-[0.5px] mt-8 mb-20">
      <div className="flex w-fit bg-black p-1 rounded-[30px] relative">
        <div className="bg-white-2 absolute rounded-[20px] right-1 bg-gradient-to-br from-white-1 via-transparent to-white-3">
          <div className="m-[0.8px] w-[110px] h-[29px] rounded-[20px] bg-card-background z-[10]"></div>
        </div>
        <Navbuttons name={"Projects"} pic={"/projects_icon.svg"} />
        <Navbuttons name={"Expertise"} pic={"/expertise_icon.svg"} />
      </div>
    </div>
  );
};
const Navbuttons = ({ name, pic }: { name: string; pic: string }) => {
  return (
    <div className="cursor-pointer flex w-[110px]  justify-center py-1 pr-[2px] items-center z-[0] text-[15px]">
      <Image src={pic} height={16} width={16} className="mr-[5px]" alt="" />
      {name}
    </div>
  );
};
export default NavigationBar;
