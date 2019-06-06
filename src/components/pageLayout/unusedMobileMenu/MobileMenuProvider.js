import React, { useState } from "react"

export const AppProvider = React.createContext()

export const Provider = ({ children }) => {
  const [mobileMenu, setMobileMenu] = useState(false)

  const toggleMenu = () => {
    setMobileMenu(!mobileMenu)
  }

  const value = React.useMemo(() => ({ mobileMenu, toggleMenu }), [mobileMenu])

  return <AppProvider.Provider value={value}>{children}</AppProvider.Provider>
}
