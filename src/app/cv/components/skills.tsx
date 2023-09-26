const Skills = () => {
  return (
    <div className="m-2 flex flex-row justify-evenly gap-2 rounded-md border-2">
      <div className="grid grid-cols-1 p-3">
        <h3>Languages</h3>
        <div className="me-auto ms-4">
          <ul>
            <li> Swedish: Native </li>
            <li> English: Full professional </li>
            <li> Finnish: Beginner </li>
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-1 p-3">
        <h3>Programming</h3>
        <div className="me-auto ms-4 grid grid-cols-2 gap-3">
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
  );
};

export default Skills;
