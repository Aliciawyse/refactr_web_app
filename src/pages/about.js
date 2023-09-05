import React from "react";
import { graphql } from "gatsby";
import Footer from "../components/footer";
import NavigationBar from "../components/NavigationBar";
import { TeamCardList } from "../components/TeamCardList";
import { Helmet } from "react-helmet";
import { Link } from "gatsby";
import { OutboundLink } from "gatsby-plugin-google-gtag";


export default ({ data }) => {
  return(
  <div>
  <Helmet>
    <title>About | REFACTR.TECH 2023</title>
    <meta
      name="description"
      content="REFACTR.TECH is all about growing and showcasing powerful voices of marginalized people and allies in tech."
    />

    {/* <!-- Open Graph data --> */}
    <meta property="og:locale" content="en_US" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="REFACTR.TECH" />
    <meta property="og:url" content="https://www.refactr.tech/" />
    <meta
      property="og:title"
      content="About | REFACTR.TECH 2023"
    />
    <meta
      property="og:description"
      content="REFACTR.TECH is all about growing and showcasing powerful voices of marginalized people and allies in tech."
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
      content="About | REFACTR.TECH 2023"
    />
    <meta
      name="twitter:description"
      content="REFACTR.TECH is all about growing and showcasing powerful voices of marginalized people and allies in tech."
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
    <meta itemprop="name" content="About | REFACTR.TECH 2023" />
    <meta
      itemprop="description"
      content="REFACTR.TECH is all about growing and showcasing powerful voices of marginalized people and allies in tech."
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
                  <h2>About Us</h2>
                </div>
                <ol className="breadcrumb">
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>|</li>
                  <li>About us</li>
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
      {/*Conference Synopsis Area Start Here*/}
      <div className="conference-synopsis-area about pad100">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 xs-mb40">
              <img
                className="img-fluid"
                src="/img/others/element.png?123"
                alt="element"
              />
            </div>
            <div className="col-lg-6">
              <div className="inner-content">
                <div className="section-title">
                  <div className="title-text pl">
                    <h2>About REFACTR.TECH</h2>
                  </div>
                </div>
                <p>
                  REFACTR.TECH is all about growing and showcasing powerful
                  voices of marginalized people and allies in tech. For three
                  days, REFACTR.TECH focuses on technology while creating a safe
                  space for thoughtful and nuanced conversations around
                  diversity, inclusion, and intersectionality in tech.
                </p>
                <p>
                  At REFACTR.TECH, we’ll focus on creating an inclusive
                  environment which features marginalized people and allies
                  doing amazing work. We offer a combination of workshops,
                  keynote, and track sessions to expand knowledge, hone
                  technical skills, and make important connections.
                </p>
                <p>
                  REFACTR.TECH provides content valuable to a wide range of
                  experience levels and interests. We’ll offer highly technical
                  topics of interest to intermediate to senior developers, as
                  well as beginner-friendly sessions and workshops. Leadership,
                  career development and product tracks are appropriate for any
                  experience level.
                </p>
              </div>
            </div>
            {/* /col end*/}

            <div className="col-lg-3 motivational-concepts-area d-none d-xl-block">
              <div className="testimonial-wrapper bg-color" style={{border: "1px solid #c9c9c9"}}>
                <div className="section-title text-center">
                  <p style={{fontSize:"1.3em", fontWeight:"bold", color:"#1E1C7F"}}>REGISTER NOW</p>

                  <p> Get your ticket to attend REFACTR.TECH 2023 for a day full of keynotes, tech sessions, and of course, parties!
                  </p>

                  <p><OutboundLink href="https://reg.connectevents.io/ConnectEvents/rtech2023/" target="_blank" style={{color: "#C418A3"}}>Register</OutboundLink></p>
                </div>
              </div>

              {/*<div className="testimonial-wrapper bg-color" style={{marginTop: "30px", border: "1px solid #c9c9c9"}}>
                <div className="section-title text-center">
                  <p style={{fontSize:"1.3em", fontWeight:"bold", color:"#1E1C7F"}}>BOOK SIGNING</p>

                  <p>REFACTR.TECH attendees can get <strong><em>exclusive</em>&nbsp;&nbsp;early-access</strong> to <Link to="/data-conscience-book">Data Conscience: Algorithmic Siege on our Humanity,</Link> <em>before</em> the official release, at a <strong>28% discount!</strong></p>


                  <p><OutboundLink href="https://reg.connectevents.io/ConnectEvents/rtech2022/" target="_blank" style={{color: "#C418A3"}}>Reserve Your Book Here</OutboundLink></p>
                </div>
              </div>*/}
            </div>
            {/* /col end*/}



          </div>
          {/* /row end*/}
        </div>
        {/* /container end*/}
      </div>
      {/*Conference Synopsis Area End Here*/}
    

      {/*Whos Organizing Area End Here*/}
      <div className="whos-speaking-area pad50 mt50">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <div className="title-text mb50">
                  <h2>Meet the Organizers</h2>
                </div>
              </div>
            </div>
            {/* /col end*/}
          </div>
          {/* /.row  end*/}
          <div className="row mb50 justify-content-center">
            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12">
              <div className="speakers xs-mb30">
                <div className="spk-img">
                  <img
                    className="img-fluid"
                    src="/img/team/organizers/angel.jpg"
                    alt="Organizer - Angel Banks"
                  />
                  <ul>
                    <li>
                      <a href="https://twitter.com/angelmbanks">
                        <i className="fa fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/in/angelmbanks/">
                        <i className="fa fa-linkedin" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="spk-info">
                  <a
                    href="https://twitter.com/angelmbanks"
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    <h3>Angel Banks</h3>
                  </a>
                  <p>Technical Program Manager</p>
                  <h6 style={{fontWeight: '700'}}>Microsoft</h6>
                </div>
              </div>
            </div>
            {/* /col end*/}
            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12">
              <div className="speakers">
                <div className="spk-img">
                  <img
                    className="img-fluid"
                    src="/img/team/organizers/beth.jpg"
                    alt="Organizer - Beth Laing"
                  />
                  <ul>
                    <li>
                      <a href="https://twitter.com/laingbeth">
                        <i className="fa fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/in/bethlaing/">
                        <i className="fa fa-linkedin" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="spk-info">
                  <a
                    href="https://twitter.com/laingbeth"
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    <h3>Beth Laing</h3>
                  </a>
                  <p>Director of Engineering</p>
                  <h6 style={{fontWeight: '700'}}>CallRail</h6>
                </div>
              </div>
            </div>
            {/* /col end*/}
            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12">
              <div className="speakers xs-mb30">
                <div className="spk-img">
                  <img
                    className="img-fluid"
                    src="/img/team/organizers/erica.jpg"
                    alt="Organizer - Erica Stanley"
                  />
                  <ul>
                    <li>
                      <a href="https://twitter.com/ericastanley">
                        <i className="fa fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/in/ericastanley/">
                        <i className="fa fa-linkedin" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="spk-info">
                  <a
                    href="https://twitter.com/ericastanley"
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    <h3>Erica Stanley</h3>
                  </a>
                  <p>Director of Engineering</p>
                  <h6 style={{fontWeight: '700'}}>Google</h6>
                </div>
              </div>
            </div>
            {/* /col end*/}
          </div>
          {/* /row end*/}
        </div>
        {/* /container end*/}
      </div>
      {/*Whos Organizing Area End Here*/}

      {/*Team Area Starts Here*/}
      {/*<div className="whos-speaking-area pad25">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <div className="title-text mb50">
                  <h2>Team</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="row mb50 justify-content-center">

            <TeamCardList items={data.allAirtable.edges} />

          </div>
        </div>
            </div> */}
      {/*Team Area Ends Here*/}       

      {/*Advisory Board Area Starts Here*/}

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
      {/*Footer Area End Here*/}
    </div>
    {/*Main Container End Here*/}
    {/*All Js Here*/}
    {/* jquery latest version */}
    {/*Migrate Js*/}
    {/*Popper Js*/}
    {/*Bootstrap Js*/}
    {/*Owl-Carousel Js*/}
    {/*Counter-Up Js*/}
    {/*Waypoints Js*/}
    {/*Lightbox Js*/}
    {/*Appear Js*/}
    {/*Jquery Ui Js*/}
    {/*Wow Js*/}
    {/*Plugins Js*/}
    {/* template main js file */}
  </div>
  );
};
export const aboutPageQuery = graphql`
  {
    allAirtable(
      filter: { table: { eq: "Team" } }
      sort: { fields: data___name }
    ) {
      edges {
        node {
          fields {
            slug
          }
          data {
            name
            member_headshot {
              localFiles {
                childImageSharp {
                  fluid(maxWidth: 512, maxHeight: 512) {
                    ...GatsbyImageSharpFluid_tracedSVG
                  }
                }
              }
            }
            member_role
            member_twitter
            member_linkedIn
          }
        }
      }
    }
  }
`;

