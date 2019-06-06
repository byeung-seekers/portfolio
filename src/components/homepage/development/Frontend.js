import React from "react"

import frontendStyles from "./frontend.module.scss"

const Frontend = () => {
  return (
    <ul className={frontendStyles.listContainer}>
      <li className={frontendStyles.languageList}>
        <span className={frontendStyles.language}>HTML, CSS, JavaScript</span>
      </li>
      <li className={frontendStyles.languageList}>
        <a
          className={frontendStyles.language}
          href="https://reactjs.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          React
        </a>
        <ul>
          <li>
            <a
              href="https://reactjs.org/docs/context.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Context API
            </a>
          </li>
          <li>
            <a
              href="https://github.com/ReactTraining/react-router"
              target="_blank"
              rel="noopener noreferrer"
            >
              React Router
            </a>
          </li>
          <li>
            <a
              href="https://reactjs.org/docs/hooks-intro.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              React Hooks
            </a>
          </li>
          <li>
            <a
              href="https://github.com/styled-components/styled-components"
              target="_blank"
              rel="noopener noreferrer"
            >
              styled-components
            </a>
          </li>
          <li>
            <a
              href="https://www.gatsbyjs.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Gatsby
            </a>
          </li>
          <li>
            <a
              href="https://github.com/recharts/recharts"
              target="_blank"
              rel="noopener noreferrer"
            >
              Recharts
            </a>
          </li>
        </ul>
      </li>
      <li className={frontendStyles.languageList}>
        <span className={frontendStyles.language}>CSS</span>
        <ul>
          <li>Flexbox, Grid</li>
          <li>
            <a
              href="https://getbootstrap.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Bootstrap
            </a>
            ,{" "}
            <a
              href="https://materializecss.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Materialize
            </a>
          </li>
          <li>Inline SVG animations</li>
          <li>CSS/Sass Modules</li>
        </ul>
      </li>
      <li className={frontendStyles.languageList}>
        <a
          className={frontendStyles.language}
          href="https://sass-lang.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Sass/Scss
        </a>
      </li>
    </ul>
  )
}

export default Frontend
