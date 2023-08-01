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
                Attendees should park in the parking garage connected to the Loudermilk Conference Center. Discounted parking cost is $10 per day. 
                Please bring your parking pass with you to have it validated at the Help Desk on the first floor -- payment is only available via card (credit or debit). 
                There is no leave and re-enter. If this area fills up feel free to park at the many nearby public parking options.
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
                in Atlanta, only 0.5 miles from the Loudermilk Conference Center.
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


        <div className="row">
          <div className="col-lg-5 xs-mb40">
            <img
              className="img-fluid mt30"
              src="/img/travel/hartsfield-jackson-delta-airplane.jpg"
              alt="ATL Airport"
            />
          </div>
          <div className="col-lg-7">
            <div className="inner-content">
              <h4>Getting Here - Hartsfield-Jackson Atlanta International Airport (ATL) </h4>
              <p>
              Traveling by plane to Atlanta? Fly into the Hartsfield-Jackson Atlanta International Airport (ATL.com), located approximately 12 miles from our host hotel and venue. 
              Hartsfield-Jackson is a global gateway, offering nonstop service to more than 150 domestic and nearly 70 international destinations. These locales include major commercial 
              centers in Europe, Asia, the Caribbean, Africa, and South and Central America.
              </p>

              <p>Options for Getting to and from the Airport Include:
                <ul>
                  <li style={{listStyleType: "none"}}><a href="https://www.uber.com/global/en/airports/atl/">Uber</a> and <a href="https://www.lyft.com/rider/airports/ATL">Lyft</a></li>
                  <li style={{listStyleType: "none"}}><a href="https://martaguide.com/hartsfield-jackson-international-airport-marta-tips/">MARTA</a></li>
                </ul>
              </p>

            </div>
          </div>
          {/* /col end*/}
        </div>
        {/* /row end*/}

        <div className="row">
          <div className="col-lg-6 xs-mb40">
            <img
              className="img-fluid mt30"
              src="/img/travel/refactr-ground-map.png"
              alt="Getting to Conference Center Map"
            />
          </div>
          <div className="col-lg-6">
            <div className="inner-content">
              <h4>Getting Here - Ground Transportation </h4>
              <p style={{fontSize: "1.3em"}}>
                  <strong>On MARTA Northbound or Southbound Line</strong>
                </p>
              <p>
              Exit at the <i><strong>Peachtree Center Station</strong></i>, take the set of escalators to Ellis Street. Once you get to the street level, you will see the Georgia Pacific Building on your left. 
              Cross in front of Georgia Pacific Building and take a left onto John Wesley Dobbs Avenue. At the first traffic light, go right onto Peachtree Center Avenue. Walk on Peachtree 
              Center Avenue and make a left between The Woodruff Volunteer Center parking deck and The Woodruff Volunteer Center (United Way Building). The Loudermilk Center for the Regional 
              Community will be on the left facing The Woodruff Volunteer Center (United Way Building). <i>View Map</i>
              </p>

              <p style={{fontSize: "1.3em"}}>
                  <strong>From I-75/85 Northbound
                  </strong>
                </p>
              <p>
              Exit #248-B Go left at the first traffic light (Edgewood Avenue). Go Approximately 4 blocks until you cross Courtland Street. 
              At the next traffic light go right onto Peachtree Center Avenue and take the first entrance on your right (Lynch’s Alley). 
              The entrance to the parking garage will be past the median on the left. The Loudermilk Center is adjacent to the parking garage. <i>View Map</i>
              </p>

              <p style={{fontSize: "1.3em"}}>
                <strong>From I-75/85 Southbound</strong>
              </p>
              <p>
              Exit #249A- Courtland Street is one -way street going south. Loudermilk Center for the Regional Community will be on the right after Auburn Avenue. 
              Turn right onto Lynch's Alley (the street after Auburn Ave. and before Edgewood Ave.) The Loudermilk Center is adjacent to the parking garage.<i>View Map</i>
              </p>

              
              

            </div>
          </div>
          {/* /col end*/}
        </div>
        {/* /row end*/}


        <div className="row">
          
          <div className="col-lg-12">
            <div className="inner-content">
              
            <p style={{fontSize: "1.3em", marginTop: "20px"}}>
                <strong>From I-20 Eastbound</strong>
              </p>
              <p>
              Exit #56B – Windsor/ Spring Street. Go straight to the third traffic light. Take a left on Central Avenue. Turn right onto Auburn Avenue, 
              then right onto Courtland Street. Loudermilk Center for the Regional Community will be on the right. Turn right onto Lynches Alley (the street 
                after Auburn Ave. and before Edgewood Ave.) The Loudermilk Center is adjacent to the parking garage. <i>View Map</i>
              </p>

              <p style={{fontSize: "1.3em"}}>
                <strong>From I-20 Westbound</strong>
              </p>
              <p>
              Exit #58A – Capital Avenue turn right at the light. Stay on Capitol Avenue, which changes into Piedmont Avenue after crossing MLK Jr. Drive. Turn left onto Auburn Avenue, then left onto Courtland Street. Loudermilk Center for the Regional Community will be on the right. Turn right onto Lynch's Alley (the street after Auburn Ave. and before Edgewood Ave.) The Loudermilk Center is adjacent to the parking garage. <i>View Map</i>
              </p>

            </div>
          </div>
          {/* /col end*/}
        </div>
        {/* /row end*/}

        <div className="row">
          <div className="col-lg-6 xs-mb40">
            <img
              className="img-fluid mt30"
              src="/img/travel/atl-skyline-exposed.jpeg"
              alt="Atlanta Skyline"
            />
          </div>
          <div className="col-lg-6">
            <div className="inner-content">
              <h4>Things to do in Atlanta</h4>
              
              <p>
              Atlanta is the largest of the city's three commercial districts and is the location of many corporate or regional headquarters; city, county, state and federal government facilities; Georgia State University; sporting venues; and most of Atlanta's tourist attractions.
              </p>

              <p>
              Most visitors' journeys begin in Centennial Olympic Park district, the epicenter of downtown life. From its inspiring attractions such as Georgia Aquarium, SkyView Ferris Wheel, World of Coca-Cola, CNN Center and Center for Civil and Human Rights to year-round sporting events at the Georgia Dome and Philips Arena, there's always something going on in Atlanta. 
              </p>

              
              <p>
              The Convention & Entertainment District is where big events and family fun meet. Neighboring Fairlie-Poplar puts world-renowned performances center stage. And Castleberry Hill provides the perfect blend of eclectic artistry and city spirit. 
              </p>

              <p>
                <ul>
                    <li style={{listStyleType: "none"}}><a href="http://www.atlanta.net/explore/neighborhoods/downtown/">Downtown area attractions</a></li>
                    <li style={{listStyleType: "none"}}><a href="http://www.citypass.com/atlanta">Atlanta City Pass</a></li>
                </ul>
              </p>
              

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
                    <p style={{ fontSize: "1.3em", fontWeight: "400", textTransform:"none"}}>Get your ticket to attend REFACTR.TECH in Atlanta, October 27 for 3 days packed full of workshops, keynotes, tech sessions and demos, and of course, parties! 
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
