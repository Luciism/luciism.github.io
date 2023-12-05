import { forwardRef } from 'react';
import './ProjectsSection.css'
import ProjectPane from 'components/ProjectPane/ProjectPane'


function range(start, end) {
  const numbers = [];

  for (let i = start; i < end; i++) {
    numbers.push(i)
  }

  return numbers
}

const ProjectsSection = forwardRef((_, ref) => {
  return (
    <div home-section="projects" ref={ref}>
      <div>
        <h2
          className="projects-heading"
          data-aos="fade-up">Projects
        </h2>
        <div className="project-panes-container">
          {range(0, 6).map((i) => {
            return (
              <div data-aos="fade-right" data-aos-delay={i * 100} key={i}>
                <ProjectPane
                  projectData={{
                    thumbnail_url:
                      "https://media.istockphoto.com/id/1407983911/photo/forex-diagrams-and-stock-market-rising-lines-with-numbers.jpg?s=612x612&w=0&k=20&c=zas1h6LR6v2iCvE7SWnVoZ_s7ZSiboN45UK0d5oMWac=",
                    url: "/statalytics",
                    title: "Statalytics",
                    description: "Bedwars stats done right",
                    github: "https://statalytics.net/github",
                    website: "https://statalytics.net/",
                    tags: ["Full Stack", "Statistics"],
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
});

export default ProjectsSection;