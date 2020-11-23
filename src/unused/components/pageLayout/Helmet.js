import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Helmet } from "react-helmet"

const HelmetHeader = ({ title, description, keyWords }) => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  return (
    <Helmet>
      <title>{`${title} - ${data.site.siteMetadata.author}`}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keyWords} />
      <meta property="og:title" content={title} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={data.site.siteMetadata.author} />
      {/* URL to Google Fonts's Fira Sans with four different font weights */}
      <link
        href="https://fonts.googleapis.com/css?family=Fira+Sans:400,600,700,800&display=swap"
        rel="stylesheet"
      />
    </Helmet>
  )
}

export default HelmetHeader
