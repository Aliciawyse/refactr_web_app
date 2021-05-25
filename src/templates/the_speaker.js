import React from "react";
import Footer from "../components/footer";
import NavigationBar from "../components/NavigationBar";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import { SpeakerSessionList } from "../components/SpeakerSessionList";
import { Helmet } from "react-helmet";


export default ({ data }) => {
  return (
    <div>
        <Helmet>
        <title>{data.airtable.data.speaker_name + " | REFACTR.TECH 2021"}</title>
        <meta
          name="description"
          content={data.airtable.data.role +" at "+ data.airtable.data.company}
        />
        <meta name="robots" content="noindex,follow" />
      
        {/* <!-- Open Graph data --> */}
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="REFACTR.TECH" />
        <meta property="og:url" content="https://www.refactr.tech/" />
        <meta
          property="og:title"
          content={data.airtable.data.speaker_name + " | REFACTR.TECH 2021"}
        />
        <meta
          property="og:description"
          content={data.airtable.data.role +" at "+ data.airtable.data.company}
        />
        <meta 
            name="keywords" 
            content="Atlanta, technology, conference, diversity, inclusion, accessibility, software, frontend, fullstack, web development, leadership, career, javascript, react, angular, serverless, machine learning, product, ux, ui, design, social impact" 
        />
      
        <meta
          property="og:image"
          content={data.airtable.data.meta_image[0].thumbnails.large.url}
        />
        <meta
          property="og:image:secure_url"
          content={data.airtable.data.meta_image[0].thumbnails.large.url}
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="544" />
      
        <meta name="msapplication-TileImage" content="https://refactr.tech/img/conference/2020-tile.png"/>
      
        {/* <!-- Social sharing meta --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@RefactrTech" />
        <meta
          name="twitter:title"
          content={data.airtable.data.speaker_name + " | REFACTR.TECH 2021"}
        />
        <meta
          name="twitter:description"
          content={data.airtable.data.role +" at "+ data.airtable.data.company}
        />
        <meta name="twitter:domain" content="https://refactr.tech" />
        <meta
          name="twitter:image"
          content={data.airtable.data.meta_image[0].thumbnails.large.url}
        />
        <meta name="twitter:label1" content="Date" />
        <meta name="twitter:data1" content="August 18-20" />
        <meta name="twitter:label2" content="Location" />
        <meta name="twitter:data2" content="Online" />
      
        {/* <!-- Schema.org markup for Google+ --> */}
        <meta itemprop="name" content={data.airtable.data.speaker_name + " | REFACTR.TECH 2021"} />
        <meta
          itemprop="description"
          content={data.airtable.data.role +" at "+ data.airtable.data.company}
        />
        <meta itemprop="image" content={data.airtable.data.meta_image[0].thumbnails.large.url} />
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
                    <h2>Speakers</h2>
                  </div>
                  <ol className="breadcrumb">
                    <li>
                      <a href="/">Home</a>
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
                  <span style={{display: data.airtable.data.company =='Activvely' ? 'none':'block' }}>
                    Sessions&nbsp;
                    <br />
                      <SpeakerSessionList sessions={data.airtable.data.Sessions}/>
                    <br />
                  </span>
                  <span style={{display: data.airtable.data.company =='Activvely' ? 'block':'none' }}>
                    <strong>Role&nbsp;</strong>
                    <br />
                      Emcee
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
        Sessions {
          data {
            title
            anchor_truncated
          }
        }
        linkedIn
        company_url
        bio
        session_url
        session_title
        session_anchor
        pronouns
        meta_image{
          thumbnails {
            large {
              url
            }
          }
        }
      }
    }
  }
`;
