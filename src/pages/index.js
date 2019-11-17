import React from "react";
import { graphql } from "gatsby";
import Footer from "../components/footer";
import { WorkshopCardList } from "../components/WorkshopCardList";
import { FeaturedSpeakerCard } from "../components/FeaturedSpeakerCard";
import NavigationBar from "../components/NavigationBar";
import workshopData from "../workshop-data";
import { Link } from "gatsby";
import { Helmet } from "react-helmet";
import styled from "styled-components";

import "../styles/assets/css/responsive2.css";
import "../styles/assets/css/style.css";
import "../styles/assets/css/style2.css";
import "../styles/assets/css/responsive.css";

const Topic = styled.a`${Link}:hover & {
  color: white;
}
`

export default ({ data }) => (
  <div>
    <Helmet>
      <title>REFACTR.TECH 2019 - Atlanta June 5 - 7</title>
      <meta
        name="description"
        content="The multi-track tech conference with a focus on inclusion. "
      />
      <meta name="robots" content="" />

      {/* <!-- Open Graph data --> */}
      <meta property="og:site_name" content="REFACTR.TECH" />
      <meta property="og:url" content="https://www.refactr.tech/" />
      <meta
        property="og:title"
        content="REFACTR.TECH 2019 - Atlanta June 5 - 7"
      />
      <meta
        property="og:description"
        content="The multi-track tech conference with a focus on inclusion."
      />
      <meta property="og:type" content="website" />
      <meta
        property="og:image"
        content="https://refactr.tech/assets/img/marketing/General_Marketing.png"
      />

      {/* <!-- Social sharing meta --> */}
      <meta name="twitter:site" content="@RefactrTech" />
      <meta
        name="twitter:title"
        content="REFACTR.TECH 2019 - Atlanta June 5 - 7"
      />
      <meta
        name="twitter:description"
        content="The multi-track tech conference with a focus on inclusion."
      />
      <meta
        name="twitter:image"
        content="https://refactr.tech/assets/img/marketing/General_Marketing.png"
      />

      {/* <!-- Schema.org markup for Google+ --> */}
      <meta itemprop="name" content="REFACTR.TECH 2019" />
      <meta
        itemprop="description"
        content="The multi-track tech conference with a focus on inclusion."
      />
      <meta itemprop="image" content="/marketing/General_Marketing.png" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
    </Helmet>
    <div>
      {/*Main Container Start Here*/}
      <div className="main-container">
        {/*Header Start Here*/}
        <NavigationBar />
        {/*Header End Here*/}
        {/*Hero Banner Area Start Here*/}
        <div className="hero-banner-area home-2 hero-bg-2 parallax no-attm">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="banner-content">
                  <div className="upcoming">
                    <span className="is-countdown"> </span>
                    <div data-countdown="2019/06/05" />
                  </div>
                </div>
              </div>
              {/* /col end*/}
            </div>
            {/* /row end*/}
          </div>
          {/* /container end*/}
        </div>
        {/*Hero Banner Area End Here*/}

        {/*Counter Up Area Start Here*/}
        <div className="counter-up-area pad100 bg-counter parallax">
          <div className="container">
            <div className="row">
              <div className="col-xl-3 col-lg-3 col-md-4 col-sm-3">
                <div className="single-counter xs-mb40">
                  <div className="count-content">
                    <span className="count">3</span>
                    <p>Days</p>
                  </div>
                </div>
              </div>
              {/* /col end*/}
              <div className="col-xl-3 col-lg-3 col-md-4 col-sm-3">
                <div className="single-counter xs-mb40">
                  <div className="count-content">
                    <span className="count">6</span>
                    <p>Tracks</p>
                  </div>
                </div>
              </div>
              {/* /col end*/}
              <div className="col-xl-3 col-lg-3 col-md-4 col-sm-3">
                <div className="single-counter xs-mb40">
                  <div className="count-content">
                    <span className="count">60</span>
                    <p>Speakers</p>
                  </div>
                </div>
              </div>
              {/* /col end*/}
              <div className="col-xl-3 col-lg-3 d-md-none d-lg-block col-sm-3">
                <div className="single-counter">
                  <div className="count-content">
                    <span className="count">500</span>
                    <p>Attendees</p>
                  </div>
                </div>
              </div>
              {/* /col end*/}
            </div>
            {/* /row end*/}
          </div>
          {/* /container end*/}
        </div>
        {/*Counter Up Area End Here*/}

        {/*Keynote Speaker Area Start Here*/}
        <div className="whos-speaking-area-two speakers bg-team parallax pad100">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title text-center">
                  <div className="title-text mb50">
                    <p>Introducing Our Keynote Speakers</p>
                  </div>
                </div>
              </div>
              {/* /col end*/}
            </div>
            {/* /.row  end*/}
            <div className="row">
              <div className="col-md-4 col-sm-12">
                <div className="speakers xs-mb30">
                  <div className="spk-img">
                    <img
                      className="img-fluid"
                      src="img/speakers/tracy-lee.jpeg"
                      alt="trainer-img"
                    />
                    {/*ul>
                                            <li><a href="https://twitter.com/ladyleet"><i class="fa fa-twitter"></i></a></li>
                                            <li><a href="https://www.linkedin.com/in/tracyslee/"><i class="fa fa-linkedin"></i></a></li>
                                        </ul*/}
                  </div>
                  <div className="spk-info">
                    <a
                      href="https://twitter.com/ladyleet"
                      rel="noreferrer noopener"
                      target="_blank"
                    >
                      <h3 style={{ color: "white" }}>Tracy Lee</h3>
                    </a>
                    <h6 style={{ color: "#aaa" }}>Co-founder, This Dot Labs</h6>
                  </div>
                </div>
              </div>
              {/* /col end*/}
              <div className="col-md-4 col-sm-12">
                <div className="speakers xs-mb30">
                  <div className="spk-img">
                    <img
                      className="img-fluid"
                      src="img/speakers/kortney-ziegler.jpg"
                      alt="trainer-img"
                    />
                    {/*ul>
                                            <li><a href="https://twitter.com/ladyleet"><i class="fa fa-twitter"></i></a></li>
                                            <li><a href="https://www.linkedin.com/in/tracyslee/"><i class="fa fa-linkedin"></i></a></li>
                                        </ul*/}
                  </div>
                  <div className="spk-info">
                    <a
                      href="https://twitter.com/fakerapper"
                      rel="noreferrer noopener"
                      target="_blank"
                    >
                      <h3 style={{ color: "white" }}>Dr. Kortney Ziegler</h3>
                    </a>
                    <h6 style={{ color: "#aaa" }}>
                      Director of Research and Design, ZaMLabs
                    </h6>
                  </div>
                </div>
              </div>
              {/* /col end*/}
              <div className="col-md-4 col-sm-12">
                <div className="speakers xs-mb30">
                  <div className="spk-img">
                    <img
                      className="img-fluid"
                      src="img/speakers/alex-castillo-headshot-square.jpg"
                      alt="trainer-img"
                    />
                    {/*ul>
                                                <li><a href="https://twitter.com/ladyleet"><i class="fa fa-twitter"></i></a></li>
                                                <li><a href="https://www.linkedin.com/in/tracyslee/"><i class="fa fa-linkedin"></i></a></li>
                                            </ul*/}
                  </div>
                  <div className="spk-info">
                    <a
                      href="https://twitter.com/castillo__io"
                      rel="noreferrer noopener"
                      target="_blank"
                    >
                      <h3 style={{ color: "white" }}>Alex Castillo</h3>
                    </a>
                    <h6 style={{ color: "#aaa" }}>Co-Founder, Neurosity</h6>
                  </div>
                </div>
              </div>
            </div>
            {/* /row end*/}
          </div>
          {/* /container end*/}
        </div>
        {/*Keynote Speakers Area End Here*/}

        {/*Whos Speaking Area Start Here*/}
        <div className="whos-speaking-area pad100">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title text-center">
                  <div className="title-text mb50">
                    <h2>Featured Speakers</h2>
                  </div>
                </div>
              </div>

              {/* /.row  end*/}

              <div className="row mb50">
                {/*Whos Speaking Area End Here*/}

                <FeaturedSpeakerCard items={data.allAirtable.edges} />

                <div className="col-lg-12">
                  <a style={{textAlign: 'center', color: '#f20487', fontWeight: 'normal'}} href="/speakers">
                    <h3>See All Confirmed Speakers</h3>
                  </a>
                  <p style={{textAlign: 'center'}}>More Speakers Coming Soon!</p>
                </div>
                {/* /row end*/}
              </div>
              {/* /container end*/}
            </div>
            {/*Whos Speaking Area End Here*/}

            {/*Pricing Tables Area Start Here*/}
            <div className="pricing-tables-area pad-b100">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="section-title text-center">
                      <div className="title-text mb50">
                        <h2>2-Day Conference Pricing</h2>
                      </div>
                    </div>
                  </div>
                  {/* /col end*/}
                </div>
                {/* /row end*/}
                <div className="row">
                  <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                    <div className="pricing-box bg-pricing xs-mb30">
                      <div className="pricing-header">
                        <div className="pricing-value">
                          <span>$</span> 175
                        </div>
                      </div>
                      <div className="pricing-title">Early Bird (Ended)</div>
                      <div className="pricing-content">
                        <ul>
                          <li>Main Stage Keynotes</li>
                          <li>Sessions in 6 Tracks</li>
                          <li>Expo Hall</li>
                          <li>Networking Opportunities</li>
                          <li>Tons of Social Activities</li>
                        </ul>
                      </div>
                      <div className="bordered-btn">
                        <a>Sold Out</a>
                      </div>
                    </div>
                  </div>
                  {/* /col end*/}
                  <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                    <div className="pricing-box bg-pricing xs-mb30">
                      <div className="pricing-header">
                        <div className="pricing-value">
                          <span>$</span> 250
                        </div>
                      </div>
                      <div className="pricing-title">Regular - Ends May 26</div>
                      <div className="pricing-content">
                        <ul>
                          <li>Main Stage Keynotes</li>
                          <li>Sessions in 6 Tracks</li>
                          <li>Expo Hall</li>
                          <li>Networking Opportunities</li>
                          <li>Tons of Social Activities</li>
                        </ul>
                      </div>
                      <div className="bordered-btn">
                        <a href="https://tickets.connectevents.io/events/rtech2019/">
                          Buy Ticket
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* /col end*/}
                  <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                    <div className="pricing-box bg-pricing xs-mb30">
                      <div className="pricing-header">
                        <div className="pricing-value">
                          <span>$</span> 300
                        </div>
                      </div>
                      <div className="pricing-title">Late</div>
                      <div className="pricing-content">
                        <ul>
                          <li>Main Stage Keynotes</li>
                          <li>Sessions in 6 Tracks</li>
                          <li>Expo Hall</li>
                          <li>Networking Opportunities</li>
                          <li>Tons of Social Activities</li>
                        </ul>
                      </div>
                      <div className="bordered-btn">
                        <a href="https://tickets.connectevents.io/events/rtech2019/">
                          Buy Ticket
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* /col end*/}
                </div>
                {/* /row end*/}
                <div className="row mt60">
                  <div className="col-lg-12">
                    <div className="section-title text-center">
                      <div className="title-text mb50">
                        <h2>3-Day Conference + Workshop Pricing</h2>
                      </div>
                    </div>
                  </div>
                  {/* /col end*/}
                </div>
                {/* /row end*/}
                <div className="row">
                  <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                    <div className="pricing-box bg-pricing xs-mb30">
                      <div className="pricing-header">
                        <div className="pricing-value">
                          <span>$</span> 275
                        </div>
                      </div>
                      <div className="pricing-title">
                        Early Bird + Workshop (Ended)
                      </div>
                      <div className="pricing-content">
                        <ul>
                          <li>
                            Choice of 1 Full-Day{" "}
                            <a href="workshops.html">Workshop</a>
                          </li>
                          <li>Main Stage Keynotes</li>
                          <li>Sessions in 6 Tracks</li>
                          <li>Expo Hall</li>
                          <li>Networking Opportunities</li>
                          <li>Tons of Social Activities</li>
                        </ul>
                      </div>
                      <div className="bordered-btn">
                        <a>Sold Out</a>
                      </div>
                    </div>
                  </div>
                  {/* /col end*/}
                  <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                    <div className="pricing-box bg-pricing xs-mb30">
                      <div className="pricing-header">
                        <div className="pricing-value">
                          <span>$</span> 375
                        </div>
                      </div>
                      <div className="pricing-title">
                        Regular + Workshop - Ends May 26
                      </div>
                      <div className="pricing-content">
                        <ul>
                          <li>
                            Choice of 1 Full-Day{" "}
                            <a href="workshops.html">Workshop</a>
                          </li>
                          <li>Main Stage Keynotes</li>
                          <li>Sessions in 6 Tracks</li>
                          <li>Expo Hall</li>
                          <li>Networking Opportunities</li>
                          <li>Tons of Social Activities</li>
                        </ul>
                      </div>
                      <div className="bordered-btn">
                        <a href="https://tickets.connectevents.io/events/rtech2019/">
                          Buy Ticket
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* /col end*/}
                  <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                    <div className="pricing-box bg-pricing xs-mb30">
                      <div className="pricing-header">
                        <div className="pricing-value">
                          <span>$</span> 425
                        </div>
                      </div>
                      <div className="pricing-title">Late + Workshop</div>
                      <div className="pricing-content">
                        <ul>
                          <li>
                            Choice of 1 Full-Day{" "}
                            <a href="workshops.html">Workshop</a>
                          </li>
                          <li>Main Stage Keynotes</li>
                          <li>Sessions in 6 Tracks</li>
                          <li>Expo Hall</li>
                          <li>Networking Opportunities</li>
                          <li>Tons of Social Activities</li>
                        </ul>
                      </div>
                      <br />
                      <div className="bordered-btn">
                        <a href="https://tickets.connectevents.io/events/rtech2019/">
                          Buy Ticket
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* /col end*/}
                </div>
                {/* /row end*/}
              </div>
              {/* /container end*/}
            </div>

            {/* /container end*/}
          </div>
          {/*Pricing Tables Area End Here*/}
        </div>


        {/*Main Container End Here*/}
      </div>
      <Footer />
    </div>
  </div>
);

export const speakerPageQuery = graphql`
  {
    allAirtable(
      filter: { table: { eq: "Speakers" }, data: { featured: { eq: true } } }
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
