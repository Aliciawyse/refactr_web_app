import React from "react";
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/footer";
import { Helmet } from "react-helmet";
import { Link } from "gatsby";
import { OutboundLink } from "gatsby-plugin-google-gtag";

export default () => (
  <div>
    <Helmet>
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <title>Upload Your Resume | REFACTR.TECH</title>
      <meta
        name="description"
        content="Meet hiring managers from top tech companies like Google, CallRail, BlackRock, SalesLoft, Mailchimp and more!"
      />
      <meta name="robots" content="noindex,follow" />

      {/* <!-- Open Graph data --> */}
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="REFACTR.TECH" />
      <meta property="og:url" content="https://www.refactr.tech/" />
      <meta
        property="og:title"
        content="Upload Your Resume | REFACTR.TECH"
      />
      <meta
        property="og:description"
        content="Meet hiring managers from top tech companies like Google, CallRail, BlackRock, SalesLoft, Mailchimp and more!"
      />
      <meta 
        name="keywords" 
        content="Atlanta, online, virtual, technology, conference, diversity, inclusion, accessibility, software, frontend, fullstack, web development, leadership, career, javascript, react, angular, serverless, machine learning, product, ux, ui, design, social impact" 
      />

      <meta
        property="og:image"
        content="https://refactr.tech/img/conference/refactr-2022-sponsors.png"
      />
      <meta
        property="og:image:secure_url"
        content="https://refactr.tech/img/conference/refactr-2022-sponsors.png"
      />
      <meta property="og:image:width" content="500" />
      <meta property="og:image:height" content="260" />

      <meta name="msapplication-TileImage" content="https://refactr.tech/img/conference/2020-tile.png"/>

      {/* <!-- Social sharing meta --> */}
      <meta name="twitter:site" content="@RefactrTech" />
      <meta
        name="twitter:title"
        content="REFACTR.TECH 2022"
      />
      <meta
        name="twitter:description"
        content="Meet hiring managers from top tech companies like Google, CallRail, BlackRock, SalesLoft, Mailchimp and more!"
      />
      <meta name="twitter:domain" content="https://refactr.tech" />
      <meta
        name="twitter:image"
        content="https://refactr.tech/img/conference/refactr-2022-sponsors.png"
      />
      <meta name="twitter:label1" content="Date" />
      <meta name="twitter:data1" content="Sept 14 - 16" />
      <meta name="twitter:label2" content="Location" />
      <meta name="twitter:data2" content="Atlanta" />

      {/* <!-- Schema.org markup for Google+ --> */}
      <meta itemprop="name" content="REFACTR.TECH 2021 Career Fair - August 17" />
      <meta
        itemprop="description"
        content="Meet hiring managers from top tech companies like Google, CallRail, BlackRock, SalesLoft, Mailchimp and more!"
      />
      <meta itemprop="image" content="/img/conference/refactr-2022-sponsors.png" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <script src="https://static.airtable.com/js/embed/embed_snippet_v1.js"></script>
    </Helmet>
    {/*Main Container Start Here*/}
    <div className="main-container">
      {/*Header Start Here*/}
      <NavigationBar whiteText/>
      {/*Header End Here*/}
      {/*About Us Area Start Here*/}
      <div className="about-us-area pad-head bg-about">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="about-content">
                <div className="section-title text-center">
                  <h2>Resume Upload</h2>
                </div>
                <ol className="breadcrumb">
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>|</li>
                  <li>
                      <a href="/sponsors">Companies</a>
                  </li>
                  <li>|</li>
                  <li>Upload Resume</li>
                  
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
      {/*Privacy Policy Content Area Start Here*/}
      <div style={{ marginTop: "15px", marginBottom: "20px" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <div className="inner-content">
                
              <p><iframe class="airtable-embed airtable-dynamic-height" src="https://airtable.com/embed/shrVEgNp8GRIB78Ln?backgroundColor=pink" frameborder="0" onmousewheel="" width="100%" height="2010" style={{background: "transparent"}}></iframe></p>


              </div>
            </div>
            {/* /col end*/}

            <div className="col-lg-3 motivational-concepts-area d-none d-xl-block">
              <div className="testimonial-wrapper bg-color" style={{border: "1px solid #c9c9c9"}}>
                <div className="section-title text-center">
                  <p style={{fontSize:"1.3em", fontWeight:"bold", color:"#1E1C7F"}}>REGISTER NOW</p>

                  <p> Get accesss to 50+ sessions in 7 tracks, 3 full-day workshops, 2 book signings, socials and more at REFACTR.TECH 2022.
                  </p>

                  <p><OutboundLink href="https://reg.connectevents.io/ConnectEvents/rtech2022/" target="_blank" style={{color: "#C418A3"}}>Register</OutboundLink></p>
                </div>
              </div>

              <div className="testimonial-wrapper bg-color" style={{marginTop: "30px", border: "1px solid #c9c9c9"}}>
                <div className="section-title text-center">
                  <p style={{fontSize:"1.3em", fontWeight:"bold", color:"#1E1C7F"}}>BOOK SIGNING</p>

                  <p>REFACTR.TECH attendees can get <strong><em>exclusive</em>&nbsp;&nbsp;early-access</strong> to <Link to="/data-conscience-book">Data Conscience: Algorithmic Siege on our Humanity,</Link> <em>before</em> the official release, at a <strong>28% discount!</strong></p>


                  <p><OutboundLink href="https://reg.connectevents.io/ConnectEvents/rtech2022/" target="_blank" style={{color: "#C418A3"}}>Reserve Your Book Here</OutboundLink></p>
                </div>
              </div>
            </div>
            {/* /col end*/}

          </div>
          {/* /row end*/}
        </div>
        {/* /container end*/}
      </div>
      {/*Privacy Policy Content Area End Here*/}
      <Footer/>
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