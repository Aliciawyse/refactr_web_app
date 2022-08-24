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
      <title>Travel | REFACTR.TECH</title>
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
                  <h2>Travel</h2>
                </div>
                <ol className="breadcrumb">
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>|</li>
                  <li>Travel</li>
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
            <div className="col-lg-5 xs-mb40">
              <img
                className="img-fluid mt100"
                src="/img/others/loudermilk_center.jpg"
                alt="Loudermilk Center on Courtland Street, Atlanta, GA"
              />
            </div>
            <div className="col-lg-7">
              <div className="inner-content">
                <div className="section-title">
                  <div className="title-text pl">
                    <h2>Travel Info</h2>
                  </div>
                </div>
                <h4>The Loundermilk Conference Center</h4>
                {/* <img class="img-fluid" src="/img/others/loudermilk.png" alt="Loudermilk"> </p> */}
                <p>40 Courtland Street North East Atlanta, Georgia 30303 Located in
                the heart of downtown Atlanta, Georgia, The Loudermilk Center is
                conveniently accessed from all points in Metro Atlanta via I-75
                and I-20. Loudermilk Center is within close proximity to the
                Georgia State Capitol, Georgia Tech and Georgia State
                University, and major corporations and public agencies in the
                downtown Atlanta corridor. United Way of Atlanta, an important
                partner of the Center, is located across the street.
                Additionaly, the Atlanta MARTA Peachtree Center Station,
                Atlanta's rapid rail and bus system is walking distance away.
                Hartsfield International Airport is less than 15 miles from The
                Loudermilk Center.
                </p>
                <p>
                  <strong>PARKING</strong>
                </p>
                <p>
                REFACTR.TECH Attendees should park in the parking garage connected
                to the Loudermilk Conference Center. Please bring your parking pass
                with you to have it validated for FREE at the Help Desk on the first
                floor. If this area fills up feel free to park at the many nearby
                public parking options.
                </p>
              </div>
            </div>
          </div>


          {/*<div className="row">
            <div className="col-lg-5 xs-mb40">
              <img
                className="img-fluid mt30"
                src="/img/others/westinHotel.jpg"
                alt="Westin Peachtree Hotel"
              />
            </div>
            <div className="col-lg-7">
              <div className="inner-content">
                <h4>OFFICIAL CONFERENCE HOTELS - WESTIN PEACHTREE PLAZA HOTEL</h4>
                REFACTR.TECH has a hotel block at &nbsp;
                <a href="https://www.marriott.com/hotels/travel/atlpl-the-westin-peachtree-plaza-atlanta/"
                   target="_blank"
                   rel="noopener noreferrer">
                Westin Peachtree Plaza Hotel</a> located
                in Downtown Atlanta, only 0.5 miles from the Loudermilk Conference Center.
                {/*The &nbsp;
                <a href="https://www.marriott.com/hotels/travel/atlpl-the-westin-peachtree-plaza-atlanta/"
                   target="_blank"
                   rel="noopener noreferrer">Westin Peachtree Plaza Hotel</a> &nbsp;
                is located at 210 Peachtree St. NW, Atlanta,
                GA 30303. The special conference rate is $185.00/night + taxes and must be
                booked by March 12, 2020.
                <a href="https://book.passkey.com/event/50009558/owner/324/home">Book your room here!</a>
              </div>
            </div>
          </div>
          {/* /row end*/}


          <div className="row">
          <div className="col-lg-5 xs-mb40">
            <img
              className="img-fluid mt30"
              src="/img/others/Sheraton-Atlanta-Hotel-Exterior-Skyline-Terrace-1600x900.jpg"
              alt="Sheraton Atlanta Hotel"
            />
          </div>
          <div className="col-lg-7">
            <div className="inner-content">
              <h4>OFFICIAL CONFERENCE HOTEL - SHERATON ATLANTA </h4>
              <p>
              The conference hotel is <a href="https://book.passkey.com/event/50358524/owner/326/home"
              target="_blank"
              rel="noopener noreferrer">Sheraton Atlanta.</a> It’s a short, three-block walk to the Loudermilk Conference Center and features spacious guest rooms, complimentary Wi-Fi, 32-inch LCD TVs, an indoor heated pool with retractable arched glass roof and a well-equipped fitness center. The Sheraton Atlanta also includes dining options like the top-rated Fandangles. Additionally, the hotel features a full-service business center, wireless Internet access and lounge.
              </p>

              <div className="primary-btn">
                <a className="btn-primary " href="https://book.passkey.com/event/50358524/owner/326/home">
                  Book here&nbsp;&nbsp;<i className="fa fa-external-link"/>
                </a>
              </div>

              {/*The &nbsp;
              <a href="https://www.marriott.com/hotels/travel/atlxs-sheraton-atlanta-hotel/"
                 target="_blank"
                 rel="noopener noreferrer">Sheraton Atlanta</a> &nbsp;
              is located at 210 Peachtree St. NW, Atlanta,
              GA 30303. The special conference rate is $185.00/night + taxes and must be
              booked by March 12, 2020.*/}
              {/*<a href="https://book.passkey.com/event/50009558/owner/324/home">Book your room here!</a>*/}
            </div>
          </div>
          {/* /col end*/}
        </div>
        {/* /row end*/}

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
                    <p style={{ fontSize: "1.3em", fontWeight: "400", textTransform:"none"}}>Get your ticket to attend REFACTR.TECH in Atlanta, September 14 - 16 for 3 days packed full of workshops, keynotes, tech sessions and demos, and of course, parties! 
                    With <Link style={{ color: "white", textDecoration: "underline"}} to="/sessions">tracks from software engineering to leadership to data and community,</Link> there’s something for everybody!</p>
                      <div className="row justify-content-center">
                        <div className="col-md-3 col-sm-12">
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
