import React from "react"
import smoothscroll from "smoothscroll-polyfill"
import "intersection-observer"

import "./src/styles/main.scss"

import { CursorProvider } from "./src/components/Layout/Cursor/CursorProvider.component"
import { HomePageProvider } from "./src/components/Pages/HomePage/HomePageProvider/HomePageProvider.component"
// import Noise from "./src/components/Layout/Noise/Noise.component"
import Cursor from "./src/components/Layout/Cursor/Cursor.component"
import Layout from "./src/components/Layout/Layout.component"

export const onClientEntry = () => {
  smoothscroll.polyfill()
}

export const wrapPageElement = ({ element }) => (
  <CursorProvider>
    <HomePageProvider>
      {/* <Noise /> */}
      <Cursor />
      <Layout>{element}</Layout>
    </HomePageProvider>
  </CursorProvider>
)
