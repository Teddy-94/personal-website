"use client"
import { h3, outlineGradientOnHover } from "@/components/styleUtils"

interface projectCardProps {
  title: string,
  description: string,
  projectLink: string,
  builtWith: any,
  links: any,
}

const ProjectCard = (props: projectCardProps) => {
  const projectUrl = props.projectLink.toString()
  return (
    <article onClick={() => location.href = projectUrl} className={`cursor-pointer p-4 w-full h-full border-solid border-2 shadow-lg rounded-lg ${outlineGradientOnHover}`}>
      <h3 className={h3}>
        {props.title}
      </h3>
      <div className="flex justify-between m-2 flex-col sm:flex-row">
        <p>{props.description}</p>
        <div className="flex flex-col gap-2 mx-8 py-3">
          <div>
            <p>Built with:</p>
            <div className="flex flex-row gap-2 text-3xl">
              {props.builtWith}
            </div>
          </div>
          <div>
            <p>Links</p>
            <div className="flex flex-row gap-2 text-3xl">
              {props.links}
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

export default ProjectCard

