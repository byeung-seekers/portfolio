import React from "react"
import { Helmet } from "react-helmet"
import { useLocation } from "@reach/router"
import { useStaticQuery, graphql } from "gatsby"

const SEO = ({ title, description }) => {
  const { pathname } = useLocation()

  const siteMetadataQuery = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          defaultTitle: title
          titleTemplate
          defaultDescription: description
          siteUrl
        }
      }
    }
  `)

  const {
    defaultTitle,
    titleTemplate,
    defaultDescription,
    siteUrl,
  } = siteMetadataQuery.site.siteMetadata

  const seoValues = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    siteUrl: `${siteUrl}${pathname}`,
  }

  const shareImage = `${seoValues.siteUrl}/share-image-optimised.jpg`

  return (
    <Helmet title={seoValues.title} titleTemplate={titleTemplate} defer={false}>
      {/* disable input zoom when clicked on iOS devices */}
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1"
      ></meta>
      <meta name="description" content={seoValues.description} />
      <link rel="canonical" href={seoValues.siteUrl} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={seoValues.title} />
      <meta property="og:description" content={seoValues.description} />
      <meta property="og:url" content={seoValues.siteUrl} />
      <meta property="og:image" content={shareImage} />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:title" content={seoValues.title} />
      <meta property="twitter:description" content={seoValues.description} />
      <meta property="twitter:url" content={seoValues.siteUrl} />
      <meta property="twitter:image" content={shareImage} />
    </Helmet>
  )
}

export default SEO
