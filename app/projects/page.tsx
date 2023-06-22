"use client";

import Card from "@/components/Card";
import { projects } from "@/data";
import { useState } from "react";

const Projects = () => {
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);

  const categorys = ["All", "Java", "Node.js", "React" , "MicroServices"]

  const handleFilter = (category: string) => {
    if (category === "All") {
      setFilteredProjects(projects);
    } else {
      const filtered = projects.filter((project) =>
      project.stack.includes(category)
    );
    setFilteredProjects(filtered);
    }
  };

  return (
    <>
      <h1 className="font-bold text-3xl text-center">Projetcs</h1>
      <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-2 py-3 justify-center">
        {categorys.map(category => (
          <button key={category} onClick={() => handleFilter(category)} className="bg-blue-200 rounded p-3">{category}</button>
        ))}
      </div>
      <div className="grid md:grid-cols-2 gap-4 text-center py-4">
        {filteredProjects.map((project) => (
          <Card key={project.name} project={project} />
        ))}
      </div>
    </>
  );
};

export default Projects;
