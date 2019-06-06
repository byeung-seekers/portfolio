import React from "react"

import TechLink from "./TechLink"

import designStyles from "./design.module.scss"

const Design = () => {
  return (
    <div>
      <TechLink
        skill="Design"
        website="Dribbble"
        link="https://dribbble.com/byeung"
        emoji="&#127912;"
      />
      <ul className={designStyles.listContainer}>
        <li>
          <a
            className={designStyles.software}
            href="https://www.adobe.com/products/xd.html?promoid=PYPVQ3HN&mv=other"
            target="_blank"
            rel="noopener noreferrer"
          >
            Adobe XD
          </a>
          <span>Wireframing, prototyping</span>
        </li>
        <li>
          <a
            className={designStyles.software}
            href="https://www.adobe.com/products/illustrator.html?promoid=PGRQQLFS&mv=other"
            target="_blank"
            rel="noopener noreferrer"
          >
            Adobe Illustrator
          </a>
          <span>Graphic and logo design</span>
        </li>
        <li>
          <a
            className={designStyles.software}
            href="https://www.adobe.com/products/photoshop.html?promoid=PC1PQQ5T&mv=other"
            target="_blank"
            rel="noopener noreferrer"
          >
            Adobe Photoshop
          </a>
          <span>Image editing</span>
        </li>
        <li>
          <a
            className={designStyles.software}
            href="https://www.apple.com/final-cut-pro/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Final Cut Pro
          </a>
          <span>Video editing</span>
        </li>
      </ul>
    </div>
  )
}

export default Design
