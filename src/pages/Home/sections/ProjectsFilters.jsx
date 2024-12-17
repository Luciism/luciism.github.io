import { Icon } from "@iconify/react";
import { useContext, useEffect, useState } from "react";

import { AppDataContext } from "DataContext";

import "./ProjectsFilters.css";


function caclulateTechFilteredProjects(projects, selectedTechFilters) {
  if (selectedTechFilters.size === 0) {
    return projects;
  }

  return projects
    .filter((project) =>
      project.tools.some((tool) => selectedTechFilters.has(tool.id))
    );
}

function calculateFilteredProjects(
  projects,
  selectedTechFilters,
  selectedProjectProperties
) {

  // Filter for technologies
  const techFilteredProjects = caclulateTechFilteredProjects(
    projects,
    selectedTechFilters
  );

  if (selectedProjectProperties.size === 0) {
    return techFilteredProjects;
  }

  // Filter for project properties
  return techFilteredProjects
  .filter(
    (project) =>
        // Ensure there are no selected properties that is set to false
        Array.from(selectedProjectProperties).filter(
          (properties) => !project.properties[properties]
        ).length === 0
    );
}

function sortProjects(projects, sortingOption) {
  if (sortingOption === "relevance") {
    return projects.sort((a, b) => b.relevance - a.relevance);
  }

  if (sortingOption === "newest-first") {
    return projects.sort((a, b) => b.projectStartTimestamp - a.projectStartTimestamp);
  }

  if (sortingOption === "oldest-first") {
    return projects.sort((a, b) => a.projectStartTimestamp - b.projectStartTimestamp);
  }

  if (sortingOption === "alphabetical") {
    return projects.sort((a, b) => a.name.localeCompare(b.name));
  }

  if (sortingOption === "rev-alphabetical") {
    return projects.sort((a, b) => b.name.localeCompare(a.name));
  }
}

const ProjectsFilters = ({
  filteredProjectsState: [filteredProjects, setFilteredProjects]
}) => {
  const appData = useContext(AppDataContext);
  const { projects } = appData;

  const [selectedTechFilters, setSelectedTechFilters] = useState(new Set());
  const [selectedProjectProperties, setSelectedProjectProperties] = useState(
    new Set()
  );
  const [sortingOption, setSortingOption] = useState("relevance");

  // Set the filtered project IDs
  useEffect(() => {
    const newFilteredProjects = calculateFilteredProjects(
      projects,
      selectedTechFilters,
      selectedProjectProperties
    );
    const sortedFilteredProjects = sortProjects(
      newFilteredProjects,
      sortingOption
    );

    // Unpack to ensure array object is different.
    setFilteredProjects([...sortedFilteredProjects]);
  }, [
    projects,
    selectedTechFilters,
    setFilteredProjects,
    selectedProjectProperties,
    sortingOption
  ]);

  // Combine all filterable tags from all projects
  const techFilterChipIDs = Array.from(
    new Set(
      projects
        .map((project) =>
          project.tools
            .filter((tool) => tool.allowFiltering)
            .map((tool) => tool.id)
        )
        .flat()
    )
  ).sort((a, b) => a.localeCompare(b));

  // Get the metadata for the chips
  const techFilterChipsData = techFilterChipIDs.map((id) =>
    appData.availableTools.find((tool) => tool.id === id)
  );

  return (
    <form id="filters" className="filters" data-aos="fade-up">
      <div className="fieldset-container">
        <fieldset>
          <legend className="title-small">
            <Icon
              icon="lucide:filter"
              width={16}
              height={16}
              className="icon"
            />
            <span>Project Type</span>
          </legend>
          <div className="field-options">
            {appData.availableProjectProperties.map((properties, i) => {
              const handleProjectTypeChange = (e) => {
                if (e.target.checked) {
                  setSelectedProjectProperties(
                    new Set([...selectedProjectProperties, properties.id])
                  );
                } else {
                  setSelectedProjectProperties(
                    new Set(
                      [...selectedProjectProperties].filter(
                        (id) => id !== properties.id
                      )
                    )
                  );
                }
              };

              return (
                <label className="body-small check" key={i}>
                  <input
                    className="input-checkbox"
                    type="checkbox"
                    name="project-type"
                    value="web-development"
                    onChange={handleProjectTypeChange}
                    checked={selectedProjectProperties.has(properties.id)}
                  />{" "}
                  {properties.name}
                </label>
              );
            })}
          </div>
        </fieldset>

        <fieldset>
          <legend className="title-small">
            <Icon icon="ri:code-line" width={18} height={18} className="icon" />
            <span>Technologies</span>
          </legend>
          <div className="field-options technologies-chips">
            {techFilterChipsData.map((chip, i) => {
              const handleTechChipCheck = (e) => {
                if (e.target.checked) {
                  setSelectedTechFilters(
                    new Set([...selectedTechFilters, chip.id])
                  );
                } else {
                  setSelectedTechFilters(
                    new Set(
                      [...selectedTechFilters].filter((id) => id !== chip.id)
                    )
                  );
                }
              };

              return (
                <label
                  className="body-small technology-chip"
                  style={{ "--chip-custom-color": chip.rgb }}
                  key={i}
                >
                  <input
                    className="technology-chip"
                    type="checkbox"
                    name="technology"
                    value={chip.id}
                    onChange={handleTechChipCheck}
                    checked={selectedTechFilters.has(chip.id)}
                  />{" "}
                  <img src={chip.icon} alt={chip.name} />
                  {chip.name}
                </label>
              );
            })}
          </div>
        </fieldset>
      </div>

      <div className="fieldset-container">
        <fieldset>
          <legend className="title-small">
            <Icon
              icon="tdesign:order-ascending"
              width={16}
              height={16}
              className="icon"
            />
            <span>Sort By</span>
          </legend>

          <label className="body-small" htmlFor="sort-by">
            Set the project ordering
          </label>
          <div className="field-options">
            <select
              className="input-select"
              id="sort-by"
              name="sort-by"
              defaultValue={sortingOption}
              onChange={(e) => setSortingOption(e.target.value)}
            >
              <option value="relevance">Relevance</option>
              <option value="newest-first">Newest First</option>
              <option value="oldest-first">Oldest First</option>
              <option value="alphabetical">A-Z</option>
              <option value="rev-alphabetical">Z-A</option>
            </select>
          </div>
        </fieldset>

        <fieldset>
          <legend className="title-small">
            <Icon
              icon="tdesign:search"
              width={16}
              height={16}
              className="icon"
            />
            <span>Results</span>
          </legend>

          <label className="body-small" htmlFor="sort-by">
            Showing {filteredProjects.length} of {projects.length} projects
          </label>
          <div className="field-options">
            <button
              className="input-button"
              type="reset"
              onClick={() => {
                setSortingOption("relevance");
                setSelectedProjectProperties(new Set());
                setSelectedTechFilters(new Set());
              }}
            >
              <Icon
                icon="charm:refresh"
                width={14}
                height={14}
                className="icon"
              />
              Reset Filters
            </button>
          </div>
        </fieldset>
      </div>
    </form>
  );
};

export default ProjectsFilters;
