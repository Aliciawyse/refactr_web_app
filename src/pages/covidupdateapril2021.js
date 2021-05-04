import React from "react";
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/footer";
import { Helmet } from "react-helmet";

export default ({ data }) => (
  <div>
    <Helmet>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <title>Stop Asian Hate | REFACTR.TECH</title>
      <meta name="author" content="iThemesLab" />
      <meta name="description" content="" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
    </Helmet>
    <div className="main-container">
      <NavigationBar whiteText />
      <div className="about-us-area pad-head bg-covid parallax">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="about-content">
                <div className="section-title text-center">
                  
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*Conference Synopsis Area Start Here*/}
      <div className="conference-synopsis-area about pad100">
        <div className="container">
          <div className="row">
          <div className="col-lg-1"></div>
          <div className="col-lg-10">
            <div className="inner-content">
            <div className="section-title">
              <div className="title-text pl text-center">
                <h2>April 2021 Covid Update</h2>
              </div>
            </div>
            <p style={{color:'#444'}}>By <a href="https://www.linkedin.com/in/inakstanley/">INA STANLEY</a><br />
               April 27, 2021 | 9:58 PM</p>
            <p style={{fontSize: '1.4em', color:'#444'}}>
            The year 2020 welcomed us with high hopes for new beginnings. It also brought with it a challenge none of us ever dreamed we would have to endure. As a nation, and as humanity, we have had to come together in ways we could never have imagined to carry us through the worst of the global coronavirus pandemic. Our lives and routines have changed significantly as a result but in navigating these changes we have been able to show our resilience, evolving the way we work and connect.            </p>

            <p style={{fontSize: '1.4em', color:'#444'}}>
            At a little over a year into this pandemic, we are slowly starting to return to routines  and activities that were familiar to us before. We’re slowly starting to settle into our new normal. But even with the help of social distancing, mask mandates, and vaccines, positive cases of this virus are surging around the world. We at REFACTR.TECH are focused on putting the health and safety of our community of organizers, sponsors, speakers, attendees and volunteers first. We want the REFACTR.TECH conference to continue to inspire and support diversity and inclusion in tech ecosystems around the world, but we want to do so  thoughtfully and safely.
            </p>

            <p style={{fontSize: '1.4em', color:'#444'}}>
            We’ve made the decision to go virtual with REFACTR.TECH this year in an effort to keep everyone safe and to support the health and well-being of our community. Though vaccines are out and available and cities and states are opening back up, the logistics for traveling, securing a venue, and delivering the best possible experience may put limits on what many in our community are able to do. We also want to be conscious of those who may be immunocompromised and / or unable to receive the vaccine at this time. But going virtual means tons of great new opportunities to provide everyone with an experience they’ll appreciate. From new and exciting ways to interact to world-renowned speakers to our virtual job fair, we’re continuing to evolve the way we connect and interact to bring you an unforgettable conference experience.
            </p>


   

                     
              </div>
            </div>
            <div className="col-lg-1"></div>
          </div>


          

        </div>
        {/* /container end*/}
      </div>
    </div>
    <Footer />
  </div>
);
