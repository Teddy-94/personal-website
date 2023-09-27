import ProjectCard from "./components/projectCard";
import cagrCalculatorBrowserPlugin from "./data/cagr-calculator";
import personalWebsite from "./data/personal-website";
import aocSolutions from "./data/aoc-solutions";
import nvimConfig from "./data/nvim-config";

const Projects = () => {
  const projects = [
    cagrCalculatorBrowserPlugin,
    personalWebsite,
    aocSolutions,
    nvimConfig,
  ];

  return (
    <div className="">
      <div className="">
        <h2>Selected Projects</h2>
      </div>
      <div className="mx-auto my-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
        {projects.map((p) => (
          <ProjectCard
            key={p.title}
            title={p.title}
            shortDescription={p.shortDescription}
            projectPageLink={p.projectPageLink}
            builtWith={p.builtWith}
            links={p.links}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
