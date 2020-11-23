import React, { useContext } from "react"
import classNames from "classnames"

import { AppProvider } from "./MobileMenuProvider"

import mobileMenuIconStyles from "./mobileMenuIcon.module.scss"

const MobileMenuIcon = () => {
  let { mobileMenu, toggleMenu } = useContext(AppProvider)

  return (
    <div className={mobileMenuIconStyles.icon} onClick={toggleMenu}>
      <div
        className={classNames({
          [mobileMenuIconStyles.line]: true,
          [mobileMenuIconStyles.lineActive]: mobileMenu,
        })}
      >
        Mobile Menu Icon
      </div>
    </div>
  )
}

export default MobileMenuIcon
