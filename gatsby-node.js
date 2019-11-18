const path = require(`path`);
const sharp = require('sharp');
sharp.simd(false)
sharp.cache(false)

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `Airtable` && node.table === `Speakers`) {
    const slug =
      "/speakers/" + node.data.anchor
    createNodeField({
      node,
      name: `slug`,
      value: slug
    });
  }

  if (node.internal.type === `Airtable` && node.table === `Sessions`) {
    const slug =
      "/sessions/" + node.data.anchor_truncated
    createNodeField({
      node,
      name: `slug`,
      value: slug
    });
  }
};

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;
  // Go get the data that satisfy
  return graphql(
    `
      query {
        speakers: allAirtable(filter: { table: { eq: "Speakers" } }) {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
        sessions: allAirtable(filter: { table: { eq: "Sessions" } }) {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
        sponsors: allAirtable(filter: { table: { eq: "Sponsors" } }) {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `
  ).then(result => {
    // For each node of speaker data
    result.data.speakers.edges.forEach(({ node }) => {
      createPage({
        // Use this path for the page
        path: node.fields.slug,
        // The template to use for the created pages
        component: path.resolve(`./src/templates/the_speaker.js`),
        // This allows us to access the variable `slug` in our individual speaker pages
        context: {
          slug: node.fields.slug
        }
      });
    });
    // Create page for each session
    result.data.sessions.edges.forEach(({ node }) => {
      createPage({
        path: node.fields.slug,
        component: path.resolve(`./src/templates/the_session.js`),
        context: {
          slug: node.fields.slug
        }
      });
    });
  });
};
