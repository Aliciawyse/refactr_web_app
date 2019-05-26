import React from "react";
import Footer from "../components/footer";
import NavigationBar from "../components/NavigationBar";
import { graphql } from "gatsby";
import { Link } from "gatsby"

export default ({ data }) => {
  return (
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
                  <h2>Session</h2>
                </div>
                <ol className="breadcrumb">
                  <li>
                    <a href="../index.html">Home</a>
                  </li>
                  <li>|</li>
                  <li>Session Details</li>
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
         {/* <div v-for="speaker in speakers" :speaker="speaker" :key="speaker.id">
           <a :name="speaker.fields.anchor" /> */}
           <div className="row mt50">

             <div className="col-lg-12 col-md-12">
               <div className="inner-content">
                 <h1>{data.airtable.data.title}</h1>
                 {/* <span>CEO  Mockplus</span> */}
                 <br />
                 <span>
                 <p>{data.airtable.data.Abstract}</p></span>

                 <br />
                 <span>Speakers<br />
                   <a href rel="noreferrer noopener" target="_blank">{}</a><br />
                   <Link to={`/speakers/${data.airtable.data.Speakers[0].data.anchor}`}>{data.airtable.data.speaker_display_name}</Link>
                 </span>
                 </div>
             </div>
           </div>
         </div>      
       </div>
      <Footer />
    </div>
  );
};

export const query = graphql`
  query Session($slug: String!) {
    airtable(table: { eq: "Sessions" }, fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      data {
        Abstract
        speaker_display_name
        title
        anchor
        Speakers{data{anchor}}
      }
    }
  }
`;
