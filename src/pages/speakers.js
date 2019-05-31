import React from "react";
import { graphql } from "gatsby";
import { SpeakerCardList } from "../components/SpeakerCardList";
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/footer";

export default ({ data }) => {

  console.log(data)
  
  return (
  <div>
    <div className="main-container">
      <NavigationBar whiteText/>
      <div className="about-us-area pad-head bg-about">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="about-content">
                <div className="section-title text-center">
                  <h2>Speakers</h2>
                </div>
                <ol className="breadcrumb">
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>|</li>
                  <li>
                    Speakers
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*Whos Speaking Area Start Here*/}
      <div className="whos-speaking-area pad100">
        <div className="container">
          <div className="row mb50">
            <SpeakerCardList items={data.allAirtable.edges} />
          </div>
        </div>
      </div>
      {/*Whos Speaking Area End Here*/}
    </div>
    <Footer />
  </div>
)};

export const speakerPageQuery = graphql`
  {
    allAirtable(filter: { table: { eq: "Speakers" } }) {
      edges {
        node {
          fields {
            slug
          }
          data {
            speaker_name
            role
            company
            twitter
            headshot {localFiles{childImageSharp{fluid(maxWidth: 512){
              ...GatsbyImageSharpFluid_tracedSVG
              }}}}
            linkedIn
            company_url
          }
        }
      }
    }
  }
`;
