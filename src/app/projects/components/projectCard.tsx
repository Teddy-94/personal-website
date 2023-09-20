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
      <div className={`mx-auto my-4 p-3 max-w-[800px] border-solid border-2 shadow-lg rounded-lg ${outlineGradientOnHover}`}>
        <h2 className="font-bold">{props.title}</h2>
        <div className="flex justify-between m-2 flex-col sm:flex-row">
          <div className="max-w-[45vw]">{props.description}</div>
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
      </div>
  )
}

export default ProjectCard

