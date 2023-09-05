import React from "react";
import { OutboundLink } from "gatsby-plugin-google-gtag";
import { Link } from "gatsby";
import { graphql } from "gatsby";
import { SpeakerCardList } from "../components/SpeakerCardList";
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/footer";
import { Helmet } from "react-helmet";

export default ({ data }) => {
  return (
    <div>
    <Helmet>
    <title>Speakers | REFACTR.TECH 2023</title>
    <meta
      name="description"
      content="REFACTR.TECH features over 50 speakers from all over the tech industry with topics from Gatsby.js to Machine Learning to Engineering Leadership."
    />
    
  
    {/* <!-- Open Graph data --> */}
    <meta property="og:locale" content="en_US" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="REFACTR.TECH" />
    <meta property="og:url" content="https://www.refactr.tech/" />
    <meta
      property="og:title"
      content="Speakers | REFACTR.TECH 2023"
    />
    <meta
      property="og:description"
      content="REFACTR.TECH features over 50 speakers from all over the tech industry with topics from Gatsby.js to Machine Learning to Engineering Leadership."
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
      content="Speakers | REFACTR.TECH 2023"
    />
    <meta
      name="twitter:description"
      content="REFACTR.TECH features over 50 speakers from all over the tech industry with topics from Gatsby.js to Machine Learning to Engineering Leadership."
    />
    <meta name="twitter:domain" content="https://refactr.tech" />
    <meta
      name="twitter:image"
      content="https://refactr.tech/img/conference/marketing_header.png"
    />
    <meta name="twitter:label1" content="Date" />
  <meta name="twitter:data1" content="October 27" />
  <meta name="twitter:label2" content="Location" />
  <meta name="twitter:data2" content="Atlanta, GA" />
  
    {/* <!-- Schema.org markup for Google+ --> */}
    <meta itemprop="name" content="Speakers | REFACTR.TECH 2023" />
    <meta
      itemprop="description"
      content="REFACTR.TECH features over 50 speakers from all over the tech industry with topics from Gatsby.js to Machine Learning to Engineering Leadership."
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
                    <h2>Speakers</h2>
                  </div>
                  <ol className="breadcrumb">
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li>|</li>
                    <li>Speakers</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*Whos Speaking Area Start Here*/}
        <div className="whos-speaking-area pad100">
          <div className="container">
            <div className="row mb50">
              <SpeakerCardList items={data.allAirtable.edges} />
            </div>
          </div>
        </div>
        {/*Whos Speaking Area End Here*/}
      </div>


      <div className="counter-up-area ptb60 bg-counter parallax">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="single-counter xs-mb40">
                  <div className="count-content" style={{ textAlign: "center"}}>
                    <span className="count" style={{ fontSize: "3.1em"}}>Register</span>
                    <p style={{ fontSize: "1.3em", fontWeight: "400", textTransform:"none"}}>Get your ticket to attend REFACTR.TECH in Atlanta, October 27 for a day full of keynotes, tech sessions and demos, and of course, parties! 
                    With <Link style={{ color: "white", textDecoration: "underline"}} to="/sessions">topics ranging from software engineering to leadership to data and community,</Link> there’s something for everybody!</p>
                      <div className="row justify-content-center">
                        <div className="col-md-4 col-sm-12">
                          <div className="primary-btn text-center mt30">
                              {/* <a href="https://2019.refactr.tech" class="btn-primary" style={{border: "2px solid #fff"}}>2019 Conference</a> */}
                              <OutboundLink href="https://reg.connectevents.io/ConnectEvents/rtech2023/" target="_blank" class="btn-primary" style={{border: "2px solid #fff", fontSize: "1.5em"}}>Get Tickets Now</OutboundLink> 
                          </div>
                        </div>
                          
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      <Footer />
    </div>
  );
};

export const speakerPageQuery = graphql`
  {
    allAirtable(
      filter: { table: { eq: "Speakers" }, data: { Status: { eq: "Confirmed" } } }
      sort: { fields: data___speaker_name }
    ) {
      edges {
        node {
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
                  fluid(maxWidth: 512, maxHeight: 512) {
                    ...GatsbyImageSharpFluid_tracedSVG
                  }
                }
              }
            }
            linkedIn
            company_url
            pronouns
          }
        }
      }
    }
  }
`;
