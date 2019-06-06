import React from "react"

import PageLayout from "../components/pageLayout/PageLayout"
import HelmetHeader from "../components/pageLayout/Helmet"
import Header from "../components/pageLayout/Header"
import Educations from "../components/education/Educations"
import Certifications from "../components/education/Certifications"

const EducationPage = () => {
  return (
    <PageLayout>
      <HelmetHeader
        title="Education"
        description="Education, schooling, and other professional certificates obtained from Queen's University Smith School of Business, Strathclyde Business School and more, and also language abilities, in Benjamin Yeung's resume portfolio website."
        keyWords="benjamin,yeung,resume,portfolio,education,schooling,university,queen's university,bachelor of commerce,professional,certificates,bloomberg,breaking into wall street,languages,english,mandarin,cantonese"
      />
      <Header title="Education &#127979;" />
      <Educations />
      <Header title="Professional Certifications &#128195;" />
      <Certifications />
    </PageLayout>
  )
}

export default EducationPage
