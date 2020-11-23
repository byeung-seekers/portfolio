import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import {
  useViewportScroll,
  useTransform,
  useSpring,
  motion,
  AnimatePresence,
} from "framer-motion"
import Img from "gatsby-image"
import { isMobile } from "react-device-detect"

import { useHomePageContext } from "../../Pages/HomePage/HomePageProvider/HomePageProvider.component"
import { useCursorContext } from "../Cursor/CursorProvider.component"
import { scrollToTop } from "../../Utils"
import ProfileRing from "./ProfileRing.component"
import { physics, statusDotVariant, spookyVariant } from "../../Animations"

const Avatar = () => {
  const data = useStaticQuery(graphql`
    {
      file(
        sourceInstanceName: { eq: "header" }
        relativePath: { eq: "memoji.png" }
      ) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
    }
  `)

  const [spooky, setSpooky] = useState(false)
  const { scrolledToContact, allImagesLoaded } = useHomePageContext()
  const { scaleLCursor, defaultCursor } = useCursorContext()
  const { scrollYProgress } = useViewportScroll()
  const scale = useTransform(scrollYProgress, [0, 0.35], [1, 0.7])
  const scaleSpring = useSpring(scale, physics)
  const ringSpring = useSpring(scrollYProgress, physics)

  return (
    <motion.div
      onMouseEnter={() => {
        scaleLCursor()
        setSpooky(true)
      }}
      onMouseLeave={() => {
        defaultCursor()
        setSpooky(false)
      }}
      onClick={scrollToTop}
      animate={{
        opacity: scrolledToContact ? 0 : 1,
        y: scrolledToContact ? "-120%" : 0,
      }}
      style={{ scale: scaleSpring }}
      className="memoji-container"
    >
      <Img
        fluid={data.file.childImageSharp.fluid}
        alt="memoji"
        className="memoji"
      />
      <ProfileRing ringSpring={ringSpring} />
      <motion.div
        variants={statusDotVariant}
        initial="imagesStillLoading"
        animate={allImagesLoaded ? "imagesLoaded" : "imagesStillLoading"}
        className="status-dot"
      />
      <AnimatePresence>
        {spooky && !isMobile && (
          <div className="message">
            <motion.h3
              variants={spookyVariant}
              initial="incoming"
              animate="hovered"
              exit="leaving"
            >
              <span role="img" aria-label="ghost">
                👻
              </span>
            </motion.h3>
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default Avatar
