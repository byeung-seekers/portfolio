import React from "react"

import SEO from "../components/SEO/SEO.component"
import Name from "../components/Pages/HomePage/Name/Name.component"
import Decorations from "../components/Layout/Decorations/Decorations.component"
import Modal from "../components/Pages/HomePage/Modal/Modal.component"
import Thumbnails from "../components/Pages/HomePage/Thumbnails/Thumbnails.component"
import Contact from "../components/Pages/HomePage/Contact/Contact.component"
import Footer from "../components/Pages/HomePage/Footer/Footer.component"

const HomePage = () => (
  <>
    <SEO />
    <main>
      <Name />
      <Decorations />
      <Modal />
      <Thumbnails />
      <Contact />
      <Footer />
    </main>
  </>
)

export default HomePage
