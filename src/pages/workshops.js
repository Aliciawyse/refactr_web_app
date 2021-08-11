import React from "react";
import Footer from "../components/footer";
import NavigationBar from "../components/NavigationBar";
import { SessionCardList } from "../components/SessionCardList";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";
import "../../src/styles/assets/css/style.css";
import "../../src/styles/assets/css/style2.css";
import "../../src/styles/assets/css/style.css?23";
import "../../src/styles/assets/css/responsive.css";

export default ({ data }) => (
  <div>
  <Helmet>
  <title>Workshops | REFACTR.TECH 2021</title>
  <meta
    name="description"
    content="REFACTR.TECH offers a full day of workshops. Level up with a deep dive into VS Code, Alexa or Cypress."
  />
  <meta name="robots" content="noindex,follow" />

  {/* <!-- Open Graph data --> */}
  <meta property="og:locale" content="en_US" />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="REFACTR.TECH" />
  <meta property="og:url" content="https://www.refactr.tech/" />
  <meta
    property="og:title"
    content="Workshops | REFACTR.TECH 2021"
  />
  <meta
    property="og:description"
    content="REFACTR.TECH offers a full day of workshops. Level up with a deep dive into VS Code, Alexa or Cypress."
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

  <meta name="msapplication-TileImage" content="https://refactr.tech/img/conference/2020-tile.png"/>

  {/* <!-- Social sharing meta --> */}
  <meta property="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="@RefactrTech" />
  <meta
    name="twitter:title"
    content="Workshops | REFACTR.TECH 2021"
  />
  <meta
    name="twitter:description"
    content="REFACTR.TECH offers a full day of workshops. Level up with a deep dive into VS Code, Alexa or Cypress."
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
  <meta itemprop="name" content="Workshops | REFACTR.TECH 2021" />
  <meta
    itemprop="description"
    content="REFACTR.TECH offers a full day of workshops. Level up with a deep dive into VS Code, Alexa or Cypress."
  />
  <meta itemprop="image" content="/img/conference/marketing_header.png" />
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1, shrink-to-fit=no"
  />
</Helmet>
    {/*Main Container Start Here*/}
    <div className="main-container">
      {/*Header Start Here*/}
      <NavigationBar whiteText />
      {/*Header End Here*/}
      {/*About Us Area Start Here*/}
      <div className="about-us-area pad-head bg-about">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="about-content">
                <div className="section-title text-center">
                  <h2>Events</h2>
                </div>
                <ol className="breadcrumb">
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>|</li>
                  <li><a href="/schedule">Schedule</a></li>
                  <li>|</li>
                  <li>Workshops</li>
                  <li>|</li>
                  <li><a href="/careerfair">Career Fair</a></li>
                  <li>|</li>
                  <li><a href="/sessions">Sessions</a></li>
                </ol>
              </div>
            </div>
            {/* /col*/}
          </div>
          {/* /row*/}
        </div>
        {/*/ container*/}
      </div>
      {/*About Us Area End Here*/}

      <SessionCardList items={data.allAirtable.edges} showBuyTickets={true}  soldOut={false} />

      {/*Footer Area Start Here*/}
      <Footer />
      {/*Footer Area End Here*/}
    </div>
  </div>
);

export const all_sessions = graphql`
  {
    allAirtable(filter: { table: { eq: "Sessions" }, data: { session_type: { eq: "Workshop" } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          data {
            Abstract
            speaker_display_name
            url
            Track
            title
            speaker_url
            date_friendly
            Day
            Time
            speaker_pic {
              thumbnails {
                large {
                  url
                }
              }
            }
            Speakers {
              data {
                speaker_name
                speaker_anchor
                headshot {
                  localFiles {
                    childImageSharp {
                      fluid(maxWidth: 512, maxHeight:512) {
                        ...GatsbyImageSharpFluid_tracedSVG
                      }
                    }
                  }
                }
                role
                company
              }
            }
          }
        }
      }
    }
  }
`;
