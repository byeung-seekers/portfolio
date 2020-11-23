import React from "react"

import corporateExperienceStyle from "./corporateExperience.module.scss"

const CorporateExperience = ({
  company,
  companyLink,
  role,
  period,
  location,
  description,
}) => {
  return (
    <li className={corporateExperienceStyle.experience}>
      <div className={corporateExperienceStyle.experienceTopRow}>
        <div>
          <a
            className={corporateExperienceStyle.company}
            href={companyLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            {company}
          </a>
          {role}
        </div>
        <span className={corporateExperienceStyle.periodAndLocation}>
          {period} | {location}
        </span>
      </div>
      <div className={corporateExperienceStyle.description}>{description}</div>
    </li>
  )
}

export default CorporateExperience
