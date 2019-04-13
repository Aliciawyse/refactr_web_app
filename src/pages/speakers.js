import React from "react"
import { graphql } from 'gatsby'
import { SpeakerCardList } from '../components/SpeakerCardList'
import NavigationBar from "../components/NavigationBar"
import Footer from "../components/footer"

export default ({data}) => (
  <div>
        {/*Preloder*/}
        {/*Main Container Start Here*/}
        <div className="main-container">
          {/*Header Start Here*/}
          <NavigationBar />
          {/*Header End Here*/}
          {/*Speaker Area Start Here*/}
          <div className="about-us-area pad-head bg-about">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="about-content">
                    <div className="section-title text-center">
                      <h2>Speakers</h2>
                    </div>
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

{/*Whos Speaking Area Start Here*/}
          <div className="whos-speaking-area pad100">
            <div className="container">


              <div className="row mb50">
              
                {/*Whos Speaking Area End Here*/}

               <SpeakerCardList items={data.allAirtable.edges}/>

                
                
              </div>
              {/* /row end*/}
            </div>
            {/* /container end*/}
          </div>
          {/*Whos Speaking Area End Here*/}



          <div style={{marginTop: '15px', marginBottom: '20px'}}>
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="inner-content">
                    
                  </div>
                </div>
                {/* /col end*/}
              </div>
              {/* /row end*/}
            </div>
            {/* /container end*/}
          </div>

        </div>
        {/*Main Container End Here*/}
        <Footer/>
      </div>
)

export const speakerPageQuery = graphql` 
{
  allAirtable(filter: {table: {eq: "Speakers"}}) {
    edges {
      node {
        data {
          speaker_name
          role
          company
          twitter
          headshot {
            url
          }
          linkedIn
          company_url
        }
      }
    }
  }
}
  `
