import { forwardRef } from 'react';
import './ProjectsSection.css'
import ProjectPane from 'components/ProjectPane/ProjectPane'
import { useContext } from 'react';
import { DataContext } from 'DataContext';


const ProjectsSection = forwardRef((_, ref) => {
  const appData = useContext(DataContext);

  return (
    <section home-section="projects" ref={ref} section-id="#projects">
      <div>
        <h2
          className="projects-heading"
          data-aos="fade-up">Projects
        </h2>
        <div className="project-panes-container">
          {appData && Object.entries(appData.projects).map(
            ([projectRoute, projectData], i) =>
          (
            <div data-aos="fade-right" data-aos-delay={i * 100} key={i}>
              <ProjectPane projectRoute={projectRoute} projectData={projectData} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default ProjectsSection;