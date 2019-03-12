plugins: [
    {
      resolve: `gatsby-plugin-sass@next`,
      options: {
        implementation: require("sass"),
      },
    },
  ]
  module.exports = {
    // Note: it must *not* have a trailing slash.
    pathPrefix: `/`,
  }