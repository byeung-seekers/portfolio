import React from "react"

import headerStyles from "./header.module.scss"

const Header = ({ title }) => {
  return (
    <div className={headerStyles.headerContainer}>
      <h1 className={headerStyles.header}>{title}</h1>
    </div>
  )
}

export default Header
