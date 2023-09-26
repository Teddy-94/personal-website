"use client";
import { outlineGradientOnHover } from "@/components/styleUtils";

interface projectCardProps {
  title: string;
  description: string;
  projectLink: string;
  builtWith: any;
  links: any;
}

const ProjectCard = (props: projectCardProps) => {
  const projectUrl = props.projectLink.toString();
  return (
    <article
      onClick={() => (location.href = projectUrl)}
      className={`h-full w-full cursor-pointer rounded-lg border-2 border-solid p-4 shadow-lg ${outlineGradientOnHover}`}
    >
      <h3>{props.title}</h3>
      <div className="m-2 flex flex-col justify-between sm:flex-row">
        <p>{props.description}</p>
        <div className="mx-8 flex flex-col gap-2 py-3">
          <div>
            <p>Built with:</p>
            <div className="flex flex-row gap-2 text-3xl">
              {props.builtWith}
            </div>
          </div>
          <div>
            <p>Links</p>
            <div className="flex flex-row gap-2 text-3xl">{props.links}</div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
