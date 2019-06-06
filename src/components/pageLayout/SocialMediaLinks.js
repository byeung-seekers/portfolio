import React from "react"

import socialMediaLinks from "./socialMediaLinks.module.scss"

const SocialMediaLinks = () => {
  return (
    <ul className={socialMediaLinks.linksContainer}>
      <li>
        <a href={`mailto:${process.env.EMAIL}`}>Email</a>
      </li>
      <li>
        <a href={`tel:${process.env.MOBILE}`}>Mobile</a>
      </li>
      <li>
        <a
          href={process.env.LINKEDIN}
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </li>
    </ul>
  )
}

export default SocialMediaLinks
