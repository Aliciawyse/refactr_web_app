import React from "react";
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/footer";
import { Helmet } from "react-helmet";

export default () => (
  <div>
    <Helmet>
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <title>COVID-19 Policy | REFACTR.TECH</title>
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
      <NavigationBar whiteText/>
      {/*Header End Here*/}
      {/*About Us Area Start Here*/}
      <div className="about-us-area pad-head bg-about">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="about-content">
                <div className="section-title text-center">
                  <h2>COVID-19 Policy</h2>
                </div>
                <ol className="breadcrumb">
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>|</li>
                  <li>COVID-19 Policy</li>
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
            <div className="col-lg-12">
              <div className="inner-content">
              <p>
                Our attendees’ health and safety remain our top priority as we continue to monitor COVID-19 and look to venue, local, state, CDC, and WHO guidelines to make the best and most informed decisions around onsite safety and requirements. These guidelines are subject to change based upon health and safety recommendations at the time of the event.
              </p>
              
              <p><h2>Self-testing and Masking</h2>
              We encourage you to self-test before you leave home. While you might be out of the habit, please also consider bringing and wearing a mask, particularly in busy areas of the conference (like registration). This should be obvious, but if you have symptoms or test positive during the event, please stop attending conference events and let us know! Let’s take care of each other.
              </p>

              <p>
                <i>Credit: Strange Loop 2023</i>
              </p>



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
