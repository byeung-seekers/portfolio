require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `My Portfolio`,
    titleTemplate: `%s - beewai`,
    description: `A collection of work from beewai.`,
    siteUrl: `https://beewai.com`,
    behance: "http://behance.net/beewai",
    github: "https://github.com/beewai2021",
    linkedin: "https://www.linkedin.com/in/yeungbenjamin",
    codepen: "https://codepen.io/beewai",
    codesandbox: "https://codesandbox.io/u/byeung-seekers",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
        head: true,
        anonymize: true,
        respectDNT: true,
        pageTransitionDelay: 0,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-advanced-sitemap`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images/header`,
        name: `header`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images/thumbnails`,
        name: `thumbnails`,
      },
    },
    `gatsby-plugin-optimize-svgs`,
    {
      resolve: `gatsby-plugin-minify-html`,
      options: {
        config: {
          collapseWhitespace: true,
          minifyCSS: true,
          minifyJS: true,
          removeComments: true,
          removeScriptTypeAttributes: true,
          removeStyleLinkTypeAttributes: true,
        },
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Portfolio`,
        short_name: `Portfolio`,
        start_url: `/`,
        icon: `src/images/header/memoji.png`,
      },
    },
    `gatsby-plugin-offline`,
  ],
}
