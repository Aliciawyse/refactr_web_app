import React from "react";
import { graphql } from "gatsby";

import Footer from "../components/footer";
import NavigationBar from "../components/NavigationBar";
import { Helmet } from "react-helmet";
import { SponsorsFiltered } from "../components/SponsorsFiltered";

const filterSponsorsByTier = (data) => {
    const allData = data.allAirtable.edges;
    let filteredData = [
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
            tier: 'bronze',
            title: 'Bronze',
            sponsors: []
        },
        {
          tier: 'virtual_venue',
          title: 'Virtual Venue Sponsors',
          sponsors: []
        },
        {
          tier: 'in_kind_partners',
          title: 'In-kind Partners',
          sponsors: []
        },
        {
          tier: 'career_fair',
          title: 'Career Fair',
          sponsors: []
        },
        {
            tier: 'opp_grant',
            title: 'Opportunity Grant',
            sponsors: []
        },
        {
          tier: 'community',
          title: 'Supporters and Community Partners',
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
            logo: sponsor.node.data.logo[0].url,
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
                    <li>Sponsors</li>
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
                            <h2>2021 Sponsors</h2>
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
                            <h2>Sponsor REFACTR.TECH 2022</h2>
                        <p style={{marginTop: "15px"}}>Companies, are you looking for an opportunity to engage with hundreds of technologists from diverse backgrounds at our Exhibit Hall and Career Expo? Check out our sponsorship prospectus to review the many ways to partner with REFACTR.TECH.</p>
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
        

        {/*Footer Area Start Here*/}
        <Footer />
        {/*Footer Area End Here*/}
      </div>
    </div>
  );
};

export const sponsorPageQuery = graphql`
  {
    allAirtable(filter: { table: { eq: "Sponsors" } }) {
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
              filename
              url
            }
          }
        }
      }
    }
  }
`;
