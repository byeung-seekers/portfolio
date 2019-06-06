module.exports = {
  siteMetadata: {
    author: "Benjamin Yeung",
  },
  plugins: [
    "gatsby-plugin-favicon",
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
  ],
}
