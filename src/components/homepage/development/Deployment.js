import React from "react"

import deploymentStyles from "./backend.module.scss"

const Deployment = () => {
  return (
    <div className={deploymentStyles.backend}>
      <span>Deployment</span>
      <ul className={deploymentStyles.listContainer}>
        <li>
          <a
            href="https://git-scm.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Git
          </a>
        </li>
        <li>
          <a
            href="https://www.netlify.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Netlify
          </a>
        </li>
        <li>
          <a
            href="https://www.heroku.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Heroku
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Deployment
