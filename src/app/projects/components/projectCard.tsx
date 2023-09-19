import { outlineGradientOnHover, textGradientOnHover } from "@/components/styleUtils"
import Link from "next/link"
import { IconType } from "react-icons"

interface projectCardProps {
  title: string,
  description: string,
  builtWith: any,
  links: any,
}

function ProjectCard(props: projectCardProps): React.JSX.Element {
  return (
    <div className={`m-5 p-3 border-solid border-2 shadow-lg rounded-lg ${outlineGradientOnHover}`}>
      <h2>{props.title}</h2>
      <div className="flex flex-row justify-between m-2">
        <p>{props.description}</p>
        <div className="flex flex-col gap-2 mx-3">
          <div>
            <p>Built with</p>
            <div className="text-3xl flex flex-row gap-2">
              {props.builtWith}
            </div>
          </div>
          <div>
            <p>Links</p>
            <div className="text-3xl flex flex-row gap-2">
              {props.links}
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default ProjectCard

