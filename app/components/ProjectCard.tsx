import Image from "next/image";
const ProjectCard = () => {
  return (
    <div className="p-[1.7px] bg-gradient-to-br from-white-1 via-white-2 to-white-3 rounded-[16px] backdrop-blur-xl">
      <div className="px-[8px] pt-[8px] pb-[13px] inline-flex flex-col items-center bg-card-background  rounded-[15px]	relative">
        <Image
          className="rounded-[9px] mb-3 drop-shadow-rich1"
          src={"/frame1.png"}
          width={336}
          height={252}
          alt=""
        />
        <div className="bg-gradient-to-br from-white-1 via-white-4 to-white-3 rounded-[7px] backdrop-blur-[3px] drop-shadow-rich3 absolute right-4 top-4">
          <div className="m-[1px] mr-[0.9px] bg-card-background2 rounded-[6px] px-[7px] py-[3px] text-[11px] ">
            Design
          </div>
        </div>

        <div className="w-[320px]">
          <div className="text-base">Projects Name</div>
          <div className="flex text-sm justify-between opacity-50">
            <div>project description</div>
            <div>2022</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProjectCard;
