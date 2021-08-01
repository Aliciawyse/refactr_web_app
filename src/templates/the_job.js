import React from "react";
import Footer from "../components/footer";
import NavigationBar from "../components/NavigationBar";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import { Helmet } from "react-helmet";


export default ({ data }) => {
  return (
    <div>
        {/* <Helmet>
        <title>{data.airtable.data.speaker_name + " | REFACTR.TECH 2021"}</title>
        <meta
          name="description"
          content={data.airtable.data.role +" at "+ data.airtable.data.company}
        />
        <meta name="robots" content="noindex,follow" />
      
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="REFACTR.TECH" />
        <meta property="og:url" content="https://www.refactr.tech/" />
        <meta
          property="og:title"
          content={data.airtable.data.speaker_name + " | REFACTR.TECH 2021"}
        />
        <meta
          property="og:description"
          content={data.airtable.data.role +" at "+ data.airtable.data.company}
        />
        <meta 
            name="keywords" 
            content="Atlanta, technology, conference, diversity, inclusion, accessibility, software, frontend, fullstack, web development, leadership, career, javascript, react, angular, serverless, machine learning, product, ux, ui, design, social impact" 
        />
      
        <meta
          property="og:image"
          content={data.airtable.data.meta_image[0].thumbnails.large.url}
        />
        <meta
          property="og:image:secure_url"
          content={data.airtable.data.meta_image[0].thumbnails.large.url}
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="544" />
      
        <meta name="msapplication-TileImage" content="https://refactr.tech/img/conference/2020-tile.png"/>
      
        <meta property="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@RefactrTech" />
        <meta
          name="twitter:title"
          content={data.airtable.data.speaker_name + " | REFACTR.TECH 2021"}
        />
        <meta
          name="twitter:description"
          content={data.airtable.data.role +" at "+ data.airtable.data.company}
        />
        <meta name="twitter:domain" content="https://refactr.tech" />
        <meta
          name="twitter:image"
          content={data.airtable.data.meta_image[0].thumbnails.large.url}
        />
        <meta name="twitter:label1" content="Date" />
        <meta name="twitter:data1" content="August 18-20" />
        <meta name="twitter:label2" content="Location" />
        <meta name="twitter:data2" content="Online" />
      
        <meta itemprop="name" content={data.airtable.data.speaker_name + " | REFACTR.TECH 2021"} />
        <meta
          itemprop="description"
          content={data.airtable.data.role +" at "+ data.airtable.data.company}
        />
        <meta itemprop="image" content={data.airtable.data.meta_image[0].thumbnails.large.url} />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
      </Helmet> */}


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
                    <h2>Jobs</h2>
                  </div>
                  <ol className="breadcrumb">
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li>|</li>
                    <li>Job Details</li>
                    <li>|</li>
                    <li>
                      <a href="/job-board"> &larr; All Jobs</a>
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
        <div className="speakers-single-area" id="vapp-speaker-details">
          <div className="container">
            <div className="row mt50">
              {/* <a :name="speaker.fields.anchor" /> */}
              <div className="col-lg-3 col-md-12">
                {/*<div
                  style={{ width: "275px", height: "100%" }}
                  className="speakers-img"
                >
                  {data.airtable.data.Sponsors[0].data.logo[0].url && (
                    <img className="img-fluid" src={data.airtable.data.Sponsors[0].data.logo[0].url} alt={data.airtable.data.Sponsors[0].data.company_name} />  
                  )}
                  </div>*/}
              </div>
              {/* /.col end*/}
              <div className="col-lg-9 col-md-12">
                <div className="inner-content">
                  <h1>{data.airtable.data.job_title}</h1>
                  <p>
                    {/*{data.airtable.data.Sponsors[0].data.company_name}*/}
                  </p>
                  <br />

                  {/*<span><h2> We are {data.airtable.data.Sponsors[0].data.company_name}.</h2></span>*/}
                  <p>
                  {data.airtable.data.Company_Profile[0].data.description}</p>
                  <div className="social-icon">
                    <ul style={{ listStyleType: "none" }}>
                      <li>
                        <a href="">
                          <i className="fa fa-linkedin" />
                        </a>
                      </li>
                      <li>
                        <a href="">
                          <i className="fa fa-twitter" />
                        </a>
                      </li>
                  </ul>
                  </div>
                  <br />

                  <span><h2>Why Join?</h2></span>
                  <p>
                  {data.airtable.data.Company_Profile[0].data.why_work_here}</p>


                  <span><h2>About this role</h2></span>
                  <p>
                  {data.airtable.data.role_description}</p>

                  <div className="primary-btn mb40">
                    <a className="btn-primary" href={data.airtable.data.apply_url}>
                      Apply Here!
                    </a>
                  </div>
                  

                  
                </div>
              </div>
              {/* /.col end*/}
            </div>
          </div>
        </div>
        {/* /container end*/}
      </div>
      <Footer />
    </div>
  );
};

export const query = graphql`
  query Job($slug: String!) {
    airtable(table: { eq: "Job_Board" }, fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      data {
        job_title
        role_description
        interview_process
        apply_url
        post_date
        time_since_post
        locations
        remote_allowed
        experience_levels
        
        Sponsors{
          data{
            logo{
              url
            }
            company_name
          }
        }

        Company_Profile{
          data{
            description
            why_work_here
            has_dei_info
            DEI_URL
          }
        }
        
      }
    }
  }
`;
