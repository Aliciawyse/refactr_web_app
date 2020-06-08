import React from "react";
import { graphql } from "gatsby";
import Footer from "../components/footer";
import NavigationBar from "../components/NavigationBar";
import { TeamCardList } from "../components/TeamCardList";
import { Helmet } from "react-helmet";


export default ({ data }) => {
  return(
  <div>
  <Helmet>
    <title>About | REFACTR.TECH 2021</title>
    <meta
      name="description"
      content="REFACTR.TECH is all about growing and showcasing powerful voices of marginalized people and allies in tech."
    />
    <meta name="robots" content="noindex,follow" />

    {/* <!-- Open Graph data --> */}
    <meta property="og:locale" content="en_US" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="REFACTR.TECH" />
    <meta property="og:url" content="https://www.refactr.tech/" />
    <meta
      property="og:title"
      content="About | REFACTR.TECH 2021"
    />
    <meta
      property="og:description"
      content="REFACTR.TECH is all about growing and showcasing powerful voices of marginalized people and allies in tech."
    />
    <meta 
        name="keywords" 
        content="Atlanta, technology, conference, diversity, inclusion, accessibility, software, frontend, fullstack, web development, leadership, career, javascript, react, angular, serverless, machine learning, product, ux, ui, design, social impact" 
    />

    <meta
      property="og:image"
      content="https://refactr.tech/img/conference/marketing_header.png"
    />
    <meta
      property="og:image:secure_url"
      content="https://refactr.tech/img/conference/marketing_header.png"
    />
    <meta property="og:image:width" content="500" />
    <meta property="og:image:height" content="260" />

    <meta name="msapplication-TileImage" content="https://refactr.tech/img/conference/2020-tile.png"/>

    {/* <!-- Social sharing meta --> */}
    <meta property="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@RefactrTech" />
    <meta
      name="twitter:title"
      content="About | REFACTR.TECH 2021"
    />
    <meta
      name="twitter:description"
      content="REFACTR.TECH is all about growing and showcasing powerful voices of marginalized people and allies in tech."
    />
    <meta name="twitter:domain" content="https://refactr.tech" />
    <meta
      name="twitter:image"
      content="https://refactr.tech/img/conference/marketing_header.png"
    />
    <meta name="twitter:label1" content="Date" />
    <meta name="twitter:data1" content="September 15-17" />
    <meta name="twitter:label2" content="Location" />
    <meta name="twitter:data2" content="Downtown Atlanta, GA" />

    {/* <!-- Schema.org markup for Google+ --> */}
    <meta itemprop="name" content="About | REFACTR.TECH 2021" />
    <meta
      itemprop="description"
      content="REFACTR.TECH is all about growing and showcasing powerful voices of marginalized people and allies in tech."
    />
    <meta itemprop="image" content="/img/conference/marketing_header.png" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />
</Helmet>
    {/*Main Container Start Here*/}
    <div className="main-container">
      {/*Header Start Here*/}
      <NavigationBar whiteText />
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
                src="/img/others/element.png?123"
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

      {/*Whos Organizing Area End Here*/}
      <div className="whos-speaking-area pad50 mt100">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <div className="title-text mb50">
                  <h2>Meet the Organizers</h2>
                </div>
              </div>
            </div>
            {/* /col end*/}
          </div>
          {/* /.row  end*/}
          <div className="row mb50">
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
              <div className="speakers xs-mb30">
                <div className="spk-img">
                  <img
                    className="img-fluid"
                    src="/img/team/organizers/angel.jpg"
                    alt="Organizer - Angel Banks"
                  />
                  <ul>
                    <li>
                      <a href="https://twitter.com/angelmbanks">
                        <i className="fa fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/in/angelmbanks/">
                        <i className="fa fa-linkedin" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="spk-info">
                  <a
                    href="https://twitter.com/angelmbanks"
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    <h3>Angel Banks</h3>
                  </a>
                  <p>Technical Expert</p>
                  <h6 style={{fontWeight: '700'}}>Thinkful</h6>
                </div>
              </div>
            </div>
            {/* /col end*/}
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
              <div className="speakers">
                <div className="spk-img">
                  <img
                    className="img-fluid"
                    src="/img/team/organizers/beth.jpg"
                    alt="Organizer - Beth Laing"
                  />
                  <ul>
                    <li>
                      <a href="https://twitter.com/laingbeth">
                        <i className="fa fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/in/bethlaing/">
                        <i className="fa fa-linkedin" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="spk-info">
                  <a
                    href="https://twitter.com/laingbeth"
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    <h3>Beth Laing</h3>
                  </a>
                  <p>Engineering Manager</p>
                  <h6 style={{fontWeight: '700'}}>CallRail</h6>
                </div>
              </div>
            </div>
            {/* /col end*/}
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
              <div className="speakers xs-mb30">
                <div className="spk-img">
                  <img
                    className="img-fluid"
                    src="/img/team/organizers/erica.jpg"
                    alt="Organizer - Erica Stanley"
                  />
                  <ul>
                    <li>
                      <a href="https://twitter.com/ericastanley">
                        <i className="fa fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/in/ericastanley/">
                        <i className="fa fa-linkedin" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="spk-info">
                  <a
                    href="https://twitter.com/ericastanley"
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    <h3>Erica Stanley</h3>
                  </a>
                  <p>Sr. Engineering Manager</p>
                  <h6 style={{fontWeight: '700'}}>Mozilla</h6>
                </div>
              </div>
            </div>
            {/* /col end*/}
          </div>
          {/* /row end*/}
        </div>
        {/* /container end*/}
      </div>
      {/*Whos Organizing Area End Here*/}

      {/*Team Area Starts Here*/}
      <div className="whos-speaking-area pad25">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <div className="title-text mb50">
                  <h2>Team</h2>
                </div>
              </div>
            </div>
            {/* /col end*/}
          </div>
          {/* /.row  end*/}
          <div className="row mb50">

            <TeamCardList items={data.allAirtable.edges} />

          </div>
          {/* /row end*/}
        </div>
        {/* /container end*/}
      </div>
      {/*Team Area Ends Here*/}       

      {/*Advisory Board Area Starts Here*/}
      <div className="whos-speaking-area pad50">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <div className="title-text mb50">
                  <h2>Advisory Board</h2>
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
                  <img
                    className="img-fluid"
                    src="/img/team/advisors/vincentMayers.jpeg"
                    alt="trainer-img"
                  />
                  <ul>
                    <li>
                      <a href="https://twitter.com/vincentmayers">
                        <i className="fa fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/in/vincentmayers/">
                        <i className="fa fa-linkedin" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="spk-info">
                  <a
                    href="https://twitter.com/vincentmayers"
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    <h3>Vincent Mayers</h3>
                  </a>
                  <p>Organizer</p>
                  <h6 style={{fontWeight: '700'}}>ConnectEvents</h6>
                </div>
              </div>
            </div>
            {/* /col end*/}
            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12">
              <div className="speakers">
                <div className="spk-img">
                  <img
                    className="img-fluid"
                    src="/img/team/advisors/nadia-large-square.jpg"
                    alt="trainer-img"
                  />
                  <ul>
                    <li>
                      <a href="https://twitter.com/nadiarahali">
                        <i className="fa fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/in/nadiarahali/">
                        <i className="fa fa-linkedin" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="spk-info">
                  <a
                    href="https://twitter.com/nadiarahali"
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    <h3>Nadia Rahali</h3>
                  </a>
                  <p>General Manager</p>
                  <h6 style={{fontWeight: '700'}}>The Loudermilk Center</h6>
                </div>
              </div>
            </div>
            {/* /col end*/}
            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12">
              <div className="speakers xs-mb30">
                <div className="spk-img">
                  <img
                    className="img-fluid"
                    src="/img/team/advisors/kim-crayton-400-square.png"
                    alt="trainer-img"
                  />
                  <ul>
                    <li>
                      <a href="https://twitter.com/KimCrayton1">
                        <i className="fa fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/in/kimcrayton/">
                        <i className="fa fa-linkedin" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="spk-info">
                  <a
                    href="https://twitter.com/KimCrayton1"
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    <h3>Kim Crayton</h3>
                  </a>
                  <p>Chief Encouragement Officer</p>
                  <h6 style={{fontWeight: '700'}}>for Underrepresented &amp; Marginalized in Tech</h6>
                </div>
              </div>
            </div>
            {/* /col end*/}
            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12">
              <div className="speakers xs-mb30">
                <div className="spk-img">
                  <img
                    className="img-fluid"
                    src="/img/team/advisors/marcellus-haynes.jpg"
                    alt="trainer-img"
                  />
                  <ul>
                    <li>
                      <a href="https://twitter.com/isaahmarcellus">
                        <i className="fa fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/in/marcellus/">
                        <i className="fa fa-linkedin" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="spk-info">
                  <a
                    href="https://twitter.com/isaahmarcellus"
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    <h3>Marcellus Haynes</h3>
                  </a>
                  <p>Founder</p>
                  <h6 style={{fontWeight: '700'}}>Technologists of Color</h6>
                </div>
              </div>
            </div>
            {/* /col end*/}
            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12">
              <div className="speakers xs-mb30">
                <div className="spk-img">
                  <img
                    className="img-fluid"
                    src="/img/team/advisors/diana.png"
                    alt="trainer-img"
                  />
                  <ul>
                    <li>
                      <a href="https://twitter.com/cotufa82">
                        <i className="fa fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/in/nerdattack82/">
                        <i className="fa fa-linkedin" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="spk-info">
                  <a
                    href="https://twitter.com/cotufa82"
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    <h3>Diana Rodriguez</h3>
                  </a>
                  <p>Chief DevOps Architect</p>
                  <h6 style={{fontWeight: '700'}}>Voicethread</h6>
                </div>
              </div>
            </div>
            {/* /col end*/}
            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12">
              <div className="speakers">
                <div className="spk-img">
                  <img
                    className="img-fluid"
                    src="/img/team/advisors/todd-lewis.jpeg"
                    alt="trainer-img"
                  />
                  <ul>
                    <li>
                      <a href="https://twitter.com/toddlew">
                        <i className="fa fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/in/thetoddlewis/">
                        <i className="fa fa-linkedin" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="spk-info">
                  <a
                    href="https://twitter.com/toddlew"
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    <h3>Todd Lewis</h3>
                  </a>
                  <p>Chair</p>
                  <h6 style={{fontWeight: '700'}}>All Things Open</h6>
                </div>
              </div>
            </div>
            {/* /col end*/}
            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12">
              <div className="speakers xs-mb30">
                <div className="spk-img">
                  <img
                    className="img-fluid"
                    src="/img/team/advisors/neha-batra.jpeg"
                    alt="trainer-img"
                  />
                  <ul>
                    <li>
                      <a href="https://twitter.com/nerdneha">
                        <i className="fa fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/in/nbatra/">
                        <i className="fa fa-linkedin" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="spk-info">
                  <a
                    href="https://twitter.com/nerdneha"
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    <h3>Neha Batra</h3>
                  </a>
                  <p>Director</p>
                  <h6 style={{fontWeight: '700'}}>Write/Speak/Code</h6>
                </div>
              </div>
            </div>
            {/* /col end*/}
            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12">
              <div className="speakers">
                <div className="spk-img">
                  <img
                    className="img-fluid"
                    src="/img/team/advisors/chelseaBullock.jpg"
                    alt="trainer-img"
                  />
                  <ul>
                    <li>
                      <a href="https://twitter.com/chelsea_bullock">
                        <i className="fa fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/in/chelseabullock/">
                        <i className="fa fa-linkedin" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="spk-info">
                  <a
                    href="https://twitter.com/chelsea_bullock"
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    <h3>Chelsea Bullock</h3>
                  </a>
                  <p>Product Manager</p>
                  <h6 style={{fontWeight: '700'}}>Mailchimp</h6>
                </div>
              </div>
            </div>
            {/* /col end*/}
            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12">
              <div className="speakers xs-mb30">
                <div className="spk-img">
                  <img
                    className="img-fluid"
                    src="/img/team/advisors/liberty.jpg"
                    alt="trainer-img"
                  />
                  <ul>
                    <li>
                      <a href="https://twitter.com/i_am_liberty">
                        <i className="fa fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/in/nlibertywhite/">
                        <i className="fa fa-linkedin" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="spk-info">
                  <a
                    href="https://twitter.com/i_am_liberty"
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    <h3>Liberty White</h3>
                  </a>
                  <p>Creative Director + Video Marketing Strategist</p>
                  <h6 style={{fontWeight: '700'}}>CHOZEN MEDIA</h6>
                </div>
              </div>
            </div>
            {/* /col end*/}
            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12">
              <div className="speakers xs-mb30">
                <div className="spk-img">
                  <img
                    className="img-fluid"
                    src="/img/team/advisors/Jamie2.jpg"
                    alt="trainer-img"
                  />
                  <ul>
                    <li>
                      <a href="https://twitter.com/jamieharrellmba">
                        <i className="fa fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/in/jamieharrellmba/">
                        <i className="fa fa-linkedin" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="spk-info">
                  <a
                    href="https://twitter.com/jamieharrellmba"
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    <h3>Jamie Harrell</h3>
                  </a>
                  <p>Bus. Intelligence &amp; Analytics Lead</p>
                  <h6 style={{fontWeight: '700'}}>Emory University</h6>
                </div>
              </div>
            </div>
            {/* /col end*/}
            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12">
              <div className="speakers xs-mb30">
                <div className="spk-img">
                  <img
                    className="img-fluid"
                    src="/img/team/advisors/stephanie_jewett.jpg"
                    alt="trainer-img"
                  />
                  <ul>
                    <li>
                      <a href="https://twitter.com/StefanieJewett">
                        <i className="fa fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/in/stefaniejewett/">
                        <i className="fa fa-linkedin" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="spk-info">
                  <a
                    href="https://twitter.com/StefanieJewett"
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    <h3>Stefanie Jewett</h3>
                  </a>
                  <p>Founder, CEO</p>
                  <h6 style={{fontWeight: '700'}}>Activvely</h6>
                </div>
              </div>
            </div>
            {/* /col end*/}
            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12">
              <div className="speakers xs-mb30">
                <div className="spk-img">
                  <img
                    className="img-fluid"
                    src="/img/team/advisors/angeleenWilson.jpg"
                    alt="trainer-img"
                  />
                  <ul>
                    <li>
                      <a href="https://twitter.com/dappmom">
                        <i className="fa fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/in/angeleenwilson/">
                        <i className="fa fa-linkedin" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="spk-info">
                  <a
                    href="https://twitter.com/dappmom"
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    <h3>Angeleen Wilson</h3>
                  </a>
                  <p>Director</p>
                  <h6 style={{fontWeight: '700'}}>Georgia Blockchain Coalition</h6>
                </div>
              </div>
            </div>
            {/* /col end*/}
            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12">
              <div className="speakers xs-mb30">
                <div className="spk-img">
                  <img
                    className="img-fluid"
                    src="/img/team/advisors/jeremyLikness.jpg"
                    alt="trainer-img"
                  />
                  <ul>
                    <li>
                      <a href="https://twitter.com/JeremyLikness">
                        <i className="fa fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/in/JeremyLikness/">
                        <i className="fa fa-linkedin" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="spk-info">
                  <a
                    href="https://twitter.com/JeremyLikness"
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    <h3>Jeremy Likness</h3>
                  </a>
                  <p>Sr. Cloud Developer Advocate</p>
                  <h6 style={{fontWeight: '700'}}>Microsoft</h6>
                </div>
              </div>
            </div>
            {/* /col end*/}
          </div>
          {/* /row end*/}
        </div>
        {/* /container end*/}
      </div>
      <Footer />
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
};
export const aboutPageQuery = graphql`
  {
    allAirtable(
      filter: { table: { eq: "Team" } }
      sort: { fields: data___name }
    ) {
      edges {
        node {
          fields {
            slug
          }
          data {
            name
            member_headshot {
              localFiles {
                childImageSharp {
                  fluid(maxWidth: 512, maxHeight: 512) {
                    ...GatsbyImageSharpFluid_tracedSVG
                  }
                }
              }
            }
            member_role
            member_twitter
            member_linkedIn
          }
        }
      }
    }
  }
`;

