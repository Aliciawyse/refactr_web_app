import React from "react";
import { graphql } from "gatsby";
import { OutboundLink } from "gatsby-plugin-google-gtag";
import { Link } from "gatsby";
import Footer from "../components/footer";
import NavigationBar from "../components/NavigationBar";
import { Helmet } from "react-helmet";
import { SponsorsFiltered } from "../components/SponsorsFiltered";

const filterSponsorsByTier = (data) => {
    const allData = data.allAirtable.edges;
    let filteredData = [
        {
          tier: 'Recently Added',
          title: 'Recently Added',
          sponsors: []
        },
        {
          tier: 'Platinum',
          title: 'Platinum',
          sponsors: []
        },
        {
            tier: 'Gold',
            title: 'Gold',
            sponsors: []
        },
        {
            tier: 'Silver',
            title: 'Silver',
            sponsors: []
        },
        {
            tier: 'Bronze',
            title: 'Bronze',
            sponsors: []
        },
        {
          tier: 'Virtual Venue',
          title: 'Virtual Venue Sponsors',
          sponsors: []
        },
        {
          tier: 'In-kind',
          title: 'In-kind Partners',
          sponsors: []
        },
        {
          tier: 'Accessibility',
          title: 'Accessibility',
          sponsors: []
        },
        {
          tier: 'Career Fair',
          title: 'Career Fair',
          sponsors: []
        },
        {
          tier: 'Name Badge',
          title: 'Name Badge',
          sponsors: []
        },
        {
            tier: 'Opportunity Grant',
            title: 'Opportunity Grant',
            sponsors: []
        },
        {
            tier: 'Lunch',
            title: 'Lunch',
            sponsors: []
        },
        {
          tier: 'Community',
          title: 'Community and Media Partners',
          sponsors: []
      }
    ];
    allData.forEach(sponsor => {
        let idx = filteredData.find(item =>
            item.tier.toLowerCase() === sponsor.node.data.tier[0].toLowerCase()
        );
        let addSponsor = {
            company_name: sponsor.node.data.company_name,
            url: sponsor.node.data.url,
            logo: sponsor.node.data.logo,
            tier: sponsor.node.data.tier
        };
        idx.sponsors.push(addSponsor);
    });
    // remove any tier that does not have any sponsors
    filteredData = filteredData.filter(item => item.sponsors.length > 0);
    return filteredData;
};

export default ({ data }) => {
    const filteredSponsors = filterSponsorsByTier(data);

  return (
    <div>
      <Helmet>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <title>Sponsors | REFACTR.TECH</title>
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

        {/*Sponsors Header Start Here*/}
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
                    <li>Companies</li>
                    <li>|</li>
                    <li>
                      <a href="/uploadresume">Upload Resume</a>
                    </li>
                  </ol>
                </div>
              </div>
              {/* /col*/}
            </div>
            {/* /row*/}
          </div>
          {/*/ container*/}
        </div>
        {/*Sponsors Header End Here*/}



        {/*List of Sponsors Start Here*/}
        <div className="our-sponsors-area ptb50 bg-color">
          <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="section-title text-center">
                        <div className="title-text mb50 xs-mb40">
                            <h2>2023 Sponsors</h2>
                        </div>
                        <hr />
                        <div className="single-sponsers">
                            <SponsorsFiltered items={filteredSponsors} />
                        </div>
                    </div>
                </div>

            </div>

            <div className="row">
                <div className="col-lg-12">
                    <div className="section-title text-center">
                        <div className="title-text mb30 xs-mb40">
                            <h2>Sponsor REFACTR.TECH 2023</h2>
                        <p style={{marginTop: "15px"}}>Companies, are you looking for an opportunity to engage with hundreds of technologists from diverse backgrounds? Check out our sponsorship prospectus to review the many ways to partner with REFACTR.TECH.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="primary-btn text-center">
                        <a href="https://refactrtech.typeform.com/to/ouMvCw" class="btn-primary" rel="noreferrer noopener" target="_blank">Become a Sponsor</a>
                    </div>
                </div>
            </div>

          </div>
        </div>
        {/*List of Sponsors End Here*/}
        

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
};

export const sponsorPageQuery = graphql`
  {
    allAirtable(filter: { table: { eq: "Sponsors" } }
    sort: { fields: data___DisplayListOrder }
    ) {
      edges {
        node {
          fields {
            slug
          }
          data {
            company_name
            url
            tier
            logo {
              localFiles {
                childImageSharp {
                  fluid(maxWidth: 512, maxHeight: 512) {
                    ...GatsbyImageSharpFluid_tracedSVG
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
