import React from "react";
// import Header from "../components/header"
import Footer from "../components/footer";
// import { Link } from "gatsby"
import { WorkshopCardList } from "../components/WorkshopCardList";
import { SpeakerCardList } from "../components/SpeakerCardList";

import workshopData from "./workshop-data";
import speakerData from "./speaker-data";

export default () => (
  <div style={{ color: `purple` }}>
    <div>
      {/*Preloder*/}
      {/* <div className="loader">
          <div className="loader--dot" />
          <div className="loader--dot" />
          <div className="loader--dot" />
          <div className="loader--dot" />
          <div className="loader--dot" />
          <div className="loader--dot" />
          <div className="loader--text" />
        </div> */}
      {/*Main Container Start Here*/}
      <div className="main-container">
        {/*Header Start Here*/}
        <header className="header base-style-2">
          <div className="container">
            <div className="row">
              <div className="col-lg-2">
                <div className="brand-logo">
                  <a className="eventex-brand" href="index.html">
                    <img src="assets/img/logo/logo-3.png?123" alt="logo" />
                  </a>
                </div>
              </div>
              {/* /col end*/}
              <div className="col-lg-8">
                <nav className="navbar navbar-expand-lg">
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon">
                      <i className="fa fa-bars" />
                    </span>
                  </button>
                  <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                  >
                    <ul className="navbar-nav ml-auto">
                      <li className="nav-item active">
                        <a className="nav-link" href="/">
                          Home <span className="sr-only">(current)</span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/about">
                          About
                        </a>
                        {/*ul class="dropdown-menu animation  slideUpIn">
                                            <li>
                                                <a href="about.html">About Us</a>
                                            </li>
                                            <li>
                                                <a href="pricing.html">Pricing</a>
                                            </li>
                                            <li>
                                                <a href="error-404.html">Error 404</a>
                                            </li>
                                            <li>
                                                <a href="contact.html">Contact</a>
                                            </li>
                                        </ul*/}
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/code-of-conduct">
                          Code of Conduct
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link "
                          href="https://cfp.connectevents.io/en/refactr2019/cfp/session/new"
                          rel="noreferrer noopener"
                          target="_blank"
                        >
                          Call for Speakers
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="https://shop.refactr.tech"
                          rel="noreferrer noopener"
                          target="_blank"
                        >
                          Shop
                        </a>
                      </li>
                      <li className="nav-item d-lg-none ">
                        <a
                          className="nav-link"
                          href="https://tickets.connectevents.io/events/rtech2019/"
                          rel="noreferrer noopener"
                          target="_blank"
                        >
                          Tickets
                        </a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
              {/* /col end*/}
              <div className="col-lg-2 d-none d-lg-block">
                <ul>
                  <li className="header-ticket">
                    <a
                      className="pr-0"
                      href="https://tickets.connectevents.io/events/rtech2019/"
                    >
                      Tickets
                    </a>
                  </li>
                </ul>
              </div>
              {/* /col end*/}
            </div>
            {/* /row end*/}
          </div>
          {/* container end*/}
        </header>
        {/*Header End Here*/}
        {/*Hero Banner Area Start Here*/}
        <div className="hero-banner-area home-2 hero-bg-2 parallax no-attm">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="banner-content">
                  <div className="upcoming">
                    <span className="is-countdown"> </span>
                    <div data-countdown="2019/06/05" />
                  </div>
                  {/*h3>Freelancers Conferences</h3*/}
                </div>
              </div>
              {/* /col end*/}
            </div>
            {/* /row end*/}
          </div>
          {/* /container end*/}
        </div>
        {/*Hero Banner Area End Here*/}

        {/* your code goes here */}
        {/*Counter Up Area Start Here*/}
        <div className="counter-up-area pad100 bg-counter parallax">
          <div className="container">
            <div className="row">
              <div className="col-xl-3 col-lg-3 col-md-4 col-sm-3">
                <div className="single-counter xs-mb40">
                  <div className="count-content">
                    <span className="count">3</span>
                    <p>Days</p>
                  </div>
                </div>
              </div>
              {/* /col end*/}
              <div className="col-xl-3 col-lg-3 col-md-4 col-sm-3">
                <div className="single-counter xs-mb40">
                  <div className="count-content">
                    <span className="count">6</span>
                    <p>Tracks</p>
                  </div>
                </div>
              </div>
              {/* /col end*/}
              <div className="col-xl-3 col-lg-3 col-md-4 col-sm-3">
                <div className="single-counter xs-mb40">
                  <div className="count-content">
                    <span className="count">70</span>
                    <p>Speakers</p>
                  </div>
                </div>
              </div>
              {/* /col end*/}
              <div className="col-xl-3 col-lg-3 d-md-none d-lg-block col-sm-3">
                <div className="single-counter">
                  <div className="count-content">
                    <span className="count">500</span>
                    <p>Attendees</p>
                  </div>
                </div>
              </div>
              {/* /col end*/}
            </div>
            {/* /row end*/}
          </div>
          {/* /container end*/}
        </div>
        {/*Counter Up Area End Here*/}

        {/*Feature Area Start Here*/}

        {/* Topics Section */}
        <section className="topics-section-two">
          {/* <span className="float-text">Session Topics</span> */}
          <div className="anim-icons">
            <span className="icon icon-circle-3" />
            <span className="icon icon-circle-5" />
          </div>
          <div className="auto-container">
            <div className="sec-title">
              <h2>Tracks</h2>
            </div>
            {/*Event Topics*/}
            <div className="event-topics-tabs">
              <div className="tabs-box">
                {/*Tab Btns*/}
                <ul className="tab-btns tab-buttons clearfix">
                  <li data-tab="#tab1" className="tab-btn">
                    <div>Front-End Engineering</div>
                  </li>
                  <li data-tab="#tab2" className="tab-btn">
                    <div>Software Engineering</div>
                  </li>
                  <li data-tab="#tab3" className="tab-btn">
                    <div>Product &amp; UX</div>
                  </li>
                  <li data-tab="#tab3" className="tab-btn">
                    <div>Cool $h!t</div>
                  </li>
                  <li data-tab="#tab4" className="tab-btn">
                    <div>Career &amp; Leadership</div>
                  </li>
                  <li data-tab="#tab3" className="tab-btn">
                    <div>Social Impact</div>
                  </li>
                </ul>
              </div>
            </div>
            {/*End Product Info Tabs*/}
          </div>
        </section>

        <div className="our-blog-area  pad100">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title text-center">
                  <div className="title-text mb50">
                    <h2>Workshops</h2>
                  </div>
                </div>
              </div>
              {/* /col end*/}
            </div>
            {/* /.row  end*/}
            <div className="inner-blog">
              <div>
                <div className="row">
                  <WorkshopCardList items={workshopData} />
                </div>
              </div>
              {/* /row end*/}
            </div>
            {/* /container end*/}
          </div>
          {/*Feature Area End Here*/}
        </div>
        {/*Event Schedule Area Start Here*/}
        {/*Event Schedule Area End Here*/}

        {/*Keynote Speaker Area Start Here*/}
        <div className="whos-speaking-area-two speakers bg-team parallax pad100">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title text-center">
                  <div className="title-text mb50">
                    <p>Introducing Our Keynote Speakers</p>
                  </div>
                </div>
              </div>
              {/* /col end*/}
            </div>
            {/* /.row  end*/}
            <div className="row">
              <div className="col-md-4 col-sm-12">
                <div className="speakers xs-mb30">
                  <div className="spk-img">
                    <img
                      className="img-fluid"
                      src="img/speakers/tracy-lee.jpeg"
                      alt="trainer-img"
                    />
                    {/*ul>
                                            <li><a href="https://twitter.com/ladyleet"><i class="fa fa-twitter"></i></a></li>
                                            <li><a href="https://www.linkedin.com/in/tracyslee/"><i class="fa fa-linkedin"></i></a></li>
                                        </ul*/}
                  </div>
                  <div className="spk-info">
                    <a
                      href="https://twitter.com/ladyleet"
                      rel="noreferrer noopener"
                      target="_blank"
                    >
                      <h3 style={{ color: "white" }}>Tracy Lee</h3>
                    </a>
                    <h6 style={{ color: "#aaa" }}>Co-founder, This Dot Labs</h6>
                  </div>
                </div>
              </div>
              {/* /col end*/}
              <div className="col-md-4 col-sm-12">
                <div className="speakers xs-mb30">
                  <div className="spk-img">
                    <img
                      className="img-fluid"
                      src="img/speakers/kortney-ziegler.jpg"
                      alt="trainer-img"
                    />
                    {/*ul>
                                            <li><a href="https://twitter.com/ladyleet"><i class="fa fa-twitter"></i></a></li>
                                            <li><a href="https://www.linkedin.com/in/tracyslee/"><i class="fa fa-linkedin"></i></a></li>
                                        </ul*/}
                  </div>
                  <div className="spk-info">
                    <a
                      href="https://twitter.com/fakerapper"
                      rel="noreferrer noopener"
                      target="_blank"
                    >
                      <h3 style={{ color: "white" }}>Kortney Ziegler</h3>
                    </a>
                    <h6 style={{ color: "#aaa" }}>
                      Director of Research and Design, ZaMLabs
                    </h6>
                  </div>
                </div>
              </div>
              {/* /col end*/}
              <div className="col-md-4 col-sm-12">
                <div className="speakers xs-mb30">
                  <div className="spk-img">
                    <img
                      className="img-fluid"
                      src="img/speakers/alex-castillo-headshot-square.jpg"
                      alt="trainer-img"
                    />
                    {/*ul>
                                                <li><a href="https://twitter.com/ladyleet"><i class="fa fa-twitter"></i></a></li>
                                                <li><a href="https://www.linkedin.com/in/tracyslee/"><i class="fa fa-linkedin"></i></a></li>
                                            </ul*/}
                  </div>
                  <div className="spk-info">
                    <a
                      href="https://twitter.com/castillo__io"
                      rel="noreferrer noopener"
                      target="_blank"
                    >
                      <h3 style={{ color: "white" }}>Alex Castillo</h3>
                    </a>
                    <h6 style={{ color: "#aaa" }}>Co-Founder, Neurosity</h6>
                  </div>
                </div>
              </div>
            </div>
            {/* /row end*/}
          </div>
          {/* /container end*/}
        </div>
        {/*Keynote Speakers Area End Here*/}

        {/*Whos Speaking Area Start Here*/}
        <div className="whos-speaking-area pad100">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title text-center">
                  <div className="title-text mb50">
                    <h2>Featured Speakers</h2>
                  </div>
                </div>
              </div>
              {/* /col end*/}
            </div>
            {/* /.row  end*/}

            <div className="row mb50">
              {/*Whos Speaking Area End Here*/}
              <SpeakerCardList items={speakerData} />
            </div>
            {/* /row end*/}
          </div>
          {/* /container end*/}
        </div>
        {/*Whos Speaking Area End Here*/}

        {/*Pricing Tables Area Start Here*/}
        <div className="pricing-tables-area pad-b100">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title text-center">
                  <div className="title-text mb50">
                    <h2>2-Day Conference Pricing</h2>
                  </div>
                </div>
              </div>
              {/* /col end*/}
            </div>
            {/* /row end*/}
            <div className="row">
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                <div className="pricing-box bg-pricing xs-mb30">
                  <div className="pricing-header">
                    <div className="pricing-value">
                      <span>$</span> 175
                    </div>
                  </div>
                  <div className="pricing-title">Early Bird (Ended)</div>
                  <div className="pricing-content">
                    <ul>
                      <li>Main Stage Keynotes</li>
                      <li>Sessions in 6 Tracks</li>
                      <li>Expo Hall</li>
                      <li>Networking Opportunities</li>
                      <li>Tons of Social Activities</li>
                    </ul>
                  </div>
                  <div className="bordered-btn" style={{ color: "red" }}>
                    <a href>Sold Out</a>
                  </div>
                </div>
              </div>
              {/* /col end*/}
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                <div className="pricing-box bg-pricing xs-mb30">
                  <div className="pricing-header">
                    <div className="pricing-value">
                      <span>$</span> 250
                    </div>
                  </div>
                  <div className="pricing-title">Regular - Ends May 26</div>
                  <div className="pricing-content">
                    <ul>
                      <li>Main Stage Keynotes</li>
                      <li>Sessions in 6 Tracks</li>
                      <li>Expo Hall</li>
                      <li>Networking Opportunities</li>
                      <li>Tons of Social Activities</li>
                    </ul>
                  </div>
                  <div className="bordered-btn">
                    <a href="https://tickets.connectevents.io/events/rtech2019/">
                      Buy Ticket
                    </a>
                  </div>
                </div>
              </div>
              {/* /col end*/}
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                <div className="pricing-box bg-pricing xs-mb30">
                  <div className="pricing-header">
                    <div className="pricing-value">
                      <span>$</span> 300
                    </div>
                  </div>
                  <div className="pricing-title">Late</div>
                  <div className="pricing-content">
                    <ul>
                      <li>Main Stage Keynotes</li>
                      <li>Sessions in 6 Tracks</li>
                      <li>Expo Hall</li>
                      <li>Networking Opportunities</li>
                      <li>Tons of Social Activities</li>
                    </ul>
                  </div>
                  <div className="bordered-btn">
                    <a href="https://tickets.connectevents.io/events/rtech2019/">
                      Buy Ticket
                    </a>
                  </div>
                </div>
              </div>
              {/* /col end*/}
            </div>
            {/* /row end*/}
            <div className="row mt60">
              <div className="col-lg-12">
                <div className="section-title text-center">
                  <div className="title-text mb50">
                    <h2>3-Day Conference + Workshop Pricing</h2>
                  </div>
                </div>
              </div>
              {/* /col end*/}
            </div>
            {/* /row end*/}
            <div className="row">
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                <div className="pricing-box bg-pricing xs-mb30">
                  <div className="pricing-header">
                    <div className="pricing-value">
                      <span>$</span> 275
                    </div>
                  </div>
                  <div className="pricing-title">
                    Early Bird + Workshop (Ended)
                  </div>
                  <div className="pricing-content">
                    <ul>
                      <li>
                        Choice of 1 Full-Day{" "}
                        <a href="workshops.html">Workshop</a>
                      </li>
                      <li>Main Stage Keynotes</li>
                      <li>Sessions in 6 Tracks</li>
                      <li>Expo Hall</li>
                      <li>Networking Opportunities</li>
                      <li>Tons of Social Activities</li>
                    </ul>
                  </div>
                  <div className="bordered-btn">
                    <a href>Sold Out</a>
                  </div>
                </div>
              </div>
              {/* /col end*/}
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                <div className="pricing-box bg-pricing xs-mb30">
                  <div className="pricing-header">
                    <div className="pricing-value">
                      <span>$</span> 375
                    </div>
                  </div>
                  <div className="pricing-title">
                    Regular + Workshop - Ends May 26
                  </div>
                  <div className="pricing-content">
                    <ul>
                      <li>
                        Choice of 1 Full-Day{" "}
                        <a href="workshops.html">Workshop</a>
                      </li>
                      <li>Main Stage Keynotes</li>
                      <li>Sessions in 6 Tracks</li>
                      <li>Expo Hall</li>
                      <li>Networking Opportunities</li>
                      <li>Tons of Social Activities</li>
                    </ul>
                  </div>
                  <div className="bordered-btn">
                    <a href="https://tickets.connectevents.io/events/rtech2019/">
                      Buy Ticket
                    </a>
                  </div>
                </div>
              </div>
              {/* /col end*/}
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                <div className="pricing-box bg-pricing xs-mb30">
                  <div className="pricing-header">
                    <div className="pricing-value">
                      <span>$</span> 425
                    </div>
                  </div>
                  <div className="pricing-title">Late + Workshop</div>
                  <div className="pricing-content">
                    <ul>
                      <li>
                        Choice of 1 Full-Day{" "}
                        <a href="workshops.html">Workshop</a>
                      </li>
                      <li>Main Stage Keynotes</li>
                      <li>Sessions in 6 Tracks</li>
                      <li>Expo Hall</li>
                      <li>Networking Opportunities</li>
                      <li>Tons of Social Activities</li>
                    </ul>
                  </div>
                  <br />
                  <div className="bordered-btn">
                    <a href="https://tickets.connectevents.io/events/rtech2019/">
                      Buy Ticket
                    </a>
                  </div>
                </div>
              </div>
              {/* /col end*/}
            </div>
            {/* /row end*/}
          </div>
          {/* /container end*/}
        </div>
        {/*Pricing Tables Area End Here*/}

        {/*Our Sponsors Area Start Here*/}
        <div className="our-sponsers-area-tow pad100 bg-color">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title text-center">
                  <div className="title-text mb50 xs-mb40">
                    <h2>Sponsor REFACTR.TECH</h2>
                    <p>
                      Companies, are you looking for an opportunity to engage
                      with hundreds of people from diverse backgrounds at our
                      Exhibit Hall and Career Expo? Please take a few minutes to
                      review the various ways to support REFACTR.TECH in our
                      attached sponsorship prospectus
                    </p>
                  </div>
                </div>
              </div>
              {/* /col end*/}
            </div>
            <div className="col-lg-12">
              <div className="primary-btn text-center">
                <a
                  href="https://refactrtech.typeform.com/to/ouMvCw"
                  className="btn-primary"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  Become a Sponsor
                </a>
              </div>
            </div>
            {/* /col end*/}
          </div>
          {/* /row end*/}
        </div>
        {/* /container end*/}
      </div>

      {/*Main Container End Here*/}
      {/*All Js Here*/}
      {/* Google Map js */}
      {/* jquery latest version */}
      {/*Migrate Js*/}
      {/*Popper Js*/}
      {/*Bootstrap Js*/}
      {/*Owl-Carousel Js*/}
      {/*Counter-Up Js*/}
      {/*Waypoints Js*/}
      {/*Lightbox Js*/}
      {/*Appear Js*/}
      {/*Countdown Js*/}
      {/*Jquery Ui Js*/}
      {/*Wow Js*/}
      {/*Plugins Js*/}
      {/* template main js file */}
    </div>
    <Footer />
  </div>
);
