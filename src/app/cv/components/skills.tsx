const Skills = () => {
  return (
    <div className="flex flex-row border-2 gap-2 rounded-md m-2 justify-evenly">
      <div className="grid grid-cols-1 p-3">
        <h3>Languages</h3>
        <div className="ms-4 me-auto">
          <ul>
            <li> Swedish: Native </li>
            <li> English: Full professional </li>
            <li> Finnish: Beginner </li>
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-1 p-3">
        <h3>Programming</h3>
        <div className="ms-4 me-auto grid grid-cols-2 gap-3">
          <ul>
            <li> TypeScript / JavaScript </li>
            <li> React / NextJS </li>
            <li> NodeJS, Express </li>
            <li> CSS / Tailwind </li>
          </ul>
          <ul>
            <li> Java </li>
            <li> SQL / (MySQL) </li>
            <li> MongoDb / Firebase </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Skills
