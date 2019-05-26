import React from "react";
import { graphql } from "gatsby";
import Footer from "../components/footer";
import { WorkshopCardList } from "../components/WorkshopCardList";
import { FeaturedSpeakerCard } from "../components/FeaturedSpeakerCard";
import NavigationBar from "../components/NavigationBar";
import workshopData from "../workshop-data";
import { Link } from "gatsby";

// import "../../src/styles/assets/css/style.css";
import "../../src/styles/assets/css/style2.css";
import "../../src/styles/assets/css/responsive.css";
import "../../src/styles/assets/css/responsive2.css";

export default ({ data }) => (
  <div>
    <div>
      {/*Main Container Start Here*/}
      <div className="main-container">
        {/*Header Start Here*/}
        <NavigationBar />
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
                </div>
              </div>
              {/* /col end*/}
            </div>
            {/* /row end*/}
          </div>
          {/* /container end*/}
        </div>
        {/*Hero Banner Area End Here*/}

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
              <p>
                <span style={{ color: "#C41579", fontWeight: "bold" }}>
                  New!
                </span>
                &nbsp;&nbsp;Check out our sessions by track.
              </p>
            </div>

            {/*Event Topics*/}
            <div className="event-topics-tabs">
              <div className="tabs-box">
                {/*Tab Btns*/}
                <ul className="tab-btns tab-buttons clearfix">
                  <li data-tab="#tab1" className="tab-btn">
                    <div>
                      <Link
                        style={{ color: "#12114a" }}
                        to="/sessions/#Front-End"
                        rel="noreferrer noopener"
                      >
                        Front-End Engineering
                      </Link>
                    </div>
                  </li>
                  <li data-tab="#tab1" className="tab-btn">
                    <div>
                      <Link
                        style={{ color: "#12114a" }}
                        to="/sessions/#SoftwareEngineering"
                        rel="noreferrer noopener"
                      >
                        Software Engineering
                      </Link>
                    </div>
                  </li>

                  <li data-tab="#tab1" className="tab-btn">
                    <div>
                      <Link
                        style={{ color: "#12114a" }}
                        to="/sessions/#Product/UX/UI"
                        rel="noreferrer noopener"
                      >
                        Product &amp; UX
                      </Link>
                    </div>
                  </li>

                  <li data-tab="#tab1" className="tab-btn">
                    <div>
                      <Link
                        style={{ color: "#12114a" }}
                        to="/sessions/#CoolShit"
                        rel="noreferrer noopener"
                      >
                        Cool $h!t
                      </Link>
                    </div>
                  </li>

                  <li data-tab="#tab1" className="tab-btn">
                    <div>
                      <Link
                        style={{ color: "#12114a" }}
                        to="/sessions/#Career&Leadership"
                        rel="noreferrer noopener"
                      >
                        Career &amp; Leadership
                      </Link>
                    </div>
                  </li>

                  <li data-tab="#tab1" className="tab-btn">
                    <div>
                      <Link
                        style={{ color: "#12114a" }}
                        to="/sessions/#SocialImpact"
                        rel="noreferrer noopener"
                      >
                        Social Impact
                      </Link>
                    </div>
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
                      <h3 style={{ color: "white" }}>Dr. Kortney Ziegler</h3>
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

              {/* /.row  end*/}

              <div className="row mb50">
                {/*Whos Speaking Area End Here*/}

                <FeaturedSpeakerCard items={data.allAirtable.edges} />

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
                      <div className="bordered-btn">
                        <a>Sold Out</a>
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
                        <a>Sold Out</a>
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

            {/* /container end*/}
          </div>
          {/*Pricing Tables Area End Here*/}
        </div>
        {/*Our Sponsors Area Start Here*/}
        <a name="call-for-sponsors" />
        <div className="our-sponsers-area pad100 bg-color">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title text-center">
                  <div className="title-text mb50 xs-mb40">
                    <h2>Sponsors</h2>
                  </div>
                </div>
                <hr />
                <h2 className="text-center">Platinum</h2>
                <div className="single-sponsers">
                  <ul>
                    <li className="col-lg-3 mr-0">
                      <a
                        href="https://www.salesloft.com/"
                        rel="noreferrer noopener"
                        target="_blank"
                      >
                        <img
                          src="/img/sponsors/salesloft.png"
                          alt="Sponsor: SalesLoft"
                        />
                      </a>
                    </li>
                  </ul>
                  <hr />

                  <h2 className="text-center">Gold</h2>
                  <ul>
                    <li className="col-lg-3">
                      <a
                        href="https://www.homedepot.com/"
                        rel="noreferrer noopener"
                        target="_blank"
                      >
                        <img
                          src="/img/sponsors/the-home-depot.png"
                          alt="Sponsor: The Home Depot"
                        />
                      </a>
                    </li>
                    <li className="col-lg-3 mr-0">
                      <a
                        href="https://amp.dev/"
                        rel="noreferrer noopener"
                        target="_blank"
                      >
                        <img src="/img/sponsors/amp.png" alt="Sponsor: AMP" />
                      </a>
                    </li>
                  </ul>

                  <ul>
                    <li className="col-lg-3">
                      <a
                        href="https://callrail.com/"
                        rel="noreferrer noopener"
                        target="_blank"
                      >
                        <img
                          src="/img/sponsors/callrail.png"
                          alt="Sponsor: CallRail"
                        />
                      </a>
                    </li>

                    <li class="col-lg-3">
                      <a
                        href="https://www.honeywell.com"
                        rel="noreferrer noopener"
                        target="_blank"
                      >
                        <img
                          src="/img/sponsors/honeywell.png"
                          alt="Sponsor: Honeywell"
                        />
                      </a>
                    </li>

                    <li class="col-lg-3 mr-0">
                      <a
                        href="https://rangle.io"
                        rel="noreferrer noopener"
                        target="_blank"
                      >
                        <img
                          src="/img/sponsors/rangle.png"
                          alt="Sponsor: Rangle"
                        />
                      </a>
                    </li>
                  </ul>

                  <hr />

                  <h2 className="text-center">VIP Reception</h2>

                  <ul>
                    <li className="col-lg-3 mr-0">
                      <a
                        href="https://www.netflix.com/"
                        rel="noreferrer noopener"
                        target="_blank"
                      >
                        <img
                          src="/img/sponsors/netflix.png"
                          alt="Sponsor: Netflix"
                        />
                      </a>
                    </li>
                  </ul>

                  <hr />

                  <h2 className="text-center">Silver</h2>

                  <ul>
                    <li className="col-lg-3  mr-0">
                      <a
                        href="https://google.com"
                        rel="noreferrer noopener"
                        target="_blank"
                      >
                        <img
                          src="/img/sponsors/google.png"
                          alt="Sponsor: Google"
                        />
                      </a>
                    </li>

                    <li className="col-lg-3">
                      <a
                        href="https://www.mailchimp.com/"
                        rel="noreferrer noopener"
                        target="_blank"
                      >
                        <img
                          src="/img/sponsors/mailchimp.png"
                          alt="Sponsor: Mailchimp"
                        />
                      </a>
                    </li>

                    <li class="col-lg-3 mr-0">
                      <a
                        href="https://www.twilio.com/"
                        rel="noreferrer noopener"
                        target="_blank"
                      >
                        <img
                          src="/img/sponsors/twilio.png"
                          alt="Sponsor: Twilio"
                        />
                      </a>
                    </li>
                  </ul>

                  <ul>
                    <li className="col-lg-3">
                      <a
                        href="https://tech.aarons.com/"
                        rel="noreferrer noopener"
                        target="_blank"
                      >
                        <img
                          src="/img/sponsors/aarons-tech.png"
                          alt="Sponsor: Aaron's Tech"
                        />
                      </a>
                    </li>

                    <li className="col-lg-3">
                      <a
                        href="https://www.ultimatesoftware.com/"
                        rel="noreferrer noopener"
                        target="_blank"
                      >
                        <img
                          src="/img/sponsors/ultimate-software.png"
                          alt="Sponsor: Ultimate Software"
                        />
                      </a>
                    </li>
                    <li className="col-lg-3 mr-0">
                      <a
                        href="https://www.abstract.com/"
                        rel="noreferrer noopener"
                        target="_blank"
                      >
                        <img
                          src="/img/sponsors/abstract.png"
                          alt="Sponsor: Abstract"
                        />
                      </a>
                    </li>
                  </ul>

                  <hr />

                  <h2 className="text-center">Video & Accessibility</h2>

                  <ul>
                    <li className="col-lg-3">
                      <a
                        href="https://www.samsara.com/"
                        rel="noreferrer noopener"
                        target="_blank"
                      >
                        <img
                          src="/img/sponsors/samsara.png"
                          alt="Sponsor: Samsara"
                        />
                      </a>
                    </li>
                    <li className="col-lg-3 mr-0">
                      <a
                        href="https://www.mozilla.com/"
                        rel="noreferrer noopener"
                        target="_blank"
                      >
                        <img
                          src="/img/sponsors/mozilla.png"
                          alt="Sponsor: Mozilla"
                        />
                      </a>
                    </li>
                  </ul>

                  <hr />

                  <h2 className="text-center">Lanyard & Name Badge</h2>

                  <ul>
                    <li className="col-lg-3 mr-0">
                      <a
                        href="https://auth0.com/"
                        rel="noreferrer noopener"
                        target="_blank"
                      >
                        <img
                          src="/img/sponsors/auth0.png"
                          alt="Sponsor: Auth0"
                        />
                      </a>
                    </li>
                    <li className="col-lg-3 mr-0">
                      <a
                        href="https://www.homedepot.com/"
                        rel="noreferrer noopener"
                        target="_blank"
                      >
                        <img
                          src="/img/sponsors/the-home-depot.png"
                          alt="Sponsor: The Home Depot"
                        />
                      </a>
                    </li>
                  </ul>

                  <hr />

                  <h2 className="text-center">Happy Hour</h2>
                  <ul>
                    <li className="col-lg-3 mr-0">
                      <a
                        href="https://www.cloudinary.com/"
                        rel="noreferrer noopener"
                        target="_blank"
                      >
                        <img
                          src="/img/sponsors/new_cloudinary_logo_square.png"
                          alt="Sponsor: Cloudinary"
                        />
                      </a>
                    </li>
                    <li className="col-lg-3">
                      <a
                        href="https://www.warnermediagroup.com/"
                        rel="noreferrer noopener"
                        target="_blank"
                      >
                        <img
                          src="/img/sponsors/warner_media.png"
                          alt="Sponsor: Warner Media"
                        />
                      </a>
                    </li>
                    <li class="col-lg-3 mr-0">
                      <a
                        href="https://www.twilio.com/"
                        rel="noreferrer noopener"
                        target="_blank"
                      >
                        <img
                          src="/img/sponsors/twilio.png"
                          alt="Sponsor: Twilio"
                        />
                      </a>
                    </li>
                  </ul>
                  <hr />

                  <h2 className="text-center">Opportunity Grants</h2>
                  <ul>
                    <li className="col-lg-3">
                      <a
                        href="https://www.homedepot.com/"
                        rel="noreferrer noopener"
                        target="_blank"
                      >
                        <img
                          src="/img/sponsors/the-home-depot.png"
                          alt="Sponsor: The Home Depot"
                        />
                      </a>
                    </li>

                    <li className="col-lg-3 mr-0">
                      <a
                        href="https://www.deluxe.com/"
                        rel="noreferrer noopener"
                        target="_blank"
                      >
                        <img
                          src="/img/sponsors/deluxe.png"
                          alt="Sponsor: Deluxe Corporation"
                        />
                      </a>
                    </li>
                  </ul>
                  <ul>
                    <li className="col-lg-3">
                      <a
                        href="https://bignerdranch.com/"
                        rel="noreferrer noopener"
                        target="_blank"
                      >
                        <img
                          src="/img/sponsors/bignerdranch.png"
                          alt="Sponsor: Big Nerd Ranch"
                        />
                      </a>
                    </li>
                    <li className="col-lg-3">
                      <a
                        href="https://balsamiq.com/"
                        rel="noreferrer noopener"
                        target="_blank"
                      >
                        <img
                          src="/img/sponsors/balsamiq.png"
                          alt="Sponsor: Balsamiq"
                        />
                      </a>
                    </li>
                    <li className="col-lg-3 mr-0">
                      <a
                        href="https://www.axios.com/"
                        rel="noreferrer noopener"
                        target="_blank"
                      >
                        <img
                          src="/img/sponsors/axios.png"
                          alt="Sponsor: Axios"
                        />
                      </a>
                    </li>
                  </ul>

                  <hr />

                  <h2 className="text-center">
                    Speaker Lounge & Hacker Lounge
                  </h2>
                  <ul>
                    <li className="col-lg-3 mr-0">
                      <a
                        href="https://www.terminus.com/"
                        rel="noreferrer noopener"
                        target="_blank"
                      >
                        <img
                          src="/img/sponsors/terminus.png"
                          alt="Sponsor: Terminus"
                        />
                      </a>
                    </li>
                    <li className="col-lg-3 mr-0">
                      <a
                        href="https://developer.microsoft.com/en-us/advocates/index.html"
                        rel="noreferrer noopener"
                        target="_blank"
                      >
                        <img
                          src="/img/sponsors/microsoft.png"
                          alt="Sponsor: Microsoft"
                        />
                      </a>
                    </li>
                  </ul>

                  <hr />

                  <h2 className="text-center">After Party</h2>
                  <ul>
                    <li class="col-lg-3 mr-0">
                      <a
                        href="https://www.cypress.io"
                        rel="noreferrer noopener"
                        target="_blank"
                      >
                        <img
                          src="/img/sponsors/cypress.png"
                          alt="Sponsor: Cypress.io"
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* /col end*/}
            </div>
            {/* /row end*/}
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
        {/*Our Sponsors Area End Here*/}
        {/*Main Container End Here*/}
      </div>
      <Footer />
    </div>
  </div>
);

export const speakerPageQuery = graphql`
  {
    allAirtable(
      filter: { table: { eq: "Speakers" }, data: { featured: { eq: true } } }
    ) {
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
`;
