/* eslint-disable */
import React, { useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

import { useHomePageContext } from "../HomePageProvider/HomePageProvider.component"
import { useCursorContext } from "../../../Layout/Cursor/CursorProvider.component"
import { socialsVariant, socialVariant } from "../../../Animations"
import ExternalLink from "./Icons/ExternalLink.component"
import EmailConvo from "./EmailConvo/EmailConvo.component"

const Contact = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          behance
          github
          codepen
          codesandbox
          linkedin
        }
      }
    }
  `)

  const {
    behance,
    github,
    codepen,
    codesandbox,
    linkedin,
  } = data.site.siteMetadata

  const socials = [
    { id: 0, name: "Behance", link: behance },
    { id: 1, name: "Github", link: github },
    { id: 3, name: "CodePen", link: codepen },
    { id: 4, name: "CodeSandbox", link: codesandbox },
    { id: 5, name: "LinkedIn", link: linkedin },
  ]

  const { setScrolledToContact } = useHomePageContext()
  const { scaleMCursor, defaultCursor } = useCursorContext()
  const [contactRef, contactInView] = useInView()

  useEffect(
    () =>
      contactInView ? setScrolledToContact(true) : setScrolledToContact(false),
    [contactInView]
  )

  return (
    <section ref={contactRef} className="contact">
      <motion.div
        variants={socialsVariant}
        initial="onScreen"
        animate={contactInView ? "onScreen" : "notOnScreen"}
        className="social"
      >
        {socials.map((social) => (
          <a
            key={social.id}
            onMouseEnter={scaleMCursor}
            onMouseLeave={defaultCursor}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.button
              variants={socialVariant}
              whileHover="hover"
              whileTap="tap"
            >
              <span>{social.name}</span> <ExternalLink />
            </motion.button>
          </a>
        ))}
      </motion.div>
      <EmailConvo />
    </section>
  )
}

export default Contact
