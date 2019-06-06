import React from "react"

import PageLayout from "../components/pageLayout/PageLayout"
import HelmetHeader from "../components/pageLayout/Helmet"
import Header from "../components/pageLayout/Header"
import { Courses } from "../components/relevantCertifications/Courses"
import Course from "../components/relevantCertifications/Course"

import courseStyles from "../components/relevantCertifications/courses.module.scss"

const RelevantCertificationsPage = () => {
  return (
    <PageLayout>
      <HelmetHeader
        title="Relevant Certifications"
        description="Relevant certifications from Udemy courses, including React data visualisation, CSS/Sass, Javascript, and Adobe Illustrator in Benjamin Yeung's resume portfolio website."
        keyWords="benjamin,yeung,resume,portfolio,certifications,udemy,react,sass,css,javascript,adobe,illustrator"
      />
      <Header title="Relevant Certifications &#128209;" />
      <ul className={courseStyles.courses}>
        {/* Retrieve keys from "Courses.js", */}
        {/* map through keys array and generate a <li> element */}
        {/* for each course */}
        {Object.keys(Courses).map(course => {
          return (
            <Course
              key={Courses[course].name}
              name={Courses[course].name}
              description={Courses[course].description}
              link={Courses[course].link}
            />
          )
        })}
      </ul>
    </PageLayout>
  )
}

export default RelevantCertificationsPage
