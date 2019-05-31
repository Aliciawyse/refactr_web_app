require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`
});

module.exports = {
  siteMetadata: {
    title: "My Site"
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
          }
        ]
      }
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`
  ]
};
