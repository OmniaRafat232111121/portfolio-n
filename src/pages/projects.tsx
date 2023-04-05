import { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import  {projects}  from "../../data";

import { projects as projectsData } from "../../data";
import { Category } from "../../type";
import ProjectsNavbar from "@/components/ProjectsNavbar";

const Projects = () => {
  const [projects, setProjects] = useState(projectsData);
  const [active, setActive] = useState("all");

  const handlerFilterCategory = (category: Category | "all") => {
    if (category === "all") {
      setProjects(projectsData);
      setActive(category);
      return;
    }

    const newArray = projectsData.filter((project) =>
      project.category.includes(category)
    );
    setProjects(newArray);
    setActive(category);
  };

  return (
    <div className="px-5 py-2 overflow-y-scroll scrollbar  text-black" style={{ height: "65vh" }}>
       <ProjectsNavbar
        handlerFilterCategory={handlerFilterCategory}
        active={active}
      />

      <div className="relative grid grid-cols-12 gap-4 my-3">
        {projects.map((project,id) => (
          <div  key={project.id} className="col-span-12 p-2 bg-gray-200 rounded-lg
           sm:col-span-6 lg:col-span-4 dark:bg-dark-200">
            <ProjectCard  key={id.toString()} project={project} />
          
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;