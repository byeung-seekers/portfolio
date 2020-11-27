/* eslint-disable */
import React, { useLayoutEffect, useEffect } from "react"
import { isMobile } from "react-device-detect"
import { useMotionValue, motion } from "framer-motion"

import { useCursorContext } from "./CursorProvider.component"
import { cursorVariant } from "../../Animations/index"

const Cursor = () => {
  const { defaultCursor, cursorAnim } = useCursorContext()
  const x = useMotionValue(200)
  const y = useMotionValue(200)

  useLayoutEffect(() => {
    const handleMouseMove = (e) => {
      x.set(e.clientX - 25)
      y.set(e.clientY - 25)
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [x, y])

  useEffect(() => {
    setTimeout(() => defaultCursor(), 1500)
  }, [])

  return (
    !isMobile && (
      <motion.div
        variants={cursorVariant}
        initial="hidden"
        animate={cursorAnim}
        style={{ x, y }}
        className="cursor"
      />
    )
  )
}

export default Cursor
