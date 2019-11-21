import React from "react";
import Footer from "../components/footer";
import NavigationBar from "../components/NavigationBar";
import { graphql } from "gatsby";
import { SessionSpeakerList } from "../components/SessionSpeakerList";

const divStyle = {
  fontFamily: "Poppins",
  lineHeight: "1.5em"
};

const abstractStyle = {
  fontSize: "16px"
};

export default ({ data }) => {
  return (
    <div style={divStyle}>
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
                    <li>
                      <a href="/workshops">Workshops</a>
                    </li>
                    <li>|</li>
                    <li>Sessions</li>
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

        <div className="speakers-single-area">
          <div className="container">
            <div className="row mt50">
              <div className="col-md-12">
                <div className="inner-content">
                  <div>
                    <a name="frontend-sessions" />
                    <p className="session-title">
                      <span className="m0">{data.airtable.data.title}</span>
                    </p>

                    {/*<p>
                      <a className="detail-view">
                        {" "}
                        {data.airtable.data.Day}{" "}
                        {data.airtable.data.date_friendly},{" "}
                        {data.airtable.data.Time} (45 min)
                      </a>
                    </p>*/}

                    <p style={abstractStyle}>{data.airtable.data.Abstract}</p>

                    <span className="speaker-header">Speakers</span>

                    <SessionSpeakerList speakers={data.airtable.data.Speakers}/>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export const query = graphql`
  query Session($slug: String!) {
    airtable(table: { eq: "Sessions" }, fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      data {
        Abstract
        speaker_display_name
        title
        anchor
        Day
        date_friendly
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
            headshot {
              localFiles {
                childImageSharp {
                  fluid(maxWidth: 512, maxHeight: 512) {
                    ...GatsbyImageSharpFluid_tracedSVG
                  }
                }
              }
            }
            speaker_name
            role
            company
            anchor
          }
        }
      }
    }
  }
`;
