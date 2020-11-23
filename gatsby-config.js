module.exports = {
  siteMetadata: {
    title: `My Portfolio`,
    titleTemplate: `%s - beewai`,
    description: `A collection of work from beewai.`,
    siteUrl: `https://beewai-portfolio.netlify.app`,
    behance: "http://behance.net/beewai",
    github: "https://github.com/byeung-seekers",
    linkedin: "https://www.linkedin.com/in/yeungbenjamin",
    codesandbox: "https://codesandbox.io/u/byeung-seekers",
  },
  plugins: [
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
  ],
}
