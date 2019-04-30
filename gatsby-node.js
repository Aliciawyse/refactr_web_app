const path = require(`path`)
const slugify = require(`slugify`)

exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions
    if (node.internal.type === `Airtable`) {
      const slug = "/speakers/" + slugify(node.data.speaker_name, {lower: true})
      createNodeField({
        node,
        name: `slug`,
        value: slug,
      })
    }
  }

exports.createPages = ({actions, graphql}) => {
    const { createPage } = actions
    return graphql(
        `
        query {
            allAirtable(filter: {table: {eq: "Speakers"}}) {
              edges {
                node {
                  fields {
                    slug
                  }
                  data {
                    speaker_name
                    role
                    company
                    twitter
                    headshot {
                      url
                    }
                    linkedIn
                    company_url
                  }
                }
              }
            }
          }
        `
    ).then(result => {
        result.data.allAirtable.edges.forEach(({ node }) => {
            createPage({
              path: node.fields.slug,
              component: path.resolve(`./src/templates/the_speaker.js`),
              context: {
                // Data passed to context is available
                // in page queries as GraphQL variables. 
                // inject any variables we will need on the individual speaker page
                slug: node.fields.slug,
              },
            })
          })
      })
}
