import React from "react"
import Footer from "../components/footer"

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
          <header className="header base-style-2 white-color">
            <div className="container">
              <div className="row">
                <div className="col-lg-2">
                  <div className="brand-logo">
                    <a className="eventex-brand" href="/"><img src="/img/logo/logo-3.png?123" alt="logo" /></a>
                  </div>
                </div>
                {/* /col end*/}
                <div className="col-lg-8">
                  <nav className="navbar navbar-expand-lg">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"><i className="fa fa-bars" /></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                      <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                          <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item active">
                          <a className="nav-link" href="/about">About</a>
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
                          <a className="nav-link" href="/code-of-conduct">Code of Conduct</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link " href="https://cfp.connectevents.io/en/refactr2019/cfp/session/new" rel="noreferrer noopener" target="_blank">Call for Speakers</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="https://shop.refactr.tech" rel="noreferrer noopener" target="_blank">Shop</a>
                        </li>
                        <li className="nav-item d-lg-none ">
                          <a className="nav-link" href="https://tickets.connectevents.io/events/rtech2019/" rel="noreferrer noopener" target="_blank">Tickets</a>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>
                {/* /col end*/}
                <div className="col-lg-2 d-none d-lg-block">
                  <ul>
                    <li className="header-ticket">
                      <a className="pr-0" href="https://tickets.connectevents.io/events/rtech2019/" rel="noreferrer noopener" target="_blank">Tickets</a>
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
                      <li><a href="/">Home</a></li>
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
                  <img className="img-fluid" src="assets/img/others/element.png?123" alt="element" />
                </div>
                <div className="col-lg-7">
                  <div className="inner-content">
                    <div className="section-title">
                      <div className="title-text pl">
                        <h2>About REFACTR.TECH</h2>
                      </div>
                    </div>
                    <p>REFACTR.TECH is all about growing and
                      showcasing powerful voices of marginalized people
                      and allies in tech. For three days, REFACTR.TECH
                      focuses on technology while creating a safe space or thoughtful and nuanced conversations around diversity,
                      inclusion, and intersectionality in tech.</p>
                    <p>
                      At REFACTR.TECH, we’ll focus on creating an inclusive environment which
                      features marginalized people and allies doing amazing work. We offer a combination
                      of workshops, keynote, and track sessions to expand knowledge, hone technical skills,
                      and make important connections.</p>
                    <p>REFACTR.TECH provides content valuable to a wide range of experience levels and interests.
                      We’ll offer highly technical topics of interest to intermediate to senior developers, as
                      well as beginner-friendly sessions and workshops. Leadership, career development
                      and product tracks are appropriate for any experience level.</p>
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
                    <img className="img-fluid" src="assets/img/team/organizers/angel.jpg" alt="Angel" width={400} height={400} />
                  </div>
                </div>
                {/* /.col end*/}
                <div className="col-lg-7 col-md-12">
                  <div className="inner-content">
                    <h1>Angel Banks</h1>
                    <span>Product Designer, First Data</span>
                    <p>Angel Banks specializes in UX strategy and design for enterprise, finance, healthcare, and biotech applications. She has a background in front-end development, project management, and product management. Active in the Atlanta tech community, she is a Director of Women Who Code Atlanta, Women Techmakers Atlanta Lead, Curriculum Director of Girl Develop It Atlanta, and co-organizer of We RISE Tech, DevFest Atlanta, and ngAtlanta conferences.</p>
                    <div className="social-icon">
                      <ul>
                        <li><a href="https://www.linkedin.com/in/angelmbanks/"><i className="fa fa-linkedin" /></a></li>
                        <li><a href="https://www.twitter.com/angelmbanks"><i className="fa fa-twitter" /></a></li>
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
                    <img className="img-fluid" src="assets/img/team/organizers/beth.jpg" alt="Beth Laing" />
                  </div>
                </div>
                {/* /.col end*/}
                <div className="col-lg-7 col-md-12">
                  <div className="inner-content">
                    <h1>Beth Laing</h1>
                    <span>Software Developer/Scrum Master, CNN/Turner</span>
                    <p>Beth grew-up in online journalism, working with newspaper companies in Atlanta, GA, San Jose, CA and Saint Paul, MN with a detour to work for an internet start-up, Infonautics, in Philadelphia, PA along the way. After leaving the world of newspapers, Beth worked as a project manager for organizations focused on news and technology. </p>
                    <p className="mb-0">In 2015 she transitioned into software development with the help of a full immersion bootcamp. As one of the directors for Women Who Code's Atlanta chapter, Beth works to create great programming and build community for the amazing women in technology of Atlanta. She is passionate about making technology a welcoming community for everyone and breaking down barriers. Beth works at Turner in software development on a variety of internal projects. She spends a lot of time figuring out why things don't work and how to fix them!
                    </p>
                    <div className="social-icon">
                      <ul>
                        <li><a href="https://www.linkedin.com/in/bethlaing/"><i className="fa fa-linkedin" /></a></li>
                        <li><a href="https://twitter.com/laingbeth"><i className="fa fa-twitter" /></a></li>
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
                    <img className="img-fluid" src="assets/img/team/organizers/erica.jpg" alt="Erica Stanley" />
                  </div>
                </div>
                {/* /.col end*/}
                <div className="col-lg-7 col-md-12">
                  <div className="inner-content">
                    <h1>Erica Stanley</h1>
                    <span>Engineering Manager, SalesLoft</span>
                    <p>Erica Stanley is a software engineer, entrepreneur and tech diversity &amp; inclusion advocate. She is a software engineering manager at SalesLoft – where she’s helping grow the product engineering team for the 4th fastest growing software company in North America and #1 best place to work in Atlanta. She’s worked with Fortune 500 companies, including Boeing, FOX Interactive Media, Turner Broadcasting, and Oracle, as well as early-stage and pre-acquisition startups.</p>
                    <p className="mb-0">Erica is active in the Atlanta technology community. She helps develop and teach youth coding programs, speaks at local hackathons, conferences, and user groups and mentors entrepreneurs for various incubators and accelerators. She also founded the Atlanta network of Women Who Code, where she organizes conferences, hackathons, developer workshops, monthly tech talks and networking events for women technologists.                          </p>
                    <div className="social-icon">
                      <ul>
                        <li><a href="https://www.linkedin.com/in/ericastanley/"><i className="fa fa-linkedin" /></a></li>
                        <li><a href="https://www.twitter.com/ericastanley"><i className="fa fa-twitter" /></a></li>
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
          <Footer/>

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
)

