import React from "react";
import Footer from "../components/footer";
import NavigationBar from "../components/NavigationBar";
import { graphql } from "gatsby";
import { Link } from "gatsby";
import Img from "gatsby-image";

export default ({ data }) => {
  return (
    <div>
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
                    <h2>Speakers</h2>
                  </div>
                  <ol className="breadcrumb">
                    <li>
                      <a href="../index.html">Home</a>
                    </li>
                    <li>|</li>
                    <li>Speaker Details</li>
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
        {/*Privacy Policy Content Area Start Here*/}
        <div className="speakers-single-area" id="vapp-speaker-details">
          <div className="container">
            <div className="row mt50">
              {/* <a :name="speaker.fields.anchor" /> */}
              <div className="col-lg-5 col-md-12">
                <div
                  style={{ width: "400px", height: "100%" }}
                  className="speakers-img"
                >
                  {data.airtable.data.headshot.localFiles && (
                    <Img
                      alt="Speaker"
                      fluid={data.airtable.data.headshot.localFiles[0].childImageSharp.fluid}
                    />
                  )}
                </div>
              </div>
              {/* /.col end*/}
              <div className="col-lg-7 col-md-12">
                <div className="inner-content">
                  <h1>{data.airtable.data.speaker_name}</h1>
                  <p>
                    {data.airtable.data.role},{" "}
                    {data.airtable.data.company}
                  </p>
                  <span>{data.airtable.data.pronouns}</span>
                  <br />

                  <p>{data.airtable.data.bio}</p>
                  <div className="social-icon">
                    <ul style={{ listStyleType: "none" }}>
                      <li>
                        <a href={data.airtable.data.linkedIn}>
                          <i className="fa fa-linkedin" />
                        </a>
                      </li>
                      <li>
                        <a href={data.airtable.data.twitter}>
                          <i className="fa fa-twitter" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <br />
                  <span>
                    Sessions&nbsp;
                    <br />
                    <Link
                      to={`/sessions/${data.airtable.data.session_anchor[0]}`}
                    >
                      {data.airtable.data.session_title}
                    </Link>
                    <br />
                  </span>
                </div>
              </div>
              {/* /.col end*/}
            </div>
          </div>
        </div>
        {/* /container end*/}
      </div>
      <Footer />
    </div>
  );
};

export const query = graphql`
  query Speaker($slug: String!) {
    airtable(table: { eq: "Speakers" }, fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      data {
        speaker_name
        role
        company
        twitter
        headshot {
          localFiles {
            childImageSharp {
              fluid(maxWidth: 512) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
        linkedIn
        company_url
        bio
        session_url
        session_title
        session_anchor
        pronouns
      }
    }
  }
`;
