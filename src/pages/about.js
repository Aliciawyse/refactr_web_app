import React from "react";
// import Header from "../components/header"
// import Footer from "../components/footer"
import NavigationBar from "../components/NavigationBar";

export default () => (
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
      <NavigationBar />
      {/*Header End Here*/}
      {/*About Us Area Start Here*/}
      <div className="about-us-area pad-head bg-about">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="about-content">
                <div className="section-title text-center">
                  <h2>About Us</h2>
                </div>
                <ol className="breadcrumb">
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>|</li>
                  <li>About us</li>
                </ol>
              </div>
            </div>
            {/* /col*/}
          </div>
          {/* /row*/}
        </div>
        {/*/ container*/}
      </div>
      {/*About Us Area End Here*/}
      {/*Conference Synopsis Area Start Here*/}
      <div className="conference-synopsis-area about pad100">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 xs-mb40">
              <img
                className="img-fluid"
                src="assets/img/others/element.png?123"
                alt="element"
              />
            </div>
            <div className="col-lg-7">
              <div className="inner-content">
                <div className="section-title">
                  <div className="title-text pl">
                    <h2>About REFACTR.TECH</h2>
                  </div>
                </div>
                <p>
                  REFACTR.TECH is all about growing and showcasing powerful
                  voices of marginalized people and allies in tech. For three
                  days, REFACTR.TECH focuses on technology while creating a safe
                  space or thoughtful and nuanced conversations around
                  diversity, inclusion, and intersectionality in tech.
                </p>
                <p>
                  At REFACTR.TECH, we’ll focus on creating an inclusive
                  environment which features marginalized people and allies
                  doing amazing work. We offer a combination of workshops,
                  keynote, and track sessions to expand knowledge, hone
                  technical skills, and make important connections.
                </p>
                <p>
                  REFACTR.TECH provides content valuable to a wide range of
                  experience levels and interests. We’ll offer highly technical
                  topics of interest to intermediate to senior developers, as
                  well as beginner-friendly sessions and workshops. Leadership,
                  career development and product tracks are appropriate for any
                  experience level.
                </p>
              </div>
            </div>
            {/* /col end*/}
          </div>
          {/* /row end*/}
        </div>
        {/* /container end*/}
      </div>
      {/*Conference Synopsis Area End Here*/}
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
      {/*Conference Organizers Area Starts Here*/}
      <div className="speakers-single-area pad100">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-12">
              <div className="speakers-img">
                <img
                  className="img-fluid"
                  src="assets/img/team/organizers/angel.jpg"
                  alt="Angel"
                  width={400}
                  height={400}
                />
              </div>
            </div>
            {/* /.col end*/}
            <div className="col-lg-7 col-md-12">
              <div className="inner-content">
                <h1>Angel Banks</h1>
                <span>Product Designer, First Data</span>
                <p>
                  Angel Banks specializes in UX strategy and design for
                  enterprise, finance, healthcare, and biotech applications. She
                  has a background in front-end development, project management,
                  and product management. Active in the Atlanta tech community,
                  she is a Director of Women Who Code Atlanta, Women Techmakers
                  Atlanta Lead, Curriculum Director of Girl Develop It Atlanta,
                  and co-organizer of We RISE Tech, DevFest Atlanta, and
                  ngAtlanta conferences.
                </p>
                <div className="social-icon">
                  <ul>
                    <li>
                      <a href="https://www.linkedin.com/in/angelmbanks/">
                        <i className="fa fa-linkedin" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.twitter.com/angelmbanks">
                        <i className="fa fa-twitter" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* /.col end*/}
          </div>
          {/* /.row end*/}
          <div className="row pad100">
            <div className="col-lg-5 col-md-12">
              <div className="speakers-img">
                <img
                  className="img-fluid"
                  src="assets/img/team/organizers/beth.jpg"
                  alt="Beth Laing"
                />
              </div>
            </div>
            {/* /.col end*/}
            <div className="col-lg-7 col-md-12">
              <div className="inner-content">
                <h1>Beth Laing</h1>
                <span>Software Developer/Scrum Master, CNN/Turner</span>
                <p>
                  Beth grew-up in online journalism, working with newspaper
                  companies in Atlanta, GA, San Jose, CA and Saint Paul, MN with
                  a detour to work for an internet start-up, Infonautics, in
                  Philadelphia, PA along the way. After leaving the world of
                  newspapers, Beth worked as a project manager for organizations
                  focused on news and technology.{" "}
                </p>
                <p className="mb-0">
                  In 2015 she transitioned into software development with the
                  help of a full immersion bootcamp. As one of the directors for
                  Women Who Code's Atlanta chapter, Beth works to create great
                  programming and build community for the amazing women in
                  technology of Atlanta. She is passionate about making
                  technology a welcoming community for everyone and breaking
                  down barriers. Beth works at Turner in software development on
                  a variety of internal projects. She spends a lot of time
                  figuring out why things don't work and how to fix them!
                </p>
                <div className="social-icon">
                  <ul>
                    <li>
                      <a href="https://www.linkedin.com/in/bethlaing/">
                        <i className="fa fa-linkedin" />
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com/laingbeth">
                        <i className="fa fa-twitter" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* /.col end*/}
          </div>
          {/* /.row end*/}
          <div className="row">
            <div className="col-lg-5 col-md-12">
              <div className="speakers-img">
                <img
                  className="img-fluid"
                  src="assets/img/team/organizers/erica.jpg"
                  alt="Erica Stanley"
                />
              </div>
            </div>
            {/* /.col end*/}
            <div className="col-lg-7 col-md-12">
              <div className="inner-content">
                <h1>Erica Stanley</h1>
                <span>Engineering Manager, SalesLoft</span>
                <p>
                  Erica Stanley is a software engineer, entrepreneur and tech
                  diversity &amp; inclusion advocate. She is a software
                  engineering manager at SalesLoft – where she’s helping grow
                  the product engineering team for the 4th fastest growing
                  software company in North America and #1 best place to work in
                  Atlanta. She’s worked with Fortune 500 companies, including
                  Boeing, FOX Interactive Media, Turner Broadcasting, and
                  Oracle, as well as early-stage and pre-acquisition startups.
                </p>
                <p className="mb-0">
                  Erica is active in the Atlanta technology community. She helps
                  develop and teach youth coding programs, speaks at local
                  hackathons, conferences, and user groups and mentors
                  entrepreneurs for various incubators and accelerators. She
                  also founded the Atlanta network of Women Who Code, where she
                  organizes conferences, hackathons, developer workshops,
                  monthly tech talks and networking events for women
                  technologists.{" "}
                </p>
                <div className="social-icon">
                  <ul>
                    <li>
                      <a href="https://www.linkedin.com/in/ericastanley/">
                        <i className="fa fa-linkedin" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.twitter.com/ericastanley">
                        <i className="fa fa-twitter" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* /.col end*/}
          </div>
          {/* /.row end*/}
        </div>
        {/* /.container end*/}
      </div>
      {/*Conference Organizers Area Ends Here*/}
      {/* Motivational Concepts	Area Start Here*/}
      {/* Motivational Concepts	End Start Here*/}
      {/*Contact Us Area Start Here*/}
      {/*Contact Us Area End Here*/}
      {/*Footer Area Start Here*/}
      <div className="footer-area bg-footer parallax ptb">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="am">
                <div className="f-logo">
                  <img
                    src="assets/img/logo/logo-2.png?123"
                    width={428}
                    height={188}
                    alt="logo"
                  />
                </div>
                <div className="border-right" />
              </div>
            </div>
            {/* /col end*/}
            <div className="col-lg-6 offset-1">
              <div id="mc_embed_signup" className="f-content">
                <div className="inner-content">
                  <div className="f-icon">
                    <i className="fa fa-map-marker" />
                  </div>
                  <span>
                    40 Courtland St NE
                    <br /> Atlanta, GA 30303
                  </span>
                </div>
                <p>
                  Don't miss the buzz about our speakers, sessions and events!
                  Sign up below to get the latest news about REFACTR.TECH right
                  in your inbox.{" "}
                </p>
                <div id="mc_embed_signup_scroll" className="sub-btn">
                  <form
                    action="https://tech.us19.list-manage.com/subscribe/post?u=5ae8995a4bf065a3c7cd6ad50&id=e8f624f474"
                    method="post"
                    id="mc-embedded-subscribe-form"
                    name="mc-embedded-subscribe-form"
                    className="validate"
                    target="_blank"
                    noValidate
                  >
                    <input
                      type="text"
                      placeholder="Your email address "
                      name="EMAIL"
                      className="required email"
                      id="mce-EMAIL"
                    />
                    <div id="mce-responses" className="clear">
                      <div
                        className="response"
                        id="mce-error-response"
                        style={{ display: "none" }}
                      />
                      <div
                        className="response"
                        id="mce-success-response"
                        style={{ display: "none" }}
                      />
                    </div>{" "}
                    {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups*/}
                    <div
                      style={{ position: "absolute", left: "-5000px" }}
                      aria-hidden="true"
                    >
                      <input
                        type="text"
                        name="b_5ae8995a4bf065a3c7cd6ad50_e8f624f474"
                        tabIndex={-1}
                        defaultValue
                      />
                    </div>
                    <button
                      type="submit"
                      value="Subscribe"
                      name="subscribe"
                      id="mc-embedded-subscribe"
                    >
                      Subscribe
                    </button>
                  </form>
                </div>
                <div className="f-social">
                  <ul>
                    <li>
                      <a href="https://twitter.com/RefactrTech">
                        <i className="fa fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/RefactrTech/">
                        <i className="fa fa-instagram" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* /col end*/}
          </div>
          {/* /row end*/}
          <div className="row">
            <div className="col-lg-12">
              <div className="copyright">
                <p>
                  ©2018-2019 ConnectEvents.io &nbsp;&nbsp;&nbsp;&nbsp;{" "}
                  <a href="privacy-policy.html">Privacy Policy</a>
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* /container end*/}
      </div>
      {/*Footer Area End Here*/}
    </div>
    {/*Main Container End Here*/}
    {/*All Js Here*/}
    {/* jquery latest version */}
    {/*Migrate Js*/}
    {/*Popper Js*/}
    {/*Bootstrap Js*/}
    {/*Owl-Carousel Js*/}
    {/*Counter-Up Js*/}
    {/*Waypoints Js*/}
    {/*Lightbox Js*/}
    {/*Appear Js*/}
    {/*Jquery Ui Js*/}
    {/*Wow Js*/}
    {/*Plugins Js*/}
    {/* template main js file */}
  </div>
);
