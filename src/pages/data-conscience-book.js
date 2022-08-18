import React from "react";
import { graphql } from "gatsby";
import Footer from "../components/footer";
import NavigationBar from "../components/NavigationBar";
import { TeamCardList } from "../components/TeamCardList";
import { Helmet } from "react-helmet";


export default ({ data }) => {
  return(
  <div>
  <Helmet>
    <title>Data Conscience Book | REFACTR.TECH 2022</title>
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
      content="Data Conscience Book | REFACTR.TECH 2022"
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
      content="Data Conscience Book | REFACTR.TECH 2022"
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
    <meta name="twitter:data1" content="September 14 -16" />
    <meta name="twitter:label2" content="Location" />
    <meta name="twitter:data2" content="Downtown Atlanta, GA" />

    {/* <!-- Schema.org markup for Google+ --> */}
    <meta itemprop="name" content="About | REFACTR.TECH 2022" />
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
                  <li><a href="/book-signing">Book Signings</a></li>
                  <li>|</li>
			            <li>Data Conscience Book</li>
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
    style={{marginTop:"30px"}}
    className="img-fluid"
            src="/img/books/brandeis-book-cover.png"
            alt="element"
          />
        </div>
        <div className="col-lg-9">
          <div className="inner-content">
            <div className="section-title">
              <div className="title-text pl">
                <h2 style={{marginTop:"25px"}}>Data&nbsp;Conscience:&nbsp;Algorithmic Siege on our Humanity</h2>
              </div>
            </div>
            <p>Data Conscience: Algorithmic Siege on our Humanity delivers an incisive and eye-opening discussion of how to fix tech’s dominant philosophy of “move fast and break things” with a renewed focus on equity and oppression. The book explores how to address discrimination in the digital data space with several known algorithms, including social network analysis, linear regression and sentiment analysis.
            </p>

    <p className="session-title"><span style={{fontSize:"18pt"}}>Getting Your Book Signed at REFACTR.TECH</span></p>
    <p>REFACTR.TECH attendees can get <strong><em>exclusive</em>&nbsp;&nbsp;early-access</strong> to Data Conscience: Algorithmic Siege on our Humanity, <em>before</em> the official release, at a <strong>28% discount!</strong> Pick up your book at the conference before 11:00&nbsp;AM on September 15th, and you'll be all set to get your copy signed in-person by Dr. Brandeis Hill Marshall. Reserve yours today, before our copies are sold out!</p>
    
    <p><strong>You have to <a href="https://reg.connectevents.io/ConnectEvents/rtech2022/" target="_blank">pre-order with REFACTR.TECH</a> 1&#41; to get this price <em>and</em>&nbsp;&nbsp;2&#41; to ensure we will have your book ready for to pick up at the conference.</strong></p>
    
    <div className="primary-btn" style={{marginTop:"10px"}}>
      <a className="btn-primary" href="https://reg.connectevents.io/ConnectEvents/rtech2022/" target="_blank">
      Reserve Your Copy NOW*
      </a>
      <br />
       *while supplies last
    </div>
    
    
    
    </div>
        </div>
        {/* /col end*/}
      </div>
      {/* /row end*/}

  <div className="row">
        <div className="col-lg-3 xs-mb40">
          <img
    style={{marginTop:"30px"}}
    className="img-fluid"
            src="/img/authors/BMarshall.jpg"
            alt="element"
          />
        </div>
        <div className="col-lg-9">
          <div className="inner-content">
            <div className="section-title">
              <div className="title-text pl">
                <h2 style={{marginTop:"25px"}}>Meet the Author</h2>
              </div>
            </div>
            
            <p>
            <strong>Brandeis Hill Marshall</strong> teaches, speaks, and writes about the impact of data practices on technology and society. Her work contributes to data education, computer science education, and data science fields. She leads and runs a social impact business that provides educational resources and training designed to help data educators, scholars, and practitioners humanize data operations. She has advised and educated thousands in the public and corporate sectors. She also consults with organizations that are proactive in mitigating harmful effects of their data pipelines. Brandeis holds a PhD and master’s degree in computer science from Rensselaer Polytechnic Institute and a BS in computer science from the University of Rochester. </p>
    </div>


    <div className="speakers-single-area">
      <div className="inner-content">
        <div className="social-icon">
          <ul style={{listStyleType: "none"}}>
            <li><a href="https://www.linkedin.com/in/brandeis-marshall"><i className="fa fa-linkedin"></i></a></li>
            <li><a href="https://twitter.com/csdoctorsister"><i className="fa fa-twitter"></i></a></li>
          </ul>
        </div>

        <p className="session-title"><span style={{fontSize:"18pt"}}>Sessions&nbsp;</span></p>
        <span style={{marginTop: "0"}}>
          <ul>
            <li>
              <p><a className="pill track-Data" title="See more Data sessions" href="/sessions/#Data">Data</a>&nbsp;<a title="See session details" href="/sessions/Address-the-Spectrum-of-Bias-in-AI-Across-Organizations" style={{fontSize: "18px"}}>Address the Spectrum of Bias in AI Across Organizations</a>
              </p>
            </li>
          </ul>
        </span>

      </div>
    </div>
        
    
        </div>
        {/* /col end*/}
      </div>
      {/* /row end*/}

        </div>
        {/* /container end*/}
      </div>
      {/*Conference Synopsis Area End Here*/}
    


      
      
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

