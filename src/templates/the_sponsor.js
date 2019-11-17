import React from "react";
import Footer from "../components/footer";
import NavigationBar from "../components/NavigationBar";
import { graphql } from "gatsby";
import { Link } from "gatsby";
import Img from "gatsby-image";

export default ({ data }) => {
    return (
        <div>
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
                                        <h2>Sponsors</h2>
                                    </div>
                                    <ol className="breadcrumb">
                                        <li>
                                            <a href="../index.html">Home</a>
                                        </li>
                                        <li>|</li>
                                        <li>Sponsor Details</li>
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
                            <div className="col-lg-5 col-md-12">
                                {/*<div*/}
                                {/*    style={{ width: "400px", height: "100%" }}*/}
                                {/*    className="speakers-img"*/}
                                {/*>*/}
                                {/*    {data.airtable.data.logo.localFiles && (*/}
                                {/*        <Img*/}
                                {/*            alt="Speaker"*/}
                                {/*            fluid={data.airtable.data.logo.localFiles[0].childImageSharp.fluid}*/}
                                {/*        />*/}
                                {/*    )}*/}
                                {/*</div>*/}
                            </div>
                            {/* /.col end*/}
                            <div className="col-lg-7 col-md-12">
                                <div className="inner-content">
                                    <h1>{data.airtable.data.company_name}</h1>
                                    <p>{data.airtable.data.tier}</p>
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
  query Sponsor($slug: String!) {
    airtable(table: { eq: "Sponsors" }, fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      data {
        company_name
        url
        tier
        logo {
            filename
        }
      }
    }
  }
`;
