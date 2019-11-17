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
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <title>Workshops | REFACTR.TECH</title>
      <meta name="author" content="iThemesLab" />
      <meta name="description" content="" />
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
                    <a href="../index.html">Home</a>
                  </li>
                  <li>|</li>
                  <li>Workshops</li>
                  {/*<li>|</li>
                  <li><a href="/sessions">Sessions</a></li>*/}
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

      <SessionCardList items={data.allAirtable.edges} />

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
            anchor
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
                anchor
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
