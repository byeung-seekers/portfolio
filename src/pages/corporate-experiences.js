import React from "react"

import PageLayout from "../components/pageLayout/PageLayout"
import HelmetHeader from "../components/pageLayout/Helmet"
import Header from "../components/pageLayout/Header"
import { CorporateExperiences } from "../components/corporateExperiences/CorporateExperiences"
import CorporateExperience from "../components/corporateExperiences/CorporateExperience"

import corporateExperiencesStyles from "../components/corporateExperiences/corporateExperiences.module.scss"

const CorporateExperiencesPage = () => {
  return (
    <PageLayout>
      <HelmetHeader
        title="Corporate Experiences"
        description="Corporate work experiences in Hong Kong, mainland China listed in Benjamin Yeung's resume portfolio website."
        keyWords="benjamin,yeung,resume,portfolio,corporate,work,experiences,china,hong kong,world first, pwc, zodigrand asset management,banco santander,internship"
      />
      <Header title="Corporate Experiences &#127970;" />
      <ul className={corporateExperiencesStyles.experiences}>
        {/* Retrieve keys from "CorporateExperiences.js", */}
        {/* map through keys array and generate a <li> element */}
        {/* for each corporate experience */}
        {Object.keys(CorporateExperiences).map(experience => {
          return (
            <CorporateExperience
              key={CorporateExperiences[experience].company}
              company={CorporateExperiences[experience].company}
              companyLink={CorporateExperiences[experience].companyLink}
              role={CorporateExperiences[experience].role}
              period={CorporateExperiences[experience].period}
              location={CorporateExperiences[experience].location}
              description={CorporateExperiences[experience].description}
            />
          )
        })}
      </ul>
    </PageLayout>
  )
}

export default CorporateExperiencesPage
