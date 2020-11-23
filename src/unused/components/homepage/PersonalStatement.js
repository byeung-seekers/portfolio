import React from "react"

import Header from "../pageLayout/Header"

import personalStatementStyle from "./personalStatement.module.scss"

const PersonalStatement = () => {
  return (
    <section>
      <Header title="Personal Statement &#129331;" />
      <p className={personalStatementStyle.paragraph}>
        I am an ambitious and hardworking individual who is seeking to turn his
        passion into a career in UI/UX design, web design, and/or front-end web
        development. I enjoy keeping up with the fast-paced growth of web
        technologies, and I am inspired by both the creative nature of design,
        and the technical aspect of programming. I am eager for any
        opportunities to continue crafting my professional design and
        development skills.
      </p>
    </section>
  )
}

export default PersonalStatement
