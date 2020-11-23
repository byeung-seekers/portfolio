/* eslint-disable */
import React, { useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { motion } from "framer-motion"

import { useHomePageContext } from "../HomePageProvider/HomePageProvider.component"
import { thumbnailsVariant } from "../../../Animations"
import Thumbnail from "./Thumbnail.component"

const Thumbnails = () => {
  const data = useStaticQuery(graphql`
    {
      allFile(
        filter: { sourceInstanceName: { eq: "thumbnails" } }
        sort: { fields: name }
      ) {
        edges {
          node {
            childImageSharp {
              id
              fluid(quality: 100) {
                originalName
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  `)

  const thumbnails = data.allFile.edges

  const { loadedImagesCount, setAllImagesLoaded } = useHomePageContext()

  useEffect(() => {
    thumbnails.length === loadedImagesCount && setAllImagesLoaded(true)
  }, [thumbnails.length, loadedImagesCount, setAllImagesLoaded])

  return (
    <section className="thumbnails-section">
      <motion.div
        variants={thumbnailsVariant}
        initial="initial"
        animate="animate"
        className="thumbnails"
      >
        {thumbnails.map(({ node }, index) => {
          const { id, fluid } = node.childImageSharp
          const { originalName } = fluid

          return (
            <Thumbnail
              key={id}
              index={index}
              fluid={fluid}
              originalName={originalName}
            />
          )
        })}
      </motion.div>
    </section>
  )
}

export default Thumbnails
