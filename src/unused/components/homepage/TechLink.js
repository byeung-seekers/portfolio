import React from "react"

import techLinkStyles from "./techLink.module.scss"

const TechLink = ({ skill, website, link, emoji }) => {
  return (
    <div className={techLinkStyles.techLink}>
      <span className={techLinkStyles.skill}>{skill}</span>{" "}
      <span className={techLinkStyles.website}>
        {website} {emoji}
      </span>
      <a
        className={techLinkStyles.link}
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        {link}
      </a>
    </div>
  )
}

export default TechLink
