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
    <title>Speakers | REFACTR.TECH 2024</title>
    <meta
      name="description"
      content="A new lineup of events - meetups, panels, workshops, and social gatherings - catering to all skill levels and interests. Experience the REFACTR.TECH vibe across multiple events all year!"
    />
    
  
    {/* <!-- Open Graph data --> */}
    <meta property="og:locale" content="en_US" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="REFACTR.TECH" />
    <meta property="og:url" content="https://www.refactr.tech/" />
    <meta
      property="og:title"
      content="Speakers | REFACTR.TECH 2024"
    />
    <meta
      property="og:description"
      content="A new lineup of events - meetups, panels, workshops, and social gatherings - catering to all skill levels and interests. Experience the REFACTR.TECH vibe across multiple events all year!"
    />
    <meta 
        name="keywords" 
        content="Atlanta, technology, events, diversity, inclusion, accessibility, software, frontend, fullstack, web development, leadership, career, javascript, react, angular, serverless, machine learning, product, ux, ui, design, social impact" 
    />
  
    <meta
      property="og:image"
      content="https://refactr.tech/img/conference/Home_5.svg"
    />
    <meta
      property="og:image:secure_url"
      content="https://refactr.tech/img/conference/Home_5.svg"
    />
    <meta property="og:image:width" content="500" />
    <meta property="og:image:height" content="260" />
  
    <meta name="msapplication-TileImage" content="https://refactr.tech/img/conference/2020-tile.png"/>
  
    {/* <!-- Social sharing meta --> */}
    <meta property="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@RefactrTech" />
    <meta
      name="twitter:title"
      content="Speakers | REFACTR.TECH 2024"
    />
    <meta
      name="twitter:description"
      content="A new lineup of events - meetups, panels, workshops, and social gatherings - catering to all skill levels and interests. Experience the REFACTR.TECH vibe across multiple events all year!"
    />
    <meta name="twitter:domain" content="https://refactr.tech" />
    <meta
      name="twitter:image"
      content="https://refactr.tech/img/conference/Home_5.svg"
    />
    <meta name="twitter:label1" content="Date" />
  <meta name="twitter:data1" content="" />
  <meta name="twitter:label2" content="Location" />
  <meta name="twitter:data2" content="Atlanta, GA" />
  
    {/* <!-- Schema.org markup for Google+ --> */}
    <meta itemprop="name" content="Speakers | REFACTR.TECH 2024" />
    <meta
      itemprop="description"
      content="A new lineup of events - meetups, panels, workshops, and social gatherings - catering to all skill levels and interests. Experience the REFACTR.TECH vibe across multiple events all year!"
    />
    <meta itemprop="image" content="/img/conference/Home_5.svg" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />

    <script src="https://static.elfsight.com/platform/platform.js" data-use-service-core defer></script>
  </Helmet>
      <div className="main-container">
        <NavigationBar whiteText />
        <div className="about-us-area pad-head bg-about">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="about-content">
                  <div className="section-title text-center">
                    <h2>Sponsors</h2>
                  </div>
                  <ol className="breadcrumb">
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li>|</li>
                    <li>Careers</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*Whos Speaking Area Start Here*/}
        <div className="whos-speaking-area pad100">
          <div className="container">
            <div className="row">

            <div className="col-lg-12">
                  <div className="section-title text-center">
                      <div className="title-text mtb30 xs-mb40">
                          <h2>FanDuel Atlanta Openings</h2>


                      </div>
                  </div>

            </div>
          </div>
        </div>
        {/*Whos Speaking Area End Here*/}

        <div class="elfsight-app-9cfa30dd-26ae-4eac-bd87-71e09132925e" data-elfsight-app-lazy></div>

        </div>
      </div>


      {/*<div className="counter-up-area ptb60 bg-counter parallax">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="single-counter xs-mb40">
                  <div className="count-content" style={{ textAlign: "center"}}>
                    <span className="count" style={{ fontSize: "3.1em"}}>Register</span>
                    <p style={{ fontSize: "1.3em", fontWeight: "400", textTransform:"none"}}>Get your ticket to attend REFACTR.TECH in Atlanta,  for a day full of keynotes, tech sessions and demos, and of course, parties! 
                    With <Link style={{ color: "white", textDecoration: "underline"}} to="/sessions">topics ranging from software engineering to leadership to data and community,</Link> there’s something for everybody!</p>
                      <div className="row justify-content-center">
                        <div className="col-md-4 col-sm-12">
                          <div className="primary-btn text-center mt30">
                              <OutboundLink href="https://reg.connectevents.io/ConnectEvents/rtech2023/" target="_blank" class="btn-primary" style={{border: "2px solid #fff", fontSize: "1.5em"}}>Get Tickets Now</OutboundLink> 
                          </div>
                        </div>
                          
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
  </div>*/}

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
