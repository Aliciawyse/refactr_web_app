import React from "react";
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/footer";
import { Helmet } from "react-helmet";

export default ({ data }) => (
  <div>
    <Helmet>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <title>Paying Homage to the Rad, Rebellious 90s | REFACTR.TECH</title>
      <meta name="author" content="iThemesLab" />
      <meta name="description" content="" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
    </Helmet>
    <div className="main-container">
      <NavigationBar whiteText />
      <div className="about-us-area pad-head bg-90s parallax">
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
                <h2>Paying Homage to the Rad, Rebellious 90s</h2>
              </div>
            </div>
            <p style={{color:'#444'}}>By <a href="https://www.linkedin.com/in/inakstanley/">INA STANLEY</a><br />
               August 16, 2021 | 8:40 AM</p>
            <p style={{fontSize: '1.4em', color:'#444'}}>
            Some of you might be wondering what’s up with the 90’s theme for this year’s conference. Here at REFACTR.TECH we love a good theme, and this one is a lot of fun for a few reasons! When we came up with the idea for this 90’s theme, way back in the <i>before times</i>, we were starting to see more and more references to the 90’s showing up in pop culture. That brought on waves of nostalgia for hanging out at home watching TGIF sitcoms and the sounds of old school hip hop for all of us 90’s babies.
            </p>

            <p style={{fontSize: '1.4em', color:'#444'}}>
            With the coming of this year’s REFACTR.TECH conference we decided to join in on all the fun. We’ve been celebrating the 90’s by hosting themed movie nights including classics of our generation like The Matrix and Clueless, and sharing a round-up of the best moments from some of pop culture’s favorite movies, tv shows, commercials on our social media. We also launched this year’s conference with a completely 90’s theme to pay tribute to the art styles and vibrant colors of the times.            </p>

            <p className="text-center">
              <img
              className="img-fluid mt30"
              src="/img/refactr-netflix-party-headers.png"
              alt="90s fashion"/></p>
            
            <p style={{fontSize: '1.4em', color:'#444'}}>
              Enjoying all the throwbacks? We hope so, because we’ve got more ways for you to celebrate that rad and rebellious spirit of the 90’s along with us! If you loved the fabulous fashion as much as we did, you can show it off during <strong>our 90’s Fashion Day and After Party on Friday, 8/20</strong>
            </p>
            
            <p className="text-center">
              <img
              className="img-fluid mt30"
              src="/img/90s-fashion-show.png"
              alt="90s fashion"/></p>
            
            <p style={{fontSize: '1.4em', color:'#444'}}>
            <i>or</i> get into the groove while you work and explore the rest of the conference with <a href="https://open.spotify.com/playlist/6KAMh6nhenQIAuy6CSe8lI?si=d2347361d5b44512">our REFACTR.TECH 2021 - 90’s Mixtape playlist on Spotify</a>. Whatever your style, there’s a bit of nostalgia and fun for everyone!
            </p>

            <br/>
            <iframe src="https://open.spotify.com/embed/playlist/6KAMh6nhenQIAuy6CSe8lI" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
 
            
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
