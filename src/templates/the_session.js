import React from "react";
import Footer from "../components/footer";
import NavigationBar from "../components/NavigationBar";
import { graphql } from "gatsby";
import { Link } from "gatsby";
import { SessionSpeakerList } from "../components/SessionSpeakerList";
import { Helmet } from "react-helmet";
import { OutboundLink } from "gatsby-plugin-google-gtag";

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
      <Helmet>
      <title>{data.airtable.data.title + " | REFACTR.TECH 2022"}</title>
      <meta
        name="description"
        content={data.airtable.data.meta_description}
      />
    
      {/* <!-- Open Graph data --> */}
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="REFACTR.TECH" />
      <meta property="og:url" content="https://www.refactr.tech/" />
      <meta
        property="og:title"
        content={data.airtable.data.title + " | REFACTR.TECH 2022"}
      />
      <meta
        property="og:description"
        content={data.airtable.data.meta_description}
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
        content={data.airtable.data.title + " | REFACTR.TECH 2022"}
      />
      <meta
        name="twitter:description"
        content={data.airtable.data.meta_description}
      />
      <meta name="twitter:domain" content="https://refactr.tech" />
      <meta
        name="twitter:image"
        content={data.airtable.data.meta_image[0].thumbnails.large.url}
      />
      <meta name="twitter:label1" content="Date" />
  <meta name="twitter:data1" content="September 14-16" />
  <meta name="twitter:label2" content="Location" />
  <meta name="twitter:data2" content="Downtown Atlanta, GA" />
    
      {/* <!-- Schema.org markup for Google+ --> */}
      <meta itemprop="name" content={data.airtable.data.title + " | REFACTR.TECH 2022"} />
      <meta
        itemprop="description"
        content={data.airtable.data.meta_description}
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
                    <h2>Events</h2>
                  </div>
                  <ol className="breadcrumb">
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li>|</li>
                    <li><a href="/workshops">Workshops</a></li>
                    <li>|</li>
                    <li><a href="/schedule">Schedule</a></li>
                    <li>|</li>
                    <li><a href="/sessions">All Sessions by Track</a></li>
                    <li>|</li>
                    <li>Session Details</li>
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
              <div className="col-md-12 col-xl-9">
                <div className="inner-content">
                  <div>
                    <a name="frontend-sessions" />
                    
                    <Link className={`pill `+`track-${data.airtable.data.Track}`.replace(/[\s&$!]+/g, "")}
                      title={`See more ${data.airtable.data.Track} sessions`}
                      to={`/sessions/#${data.airtable.data.Track}`.replace(/\s+/g, "")}>
                      {data.airtable.data.Track}
                    </Link>

                    <p className="session-title">
                      <span>{data.airtable.data.title}</span>
                    </p>

                    <p>
                      <a className="detail-view">
                        {" "}
                        {data.airtable.data.date_friendly} {data.airtable.data.end_date_friendly}
                      </a>
                    </p>

                    <p style={abstractStyle}>{data.airtable.data.Abstract}</p>

                    <span className="speaker-header">Speakers</span>

                    <SessionSpeakerList speakers={data.airtable.data.Speakers}/>

                    {/*<div style={{textAlign: 'center'}}>
                      <span className="primary-btn"><a className="btn-primary" href="http://reg.connectevents.io/ConnectEvents/rtech2020/" rel="noreferrer noopener" target="_blank">Buy Tickets</a></span>
                    </div>*/}

                  </div>
                </div>
              </div>

              <div className="col-lg-3 motivational-concepts-area d-none d-xl-block">
              <div className="testimonial-wrapper bg-color" style={{border: "1px solid #c9c9c9"}}> 
                <div className="section-title text-center">
                  <p style={{fontSize:"1.3em", fontWeight:"bold", color:"#1E1C7F"}}>REGISTER NOW</p>

                  <p> Get accesss to 50+ sessions in 7 tracks, 3 full-day workshops, 2 book signings, socials and more at REFACTR.TECH 2022.
                  </p>

                  <p><OutboundLink href="https://reg.connectevents.io/ConnectEvents/rtech2022/" target="_blank" style={{color: "#C418A3"}}>Register</OutboundLink></p>
                </div>
              </div>

              <div className="testimonial-wrapper bg-color" style={{marginTop: "30px", marginBottom: "50px", border: "1px solid #c9c9c9"}}>
                <div className="section-title text-center">
                  <p style={{fontSize:"1.3em", fontWeight:"bold", color:"#1E1C7F"}}>BOOK SIGNING</p>

                  <p>REFACTR.TECH attendees can get <strong><em>exclusive</em>&nbsp;&nbsp;early-access</strong> to <Link to="/data-conscience-book">Data Conscience: Algorithmic Siege on our Humanity,</Link> <em>before</em> the official release, at a <strong>28% discount!</strong></p>


                  <p><OutboundLink href="https://reg.connectevents.io/ConnectEvents/rtech2022/" target="_blank" style={{color: "#C418A3"}}>Reserve Your Book Here</OutboundLink></p>
                </div>
              </div>
            </div>
            {/* /col end*/}


            </div>
          </div>
        </div>


        <div className="counter-up-area ptb60 bg-counter parallax">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="single-counter xs-mb40">
                <div className="count-content" style={{ textAlign: "center"}}>
                  <span className="count" style={{ fontSize: "3.1em"}}>Register</span>
                  <p style={{ fontSize: "1.3em", fontWeight: "400", textTransform:"none"}}>Get your ticket to attend REFACTR.TECH in Atlanta, September 14 - 16 for 3 days packed full of workshops, keynotes, tech sessions and demos, and of course, parties! 
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
        Track
        title
        Day
        date_friendly
        end_date_friendly
        Time
        meta_description
        speaker_pic {
          thumbnails {
            large {
              url
            }
          }
        }
        meta_image{
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
            speaker_anchor
          }
        }
      }
    }
  }
`;
