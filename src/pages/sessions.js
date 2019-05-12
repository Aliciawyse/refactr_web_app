import React from "react";
import Footer from "../components/footer";
import NavigationBar from "../components/NavigationBar";
import { SessionCardList } from "../components/SessionCardList";
import { graphql } from "gatsby";

export default ({ data }) => (
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
                <li>Sessions</li>
                <li>|</li>
                <li>
                  <a href="/workshops">Workshops</a>
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

    <SessionCardList items={data.allAirtable.edges}/>


    <Footer />
  </div>
);


export const all_sessions = graphql`
  {
    allAirtable(filter: { table: { eq: "Sessions" } }) {
      edges {
        node {
          fields {
            slug
          }
          data {
            Abstract
            speaker_display_name
            url
            Track
            title
            anchor
            speaker_url
            Speakers {
              data {
                anchor
              }
            }
          }
        }
      }
    }
  }
`;
