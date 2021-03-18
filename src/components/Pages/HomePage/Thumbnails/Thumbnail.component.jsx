import React from "react"
import { useAnimation, motion } from "framer-motion"
import Img from "gatsby-image"

import { useHomePageContext } from "../HomePageProvider/HomePageProvider.component"
import { useCursorContext } from "../../../Layout/Cursor/CursorProvider.component"
import { THUMBNAILS_DATA } from "./ThumbnailsData"
import { parallaxMouseMove } from "../../../Utils/index"
import { tagVariant } from "../../../Animations"

const Thumbnail = ({ index, fluid, originalName }) => {
  const {
    addLoadedImageCount,
    handleImageLoadingFailure,
    // handleModalOpen,
  } = useHomePageContext()
  const { scaleLCursor, defaultCursor } = useCursorContext()

  const { link, category, title, description } = THUMBNAILS_DATA[index]

  const polaroidAnim = useAnimation()

  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <motion.div
        // onClick={() => handleModalOpen(id)}
        onMouseEnter={scaleLCursor}
        onMouseLeave={defaultCursor}
        onMouseMove={(e) => parallaxMouseMove(e, 120, polaroidAnim)}
        animate={polaroidAnim}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.97 }}
        className="polaroid"
      >
        <div className="tags">
          {category.map((tag) => (
            <span key={`${tag} ${index}`} variants={tagVariant}>
              {tag}
            </span>
          ))}
        </div>

        <div className="thumbnail-container">
          <div className="thumbnail">
            <Img
              fluid={fluid}
              onLoad={addLoadedImageCount}
              onError={(error) => handleImageLoadingFailure(error)}
              draggable={false}
              alt={originalName}
            />
          </div>
        </div>

        <div className="info">
          <div className="title">{title}</div>
          <p className="description">{description}</p>
        </div>
      </motion.div>
    </a>
  )
}

export default Thumbnail
