import { ul } from "../page"

const Skills = () => {
  return (<>
    <div className="flex flex-col border-2 gap-2 m-2 justify-evenly lg:flex-row">
      <h2 className="text-2xl font-bold text-center">Skills</h2>

      <div className="grid grid-cols-1">
        <h3 className="text-md font-semibold">Languages</h3>
        <div className="ms-4 me-auto">
          <ul className={ul}>
            <li> Swedish: Native </li>
            <li> English: Full professional </li>
            <li> Finnish: Beginner </li>
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-1">
        <h3 className="text-md font-semibold">Programming</h3>
        <div className="ms-4 me-auto">
          <ul className={ul}>
            <li> TypeScript </li>
            <li> React </li>
            <li> NodeJS </li>
            <li> Java, SQL </li>
          </ul>
        </div>
      </div>
    </div>
  </>
  )
}

export default Skills
