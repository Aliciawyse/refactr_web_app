import React, { useState, useEffect } from "react";
import { graphql } from "gatsby";
import { JobCardList } from "../components/JobCardList";
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/footer";
import { useSearchQuery } from '../hooks/useSearchQuery'
import { useDebounce } from '../hooks/useDebounce'
import { Input } from '../reusable_components'
import { Helmet } from "react-helmet";

export default ({ data }) => {

  const [query, setQuery] = useState('');
  const debouncedQuery = useDebounce(query, 500)
  const [queryData] = useSearchQuery(debouncedQuery);

  useEffect(() => {
    const searchQuery = new URLSearchParams(window.location.search).get('query');
    if (searchQuery) setQuery(searchQuery);
  }, []);

  const handleInput = (e) => {
    const sanitizedValue = e.target.value.replace(/[^A-Za-z]/ig, '').toLowerCase()
    setQuery(sanitizedValue)
  }


  return (
    <div>
      <Helmet>
        <title>Job Board | REFACTR.TECH 2021</title>
        <meta
          name="description"
          content="REFACTR.TECH Online features 20+ speakers from all over the tech industry with topics from Gatsby.js to Machine Learning to Engineering Leadership."
        />
        <meta name="robots" content="noindex,follow" />

        {/* <!-- Open Graph data --> */}
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="REFACTR.TECH" />
        <meta property="og:url" content="https://www.refactr.tech/" />
        <meta
          property="og:title"
          content="Job Board | REFACTR.TECH 2021"
        />
        <meta
          property="og:description"
          content="REFACTR.TECH Online features over 20 speakers from all over the tech industry with topics from Gatsby.js to Machine Learning to Engineering Leadership."
        />
        <meta
          name="keywords"
          content="Atlanta, technology, conference, diversity, inclusion, accessibility, software, frontend, fullstack, web development, leadership, career, javascript, react, angular, serverless, machine learning, product, ux, ui, design, social impact"
        />

        <meta
          property="og:image"
          content="https://refactr.tech/img/conference/marketing_header.png"
        />
        <meta
          property="og:image:secure_url"
          content="https://refactr.tech/img/conference/marketing_header.png"
        />
        <meta property="og:image:width" content="500" />
        <meta property="og:image:height" content="260" />

        <meta name="msapplication-TileImage" content="https://refactr.tech/img/conference/2020-tile.png" />

        {/* <!-- Social sharing meta --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@RefactrTech" />
        <meta
          name="twitter:title"
          content="Job Board | REFACTR.TECH 2021"
        />
        <meta
          name="twitter:description"
          content="REFACTR.TECH features over 20+ speakers from all over the tech industry with topics from Gatsby.js to Machine Learning to Engineering Leadership."
        />
        <meta name="twitter:domain" content="https://refactr.tech" />
        <meta
          name="twitter:image"
          content="https://refactr.tech/img/conference/marketing_header.png"
        />
        <meta name="twitter:label1" content="Date" />
        <meta name="twitter:data1" content="August 18-20" />
        <meta name="twitter:label2" content="Location" />
        <meta name="twitter:data2" content="Online" />

        {/* <!-- Schema.org markup for Google+ --> */}
        <meta itemprop="name" content="Job Board | REFACTR.TECH 2021" />
        <meta
          itemprop="description"
          content="REFACTR.TECH features 20+ speakers from all over the tech industry with topics from Gatsby.js to Machine Learning to Engineering Leadership."
        />
        <meta itemprop="image" content="/img/conference/marketing_header.png" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
      </Helmet>
      <div className="main-container">
        <NavigationBar whiteText />
        <div className="about-us-area pad-head bg-about">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="about-content">
                  <div className="section-title text-center">
                    <h2>Job Board</h2>
                  </div>
                  <ol className="breadcrumb">
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li>|</li>
                    <li>Job Board</li>
                    <li>|</li>
                    <li>
                      <a href="/careerfair">Career Fair</a>
                    </li>
                    <li>|</li>
                    <li>
                      <a href="/uploadresume">Upload Resume</a>
                    </li>
                  </ol>
                </div>
              </div>
            </div>

          </div>
        </div>



        {/*Whos Speaking Area Start Here*/}
        <div>

          <Input
            name='search'
            onChange={handleInput}
            placeholder='Search for your job here...'
            domID='search'
          />

          <div className="container">

            <div className="row mt60">

              {/*<SpeakerCardList items={data.allAirtable.edges} />*/}

              <JobCardList items={data.allAirtable.edges} searchedItems={queryData} query={debouncedQuery} />


            </div>
          </div>
        </div>
        {/*Whos Speaking Area End Here*/}
      </div>


      <Footer />
    </div>
  );
};

export const jobsPageQuery = graphql`
  {
    allAirtable(
      filter: { table: { eq: "Job_Board" }, data: { status: { eq: "approved" } } }
      sort: { fields: data___department }
    ) {
      edges {
        node {
          fields {
            slug
          }
          data {
            job_title
            role_description
            time_since_post
            Sponsors {
              data {
                company_name
                company_url
                logo {
                  url
                }
                
              }
            }
          }
        }
      }
    }
  }
`;
