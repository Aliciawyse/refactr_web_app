import React from "react";
import Footer from "../components/footer";
import NavigationBar from "../components/NavigationBar";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";

const divStyle = {
  fontFamily: "Poppins",
  lineHeight: "1.5em"
};

const abstractStyle = {
  fontSize: "16px"
};

export default ({ data }) => {
  return (
    <div style={divStyle}>
      <Helmet>
        <title>"REFACTR.TECH 2021"</title>
        <meta
          name="description"
          // content={data.airtable.data.meta_description}
        />
        <meta name="robots" content="noindex,follow" />
      
        {/* <!-- Open Graph data --> */}
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="REFACTR.TECH" />
        <meta property="og:url" content="https://www.refactr.tech/" />
        <meta
          property="og:title"
          // content={data.airtable.data.title + " | REFACTR.TECH 2021"}
        />
        <meta
          property="og:description"
          // content={data.airtable.data.meta_description}
        />
        <meta 
            name="keywords" 
            content="Atlanta, technology, conference, diversity, inclusion, accessibility, software, frontend, fullstack, web development, leadership, career, javascript, react, angular, serverless, machine learning, product, ux, ui, design, social impact" 
        />
      
        <meta
          property="og:image"
          // content={data.airtable.data.meta_image[0].thumbnails.large.url}
        />
        <meta
          property="og:image:secure_url"
          // content={data.airtable.data.meta_image[0].thumbnails.large.url}
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="544" />
      
        <meta name="msapplication-TileImage" content="https://refactr.tech/img/conference/2020-tile.png"/>
      
        {/* <!-- Social sharing meta --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@RefactrTech" />
        <meta
          name="twitter:title"
          // content={data.airtable.data.title + " | REFACTR.TECH 2021"}
        />
        <meta
          name="twitter:description"
          // content={data.airtable.data.meta_description}
        />
        <meta name="twitter:domain" content="https://refactr.tech" />
        <meta
          name="twitter:image"
          // content={data.airtable.data.meta_image[0].thumbnails.large.url}
        />
        <meta name="twitter:label1" content="Date" />
        <meta name="twitter:data1" content="August 18-20" />
        <meta name="twitter:label2" content="Location" />
        <meta name="twitter:data2" content="Online" />
      
        {/* <!-- Schema.org markup for Google+ --> */}
        {/* <meta itemprop="name" content={data.airtable.data.title + " | REFACTR.TECH 2021"} />
        <meta
          itemprop="description"
          content={data.airtable.data.meta_description}
        />
        <meta itemprop="image" content={data.airtable.data.meta_image[0].thumbnails.large.url} />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        /> */}
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
                    <h2>Exhibitor Details for {data.airtable.data.company_name}</h2>  
                  </div>
                  {/*<ol className="breadcrumb">
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li>|</li>
                    <li>
                      <a href="/workshops">Workshops</a>
                    </li>
                    <li>|</li>
                    <li>Sessions</li>
                  </ol>*/}
                </div>
              </div>
              {/* /col*/}
            </div>
            {/* /row*/}
          </div>
          {/*/ container*/}
        </div>
        {/*About Us Area End Here*/}
      </div>
    </div>

  );
};

export const query = graphql`
  query Sponsor($slug: String!) {
    airtable(table: { eq: "Sponsors" }, data: {exhibitor: {eq: true}}, fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      data {
        company_name
      }
    }
  }
`;

