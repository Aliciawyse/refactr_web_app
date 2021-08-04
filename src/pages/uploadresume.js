import React from "react";
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/footer";
import { Helmet } from "react-helmet";

export default () => (
  <div>
    <Helmet>
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <title>Resume Upload | REFACTR.TECH</title>
      <meta name="author" content="iThemesLab" />
      <meta name="description" content="" />
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
                    <a href="index.html">Home</a>
                  </li>
                  <li>|</li>
                  <li>Upload Resume</li>
                  <li>|</li>
                  <li>
                      <a href="/careerfair">Career Fair</a>
                  </li>
                  <li>|</li>
                  <li>
                      <a href="/jobs">All Jobs</a>
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
      {/*About Us Area End Here*/}
      {/*Privacy Policy Content Area Start Here*/}
      <div style={{ marginTop: "15px", marginBottom: "20px" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="inner-content">
                
              <p><iframe class="airtable-embed airtable-dynamic-height" src="https://airtable.com/embed/shrH36aqGA7Vw9fr0?backgroundColor=pink" frameborder="0" onmousewheel="" width="100%" height="2010" style={{background: "transparent"}}></iframe></p>


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