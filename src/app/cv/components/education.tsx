import { box, boxinner } from "../components/styleUtils"

const Education = () => {
  return (
    <div className={box}>
      <h2>Education</h2>
      {
        // Systems Sciences
      }
      <div className={boxinner}>
        <div className="gap-0">
          <h3>
            B.Sc, Systems Sciences
          </h3>
          <h4>Luleå Technical University</h4>
          <p className="mt-0 pt-0">August, 2021 - June, 2023</p></div>
        <ul>
          <li>Bachelors degree in Systems Sciences at LTU.</li>
          <li>Java, SQL, Software Testing, Systems Design, Enterprise Architecture, Object-Oriented Analysis. </li>
        </ul>
      </div>
      {
        // Finance
      }
      <div className={boxinner}>
        <div className="gap-0">
          <h3>
            M.Sc, Business Administration and Economics
          </h3>
          <h4>Umeå University</h4>
          <p>2014 - 2018</p>
        </div>
        <ul>
          <li>Four year programme leading to a Bachelors degree and a one-year Master in Business and Economics with a major in Finance at Umeå University.</li>
          <li>Exchange semester at one of the nordics top Business schools, BI Norwegian Business School (2016).</li>
          <li>Corporate Finance, Accounting, Economics, Management, Business Analysis, Statistics.</li>
        </ul>
      </div>
    </div>
  )
}

export default Education
