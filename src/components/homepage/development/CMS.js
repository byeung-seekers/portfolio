import React from "react"

import CMSstyles from "./CMS.module.scss"

const CMS = () => {
  return (
    <div className={CMSstyles.CMS}>
      <span>CMS</span>
      <ul className={CMSstyles.listContainer}>
        <li>
          <a
            href="https://www.contentful.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contentful
          </a>
        </li>
      </ul>
    </div>
  )
}

export default CMS
