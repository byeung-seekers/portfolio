import React from "react"

import backendStyles from "./backend.module.scss"

const Backend = () => {
  return (
    <div className={backendStyles.backend}>
      <span>Backend</span>
      <ul className={backendStyles.listContainer}>
        <li>
          <a
            href="https://github.com/axios/axios"
            target="_blank"
            rel="noopener noreferrer"
          >
            axios
          </a>
        </li>
        <li>
          <a
            href="https://graphql.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            GraphQL
          </a>
        </li>
        <li>
          <a
            href="https://nodejs.org/en/"
            target="_blank"
            rel="noopener noreferrer"
          >
            NodeJS
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Backend
