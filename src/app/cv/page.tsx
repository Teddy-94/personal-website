"use client"

const Cv = () => {
  // TODO: make this component
  return (
    <div>
      <h1 className="text-2xl text-gray-600 flex">Cv</h1>
      <div>
        Passioned developer with 3 years of programming experience from both university, personal projects, and professional work. Holding both a B.sc in Systems Sciences, and a M.Sc in Buisness and economics, I'm also a dedicated investor since 2014.
      </div>
      <div className="flex flex-col xl:flex-row ">
        {
          // Education
        }
        <div className="flex-col lg:flex-row border-2 m-2">
          <h2 className="text-2xl font-bold text-center">Education</h2>
          {
            // Systems Sciences
          }
          <div className="flex flex-col">
            <div className="flex flex-row justify-between p-5">
              <h3 className="text-xl font-semibold">
                B.Sc, Systems Sciences
              </h3>
              <div>september, 2021 - june, 2023</div>
            </div>
            <div>this is a description of the item</div>
          </div>
          {
            // Finance
          }
          <div className="flex flex-col">
            <div className="flex flex-row justify-between p-5">
              <h3 className="text-xl font-semibold">
                M.Sc, Business Administration and Economics
              </h3>
              <div>2014 - 2018</div>
            </div>
            <div>this is a description of the item</div>
          </div>
        </div>

        {
          // Work experience
        }
        <div className="flex flex-col border-2 m-2">
          <h2 className="text-2xl font-bold text-center">Work experience</h2>
          {
            // Quartr
          }
          <div className="flex flex-col">
            <div className="flex flex-row justify-between p-5">
              <h3 className="text-xl font-semibold">
                Quartr
              </h3>
              <div>
                june, 2023 - august 2023
              </div>
            </div>
            <div className="mx-auto px-6">
              <ul>
                <li> Writing TypeScript for a Node.js backend and a React frontend, utilizing an SQL database. </li>
                <li> Gained experience working with tools such as Git, Jira, and Slack. </li>
                <li> Main contribution was a full stack admin portal for Quartr's API customers. </li>
                <li> Also contributed with signifiant refactoring from JavaScript to TypeScript, which enabled improved documentation </li>
              </ul>
            </div>
          </div>
          {
            // Nets
          }
          <div className="flex flex-col">
            <div className="flex flex-row justify-between p-5">
              <h3 className="text-xl font-semibold">
                Nets
              </h3>
              <div>
                2019 - 2021
              </div>
            </div>
            <div className="mx-auto px-6">
              <ul>
                <li> Writing TypeScript for a Node.js backend and a React frontend, utilizing an SQL database. </li>
                <li> Gained experience working with tools such as Git, Jira, and Slack. </li>
                <li> Main contribution was a full stack admin portal for Quartr's API customers. </li>
                <li> Also contributed with signifiant refactoring from JavaScript to TypeScript, which enabled improved documentation </li>
              </ul>
            </div>
          </div>
          {
            // Umeå Energi
          }
          <div className="flex flex-col">
            <div className="flex flex-row justify-between p-5">
              <h3 className="text-xl font-semibold">
                Umeå Energi
              </h3>
              <div>
                dates
              </div>
            </div>
            <div className="mx-auto px-6">
              <ul>
                <li> Writing TypeScript for a Node.js backend and a React frontend, utilizing an SQL database. </li>
                <li> Gained experience working with tools such as Git, Jira, and Slack. </li>
                <li> Main contribution was a full stack admin portal for Quartr's API customers. </li>
                <li> Also contributed with signifiant refactoring from JavaScript to TypeScript, which enabled improved documentation </li>
              </ul>
            </div>
          </div>
        </div>

        {
          // Skills
        }
        <div className="flex flex-col border-2 m-2">
          <h2 className="text-2xl font-bold text-center">Skills</h2>
          <div className="flex flex-row xl:flex-col justify-evenly">

            <div className="flex flex-col">
              <h3 className="text-xl font-semibold">Languages</h3>
              <div className="mx-auto">
                <ul>
                  <li> Swedish: Native </li>
                  <li> English: Full professional </li>
                  <li> Finnish: Beginner </li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col">
              <h3 className="text-xl font-semibold">Programming</h3>
              <div className="mx-auto px-6">
                <ul>
                  <li> TypeScript </li>
                  <li> React </li>
                  <li> NodeJS </li>
                  <li> Java, SQL </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Cv

