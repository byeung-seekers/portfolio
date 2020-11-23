import React from "react"

import courseStyles from "./course.module.scss"

const Course = ({ name, description, link }) => {
  return (
    <li className={courseStyles.course}>
      <div>
        <span className={courseStyles.website}>Udemy</span>
        <a
          className={courseStyles.courseName}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          {name}
        </a>
      </div>
      <div className={courseStyles.description}>{description}</div>
    </li>
  )
}

export default Course
