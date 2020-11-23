import React from "react"

import TechLink from "./TechLink"
import Frontend from "./development/Frontend"
import Backend from "./development/Backend"
import Deployment from "./development/Deployment"
import CMS from "./development/CMS"

import developmentStyles from "./development.module.scss"

const Design = () => {
  return (
    <div>
      <TechLink
        skill="Development"
        website="GitHub"
        link="https://github.com/byeung2019/MIQSTechnologies"
        emoji="&#128421;"
      />
      <div className={developmentStyles.skillsContainer}>
        <div>
          <span className={developmentStyles.frontendTitle}>Frontend</span>
          <Frontend />
        </div>
        <div className={developmentStyles.BCD}>
          <Backend />
          <CMS />
          <Deployment />
        </div>
      </div>
    </div>
  )
}

export default Design
