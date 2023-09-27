import { FaGithub } from "react-icons/fa";
import Project, { IconKeys, icons } from "../Project";
import { VscPreview } from "react-icons/vsc";

interface ProjectPageProps {
  project: Project;
}

const ProjectPage = ({ project }: ProjectPageProps) => {
  return (
    <div className="grid grid-cols-1 gap-4">
      <h1 className="mx-auto text-2xl font-semibold">{project.title}</h1>
      <p className="mx-auto ">{project.shortDescription}</p>
      <div className="mx-auto flex flex-row gap-2 text-3xl">
        {project.builtWith.map((icon: string) => icons[icon as keyof IconKeys])}
      </div>
      <p className="mx-auto">Links: </p>
      <div className="mx-auto flex flex-row gap-2 text-3xl">
        <a href={project.links.github} target="_blank">
          <FaGithub />
        </a>
        {project.links.deployment && (
          <a href={project.links.deployment} target="_blank">
            <VscPreview />
          </a>
        )}
      </div>
      <div className="mx-auto ">{project.description}</div>
    </div>
  );
};

export default ProjectPage;
