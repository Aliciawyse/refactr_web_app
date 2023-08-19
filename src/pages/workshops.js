import React from "react";
import Footer from "../components/footer";
import NavigationBar from "../components/NavigationBar";
import { Link } from "gatsby";
import { OutboundLink } from "gatsby-plugin-google-gtag";
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
  <title>Workshops | REFACTR.TECH 2023</title>
  <meta
    name="description"
    content="REFACTR.TECH offers a full day of workshops. Level up with a deep dive into VS Code, Machine Learning or Web Performance."
  />
  

  {/* <!-- Open Graph data --> */}
  <meta property="og:locale" content="en_US" />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="REFACTR.TECH" />
  <meta property="og:url" content="https://www.refactr.tech/" />
  <meta
    property="og:title"
    content="Workshops | REFACTR.TECH 2023"
  />
  <meta
    property="og:description"
    content="REFACTR.TECH offers a full day of workshops. Level up with a deep dive into VS Code, , Machine Learning or Web Performance."
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
    content="Workshops | REFACTR.TECH 2023"
  />
  <meta
    name="twitter:description"
    content="REFACTR.TECH offers a full day of workshops. Level up with a deep dive into VS Code, Machine Learning or Web Performance."
  />
  <meta name="twitter:domain" content="https://refactr.tech" />
  <meta
    name="twitter:image"
    content="https://refactr.tech/img/conference/marketing_header.png"
  />
  <meta name="twitter:label1" content="Date" />
  <meta name="twitter:data1" content="October 27" />
  <meta name="twitter:label2" content="Location" />
  <meta name="twitter:data2" content="Downtown, Atlanta, GA" />

  {/* <!-- Schema.org markup for Google+ --> */}
  <meta itemprop="name" content="Workshops | REFACTR.TECH 2023" />
  <meta
    itemprop="description"
    content="REFACTR.TECH offers a full day of workshops. Level up with a deep dive into VS Code, Machine Learning or Web Performance."
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
                  <h2>2022 Events</h2>
                </div>
                <ol className="breadcrumb">
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>|</li>
                  <li>2022 Workshops</li>
                  <li>|</li>
                  <li><a href="/schedule">Schedule</a></li>
                  <li>|</li>
                  <li><a href="/sessions">2022 Sessions by Track</a></li>
                  <li>|</li>
                  <li><a href="/special-events">Special Events</a></li>
                  <li>|</li>
			            <li><a href="/book-signing">Book Signings</a></li>
                  {/*<li>|</li>
                  <li><a href="/careerfair">Career Fair</a></li>
                  <li>|</li>
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

      <SessionCardList items={data.allAirtable.edges} showBuyTickets={true}  soldOut={false} />


      <div className="counter-up-area ptb60 bg-counter parallax">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="single-counter xs-mb40">
                  <div className="count-content" style={{ textAlign: "center"}}>
                    <span className="count" style={{ fontSize: "3.1em"}}>Register</span>
                    <p style={{ fontSize: "1.3em", fontWeight: "400", textTransform:"none"}}>Get your ticket to attend REFACTR.TECH in Atlanta, October 27 for 3 days packed full of workshops, keynotes, tech sessions and demos, and of course, parties! 
                    With <Link style={{ color: "white", textDecoration: "underline"}} to="/sessions">tracks from software engineering to leadership to data and community,</Link> there’s something for everybody!</p>
                      <div className="row justify-content-center">
                        <div className="col-md-4 col-sm-12">
                          <div className="primary-btn text-center mt30">
                              {/* <a href="https://2019.refactr.tech" class="btn-primary" style={{border: "2px solid #fff"}}>2019 Conference</a> */}
                              <OutboundLink href="https://reg.connectevents.io/ConnectEvents/rtech2022/" target="_blank" class="btn-primary" style={{border: "2px solid #fff", fontSize: "1.5em"}}>Get Tickets Now</OutboundLink> 
                          </div>
                        </div>
                          
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

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
            Duration
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
