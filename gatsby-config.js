require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`
});

module.exports = {
  siteMetadata: {
    title: "REFACTR.TECH"
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/styles/assets/img/`
      }
    },
    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: process.env.GATSBY_AIRTABLE_API_KEY,
        tables: [
          {
            baseId: process.env.GATSBY_AIRTABLE_BASE_KEY,
            tableName: `Speakers`,
            queryName: `speakers`,
            mapping: { headshot: `fileNode` }
          },
          {
            baseId: process.env.GATSBY_AIRTABLE_BASE_KEY,
            tableName: `Sessions`,
            queryName: `sessions`,
            tableLinks: ["Speakers"]
          },
          {
            baseId: process.env.GATSBY_AIRTABLE_BASE_KEY,
            tableName: `Sponsors`,
            queryName: `sponsors`,
            tableLinks: ["Sponsors"]
          }
        ]
      }
    },{
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "REFACTR.TECH",
        short_name: "REFACTR.TECH",
        start_url: "/",
        background_color: "#6b37bf",
        theme_color: "#6b37bf",
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: "standalone",
        icon: "src/images/icon.png", // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-manifest`,
    `gatsby-plugin-styled-components`
  ]
};
