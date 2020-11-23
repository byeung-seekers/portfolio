/* eslint-disable */
import React from "react"
import {
  useViewportScroll,
  useTransform,
  useSpring,
  motion,
} from "framer-motion"

import { physics, profileVariant, infoVariant } from "../../../Animations"

const Profile = () => {
  const { scrollYProgress } = useViewportScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.11], [1, 0])
  const y = useTransform(scrollYProgress, [0, 0.1], ["0%", "100%"])
  const spring = useSpring(y, physics)

  return (
    <motion.div
      variants={profileVariant}
      initial="hidden"
      animate="appear"
      className="profile"
    >
      <motion.div variants={infoVariant} className="info-mask">
        <motion.h3 style={{ opacity, y: spring }}>
          Web Designer @ SEEKERS Capital Group
        </motion.h3>
      </motion.div>
      <motion.div variants={infoVariant} className="info-mask">
        <motion.h3 style={{ opacity, y: spring }}>Hong Kong</motion.h3>
      </motion.div>
    </motion.div>
  )
}

export default Profile
