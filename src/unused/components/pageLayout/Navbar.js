import React from "react"

import { Link } from "gatsby"

import navbarStyles from "./navbar.module.scss"

const Navbar = () => {
  return (
    <nav>
      <ul className={navbarStyles.navbar}>
        <li>
          <Link to="/" activeClassName={navbarStyles.activePage}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/projects" activeClassName={navbarStyles.activePage}>
            Projects
          </Link>
        </li>
        <li>
          <Link
            to="/relevant-certifications"
            activeClassName={navbarStyles.activePage}
          >
            Relevant Certifications
          </Link>
        </li>
        <li>
          <Link
            to="/corporate-experiences"
            activeClassName={navbarStyles.activePage}
          >
            Corporate Experiences
          </Link>
        </li>
        <li>
          <Link to="/education" activeClassName={navbarStyles.activePage}>
            Education
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
