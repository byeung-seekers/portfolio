/* eslint-disable */
import React, { useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { wrap } from "@popmotion/popcorn"
import {
  useTransform,
  useMotionValue,
  AnimatePresence,
  motion,
} from "framer-motion"

import { useHomePageContext } from "../HomePageProvider/HomePageProvider.component"
import { useCursorContext } from "../../../Layout/Cursor/CursorProvider.component"
import { THUMBNAILS_DATA } from "../Thumbnails/ThumbnailsData"
import {
  modalContainerVariant,
  overlayVariant,
  modalSocialsVariant,
  modalSocialVariant,
  modalVariant,
  buttonsVariant,
  buttonVariant,
} from "../../../Animations/index"
import Arrow from "./ModalIcons/Arrow.component"
import Close from "./ModalIcons/Close.component"

const Modal = () => {
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

  const SOCIALS = [
    { name: "Behance", link: behance },
    { name: "GitHub", link: github },
    { name: "CodePen", link: codepen },
    { name: "CodeSandbox", link: codesandbox },
    { name: "LinkedIn", link: linkedin },
  ]

  const { modalOpen, setModalOpen, modalId, setModalId } = useHomePageContext()
  const { scaleMCursor, defaultCursor } = useCursorContext()
  const modalIndex = wrap(0, THUMBNAILS_DATA.length, modalId)
  const {
    link,
    url,
    url2,
    url3,
    url4,
    title,
    description,
    modalBg,
  } = THUMBNAILS_DATA[modalIndex]

  const urls = [url, url2, url3, url4]

  const prev = () => setModalId((prevState) => prevState - 1)
  const next = () => setModalId((prevState) => prevState + 1)

  const dragCloseTrigger = 20
  const y = useMotionValue(0)
  const handleDrag = (_, info) => {
    y.set(info.point.y)
    info.point.y > dragCloseTrigger && setModalOpen(false)
  }
  const dragFinish = () => y.set(0)
  const scale = useTransform(y, [0, dragCloseTrigger], [1, 0.7])

  useEffect(() => {
    const escapeKey = 27
    const leftKey = 37
    const rightKey = 39
    const handleKeyPress = (e) => {
      switch (e.keyCode) {
        case escapeKey:
          setModalOpen(false)
          break
        case leftKey:
          prev()
          break
        case rightKey:
          next()
          break
        default:
          break
      }
    }
    modalOpen
      ? document.addEventListener("keydown", (e) => handleKeyPress(e))
      : document.removeEventListener("keydown", (e) => handleKeyPress(e))
    return () =>
      document.removeEventListener("keydown", (e) => handleKeyPress(e))
  }, [modalOpen])

  return (
    <AnimatePresence>
      {modalOpen && (
        <motion.aside
          variants={modalContainerVariant}
          initial="initial"
          animate="animate"
          exit="exit"
          className="modal-container"
        >
          <motion.div
            variants={overlayVariant}
            onClick={() => setModalOpen(false)}
            className="overlay"
          />
          <motion.div
            variants={buttonsVariant}
            initial="entering"
            animate="entered"
            exit="leaving"
            className="buttons"
          >
            <motion.button
              onMouseEnter={scaleMCursor}
              onMouseLeave={defaultCursor}
              variants={buttonVariant}
              whileHover="hover"
              whileTap="tap"
              onClick={prev}
            >
              <Arrow />
            </motion.button>
            <motion.button
              onMouseEnter={scaleMCursor}
              onMouseLeave={defaultCursor}
              variants={buttonVariant}
              whileHover="hover"
              whileTap="tap"
              onClick={next}
            >
              <Arrow />
            </motion.button>
          </motion.div>
          <motion.ul
            variants={modalSocialsVariant}
            initial="hidden"
            animate="revealed"
            exit="leaving"
            className="social"
          >
            {SOCIALS.map((social) => (
              <motion.li
                key={social.name}
                variants={modalSocialVariant}
                className="icon"
              >
                <a target="_blank" rel="noopener noreferrer" href={social.link}>
                  {social.name}
                </a>
              </motion.li>
            ))}
          </motion.ul>
          <motion.div
            key={modalId} // trigger rerender when key is different
            variants={modalVariant}
            style={{ background: modalBg }}
            className="modal"
          >
            <div className="drag-close">
              <motion.p
                drag="y"
                dragConstraints={{ top: 0, bottom: 0 }}
                onDrag={(_, info) => handleDrag(_, info)}
                onDragEnd={dragFinish}
                style={{ scale }}
              >
                Drag down to close
              </motion.p>
            </div>
            <div
              onMouseEnter={scaleMCursor}
              onMouseLeave={defaultCursor}
              onClick={() => setModalOpen(false)}
              className="close-btn"
            >
              <Close />
            </div>
            <div className="info">
              <h1>{title}</h1>
              <p>{description}</p>
            </div>
            {link && (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={scaleMCursor}
                onMouseLeave={defaultCursor}
                className="link"
              >
                Live
              </a>
            )}
            <div className="imgs">
              {urls.map((url, index) => {
                if (!url) return
                return (
                  <img
                    key={index}
                    src={url}
                    alt={`${title} screenshot ${index}`}
                  />
                )
              })}
            </div>
          </motion.div>
        </motion.aside>
      )}
    </AnimatePresence>
  )
}

export default Modal
