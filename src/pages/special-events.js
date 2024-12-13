import React from "react";
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/footer";
import { Helmet } from "react-helmet";
import { Link } from "gatsby";
import { OutboundLink } from "gatsby-plugin-google-gtag";

export default ({ data }) => (
  <div>
    <Helmet>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <title>Special Events | REFACTR.TECH</title>
      <meta name="robots" content="noindex,follow" />

      <meta name="author" content="iThemesLab" />
      <meta name="description" content="" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
    </Helmet>
    <div className="main-container">
      <NavigationBar whiteText />
      <div className="about-us-area pad-head bg-about">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="about-content">
                <div className="section-title text-center">
                  <h2>2022 Special Events</h2>
                </div>
                <ol className="breadcrumb">
              <li>
                <a href="/">Home</a>
              </li>
              <li>|</li>
              <li><a href="/workshops">Workshops</a></li>
              <li>|</li>
              <li><a href="/schedule">Schedule</a></li>
              <li>|</li>
              <li><a href="/sessions">All Sessions by Track</a></li>
              <li>|</li>
              <li>2022 Special Events</li>
              <li>|</li>
              <li><a href="/book-signing">Book Signings</a></li>
            </ol>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*Conference Synopsis Area Start Here*/}
      <div className="conference-synopsis-area about pad100">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="row">
                <div className="col-lg-9">

                <div className="row">
                  <div className="col-lg-12">
                  <div className="row">
                    <div className="col-lg-5 xs-mb40" style={{paddingBottom: "20px"}}>
                        <img
                          className="img-fluid"
                          src="/img/shopping/refactr-dress-code.png"
                          alt="Dress Code Clothing Brand"
                        />
                      </div>
                      <div className="col-lg-7">
                        <div className="inner-content">
                          <div className="section-title">
                            <div className="title-text pl">
                              <h2 style={{textTransform: "none"}}>Shop <i>&lt;dress code/&gt;</i></h2>
                            </div>
                          </div>
                          <p>You'll be able to shop <strong><i><a href="https://thedresscodeco.com">&lt;dress code/&gt;</a></i></strong> at REFACTR.TECH! <strong><i>&lt;dress code/&gt;</i></strong>  is a Black-owned tech-inspired 
                          clothing brand that merges the world of fashion and tech, while doing it <strong>'for the code.ture'</strong>. <a href="https://thedresscodeco.com">thedresscodeco.com</a> 
                          </p>
                          
                        </div>
                      </div>
                     
                    </div>
                    <hr />
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-12">
                  <div className="row">
                    <div className="col-lg-5 xs-mb40" style={{paddingBottom: "20px", paddingTop: "20px"}}>
                        <img
                          className="img-fluid"
                          src="/img/books/refactr22-books.png"
                          alt="Featuring Brand New Books by REFACTR.TECH Speakers, Dr. Brandeis Marshall and Kim Crayton"
                        />
                      </div>
                      <div className="col-lg-7">
                        <div className="inner-content">
                          <div className="section-title">
                            <div className="title-text pl">
                              <h2 style={{textTransform: "none"}}>Meet the Authors</h2>
                            </div>
                          </div>
                          <p>Get <i>exclusive early-access</i> to books written by REFACTR.TECH speakers, <a href="/data-conscience-book">Dr. Brandeis Hill Marshall </a> 
                          and <a href="/speakers/kim-crayton">Kim Crayton</a>, along with discounts, book signings and parties, available only at REFACTR.TECH.</p> 
                          <p><a href="https://reg.connectevents.io/ConnectEvents/rtech2022/">Pre-order</a> your early-access copy of <a href="/data-conscience-book">Data Conscience: Algorithmic Siege On Our Humanity</a> at a <a href="https://reg.connectevents.io/ConnectEvents/rtech2022/">28% discount</a> to ensure you get your in time for our <a href="/book signing">book signing</a>.
                          </p>
                          
                        </div>
                      </div>
                     
                    </div>
                    <hr />
                  </div>
                </div>
                
                <div className="row">
                  <div className="col-lg-12">
                  <div className="row">
                    <div className="col-lg-5 xs-mb40" style={{paddingBottom: "20px", paddingTop: "20px"}}>
                        <img
                          className="img-fluid"
                          src="/img/conference/game-night1.jpg"
                          alt="Not Your Typical Happy Hour"
                        />
                      </div>
                      <div className="col-lg-7">
                        <div className="inner-content">
                          <div className="section-title">
                            <div className="title-text pl">
                              <h2 style={{textTransform: "none"}}>No Typical Happy Hour</h2>
                            </div>
                          </div>
                          <p>Ever wanted to have a game night with hundreds of your new tech friends? We've got you covered! 
                          Our happy hour is one part celebration, one part game night and one part ode to our host city, Atlanta. 
                          Bring your "A" game 😎 and we'll handle the rest.
                          </p>
                          
                        </div>
                      </div>
                     
                    </div>
                    <hr />
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-12">
                  <div className="row">
                    <div className="col-lg-5 xs-mb40" style={{paddingBottom: "20px", paddingTop: "20px"}}>
                        <img
                          className="img-fluid"
                          src="/img/conference/revery-tagline.jpeg"
                          alt="Revery VR Bar"
                        />
                      </div>
                      <div className="col-lg-7">
                        <div className="inner-content">
                          <div className="section-title">
                            <div className="title-text pl">
                              <h2 style={{textTransform: "none"}}>Afterparty @ Revery</h2>
                            </div>
                          </div>
                          <p>Close out REFACTR.TECH with us at <a href="https://www.reveryvrbar.com/nightlife">Revery VR Bar</a>--the nation's first full bar to incorporate virtual reality technology (SIMILAR TO A KARAOKE EXPERIENCE). Located in the heart of <a href="https://www.midtownatl.com/">Midtown</a>, by <a href="https://www.poncecitymarket.com/">Ponce City Market</a>, Revery is in one of the liveliest parts of Atlanta.
                          </p>
                          
                        </div>
                      </div>
                     
                    </div>
                    <hr />
                  </div>
                </div>


                </div>

                <div className="col-lg-3 motivational-concepts-area d-none d-xl-block">
                  <div className="testimonial-wrapper bg-color" style={{border: "1px solid #c9c9c9"}}>
                    <div className="section-title text-center">
                      <p style={{fontSize:"1.3em", fontWeight:"bold", color:"#1E1C7F"}}>REGISTER NOW</p>

                      <p> Get accesss to 50+ sessions in 7 tracks, 3 full-day workshops, 2 book signings, socials and more at REFACTR.TECH 2024.
                      </p>

                      <p><OutboundLink href="https://reg.connectevents.io/ConnectEvents/rtech2022/" target="_blank" style={{color: "#C418A3"}}>Register</OutboundLink></p>
                    </div>
                  </div>

                  <div className="testimonial-wrapper bg-color" style={{marginTop: "30px", marginBottom: "50px", border: "1px solid #c9c9c9"}}>
                    <div className="section-title text-center">
                      <p style={{fontSize:"1.3em", fontWeight:"bold", color:"#1E1C7F"}}>BOOK SIGNING</p>

                      <p>REFACTR.TECH attendees can get <strong><em>exclusive</em>&nbsp;&nbsp;early-access</strong> to <Link to="/data-conscience-book">Data Conscience: Algorithmic Siege on our Humanity,</Link> <em>before</em> the official release, at a <strong>28% discount!</strong></p>


                      <p><OutboundLink href="https://reg.connectevents.io/ConnectEvents/rtech2022/" target="_blank" style={{color: "#C418A3"}}>Reserve Your Book Here</OutboundLink></p>
                    </div>
                  </div>

                </div>





              </div>
            
            </div>

            


          </div>


          

          

        </div>
        {/* /container end*/}
      </div>
    </div>

    
    <div className="counter-up-area ptb60 bg-counter parallax">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="single-counter xs-mb40">
                  <div className="count-content" style={{ textAlign: "center"}}>
                    <span className="count" style={{ fontSize: "3.1em"}}>Register</span>
                    <p style={{ fontSize: "1.3em", fontWeight: "400", textTransform:"none"}}>Get your ticket to attend REFACTR.TECH in Atlanta,  for 3 days packed full of workshops, keynotes, tech sessions and demos, and of course, parties! 
                    With <Link style={{ color: "white", textDecoration: "underline"}} to="/sessions">tracks from software engineering to leadership to data and community,</Link> there’s something for everybody!</p>
                      <div className="row justify-content-center">
                        <div className="col-md-4 col-sm-12">
                          <div className="primary-btn text-center mt30">
                              {/* <a href="https://2019.refactr.tech" class="btn-primary" style={{border: "2px solid #fff"}}>2019 Conference</a> */}
                              <OutboundLink href="https://reg.connectevents.io/ConnectEvents/rtech2022/" target="_blank" class="btn-primary" style={{border: "2px solid #fff", fontSize: "1.5em"}}>Get Tickets Now</OutboundLink> 
                          </div>
                        </div>
                          
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


    <Footer />
  </div>
);
