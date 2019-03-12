import React from "react"
// import Header from "../components/header"
import Footer from "../components/footer"
// import { Link } from "gatsby"
import { WorkshopCardList } from '../components/WorkshopCardList'
import { SpeakerCardList } from '../components/SpeakerCardList'

import workshopData from './workshop-data'
import speakerData from './speaker-data'
import { withPrefix } from 'gatsby'

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
                    <a className="eventex-brand" href="index.html"><img src="assets/img/logo/logo-3.png?123" alt="logo" /></a>
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
                        <li className="nav-item active">
                          <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
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
                      <a className="pr-0" href="https://tickets.connectevents.io/events/rtech2019/">Tickets</a>
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
          {/*Feature Area Start Here*/}
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
               <SpeakerCardList items={speakerData}/>

                
                
              </div>
              {/* /row end*/}
            </div>
            {/* /container end*/}
          </div>
          {/*Whos Speaking Area End Here*/}
          {/*Our Sponsors Area Start Here*/}
          <div className="our-sponsers-area-tow pad100 bg-color">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="section-title text-center">
                    <div className="title-text mb50 xs-mb40">
                      <h2>Sponsor REFACTR.TECH</h2>
                      <p>Companies, are you looking for an opportunity to engage with hundreds of people from diverse backgrounds at our Exhibit Hall and Career Expo? Please take a few minutes to review the various ways to support REFACTR.TECH in our attached sponsorship prospectus</p>
                    </div>
                  </div>
                </div>
                {/* /col end*/}
              </div>
              <div className="col-lg-12">
                <div className="primary-btn text-center">
                  <a href="https://refactrtech.typeform.com/to/ouMvCw" className="btn-primary" rel="noreferrer noopener" target="_blank">Become a Sponsor</a>
                </div>
              </div>
              {/* /col end*/}
            </div>
            {/* /row end*/}
          </div>
          {/* /container end*/}
        </div>
        {/*Our Sponsors Area End Here*/}
        {/*Pricing Tables Area Start Here*/}
        {/*Pricing Tables Area End Here*/}
        {/*Counter Up Area Start Here*/}
        {/*Counter Up Area End Here*/}
        {/*Our Blog Area Start Here*/}
        {/*Our Blog Area End Here*/}
        {/*Contact Us Area Start Here*/}
        <div className="contact-us-area-two pad-top100 bg-contact parallax no-attm">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title text-center">
                  <div className="title-text mb50">
                    <h2>Location</h2>
                  </div>
                </div>
              </div>
              {/* /col end*/}
            </div>
            {/* /row end*/}
            <div className="row">
              {/*div class="col-lg-4 pr-0">
                        <div class="inner-box">
                            <form action="#">
                                <div class="row">
                                    <div class="col-lg-12 mb50">
                                        <input class="form-control" type="text" placeholder="Name" required>
                                    </div>
                                    <div class="col-lg-12 mb50">
                                        <input class="form-control" type="email" placeholder="Email" required>
                                    </div>
                                    <div class="col-lg-12 mb50">
                                        <input class="form-control" type="text" placeholder="Subject" required>
                                    </div>
                                    <div class="col-lg-12">
                                        <textarea class="form-control" name="message" placeholder="Message"></textarea>
                                    </div>
                                    <div class="col-lg-12">
                                        <button class="btn-primary" type="submit">Send Message</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div*/}
              {/* /col end*/}
              <div className="col-lg-12 pl-0">{/*was col-lg-8*/}
                {/*Google Map Start Here*/}
                <div className="gmap">
                  <div id="googlemap" />
                </div>
                {/*Google Map End Here*/}
              </div>
              {/* /col end*/}
            </div>
            {/* /row end*/}
          </div>
          {/* /container end*/}
        </div>
        {/*Contact Us Area End Here*/}

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
    <Footer/>
  </div>
)
