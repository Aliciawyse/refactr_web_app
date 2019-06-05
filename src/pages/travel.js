import React from "react";
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/footer";
import { Helmet } from "react-helmet";

export default ({ data }) => (
  <div>
    <Helmet>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <title>Travel | REFACTR.TECH</title>
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
                40 Courtland Street North East Atlanta, Georgia 30303 Located in
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
                <p />
                <p>
                  <strong>PARKING</strong>
                </p>
                REFACTR.TECH Attendees should park in the parking garage
                connected to the Loudermilk Conference Center. Cost is $8 per
                day. Please bring your parking pass with you to have it
                validated at the Help Desk on the first floor -- payment is only
                available via card (credit or debit). Please remember that if
                you leave and re-enter it will be an additional $5. If this area
                fills up feel free to park at the many nearby public parking
                options.
                <p />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-5 xs-mb40">
              <img
                className="img-fluid mt30"
                src="/img/others/The.Ellis_.Hotel_.010.jpg"
                alt="The Ellis Hotel"
              />
            </div>
            <div className="col-lg-7">
              <div className="inner-content">
                <p />
                <h4>OFFICIAL CONFERENCE HOTEL - THE ELLIS HOTEL</h4>
                REFACTR.TECH has a hotel block at The Ellis Hotel, located in
                downtown Altanta only .4 miles from the Loudermilk Conference
                Center.{" "}
                <a href="https://www.ellishotel.com/">The Ellis Hotel </a>is
                located at 176 Peachtree Street NW, Atlanta, GA 30303. The
                REFACTR.TECH discounted rate is available until May 6.{" "}
                <strong>Our special rate is $155/night</strong>
                <p />
                <p>
                  {" "}
                  For RESERVATIONS:
                  <br />
                  <a href="https://www.marriott.com/event-reservations/reservation-link.mi?id=1557170981465&key=GRP&app=resvlink">
                    {" "}
                    online reservations{" "}
                  </a>
                </p>
                <p>
                  The reservations number is 407-536-2724 and use reservation
                  code CONN0619 or simply reference REFACTR.TECH{" "}
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
    <Footer />
  </div>
);
