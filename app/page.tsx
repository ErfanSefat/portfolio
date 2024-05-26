import NavigationBar from "./components/NavigationBar";
import ProjectCard from "./components/ProjectCard";
import Filter from "./components/Filter";
export default function Page() {
  return (
    <div className="flex flex-col items-center">
      <NavigationBar />
      <Filter />
      <ProjectCard />
    </div>
  );
}
