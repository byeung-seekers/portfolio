import React from "react"
import {
  useViewportScroll,
  useSpring,
  useTransform,
  motion,
} from "framer-motion"

import { physics, nameVariant, spanVariant } from "../../../Animations/index"
import Profile from "./Profile.component"

const Name = () => {
  const { scrollYProgress } = useViewportScroll()
  const scroll = useSpring(scrollYProgress, physics)
  const opacity = useTransform(scroll, [0, 0.13], [1, 0])
  const y = useTransform(scroll, [0, 0.18], ["0%", "100%"])

  return (
    <section className="name-container">
      <div className="name-mask">
        <motion.h1
          variants={nameVariant}
          initial="hidden"
          animate="appear"
          style={{ opacity, y }}
        >
          <motion.span variants={spanVariant}>b</motion.span>
          <motion.span variants={spanVariant}>e</motion.span>
          <motion.span variants={spanVariant}>e</motion.span>
          <motion.span variants={spanVariant}>w</motion.span>
          <motion.span variants={spanVariant}>a</motion.span>
          <motion.span variants={spanVariant}>i</motion.span>
        </motion.h1>
      </div>
      <Profile />
    </section>
  )
}

export default Name
