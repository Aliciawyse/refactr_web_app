const path = require(`path`);
const sharp = require('sharp');
sharp.simd(false)
sharp.cache(false)

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `Airtable` && node.table === `Speakers`) {
    const slug =
      "/speakers/" + node.data.speaker_anchor
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

  if (node.internal.type === `Airtable` && node.table === `Company_Profile`) {
    const slug =
      "/company/" + node.data.company_anchor
    createNodeField({
      node,
      name: `slug`,
      value: slug
    });
  }

  if (node.internal.type === `Airtable` && node.table === `Job_Board`) {
    const slug =
      "/jobs/" + node.data.anchor
    createNodeField({
      node,
      name: `slug`,
      value: slug
    });
  }

};

exports.createPages = ({ actions, graphql }) => {


  function companyHasProfile(item){
    return item.data.Company_Profile
  }

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
        
        companies: allAirtable(filter: { table: { eq: "Company_Profile" } }) {
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
    result.data.companies.edges.forEach(({ node }) => {
      createPage({
        path: node.fields.slug,
        component: path.resolve(`./src/templates/the_exhibitor.js`),
        context: {
          slug: node.fields.slug
        }
      });
    });

    result.data.jobs.edges.forEach(({ node }) => {
      createPage({
        path: node.fields.slug,
        component: path.resolve(`./src/templates/the_job.js`),
        context: {
          slug: node.fields.slug
        }
      });
    });

  });
};
