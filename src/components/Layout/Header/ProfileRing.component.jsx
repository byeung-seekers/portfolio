import React from "react"
import { motion } from "framer-motion"

const ProfileRing = ({ ringSpring }) => (
  <svg enableBackground="new 0 0 105 105" viewBox="0 0 105 105">
    <linearGradient
      id="linearGradient"
      gradientTransform="matrix(1 0 0 -1 0 106)"
      gradientUnits="userSpaceOnUse"
      x1="52.5"
      x2="52.5"
      y1="105.5"
      y2="1.5"
    >
      <stop offset="0" stopColor="#fff" />
      <stop offset=".007373605" stopColor="#f6fff8" />
      <stop offset=".04763336" stopColor="#c8ffd4" />
      <stop offset=".09300604" stopColor="#9dffb3" />
      <stop offset=".1418" stopColor="#77ff96" />
      <stop offset=".1949" stopColor="#57ff7d" />
      <stop offset=".2535" stopColor="#3bff68" />
      <stop offset=".3197" stopColor="#25ff57" />
      <stop offset=".3971" stopColor="#14ff4a" />
      <stop offset=".4927" stopColor="#09ff41" />
      <stop offset=".6268" stopColor="#02ff3b" />
      <stop offset=".9991" stopColor="#00ff3a" />
    </linearGradient>
    <motion.path
      style={{ opacity: ringSpring, pathLength: ringSpring }}
      d="m52.5 1c28.4 0 51.5 23.1 51.5 51.5 0 28.4-23.1 51.5-51.5 51.5-28.4 0-51.5-23.1-51.5-51.5 0-28.4 23.1-51.5 51.5-51.5z"
      fill="none"
      stroke="url(#linearGradient)"
      stroke-miterlimit="10"
    />
  </svg>
)

export default ProfileRing
