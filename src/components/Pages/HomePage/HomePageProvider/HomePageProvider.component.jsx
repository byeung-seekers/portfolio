/* eslint-disable no-unused-vars */
import React, { createContext, useState, useEffect, useContext } from "react"

const INITIAL_HOMEPAGE_STATE = {
  loadedImagesCount: null,
  setLoadedImagesCount: null,
  allImagesLoaded: null,
  setAllImagesLoaded: null,
  failToLoadImage: null,
  setFailToLoadImage: null,
  modalOpen: null,
  setModalOpen: null,
  modalId: null,
  setModalId: null,
  scrolledToContact: null,
  setScrolledToContact: null,
}

export const HomePageContext = createContext(INITIAL_HOMEPAGE_STATE)
export const useHomePageContext = () => useContext(HomePageContext)

export const HomePageProvider = ({ children }) => {
  const [loadedImagesCount, setLoadedImagesCount] = useState(0)
  const [allImagesLoaded, setAllImagesLoaded] = useState(false)
  const [failToLoadImage, setFailToLoadImage] = useState(null)
  const [modalOpen, setModalOpen] = useState(false)
  const [modalId, setModalId] = useState(0)
  const [scrolledToContact, setScrolledToContact] = useState(false)

  const addLoadedImageCount = () => {
    setLoadedImagesCount(previousCount => previousCount + 1)
  }

  const handleImageLoadingFailure = error => setFailToLoadImage(error)

  const handleModalOpen = modalId => {
    setModalOpen(true)
    setModalId(modalId)
  }

  // disable document scrolling while modal is active
  useEffect(() => {
    modalOpen
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "initial")
  }, [modalOpen])

  const homePageUtilities = {
    loadedImagesCount,
    addLoadedImageCount,
    allImagesLoaded,
    setAllImagesLoaded,
    handleImageLoadingFailure,
    modalOpen,
    setModalOpen,
    modalId,
    setModalId,
    handleModalOpen,
    scrolledToContact,
    setScrolledToContact,
  }

  return (
    <HomePageContext.Provider value={homePageUtilities}>
      {children}
    </HomePageContext.Provider>
  )
}
