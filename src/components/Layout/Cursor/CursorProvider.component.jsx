import React, { createContext, useContext } from "react"
import { useAnimation } from "framer-motion"

const CURSOR_CONSTANTS = {
  default: "default",
  scaleL: "scaleL",
  scaleM: "scaleM",
  scaleS: "scaleS",
  spin: "spin",
}

const CURSOR_STATE = {
  cursorAnim: null,
  defaultCursor: null,
  scaleLCursor: null,
  scaleMCursor: null,
  scaleSCursor: null,
  spinCursor: null,
}

export const CursorContext = createContext(CURSOR_STATE)
export const useCursorContext = () => useContext(CursorContext)

export const CursorProvider = ({ children }) => {
  const cursorAnim = useAnimation()
  const defaultCursor = () => cursorAnim.start(CURSOR_CONSTANTS.default)
  const scaleLCursor = () => cursorAnim.start(CURSOR_CONSTANTS.scaleL)
  const scaleMCursor = () => cursorAnim.start(CURSOR_CONSTANTS.scaleM)
  const scaleSCursor = () => cursorAnim.start(CURSOR_CONSTANTS.scaleS)
  const spinCursor = () => cursorAnim.start(CURSOR_CONSTANTS.spin)

  const cursorUtils = {
    cursorAnim,
    defaultCursor,
    scaleLCursor,
    scaleMCursor,
    scaleSCursor,
    spinCursor,
  }

  return (
    <CursorContext.Provider value={cursorUtils}>
      {children}
    </CursorContext.Provider>
  )
}
