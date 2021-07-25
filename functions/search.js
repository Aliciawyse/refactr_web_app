const Airtable = require('airtable');

const AIRTABLE_API_KEY = process.env.GATSBY_AIRTABLE_API_KEY;
const AIRTABLE_BASE_ID = process.env.GATSBY_AIRTABLE_BASE_KEY;
const AIRTABLE_TABLE_NAME = 'Job_Board';
const AIRTABLE_PAGE_SIZE = 30;

const RESPONSE_HEADERS = {
  'Content-Type': 'application/json; charset=utf-8',
};

exports.handler = async function (event) {
  const { query } = event.queryStringParameters;

  if (!AIRTABLE_API_KEY) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Airtable API key is missing.' }),
    };
  }

  if (!query) {
    return {
      statusCode: 422,
      body: JSON.stringify({ error: 'Query is required.' }),
    };
  }

  const base = new Airtable({ apiKey: AIRTABLE_API_KEY }).base(
    AIRTABLE_BASE_ID
  );


  const jobData = await base(AIRTABLE_TABLE_NAME)
    .select({
      pageSize: AIRTABLE_PAGE_SIZE,
      maxRecords: 3,
      view: "Grid view",
      // TODO: Update to use your field names.
      filterByFormula: `
      OR(
        SEARCH("${query.toLowerCase()}", LOWER({role_description})),
        SEARCH("${query.toLowerCase()}", LOWER({interview_process})),
        SEARCH("${query.toLowerCase()}", LOWER({apply_url})),
        SEARCH("${query.toLowerCase()}", LOWER({locations}))
      )
    `,
    }).firstPage()

  const fullResults = Array.from(jobData).map(async record => {
    const job = record._rawJson.fields
    const sponsId = record._rawJson.fields.Sponsors[0]

    const spons = await base('Sponsors').find(sponsId);

    return {
      ...job,
      sponsors: spons._rawJson.fields
    }
  })

  const results = await Promise.all(fullResults)


  const noResults = !Array.isArray(results) || results.length === 0;

  if (noResults) {
    return {
      statusCode: 404,
      body: JSON.stringify({ error: 'No results.' }),
    };
  }

  return {
    statusCode: 200,
    headers: RESPONSE_HEADERS,
    body: JSON.stringify({ results }),
  };
};
