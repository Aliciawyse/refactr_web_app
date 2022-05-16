import React from "react";
import { graphql } from "gatsby";
import Footer from "../components/footer";
import { WorkshopCardList } from "../components/WorkshopCardList";
import NavigationBar from "../components/NavigationBar";
import updateData from "../update-data";
import { Link } from "gatsby";
import { Helmet } from "react-helmet";
import styled from "styled-components";

export default ({ data }) => (
    <div>
    <Helmet>
    <title>Updates | REFACTR.TECH 2022</title>
    <meta
      name="description"
      content="REFACTR.TECH offers a full day of workshops. Level up with a deep dive into VS Code, Alexa or Cypress."
    />
    <meta name="robots" content="noindex,follow" />
  
    {/* <!-- Open Graph data --> */}
    <meta property="og:locale" content="en_US" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="REFACTR.TECH" />
    <meta property="og:url" content="https://www.refactr.tech/" />
    <meta
      property="og:title"
      content="Updates | REFACTR.TECH 2022"
    />
    <meta
      property="og:description"
      content="REFACTR.TECH features 20+ speakers from all over the tech industry with topics from Gatsby.js to Machine Learning to Engineering Leadership."
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
      content="Updates | REFACTR.TECH 2022"
    />
    <meta
      name="twitter:description"
      content="REFACTR.TECH features 20+ speakers from all over the tech industry with topics from Gatsby.js to Machine Learning to Engineering Leadership."
    />
    <meta name="twitter:domain" content="https://refactr.tech" />
    <meta
      name="twitter:image"
      content="https://refactr.tech/img/conference/marketing_header.png"
    />
    <meta name="twitter:label1" content="Date" />
  <meta name="twitter:data1" content="September 14-16" />
  <meta name="twitter:label2" content="Location" />
  <meta name="twitter:data2" content="Downtown Atlanta, GA" />
  
    {/* <!-- Schema.org markup for Google+ --> */}
    <meta itemprop="name" content="Updates | REFACTR.TECH 2022" />
    <meta
      itemprop="description"
      content="REFACTR.TECH features 20+ speakers from all over the tech industry with topics from Gatsby.js to Machine Learning to Engineering Leadership."
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
              <h2>Updates</h2>
            </div>
            <ol className="breadcrumb">
              <li>
                <a href="/">Home</a>
              </li>
              <li>|</li>
              <li>Update Archive</li>
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

  <div className="our-blog-area  pad100">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title text-center">
                  <div className="title-text mb50">
                    <h2>All Updates</h2>
                  </div>
                </div>
              </div>
              {/* /col end*/}
            </div>
            {/* /.row  end*/}
            <div className="inner-blog">
              <div>
                <div className="row">
                  <WorkshopCardList items={updateData} />
                </div>
              </div>
              {/* /row end*/}
            </div>
            {/* /container end*/}
          </div>
          {/*Feature Area End Here*/}
        </div>

        <Footer />
        {/*Footer Area End Here*/}
    </div>
</div>
);