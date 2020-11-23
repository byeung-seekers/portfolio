import React from "react"
import {
  useViewportScroll,
  useTransform,
  useSpring,
  motion,
} from "framer-motion"

import { physics } from "../../Animations"

const Decorations = () => {
  const { scrollYProgress } = useViewportScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.25], [0.1, 0.025])
  const spring = useSpring(opacity, physics)

  return (
    <motion.div style={{ opacity: spring }}>
      <aside className="decorations">
        <div className="airpods">
          <div className="lid" />
          <div className="bottom">
            <div className="dot" />
          </div>
        </div>

        <div className="papers-container">
          <div className="papers">
            <div className="paper" />
            <div className="paper" />
          </div>
        </div>

        <div className="pen-container">
          <div className="pen">
            <div className="tip" />
            <div className="upper">
              <div className="clip" />
            </div>
            <div className="bottom" />
            <div className="ballpoint" />
          </div>
        </div>

        <div className="coffee-container">
          <div className="coffee">
            <div className="dish" />
            <div className="cup" />
            <div className="liquid" />
          </div>
        </div>
      </aside>
    </motion.div>
  )
}

export default Decorations
