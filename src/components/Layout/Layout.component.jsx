import React from "react"

import Avatar from "./Header/Avatar.component"

const Layout = ({ children }) => (
  <>
    <header>
      <Avatar />
    </header>
    {children}
  </>
)

export default Layout
