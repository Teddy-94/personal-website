"use client";
import { outlineGradientOnHover } from "@/components/styleUtils";
import { FaGithub } from "react-icons/fa";
import { VscPreview } from "react-icons/vsc";
import Project, { IconKeys, icons } from "../Project";

const ProjectCard = (project: Project) => {
  const projectUrl = project.projectPageLink;
  return (
    <article
      onClick={() => (location.href = projectUrl)}
      className={`h-full w-full cursor-pointer rounded-lg border-2 border-solid p-4 shadow-lg ${outlineGradientOnHover}`}
    >
      <h3>{project.title}</h3>
      <div className="m-2 flex flex-col justify-between sm:flex-row">
        <p>{project.shortDescription}</p>
        <div className="mx-8 flex flex-col gap-2 py-3">
          <div>
            <p>Built with:</p>
            <div className="flex flex-row gap-2 text-3xl">
              {project.builtWith.map(
                (icon: string) => icons[icon as keyof IconKeys],
              )}
            </div>
          </div>
          <div>
            <p>Links</p>
            <div className="flex flex-row gap-2 text-3xl">
              <a href={project.links.github} target="_blank">
                <FaGithub />
              </a>
              {project.links.deployment && (
                <a href={project.links.deployment} target="_blank">
                  <VscPreview />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
