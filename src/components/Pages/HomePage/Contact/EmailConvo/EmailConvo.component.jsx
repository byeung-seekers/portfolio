/* eslint-disable */
import React, { useState, useRef, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { useInView } from "react-intersection-observer"
import { motion, useAnimation, AnimatePresence } from "framer-motion"
import Img from "gatsby-image"

import { useCursorContext } from "../../../../Layout/Cursor/CursorProvider.component"
import { encode } from "../../../../Utils/index"
import Send from "../Icons/Send.component"
import {
  fadeScaleVariant,
  typingVariant,
  dotVariant,
  fadeVariant,
  responseContainerVariant,
} from "./EmailConvo.animations"

const EMAIL_FORM_NAME = "email-form"
const EMAIL_INITIAL_STATE = { email: "" }

const EmailConvo = () => {
  const data = useStaticQuery(graphql`
    query {
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

  const { scaleMCursor, scaleSCursor, defaultCursor } = useCursorContext()
  const [emailConvoRef, emailConvoInView] = useInView({ triggerOnce: true })
  const inputRef = useRef(null)
  const [emailInput, setEmailInput] = useState(EMAIL_INITIAL_STATE)
  const [emailSubmitted, setEmailSubmitted] = useState(false)
  const [qAnimComplete, setQAnimComplete] = useState(false)

  // form handling
  const handleEmailInput = (e) => {
    setEmailInput({ [e.target.name]: e.target.value })
  }

  const resetEmailInput = () => {
    setEmailInput(EMAIL_INITIAL_STATE)
    setEmailSubmitted(false)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...emailInput,
      }),
    })
      .then(() => setEmailSubmitted(true))
      .catch((error) => console.log(error))
  }

  // animation frames
  const qIconAnim = useAnimation()
  const qTypingAnim = useAnimation()
  const qQuestionAnim = useAnimation()
  const rIconAnim = useAnimation()
  const rTypingAnim = useAnimation()
  const rResponseAnim = useAnimation()

  // play question animation when email convo in view
  useEffect(() => {
    const playQAnim = async () => {
      await qIconAnim.start("animate")
      await qTypingAnim.start("animate")
      await qTypingAnim.start("initial")
      await qQuestionAnim.start("animate")
      setQAnimComplete(true)
    }

    emailConvoInView && playQAnim()
  }, [emailConvoInView, qIconAnim, qTypingAnim, qQuestionAnim])

  // play response animation after email is successfully submitted
  useEffect(() => {
    const playRAnim = async () => {
      await rIconAnim.start("animate")
      await rTypingAnim.start("animate")
      await rTypingAnim.start("initial")
      await rResponseAnim.start("animate")
    }

    emailSubmitted && playRAnim()
  }, [emailSubmitted, rIconAnim, rTypingAnim, rResponseAnim])

  return (
    <div ref={emailConvoRef} className="email-convo">
      <div className="question-container">
        <motion.div
          variants={fadeScaleVariant}
          initial="initial"
          animate={qIconAnim}
          transition={{ delay: 1 }}
          className="icon-mask"
        >
          <div className="icon-container">
            <Img fluid={data.file.childImageSharp.fluid} alt="icon" />
          </div>
        </motion.div>
        <div className="message">
          <motion.div
            variants={typingVariant}
            initial="initial"
            animate={qTypingAnim}
            className="typing"
          >
            <motion.div variants={dotVariant} className="dot" />
            <motion.div variants={dotVariant} className="dot" />
            <motion.div variants={dotVariant} className="dot" />
          </motion.div>
          <motion.h3
            variants={fadeScaleVariant}
            initial="initial"
            animate={qQuestionAnim}
            className="question"
          >
            What's up? Leave your email, I'll say hi.
          </motion.h3>
        </div>
      </div>

      <motion.div
        variants={fadeScaleVariant}
        initial="initial"
        animate={qAnimComplete ? "animate" : "initial"}
        transition={{ delay: 0.7 }}
        className="user"
      >
        <motion.form
          name={EMAIL_FORM_NAME}
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          variants={fadeVariant}
          initial="initial"
          animate={emailSubmitted ? "initial" : "animate"}
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="form-name" value={EMAIL_FORM_NAME} />
          <input type="hidden" name="bot-field" />

          <label htmlFor="email">Contact email</label>
          <input
            ref={inputRef}
            type="email"
            name="email"
            id="email"
            autoComplete="off"
            value={emailInput.email}
            onChange={(e) => handleEmailInput(e)}
            placeholder="Leave your email..."
            required
          />
          <motion.button
            type="submit"
            onMouseEnter={scaleMCursor}
            onMouseLeave={defaultCursor}
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 1.09 }}
          >
            <Send />
          </motion.button>
        </motion.form>
        <motion.div
          variants={fadeVariant}
          initial="initial"
          animate={emailSubmitted ? "animate" : "initial"}
          className="success"
          style={{ zIndex: emailSubmitted ? "99999" : "-99999" }}
        >
          <span
            onClick={resetEmailInput}
            onMouseEnter={scaleSCursor}
            onMouseLeave={defaultCursor}
            className="reset"
          >
            Reset
          </span>
          <h3 className="sent">Email sent.</h3>
        </motion.div>
      </motion.div>

      <AnimatePresence>
        {emailSubmitted && (
          <motion.div
            variants={responseContainerVariant}
            initial="hidden"
            animate="reveal"
            exit="leave"
            className="response-container"
          >
            <motion.div
              variants={fadeScaleVariant}
              initial="initial"
              animate={rIconAnim}
              transition={{ delay: 0.5 }}
              className="icon-mask"
            >
              <div className="icon-container">
                <Img fluid={data.file.childImageSharp.fluid} alt="icon" />
              </div>
            </motion.div>
            <div className="message">
              <motion.div
                variants={typingVariant}
                initial="initial"
                animate={rTypingAnim}
                className="typing"
                className="typing"
              >
                <motion.div variants={dotVariant} className="dot" />
                <motion.div variants={dotVariant} className="dot" />
                <motion.div variants={dotVariant} className="dot" />
              </motion.div>
              <motion.h3
                variants={fadeScaleVariant}
                initial="initial"
                animate={rResponseAnim}
                className="response"
              >
                Thanks! I'll get back to you asap.
              </motion.h3>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default EmailConvo
