import React, { useContext } from "react"
import classNames from "classnames"
import { Link } from "gatsby"

import { AppProvider } from "./MobileMenuProvider"

import mobileMenuStyles from "./mobileMenu.module.scss"

const MobileMenu = () => {
  let { mobileMenu } = useContext(AppProvider)

  return (
    <nav
      className={classNames({
        [mobileMenuStyles.mobileMenu]: true,
        [mobileMenuStyles.mobileMenuActive]: mobileMenu,
      })}
    >
      <ul>
        <li>
          <Link
            to="/"
            className={mobileMenuStyles.link}
            activeClassName={mobileMenuStyles.activePage}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/projects"
            className={mobileMenuStyles.link}
            activeClassName={mobileMenuStyles.activePage}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            to="/relevant-certifications"
            className={mobileMenuStyles.link}
            activeClassName={mobileMenuStyles.activePage}
          >
            Relevant Certifications
          </Link>
        </li>
        <li>
          <Link
            to="/corporate-experiences"
            className={mobileMenuStyles.link}
            activeClassName={mobileMenuStyles.activePage}
          >
            Corporate Experiences
          </Link>
        </li>
        <li>
          <Link
            to="/education"
            className={mobileMenuStyles.link}
            activeClassName={mobileMenuStyles.activePage}
          >
            Education
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default MobileMenu
