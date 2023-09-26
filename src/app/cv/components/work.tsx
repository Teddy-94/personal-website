import { box, boxinner, ul } from "../page"

const Work = () => {
  return (
    <div className={box}>
      <h2 className="text-2xl font-bold text-center">Work experience</h2>
      {
        // Quartr
      }
      <div className={boxinner}>
        <div className="gap-0">
          <h3 className="text-md font-semibold">
            Quartr
          </h3>
          <p>
            June, 2023 - August 2023
          </p>
        </div>
        <div className="mx-auto px-6">
          <ul className={ul}>
            <li> Writing TypeScript for a Node.js backend and a React frontend, utilizing an SQL database. </li>
            <li> Gained experience working with tools such as Git, Jira, and Slack. </li>
            <li> Main contribution was a full stack admin portal for Quartr's API customers. </li>
            <li> Also contributed with significant refactoring from JavaScript to TypeScript, which enabled improved documentation </li>
          </ul>
        </div>
      </div>
      {
        // Nets
      }
      <div className={boxinner}>
        <div className="gap-0">
          <h3 className="text-md font-semibold">
            Nets
          </h3>
          <p>
            2019 - 2021
          </p>
        </div>
        <div className="mx-auto px-6">
          <ul className={ul}>
            <li>TODO</li>
            <li>TODO</li>
            <li>TODO</li>
            <li>TODO</li>
          </ul>
        </div>
      </div>
      {
        // Umeå Energi
      }
      <div className={boxinner}>
        <div className="gap-0">
          <h3 className="text-md font-semibold">
            Umeå Energi
          </h3>
          <p>
            dates TODO
          </p>
        </div>
        <div className="mx-auto px-6">
          <ul className={ul}>
            <li>TODO</li>
            <li>TODO</li>
            <li>TODO</li>
            <li>TODO</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
export default Work
