import React from "react"
// import Header from "../components/header"
import Footer from "../components/footer"
// import { Link } from "gatsby"
import { WorkshopCardList } from '../components/WorkshopCardList'
import workshopData from './workshop-data'

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
                    {/* <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                      <div className="single-blog mb30">
                        <div className="blog-img">
                          <a href="workshops.html#vue-vixens"><img className="img-fluid" src="assets/img/workshops/vue-vixens.png" alt="Vue Vixens Workshop" /></a>
                        </div>
                        <div className="blog-content">
                          <a href="workshops.html#vue-vixens">
                            <h3>Vue Vixens Skulk</h3>
                          </a>
                          <p>Vue Vixens is an initiative that aims to create workshops to teach Vue.js in a cool and fun way to foxy people who identify as women. It is based on the successful model...
                          </p>
                          <div className="date">
                            <p>
                              <span className="bordered-btn"><a href="workshops.html#vue-vixens">See Details</a></span>
                              <span className="float-right primary-btn"><a className="btn-primary" href="https://tickets.connectevents.io/events/rtech2019/" rel="noreferrer noopener" target="_blank">Buy Tickets</a></span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                      <div className="single-blog mb30">
                        <div className="blog-img">
                          <a href="workshops.html#cypress"><img className="img-fluid" src="assets/img/workshops/cypress.png" alt="Cypress Workshop" /></a>
                        </div>
                        <div className="blog-content">
                          <a href="workshops.html#cypress">
                            <h3>Next-Generation End-to-End Testing with Cypress</h3>
                          </a>
                          <p>We all want to consistently ship quality software. One of the best ways to do that is by end-to-end (E2E) testing our code...
                          </p>
                          <div className="date">
                            <p>
                              <span className="bordered-btn"><a href="workshops.html#cypress">See Details</a></span>
                              <span className="float-right primary-btn"><a className="btn-primary" href="https://tickets.connectevents.io/events/rtech2019/" rel="noreferrer noopener" target="_blank">Buy Tickets</a></span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                      <div className="single-blog mb30">
                        <div className="blog-img">
                          <a href="workshops.html#graphql"><img className="img-fluid" src="assets/img/workshops/graphql.png" alt="GraphQL Workshop" /></a>
                        </div>
                        <div className="blog-content">
                          <a href="workshops.html#graphql">
                            <h3>Let's Learn GraphQL: The End of REST</h3>
                          </a>
                          <p>GraphQL is a technology that is poised to replace, or at the very least, drastically change the way APIs are designed...
                          </p>
                          <div className="date">
                            <p>
                              <span className="bordered-btn"><a href="workshops.html#graphql">See Details</a></span>
                              <span className="float-right primary-btn"><a className="btn-primary" href="https://tickets.connectevents.io/events/rtech2019/" rel="noreferrer noopener" target="_blank">Buy Tickets</a></span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                      <div className="single-blog mb30">
                        <div className="blog-img">
                          <a href="workshops.html#gatsby"><img className="img-fluid" src="assets/img/workshops/gatsby.png" alt="Gatsby Workshop" /></a>
                        </div>
                        <div className="blog-content">
                          <a href="workshops.html#gatsby">
                            <h3>We're Not in East Egg, Anymore: GatsbyJS in Practice</h3>
                          </a>
                          <p>GatsbyJS implements many of the best practices of modern web development all while providing a quick to load and render static...
                          </p>
                          <div className="date">
                            <p>
                              <span className="bordered-btn"><a href="workshops.html#gatsby">See Details</a></span>
                              <span className="float-right primary-btn"><a className="btn-primary" href="https://tickets.connectevents.io/events/rtech2019/" rel="noreferrer noopener" target="_blank">Buy Tickets</a></span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                      <div className="single-blog mb30">
                        <div className="blog-img">
                          <a href="workshops.html#a11y"><img className="img-fluid" src="assets/img/workshops/a11y.png" alt="Accessibility Workshop" /></a>
                        </div>
                        <div className="blog-content">
                          <a href="workshops.html#a11y">
                            <h3>Rea11y Simple A11y: A Focused Accessibility Workshop</h3>
                          </a>
                          <p>Accessibility on the web is increasing in visibility, yet some web creators are still unfamiliar with how to create an amazing...
                          </p>
                          <div className="date">
                            <p>
                              <span className="bordered-btn"><a href="workshops.html#a11y">See Details</a></span>
                              <span className="float-right primary-btn"><a className="btn-primary" href="https://tickets.connectevents.io/events/rtech2019/" rel="noreferrer noopener" target="_blank">Buy Tickets</a></span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                      <div className="single-blog mb30">
                        <div className="blog-img">
                          <a href="workshops.html#flutter"><img className="img-fluid" src="assets/img/workshops/flutter.png" alt="Flutter Workshop" /></a>
                        </div>
                        <div className="blog-content">
                          <a href="workshops.html#flutter">
                            <h3>Get Flapping with Flutter</h3>
                          </a>
                          <p>Flutter is a new tool from Google that allows you to quickly create beautiful native apps for iOS and Android from a single codebase. We'll take attendees...
                          </p>
                          <div className="date">
                            <p>
                              <span className="bordered-btn"><a href="workshops.html#flutter">See Details</a></span>
                              <span className="float-right primary-btn"><a className="btn-primary" href="https://tickets.connectevents.io/events/rtech2019/" rel="noreferrer noopener" target="_blank">Buy Tickets</a></span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div> */}
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
                <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12">
                  <div className="speakers xs-mb30">
                    <div className="spk-img">
                      <img className="img-fluid" src="assets/img/speakers/tracy-lee.jpeg" alt="trainer-img" />
                      <ul>
                        <li><a href="https://twitter.com/ladyleet"><i className="fa fa-twitter" /></a></li>
                        <li><a href="https://www.linkedin.com/in/tracyslee/"><i className="fa fa-linkedin" /></a></li>
                      </ul>
                    </div>
                    <div className="spk-info">
                      <a href="https://twitter.com/ladyleet" rel="noreferrer noopener" target="_blank">
                        <h3>Tracy Lee</h3>
                      </a>
                      <p>Co-Founder</p>
                      <h6>This Dot</h6>
                    </div>
                  </div>
                </div>
                {/* /col end*/}
                <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12">
                  <div className="speakers">
                    <div className="spk-img">
                      <img className="img-fluid" src="assets/img/speakers/mekka-okereke.png" alt="trainer-img" />
                      <ul>
                        <li><a href="https://twitter.com/mekkaokereke"><i className="fa fa-twitter" /></a></li>
                        <li><a href="https://www.linkedin.com/in/mekka-okereke-05274b5/"><i className="fa fa-linkedin" /></a></li>
                      </ul>
                    </div>
                    <div className="spk-info">
                      <a href="https://twitter.com/mekkaokereke" rel="noreferrer noopener" target="_blank">
                        <h3>Mekka Okereke</h3>
                      </a>
                      <p>Engineering Director</p>
                      <h6>Google</h6>
                    </div>
                  </div>
                </div>
                {/* /col end*/}
                <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12">
                  <div className="speakers xs-mb30">
                    <div className="spk-img">
                      <img className="img-fluid" src="assets/img/speakers/ZLEZUV_u_400x400.jpg" alt="trainer-img" />
                      <ul>
                        <li><a href="https://twitter.com/Tzmanics"><i className="fa fa-twitter" /></a></li>
                        <li><a href="https://www.linkedin.com/in/tzmanicsic/"><i className="fa fa-linkedin" /></a></li>
                      </ul>
                    </div>
                    <div className="spk-info">
                      <a href="https://twitter.com/Tzmanics" rel="noreferrer noopener" target="_blank">
                        <h3>Tara Z. Manicsic</h3>
                      </a>
                      <p>Developer Advocate</p>
                      <h6>Progress</h6>
                    </div>
                  </div>
                </div>
                {/* /col end*/}
                <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12">
                  <div className="speakers xs-mb30">
                    <div className="spk-img">
                      <img className="img-fluid" src="assets/img/speakers/Alicia Carr.jpeg" alt="trainer-img" />
                      <ul>
                        <li><a href="https://twitter.com/Fineblkwoman"><i className="fa fa-twitter" /></a></li>
                        <li><a href="https://www.linkedin.com/in/pevoapp/"><i className="fa fa-linkedin" /></a></li>
                      </ul>
                    </div>
                    <div className="spk-info">
                      <a href="https://twitter.com/Fineblkwoman" rel="noreferrer noopener" target="_blank">
                        <h3>Alicia Carr</h3>
                      </a>
                      <p> CEO &amp; Founder</p>
                      <h6>Purple Evolution Inc. (PEVO)</h6>
                    </div>
                  </div>
                </div>
                {/* /col end*/}
                {/* /row end*/}
                <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12">
                  <div className="speakers">
                    <div className="spk-img">
                      <img className="img-fluid" src="assets/img/speakers/Tia-Caldwell.png" alt="trainer-img" />
                      <ul>
                        <li><a href="https://twitter.com/_Tiacaldwell"><i className="fa fa-twitter" /></a></li>
                        <li><a href="https://www.linkedin.com/in/tia-caldwell/"><i className="fa fa-linkedin" /></a></li>
                      </ul>
                    </div>
                    <div className="spk-info">
                      <a href="https://twitter.com/_Tiacaldwell" rel="noreferrer noopener" target="_blank">
                        <h3>Tia Caldwell</h3>
                      </a>
                      <p>Sr. Engineering Manager</p>
                      <h6>Slack</h6>
                    </div>
                  </div>
                </div>
                {/* /col end*/}
                <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12">
                  <div className="speakers xs-mb30">
                    <div className="spk-img">
                      <img className="img-fluid" src="assets/img/speakers/jennifer-bland.jpeg" alt="trainer-img" />
                      <ul>
                        <li><a href="https://twitter.com/ratracegrad"><i className="fa fa-twitter" /></a></li>
                        <li><a href="https://www.linkedin.com/in/ratracegrad/"><i className="fa fa-linkedin" /></a></li>
                      </ul>
                    </div>
                    <div className="spk-info">
                      <a href="https://twitter.com/ratracegrad" rel="noreferrer noopener" target="_blank">
                        <h3>Jennifer Bland</h3>
                      </a>
                      <p>Sr. Software Engineer</p>
                      <h6>Stanley Black &amp; Decker</h6>
                    </div>
                  </div>
                </div>
                {/* /col end*/}
                <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12">
                  <div className="speakers xs-mb30">
                    <div className="spk-img">
                      <img className="img-fluid" src="assets/img/speakers/jP07Rsrs_400x400.jpg" alt="trainer-img" />
                      <ul>
                        <li><a href="https://twitter.com/osagaius"><i className="fa fa-twitter" /></a></li>
                        <li><a href="https://www.linkedin.com/in/osagaius/"><i className="fa fa-linkedin" /></a></li>
                      </ul>
                    </div>
                    <div className="spk-info">
                      <a href="https://twitter.com/osagaius" rel="noreferrer noopener" target="_blank">
                        <h3>Osa Gaius</h3>
                      </a>
                      <p>Software Engineer</p>
                      <h6>Mailchimp</h6>
                    </div>
                  </div>
                </div>
                {/* /col end*/}
                <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12">
                  <div className="speakers xs-mb30">
                    <div className="spk-img">
                      <img className="img-fluid" src="assets/img/speakers/mike-hartington.png" alt="trainer-img" />
                      <ul>
                        <li><a href="https://twitter.com/mhartington"><i className="fa fa-twitter" /></a></li>
                        <li><a href="https://www.linkedin.com/in/mike-hartington-63638362/"><i className="fa fa-linkedin" /></a></li>
                      </ul>
                    </div>
                    <div className="spk-info">
                      <a href="https://twitter.com/mhartington" rel="noreferrer noopener" target="_blank">
                        <h3>Mike Hartington</h3>
                      </a>
                      <p>Developer Advocate</p>
                      <h6>Ionic</h6>
                    </div>
                  </div>
                </div>
                {/* /col end*/}
                {/* /row end*/}
                <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12">
                  <div className="speakers">
                    <div className="spk-img">
                      <img className="img-fluid" src="assets/img/speakers/Chloe-Headshot.jpg" alt="trainer-img" />
                      <ul>
                        <li><a href="https://twitter.com/ChloeCondon"><i className="fa fa-twitter" /></a></li>
                        <li><a href="https://www.linkedin.com/in/chloecondon/"><i className="fa fa-linkedin" /></a></li>
                      </ul>
                    </div>
                    <div className="spk-info">
                      <a href="https://twitter.com/ChloeCondon" rel="noreferrer noopener" target="_blank">
                        <h3>Chloe Condon</h3>
                        <p>Sr. Cloud Developer Advocate</p>
                        <h6>Microsoft</h6>
                      </a>
                    </div>
                  </div>
                </div>
                {/* /col end*/}
                <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12">
                  <div className="speakers xs-mb30">
                    <div className="spk-img">
                      <img className="img-fluid" src="assets/img/speakers/tara-walker.jpg" alt="trainer-img" />
                      <ul>
                        <li><a href="https://twitter.com/taraw"><i className="fa fa-twitter" /></a></li>
                        <li><a href="https://www.linkedin.com/in/taraewalker/"><i className="fa fa-linkedin" /></a></li>
                      </ul>
                    </div>
                    <div className="spk-info">
                      <a href="https://twitter.com/taraw" rel="noreferrer noopener" target="_blank">
                        <h3>Tara Walker</h3>
                      </a>
                      <p>Principle Software Engineer</p>
                      <h6>Microsoft</h6>
                    </div>
                  </div>
                </div>
                {/* /col end*/}
                <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12">
                  <div className="speakers xs-mb30">
                    <div className="spk-img">
                      <img className="img-fluid" src="assets/img/speakers/Ray-Gesualdo.jpg" alt="trainer-img" />
                      <ul>
                        <li><a href="https://twitter.com/RayGesualdo"><i className="fa fa-twitter" /></a></li>
                        <li><a href="https://www.linkedin.com/in/raygesualdo/"><i className="fa fa-linkedin" /></a></li>
                      </ul>
                    </div>
                    <div className="spk-info">
                      <a href="https://twitter.com/RayGesualdo" rel="noreferrer noopener" target="_blank">
                        <h3>Ray Gesualdo</h3>
                      </a>
                      <p>UI Engineer</p>
                      <h6>SalesLoft</h6>
                    </div>
                  </div>
                </div>
                {/* /col end*/}
                <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12">
                  <div className="speakers">
                    <div className="spk-img">
                      <img className="img-fluid" src="assets/img/speakers/diana.png?123" alt="trainer-img" />
                      <ul>
                        <li><a href="https://twitter.com/cotufa82"><i className="fa fa-twitter" /></a></li>
                        <li><a href="https://www.linkedin.com/in/nerdattack82/"><i className="fa fa-linkedin" /></a></li>
                      </ul>
                    </div>
                    <div className="spk-info">
                      <a href="https://twitter.com/cotufa82" rel="noreferrer noopener" target="_blank">
                        <h3>Diana Rodriguez</h3>
                      </a>
                      <p>Sr. DevOps/SRE &amp; Full Stack Dev</p>
                      <h6>This Dot</h6>
                    </div>
                  </div>
                </div>
                {/* /col end*/}
                {/* /row end*/}
                {/*div class="offset-2 no-gutter"></div*/}
                {/* /col end*/}
                <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12">
                  <div className="speakers xs-mb30">
                    <div className="spk-img">
                      <img className="img-fluid" src="assets/img/speakers/jen-looper-firstchoice.jpg" alt="trainer-img" />
                      <ul>
                        <li><a href="https://twitter.com/jenlooper"><i className="fa fa-twitter" /></a></li>
                        <li><a href="https://www.linkedin.com/in/jen-looper-3442413/"><i className="fa fa-linkedin" /></a></li>
                      </ul>
                    </div>
                    <div className="spk-info">
                      <a href="https://twitter.com/jenlooper" rel="noreferrer noopener" target="_blank">
                        <h3>Jen Looper</h3>
                      </a>
                      <p>Senior Developer Advocate</p>
                      <h6>Progress</h6>
                    </div>
                  </div>
                </div>
                {/* /col end*/}
                <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12">
                  <div className="speakers">
                    <div className="spk-img">
                      <img className="img-fluid" src="assets/img/speakers/thumb_brandon_kearns.jpg" alt="trainer-img" />
                      <ul>
                        <li><a href="https://twitter.com/brandon_kearns"><i className="fa fa-twitter" /></a></li>
                        <li><a href="https://www.linkedin.com/in/brandonjkearns/"><i className="fa fa-linkedin" /></a></li>
                      </ul>
                    </div>
                    <div className="spk-info">
                      <a href="https://twitter.com/brandon_kearns" rel="noreferrer noopener" target="_blank">
                        <h3>Brandon Kearns</h3>
                      </a>
                      <p>Staff Software Engineer</p>
                      <h6>The Home Depot</h6>
                    </div>
                  </div>
                </div>
                {/* /col end*/}
                <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12">
                  <div className="speakers">
                    <div className="spk-img">
                      <img className="img-fluid" src="assets/img/speakers/jeremy-likness.jpg" alt="trainer-img" />
                      <ul>
                        <li><a href="https://twitter.com/jeremylikness"><i className="fa fa-twitter" /></a></li>
                        <li><a href="https://www.linkedin.com/in/jeremylikness/"><i className="fa fa-linkedin" /></a></li>
                      </ul>
                    </div>
                    <div className="spk-info">
                      <a href="https://twitter.com/jeremylikness" rel="noreferrer noopener" target="_blank">
                        <h3>Jeremy Likness</h3>
                      </a>
                      <p>Sr. Cloud Developer Advocate</p>
                      <h6>Microsoft</h6>
                    </div>
                  </div>
                </div>
                {/* /col end*/}
                <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12">
                  <div className="speakers">
                    <div className="spk-img">
                      <img className="img-fluid" src="assets/img/speakers/jared-jordan.jpg" alt="trainer-img" />
                      <ul>
                        <li><a href="https://twitter.com/jaredjordan"><i className="fa fa-twitter" /></a></li>
                        <li><a href="https://www.linkedin.com/in/jkjordan/"><i className="fa fa-linkedin" /></a></li>
                      </ul>
                    </div>
                    <div className="spk-info">
                      <a href="https://twitter.com/jaredjordan" rel="noreferrer noopener" target="_blank">
                        <h3>Jared Jordan</h3>
                      </a>
                      <p>UI Engineering Manager</p>
                      <h6>Netflix</h6>
                    </div>
                  </div>
                </div>
                {/* /col end*/}
                <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12">
                  <div className="speakers">
                    <div className="spk-img">
                      <img className="img-fluid" src="assets/img/speakers/Brandon-Roberts.jpg" alt="trainer-img" />
                      <ul>
                        <li><a href="https://twitter.com/brandontroberts"><i className="fa fa-twitter" /></a></li>
                      </ul>
                    </div>
                    <div className="spk-info">
                      <a href="https://twitter.com/brandontroberts" rel="noreferrer noopener" target="_blank">
                        <h3>Brandon Roberts</h3>
                      </a>
                      <p>Software Engineer</p>
                      <h6>Angular/ NgRx Core Team</h6>
                    </div>
                  </div>
                </div>
                {/* /col end*/}
                <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12">
                  <div className="speakers">
                    <div className="spk-img">
                      <img className="img-fluid" src="assets/img/speakers/rob-ocel.png" alt="trainer-img" />
                      <ul>
                        <li><a href="https://twitter.com/robocell"><i className="fa fa-twitter" /></a></li>
                        <li><a href="https://www.linkedin.com/in/rob-ocel-88600013/"><i className="fa fa-linkedin" /></a></li>
                      </ul>
                    </div>
                    <div className="spk-info">
                      <a href="https://twitter.com/robocell" rel="noreferrer noopener" target="_blank">
                        <h3>Rob Ocel</h3>
                      </a>
                      <p>Sr. Software Engineer</p>
                      <h6>This Dot</h6>
                    </div>
                  </div>
                </div>
                {/* /col end*/}
                <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12">
                  <div className="speakers">
                    <div className="spk-img">
                      <img className="img-fluid" src="assets/img/speakers/susa-hart.jpg" alt="trainer-img" />
                      <ul>
                        <li><a href="https://twitter.com/smhart1"><i className="fa fa-twitter" /></a></li>
                        <li><a href="https://www.linkedin.com/in/smhart1/"><i className="fa fa-linkedin" /></a></li>
                      </ul>
                    </div>
                    <div className="spk-info">
                      <a href="https://twitter.com/smhart1" rel="noreferrer noopener" target="_blank">
                        <h3>Susa Hart</h3>
                      </a>
                      <p>Director, User Experience</p>
                      <h6>ADP</h6>
                    </div>
                  </div>
                </div>
                {/* /col end*/}
                <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12">
                  <div className="speakers">
                    <div className="spk-img">
                      <img className="img-fluid" src="assets/img/speakers/Leonardo Graterol - Headshot - RefactrTech.jpg" alt="trainer-img" />
                      <ul>
                        <li><a href="https://twitter.com/pankas87"><i className="fa fa-twitter" /></a></li>
                        <li><a href="https://www.linkedin.com/in/leonardo-graterol-24863223/"><i className="fa fa-linkedin" /></a></li>
                      </ul>
                    </div>
                    <div className="spk-info">
                      <a href="https://twitter.com/pankas87" rel="noreferrer noopener" target="_blank">
                        <h3>Leonardo Graterol</h3>
                      </a>
                      <p>Web UI Engineer</p>
                      <h6>Globant</h6>
                    </div>
                  </div>
                </div>
                {/* /col end*/}
                <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12">
                  <div className="speakers">
                    <div className="spk-img">
                      <img className="img-fluid" src="assets/img/speakers/alicia-barrett.jpg" alt="trainer-img" />
                      <ul>
                        <li><a href="https://twitter.com/OptimistAlicia"><i className="fa fa-twitter" /></a></li>
                        <li><a href="https://www.linkedin.com/in/abarrettdc/"><i className="fa fa-linkedin" /></a></li>
                      </ul>
                    </div>
                    <div className="spk-info">
                      <a href="https://twitter.com/OptimistAlicia" rel="noreferrer noopener" target="_blank">
                        <h3>Alicia Barrett</h3>
                      </a>
                      <p>Support Software Engineer</p>
                      <h6>SalesLoft</h6>
                    </div>
                  </div>
                </div>
                {/* /col end*/}
                <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12">
                  <div className="speakers">
                    <div className="spk-img">
                      <img className="img-fluid" src="assets/img/speakers/laurel-lawson.png" alt="trainer-img" />
                      <ul>
                        <li><a href="https://twitter.com/llcycore"><i className="fa fa-twitter" /></a></li>
                        <li><a href="https://www.linkedin.com/in/laurellawson/"><i className="fa fa-linkedin" /></a></li>
                      </ul>
                    </div>
                    <div className="spk-info">
                      <a href="https://twitter.com/llcycore" rel="noreferrer noopener" target="_blank">
                        <h3>Laurel Lawson</h3>
                      </a>
                      <p>Co-founder, CTO</p>
                      <h6>CyCore Systems</h6>
                    </div>
                  </div>
                </div>
                {/* /col end*/}
                <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12">
                  <div className="speakers">
                    <div className="spk-img">
                      <img className="img-fluid" src="assets/img/speakers/chris-demars.jpg" alt="trainer-img" />
                      <ul>
                        <li><a href="https://twitter.com/saltnburnem"><i className="fa fa-twitter" /></a></li>
                        <li><a href="https://www.linkedin.com/in/chrisdemars/"><i className="fa fa-linkedin" /></a></li>
                      </ul>
                    </div>
                    <div className="spk-info">
                      <a href="https://twitter.com/saltnburnem" rel="noreferrer noopener" target="_blank">
                        <h3>Chris DeMars</h3>
                      </a>
                      <p>Front-End Developer</p>
                      <h6>Tuft &amp; Needle</h6>
                    </div>
                  </div>
                </div>
                {/* /col end*/}
                <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12">
                  <div className="speakers">
                    <div className="spk-img">
                      <img className="img-fluid" src="assets/img/speakers/jamie-harrell.jpg" alt="trainer-img" />
                      <ul>
                        <li><a href="https://twitter.com/jamieharrellmba"><i className="fa fa-twitter" /></a></li>
                        <li><a href="https://www.linkedin.com/in/jamieharrellmba/"><i className="fa fa-linkedin" /></a></li>
                      </ul>
                    </div>
                    <div className="spk-info">
                      <a href="https://twitter.com/jamieharrellmba" rel="noreferrer noopener" target="_blank">
                        <h3>Jamie Harrell</h3>
                      </a>
                      <p>Bus. Intelligence &amp; Analytics Lead</p>
                      <h6>Emory University</h6>
                    </div>
                  </div>
                </div>
                {/* /col end*/}
                <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12">
                  <div className="speakers">
                    <div className="spk-img">
                      <img className="img-fluid" src="assets/img/speakers/pratik-patel_400x400.png" alt="trainer-img" />
                      <ul>
                        <li><a href="https://twitter.com/prpatel"><i className="fa fa-twitter" /></a></li>
                        <li><a href="https://www.linkedin.com/in/prpatel/"><i className="fa fa-linkedin" /></a></li>
                      </ul>
                    </div>
                    <div className="spk-info">
                      <a href="https://twitter.com/prpatel" rel="noreferrer noopener" target="_blank">
                        <h3>Pratik Patel</h3>
                      </a>
                      <p>Lead Developer Advocate</p>
                      <h6>IBM</h6>
                    </div>
                  </div>
                </div>
                {/* /col end*/}
                <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12">
                  <div className="speakers">
                    <div className="spk-img">
                      <img className="img-fluid" src="assets/img/speakers/adrianna.jpeg" alt="trainer-img" />
                      <ul>
                        <li><a href="https://twitter.com/adriannavaldivi"><i className="fa fa-twitter" /></a></li>
                        <li><a href="https://www.linkedin.com/in/adriannavaldivia/"><i className="fa fa-linkedin" /></a></li>
                      </ul>
                    </div>
                    <div className="spk-info">
                      <a href="https://twitter.com/adriannavaldivi" rel="noreferrer noopener" target="_blank">
                        <h3>Adrianna Valdivia</h3>
                      </a>
                      <p>UI Engineer</p>
                      <h6>SalesLoft</h6>
                    </div>
                  </div>
                </div>
                {/* /col end*/}
                <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12">
                  <div className="speakers">
                    <div className="spk-img">
                      <img className="img-fluid" src="assets/img/speakers/susan_lin.jpeg" alt="trainer-img" />
                      <ul>
                        <li><a href="https://twitter.com/mintlodica"><i className="fa fa-twitter" /></a></li>
                        <li><a href="https://www.linkedin.com/in/susan-lin-cloudflare/"><i className="fa fa-linkedin" /></a></li>
                      </ul>
                    </div>
                    <div className="spk-info">
                      <a href="https://twitter.com/mintlodica" rel="noreferrer noopener" target="_blank">
                        <h3>Susan Lin</h3>
                      </a>
                      <p>Lead Product Designer</p>
                      <h6>Cloudflare</h6>
                    </div>
                  </div>
                </div>
                {/* /col end*/}
                <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12">
                  <div className="speakers">
                    <div className="spk-img">
                      <img className="img-fluid" src="assets/img/speakers/sarrah-vesselov.jpg" alt="trainer-img" />
                      <ul>
                        <li><a href="https://twitter.com/SVesselov"><i className="fa fa-twitter" /></a></li>
                        <li><a href="https://www.linkedin.com/in/sarrahvesselov/"><i className="fa fa-linkedin" /></a></li>
                      </ul>
                    </div>
                    <div className="spk-info">
                      <a href="https://twitter.com/SVesselov" rel="noreferrer noopener" target="_blank">
                        <h3>Sarrah Vesselov</h3>
                      </a>
                      <p>UX Manager</p>
                      <h6>GitLab</h6>
                    </div>
                  </div>
                </div>
                {/* /col end*/}
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
