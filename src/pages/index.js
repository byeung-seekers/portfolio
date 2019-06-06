import React from "react"

import PageLayout from "../components/pageLayout/PageLayout"
import HelmetHeader from "../components/pageLayout/Helmet"
import PersonalStatement from "../components/homepage/PersonalStatement"
import TechProjects from "../components/homepage/TechProjects"

import "../global.scss"
import indexStyles from "./index.module.scss"

const IndexPage = () => {
  return (
    <PageLayout>
      <HelmetHeader
        title="Home"
        description="Homepage for Benjamin Yeung's resume portfolio website."
        keyWords="benjamin,yeung,resume,portfolio,homepage,html,css,javascript,react,adobe"
      />
      <h2 className={indexStyles.tagline}>
        Aspiring front-end web designer/developer with experiences in
        HTML/CSS/JS/React and Adobe Suite.
      </h2>
      <PersonalStatement />
      <TechProjects />
    </PageLayout>
  )
}

export default IndexPage
