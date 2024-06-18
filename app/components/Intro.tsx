"use client";
const Intro = () => {
  return (
    <div className=" relative w-[70%] lg:w-fit ">
      <div className="h-[400px] w-[400px] bg-red-500 blur-[200px] rounded-[1000px] absolute z-[-1] top-[-60px] left-[-60px] opacity-35"></div>
      <div className="h-[400px] w-[400px] bg-yellow-500 blur-[200px] rounded-[1000px] absolute z-[-1] top-[50px] right-[-60px] opacity-35"></div>
      <div className="h-[400px] w-[400px] bg-blue-500 blur-[200px] rounded-[1000px] absolute z-[-1] top-[100px] left-[20px] opacity-40"></div>
      <div className="text-6xl lexend mt-20 mb-40 drop-shadow-rich2 ">
        <div>
          I<span className="playfair"> design </span>
          what users see, and
        </div>
        <div>
          and<span className="playfair"> code </span>
          what makes it work.
        </div>
      </div>
    </div>
  );
};
export default Intro;
