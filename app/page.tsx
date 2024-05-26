import NavigationBar from "./components/NavigationBar";
import ProjectCard from "./components/ProjectCard";
import Filter from "./components/Filter";
export default function Page() {
  return (
    <div className='flex flex-col items-center'>
      <Filter />
      <ProjectCard
        name="Project's Name"
        desc="This is a description"
        year="2020"
        type="Design"
        imgsrc="/frame1.png"
      />
    </div>
  );
}
