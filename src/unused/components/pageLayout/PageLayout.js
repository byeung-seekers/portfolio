import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import SocialMediaLinks from "./SocialMediaLinks"
import Navbar from "./Navbar"

import pageLayoutStyles from "./pageLayout.module.scss"

const PageLayout = ({ children }) => {
  // Pull site author using GraphQL from gatsby-config.js
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  return (
    <>
      <h1>
        <Link className={pageLayoutStyles.header} to="/">
          {data.site.siteMetadata.author} &#127469;&#127472;
        </Link>
      </h1>
      <SocialMediaLinks />
      <Navbar />
      <main>{children}</main>
      <footer className={pageLayoutStyles.footer}>
        &copy; {new Date().getFullYear()} | Powered by Gatsby
      </footer>
    </>
  )
}

export default PageLayout
