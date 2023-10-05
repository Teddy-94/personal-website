import { box, boxinner } from "../components/styleUtils";

const Work = () => {
  return (
    <div className={box}>
      <h2>Work experience</h2>
      {
        // Quartr
      }
      <div className={boxinner}>
        <div className="gap-0">
          <h3>Quartr</h3>
          <h4>Backend / Fullstack Developer Intern</h4>
          <p>June, 2023 - August 2023</p>
        </div>
        <div className="mx-auto px-6">
          <ul>
            <li>
              Contributing to the core backend in TypeScript, NodeJS, Express,
              MySql and Sequelize.
            </li>
            <li> Expanded testing coverage using Jest.</li>
            <li>
              Created and launched an admin portal for Quartr's API customers,
              which simplified management of customers API keys and improved
              their user experience. Contributed with significant refactoring
              from JavaScript to TypeScript.
            </li>
            <li>
              Contributed with significant refactoring from JavaScript to
              TypeScript.
            </li>
            <li>
              Significantly improved automatically generated API documentation.
            </li>
            <li>Created and reviewed pull requests using Git/GitHub.</li>
            <li>
              Handled tickets in Jira, and collaborated using Slack and internal
              tools.
            </li>
          </ul>
        </div>
      </div>
      {
        // Nets
      }
      <div className={boxinner}>
        <div className="gap-0">
          <h3>Nets</h3>
          <h4>
            Invoicing Specialist, Order Handling Specialist, Customer Support
            Representative
          </h4>
          <p>2019 - 2021</p>
        </div>
        <div className="mx-auto px-6">
          <ul>
            <li>
              Assisted large customers, resellers, and SMEs with invoicing and
              billing related issues and questions.
            </li>
            <li>Supporting payment terminal and acquiring customers.</li>
            <li>
              Wrote process and handbook documentation related to invoicing
              tasks.
            </li>
            <li>Worked daily with SAP CRM and SAP ERP.</li>
          </ul>
        </div>
      </div>
      {
        // Umeå Energi
      }
      <div className={boxinner}>
        <div className="gap-0">
          <h3>Umeå Energi</h3>
          <h4>Accounts Receivables Associate</h4>
          <p>June - August 2016, June - August 2017</p>
        </div>
        <div className="mx-auto px-6">
          <ul>
            <li>
              Assisting customers by phone and e-mail with invoicing related
              issues.
            </li>
            <li>
              Collaborated with the debt collection partner in collection cases.
            </li>
            <li>Worked in a close team of three people.</li>
            <li>Was a summer substitute for two summers during studies.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Work;
