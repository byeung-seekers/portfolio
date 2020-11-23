import React from "react"

import educationsStyle from "./educations.module.scss"

const Educations = () => {
  return (
    <ul className={educationsStyle.container}>
      <li>
        <a
          className={educationsStyle.schools}
          href="https://smith.queensu.ca/index.php"
          target="_blank"
          rel="noopener noreferrer"
        >
          Queen’s University | Bachelor of Commerce
        </a>
        <span className={educationsStyle.periodAndLocations}>
          2014–2018 | Kingston, Ontario, Canada
        </span>
      </li>
      <li>
        <a
          className={educationsStyle.schools}
          href="https://www.strath.ac.uk/business/"
          target="_blank"
          rel="noopener noreferrer"
        >
          University of Strathclyde | Exchange
        </a>
        <span className={educationsStyle.periodAndLocations}>
          Fall 2016 | Glasgow, Scotland, United Kingdom
        </span>
      </li>
      <li>
        <span>Renaissance College | IB Diploma | Secondary School</span>
        <span className={educationsStyle.periodAndLocations}>
          2006–2014 | Hong Kong
        </span>
      </li>
      <li>
        Languages{" "}
        <span className={educationsStyle.languages}>
          | English, Cantonese, and Mandarin, trilingual spoken and verbal
          proficiency
        </span>
      </li>
    </ul>
  )
}

export default Educations
