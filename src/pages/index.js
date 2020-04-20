import React from "react";
import { graphql } from "gatsby";
import Footer from "../components/footer";
import { FeaturedSpeakerCard } from "../components/FeaturedSpeakerCard";
import { KeynoteSpeakerList } from "../components/KeynoteSpeakerList";
import NavigationBar from "../components/NavigationBar";
import Countdown from "../components/Countdown";
import { Helmet } from "react-helmet";
import { toast } from 'react-toastify';


import "../styles/assets/css/responsive2.css";
import "../styles/assets/css/style.css";
import "../styles/assets/css/style2.css";
import "../styles/assets/css/responsive.css";
import 'react-toastify/dist/ReactToastify.css';

toast.configure();


export default ({ data }) => (
  <div>
    <Helmet>
      <title>REFACTR.TECH 2020 - Atlanta August 12 - 14</title>
      <meta
        name="description"
        content="The Southeast's premier multi-track tech conference with a focus on inclusion."
      />
      <meta name="robots" content="noindex,follow" />

      {/* <!-- Open Graph data --> */}
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="REFACTR.TECH" />
      <meta property="og:url" content="https://www.refactr.tech/" />
      <meta
        property="og:title"
        content="REFACTR.TECH 2020 - Atlanta August 12 - 14"
      />
      <meta
        property="og:description"
        content="The Southeast's premier multi-track tech conference with a focus on inclusion."
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
      <meta name="twitter:site" content="@RefactrTech" />
      <meta
        name="twitter:title"
        content="REFACTR.TECH 2020 - Atlanta August 12 - 14"
      />
      <meta
        name="twitter:description"
        content="The Southeast's premier multi-track tech conference with a focus on inclusion."
      />
      <meta name="twitter:domain" content="https://refactr.tech" />
      <meta
        name="twitter:image"
        content="https://refactr.tech/img/conference/marketing_header.png"
      />
      <meta name="twitter:label1" content="Date" />
      <meta name="twitter:data1" content="August 12 - 14" />
      <meta name="twitter:label2" content="Location" />
      <meta name="twitter:data2" content="Downtown Atlanta, GA" />

      {/* <!-- Schema.org markup for Google+ --> */}
      <meta itemprop="name" content="REFACTR.TECH 2020" />
      <meta
        itemprop="description"
        content="The Southeast's premier multi-track tech conference with a focus on inclusion."
      />
      <meta itemprop="image" content="/img/conference/marketing_header.png" />
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

        <div className="counter-up-area ptb20 bg-about parallax" style={{marginTop: "90px"}}>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="single-counter xs-mb40">
                <div className="count-content" style={{ textAlign: "center"}}>
                  <span className="count" style={{ fontSize: "3.1em", marginTop: "0", marginBottom: "0"}}>Our COVID-19 Response</span>
                    <div className="row">
                      <div className="col-md-6 col-sm-12">
                        <div className="accent-btn text-center mt10" style={{marginBottom: "10px"}}>
                            <a href="https://medium.com/@RefactrTech/covid-19-updates-for-refactr-tech-2020-72a1d8c9494a" class="btn-accent" style={{border: "2px solid #fff"}}>New Dates</a>
                        </div>
                      </div>
                      <div className="col-md-6 col-sm-12">
                        <div className="accent-btn text-center mt10" style={{marginBottom: "10px"}}>
                            <a href="https://medium.com/@RefactrTech/buy-your-tickets-to-refactr-tech-2020-with-confidence-a2d1a52bdec3" class="btn-accent" style={{border: "2px solid #fff"}}>COVID-19 Update</a>
                        </div>
                      </div>   
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

        {/*Hero Banner Area Start Here*/}
        <div className="hero-banner-area home-2 hero-bg-2 parallax" style={{marginTop: "0"}}>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="banner-content">

                  <div className="row justify-content-center">
                    <div className="col-lg-7 align-self-start">
                        <img
                        className="img-fluid"
                        src="/img/logo/refactr-logo.svg"
                        alt="REFACTR.TECH Conference"
                      />
                    </div>
                  </div>

                  <div className="row justify-content-center" style={{marginTop: '30px'}}>
                    <div className="col-lg-6">
                        <img
                        className="img-fluid"
                        src="/img/logo/refactr2020-header-slogan.svg"
                        alt="Conference slogan: Diversity.Inclusion.Tech"
                      />
                    </div>
                  </div>

                  <div className="row justify-content-center">
                    <div className="col-lg-6">
                    <img
                    className="img-fluid"
                    style={{marginTop: '35px'}}
                    src="/img/logo/refactr2020-date.svg"
                    alt="Conference dates:  August 12 - 14, 2020"
                  />
                    </div>
                  </div>

                  <div className="row justify-content-center">
                    <div className="col-lg-4 col-md-4 col-sm-5 col-6">
                    <img
                    className="img-fluid"
                    style={{marginTop: '25px'}}
                    src="/img/logo/refactr2020-location-simple.png"
                    alt="Conference location: Atlanta"
                  />
                    </div>
                  </div>

                  {/*<div className="upcoming">
                    <span className="is-countdown"> </span>
                    <div data-countdown="2019/06/05" /> 
                  </div>*/}

                  <div className="row justify-content-center">
                        <Countdown date={`2020-08-12T12:00:00`} />
                        
                  </div>
                  

                  {/* <div className="row justify-content-end" style={{marginTop: '-30px', marginBottom: '0'}}>
                    <div className="col-sm-5 col-5">
                        <img
                        src="/img/logo/refactr2020-header-location.svg"
                        alt="Diversity.Inclusion.Tech"
                      />
                    </div>
                </div> */}

              

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
              
            <KeynoteSpeakerList items={data.keynoteSpeakers.edges} />

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

                <FeaturedSpeakerCard items={data.featuredSpeakers.edges} />

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
            <a name="pricing"/>
            <div className="pricing-tables-area pad-b50">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="section-title text-center">
                      <div className="title-text mb50">
                        <h2>Conference Pricing</h2>
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
                          <span>$</span>199
                        </div>
                      </div>
                      <div className="pricing-title">Early Bird</div>
                      <div className="pricing-content">
                        <ul>
                          <li><span style={{ color: '#4225DD', fontWeight: 'bold' }}>Limited! Get yours while tickets   last!</span></li>
                          <li>Main Stage Keynotes</li>
                          <li>Sessions in 6 Tracks</li>
                          <li>Expo Hall</li>
                          <li>Networking Opportunities</li>
                          <li>Tons of Social Activities</li>
                          <li><a style={{ color: '#F20688', fontWeight: 'bold' }} href="/workshops">+ Add full-day workshop for $125</a></li>
                        </ul>
                      </div>
                      <div className="bordered-btn">
                        <a href="/#pricing">
                          Sold Out!
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* /col end*/}
                  <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                    <div className="pricing-box bg-pricing xs-mb30">
                      <div className="pricing-header">
                        <div className="pricing-value">
                          <span>$</span>275
                        </div>
                      </div>
                      <div className="pricing-title">Regular</div>
                      <div className="pricing-content">
                        <ul>
                        <li><span style={{ color: '#4225DD', fontWeight: 'bold' }}>Regular sales end July 24th!</span></li>
                          <li>Main Stage Keynotes</li>
                          <li>Sessions in 6 Tracks</li>
                          <li>Expo Hall</li>
                          <li>Networking Opportunities</li>
                          <li>Tons of Social Activities</li>
                          <li><a style={{ color: '#F20688', fontWeight: 'bold' }} href="/workshops">+ Add full-day workshop for $125</a></li>
                        </ul>
                      </div>
                      <div className="bordered-btn">
                        <a href="http://reg.connectevents.io/ConnectEvents/rtech2020/">
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
                          <span>$</span>350
                        </div>
                      </div>
                      <div className="pricing-title">Late</div>
                      <div className="pricing-content">
                        <ul>
                          <li>&nbsp;</li>
                          <li>Main Stage Keynotes</li>
                          <li>Sessions in 6 Tracks</li>
                          <li>Expo Hall</li>
                          <li>Networking Opportunities</li>
                          <li>Tons of Social Activities</li>
                          <li><a style={{ color: '#F20688', fontWeight: 'bold' }} href="/workshops">+ Add full-day workshop for $125</a></li>
                        </ul>
                      </div>
                      <div className="bordered-btn">
                        <a href="http://reg.connectevents.io/ConnectEvents/rtech2020/">
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

        <div className="our-sponsors-area ptb50 bg-color">
          <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="section-title text-center">
                        <div className="title-text mb30 xs-mb40">
                            <h2>Ways to Attend</h2>
                        <p style={{marginTop: "15px"}}>At REFACTR.TECH you'll have the opportunity to highlight your company while meeting amazing people. The conference provides content valuable to a wide range of experience levels and interests. Technical topics of interest from intermediate to senior developers, alongside beginner-friendly sessions and workshops, are all part of the event. </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="primary-btn text-center">
                        <a href="/convince-your-boss" class="btn-primary">Convince Your Boss</a>
                    </div>
                </div>
            </div>
          </div>
        </div>
        
        <div className="counter-up-area ptb60 bg-counter parallax">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="single-counter xs-mb40">
                  <div className="count-content" style={{ textAlign: "center"}}>
                    <span className="count" style={{ fontSize: "3.1em"}}>Recap REFACTR 2019</span>
                    <p style={{ fontSize: "1.5em", fontWeight: "400"}}>Couldn't make it to REFACTR.TECH 2019? Or just want to relive the vibe from last year's conference?</p>
                      <div className="row">
                        <div className="col-md-6 col-sm-12">
                          <div className="primary-btn text-center mt30">
                              <a href="https://2019.refactr.tech" class="btn-primary" style={{border: "2px solid #fff"}}>2019 Conference</a>
                          </div>
                        </div>
                        <div className="col-md-6 col-sm-12">
                          <div className="primary-btn text-center mt30">
                              <a href="https://www.youtube.com/channel/UCfBdXCYPCHEXX8ISwOQM08A" class="btn-primary" style={{border: "2px solid #fff"}}>2019 Videos</a>
                          </div>
                        </div>   
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*Main Container End Here*/}
      </div>
      <Footer />
    </div>
  </div>
);

export const speakerPageQuery = graphql`
  {
    keynoteSpeakers: allAirtable(
      filter: { table: { eq: "Speakers" }, data: { keynotes: { eq: true } } }
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
    featuredSpeakers: allAirtable(
      filter: { table: { eq: "Speakers" }, data: { featured: { eq: true } } }
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
