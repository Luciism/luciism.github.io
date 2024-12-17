import { useState } from "react";
import { useContext } from "react";

import { AppDataContext } from "DataContext";

import Heading from "components/Heading/Heading";
import ProjectsFilters from "./ProjectsFilters";
import ProjectCard from "./ProjectCard";
import "./Projects.css";

const ProjectsSection = () => {
  const appData = useContext(AppDataContext);

  const { projects } = appData;

  const [filteredProjects, setFilteredProjects] = useState(projects);

  return (
    <section id="projects" className="projects-section standard-section page-margins">
      <Heading>
        <h2>Projects</h2>
      </Heading>
      <ProjectsFilters
        filteredProjectsState={[filteredProjects, setFilteredProjects]}
      />
      <div className="project-cards-wrapper">
        {filteredProjects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
