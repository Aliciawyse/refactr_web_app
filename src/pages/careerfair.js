import React from "react";
import { graphql } from "gatsby";
import { ExhibitorCardList } from "../components/ExhibitorCardList";
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/footer";
import { Helmet } from "react-helmet";


export default ({ data }) => (
  <div>
    <Helmet>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <title>Career Fair | REFACTR.TECH | August 17, 2021</title>
      <meta
        name="description"
        content="Meet hiring managers from top tech companies like Microsoft, CallRail, Google, SalesLoft, Cloudinary, Mozilla, Mailchimp and more!"
      />
      

      {/* <!-- Open Graph data --> */}
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="REFACTR.TECH" />
      <meta property="og:url" content="https://www.refactr.tech/" />
      <meta
        property="og:title"
        content="REFACTR.TECH 2021 Career Fair - August 17"
      />
      <meta
        property="og:description"
        content="Meet hiring managers from top tech companies like Microsoft, CallRail, Google, SalesLoft, Cloudinary, Mozilla, Mailchimp and more!"
      />
      <meta 
        name="keywords" 
        content="Atlanta, online, virtual, technology, conference, diversity, inclusion, accessibility, software, frontend, fullstack, web development, leadership, career, javascript, react, angular, serverless, machine learning, product, ux, ui, design, social impact" 
      />

      <meta
        property="og:image"
        content="https://refactr.tech/img/conference/career-fair-header.jpeg"
      />
      <meta
        property="og:image:secure_url"
        content="https://refactr.tech/img/conference/career-fair-header.jpeg"
      />
      <meta property="og:image:width" content="500" />
      <meta property="og:image:height" content="260" />

      <meta name="msapplication-TileImage" content="https://refactr.tech/img/conference/2020-tile.png"/>

      {/* <!-- Social sharing meta --> */}
      <meta name="twitter:site" content="@RefactrTech" />
      <meta
        name="twitter:title"
        content="REFACTR.TECH 2021 Career Fair - August 17"
      />
      <meta
        name="twitter:description"
        content="Meet hiring managers from top tech companies like Microsoft, CallRail, Google, SalesLoft, Cloudinary, Mozilla, Mailchimp and more!"
      />
      <meta name="twitter:domain" content="https://refactr.tech" />
      <meta
        name="twitter:image"
        content="https://refactr.tech/img/conference/career-fair-header.jpeg"
      />
      <meta name="twitter:label1" content="Date" />
      <meta name="twitter:data1" content="August 17" />
      <meta name="twitter:label2" content="Location" />
      <meta name="twitter:data2" content="Online" />

      {/* <!-- Schema.org markup for Google+ --> */}
      <meta itemprop="name" content="REFACTR.TECH 2021 Career Fair - August 17" />
      <meta
        itemprop="description"
        content="Meet hiring managers from top tech companies like Microsoft, CallRail, Google, SalesLoft, Cloudinary, Mozilla, Mailchimp and more!"
      />
      <meta itemprop="image" content="/img/conference/marketing_header.png" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
    </Helmet>
    <div className="main-container">
      <NavigationBar whiteText/>
      <div className="about-us-area pad-head bg-about">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="about-content">
                <div className="section-title text-center">
                  <h2>Career Fair</h2>
                </div>
                <ol className="breadcrumb">
                  <li><a href="/">Home</a></li>
                  <li>|</li>
                  <li><a href="/schedule">Schedule</a></li>
                  <li>|</li>
                  <li>Career Fair</li>
                  <li>|</li>
                  <li>
                      <a href="/jobs">All Jobs</a>
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

      {/*Conference Synopsis Area Start Here*/}
      <div className="our-blog-area pad100">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <div className="title-text mb50">
                  <h2>Our Companies</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="inner-blog">
            <div>
              <div className="row">
               <ExhibitorCardList items={data.allAirtable.nodes} />
              </div>
            </div>
          </div>
        </div>
      </div>
    <Footer />
  </div>
</div>
);

export const query = graphql`
  {
    allAirtable(filter: {table: {eq: "Sponsors"}, data: {exhibitor: {eq: true}}}
    sort: { fields: data___profile_status}
    ) {
      nodes {
        fields {
          slug
        }
        data {
          company_name
          exhibitor
          logo {
            url
          }
          Company_Profile{
            data{
              company_anchor
              description
              description_truncated
              why_work_here
              has_dei_info
              DEI_URL
            }
          }
        }
      }
    }
  }
`;
