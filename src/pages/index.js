import React from "react";
import { graphql, Link } from "gatsby";
import { OutboundLink } from "gatsby-plugin-google-gtag"
import Footer from "../components/footer";
import { FeaturedSpeakerCard } from "../components/FeaturedSpeakerCard";
import { SpeakerCardList } from "../components/SpeakerCardList";
import { KeynoteSpeakerList } from "../components/KeynoteSpeakerList";
import { FeaturedSponsorsList } from "../components/FeaturedSponsorsList";
import { CurrentSponsorsList } from "../components/CurrentSponsorsList";
import { SessionCardList } from "../components/SessionCardList";


//import { OnlineSchedule } from "../components/OnlineSchedule";
import NavigationBar from "../components/NavigationBar";
import Countdown from "../components/Countdown";
import { Helmet } from "react-helmet";
import { toast } from 'react-toastify';


import "../styles/assets/css/responsive2.css";
import "../styles/assets/css/style.css";
import "../styles/assets/css/style2.css";
import "../styles/assets/css/responsive.css";
import 'react-toastify/dist/ReactToastify.css';

//toast.configure();


export default ({ data }) => (
  <div>
    <Helmet>
      <title>REFACTR.TECH 2024 -  Atlanta, GA</title>
      <meta
        name="description"
        content="The Southeast's premier tech community with a focus on inclusion."
      />
      

      {/* <!-- Open Graph data --> */}
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="REFACTR.TECH" />
      <meta property="og:url" content="https://www.refactr.tech/" />
      <meta
        property="og:title"
        content="REFACTR.TECH 2024 -  Atlanta, GA"
      />
      <meta
        property="og:description"
        content="The Southeast's premier tech community with a focus on inclusion."
      />
      <meta 
        name="keywords" 
        content="Atlanta, virtual, technology, events, diversity, inclusion, accessibility, software, frontend, fullstack, web development, leadership, career, javascript, react, angular, serverless, machine learning, product, ux, ui, design, social impact" 
      />

      <meta
        property="og:image"
        content="https://refactr.tech/img/conference/Home_5.svg"
      />
      <meta
        property="og:image:secure_url"
        content="https://refactr.tech/img/conference/Home_5.svg"
      />
      <meta property="og:image:width" content="500" />
      <meta property="og:image:height" content="260" />

      <meta name="msapplication-TileImage" content="https://refactr.tech/img/conference/2020-tile.png"/>

      {/* <!-- Social sharing meta --> */}
      <meta name="twitter:site" content="@RefactrTech" />
      <meta
        name="twitter:title"
        content="REFACTR.TECH 2024 - Atlanta"
      />
      <meta
        name="twitter:description"
        content="The Southeast's premier tech community with a focus on inclusion."
      />
      <meta name="twitter:domain" content="https://refactr.tech" />
      <meta
        name="twitter:image"
        content="https://refactr.tech/img/conference/Home_5.svg"
      />
      <meta name="twitter:label1" content="Date" />
      <meta name="twitter:data1" content="" />
      <meta name="twitter:label2" content="Location" />
      <meta name="twitter:data2" content="Atlanta, GA" />

      {/* <!-- Schema.org markup for Google+ --> */}
      <meta itemprop="name" content="REFACTR.TECH 2024" />
      <meta
        itemprop="description"
        content="The Southeast's premier tech community with a focus on inclusion."
      />
      <meta itemprop="image" content="/img/conference/Home_5.svg" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />

      {/* Noscript content for added SEO -->*/}
      <noscript>{`<a href="https://www.eventbrite.com/e/refactrtech-panel-preparing-for-a-career-in-ai-tickets-879099479207" class="btn-primary" rel="noopener noreferrer" target="_blank">Buy Tickets on Eventbrite</a>`}</noscript>

      <script src="https://www.eventbrite.com/static/widgets/eb_widgets.js"></script>

      <script type="text/javascript" src="https://cdn.addevent.com/libs/atc/1.6.1/atc.min.js" async defer></script>
      
      <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/1.12.3/jquery.min.js"></script> 
      <script src="https://static.elfsight.com/platform/platform.js" async></script>

    </Helmet>
    <div>
      {/*Main Container Start Here*/}
      <div className="main-container">
        {/*Header Start Here*/}
        <NavigationBar />
        {/*Header End Here*/}

        {/*<div className="counter-up-area ptb20 bg-about parallax" style={{marginTop: "90px"}}>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="single-counter xs-mb40">
                <div className="count-content" style={{ textAlign: "center"}}>
                  {/*<span className="count" style={{ fontSize: "3.1em", marginTop: "0", marginBottom: "0"}}>Important Articles</span>
                    <div className="row">
                      <div className="col-md-6 col-sm-12">
                        <div className="accent-btn text-center mt10" style={{marginBottom: "10px"}}>
                            <a href="/blacklivesmatter" class="btn-accent" style={{border: "2px solid #fff"}}>Black Lives Matter</a>
                        </div>
                      </div>
                      <div className="col-md-6 col-sm-12">
                        <div className="accent-btn text-center mt10" style={{marginBottom: "10px"}}>
                            <a href="/stopasianhate" class="btn-accent" style={{border: "2px solid #fff"}}>Stop Asian Hate</a>
                        </div>
                      </div>   
                    </div>*
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>*/}

        {/*Hero Banner Area Start Here*/}
        <div className="hero-banner-area home-2 hero-bg-6 video-wrapper parallax" style={{marginTop: "90px" }}>

        {/*<video playsInline autoPlay muted loop playbackRate="0.1" poster="img/bg/cloud-bg-poster.png">
          <source src="img/bg/cloud-bg-0.5x.mp4" type="video/mp4"/>
          Your browser does not support the video tag.
      </video>*/}


          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="banner-content">

                  {/*<div className="row justify-content-center">
                    <div className="col-md-7 col-lg-6 align-self-start">
                        <img
                        className="img-fluid"
                        src="/img/logo/refactr-logo-2022.svg"
                        alt="REFACTR.TECH Conference theme: Carnival!"
                      />
                    </div>
                  </div>*/}

                  <div className="row justify-content-center" style={{marginTop: '525px'}}>
                    {/*<div className="col-10">
                    <img
                    className="img-fluid"
                    src="/img/logo/refactr-23-date-location.svg"
                    alt="Conference date:   2022"
                  />
                </div>*/}
                </div>

                    <div className="row justify-content-center">
                      <div className="primary-btn" style={{marginTop: '20px', fontWeight: "bold"}}>
                        <OutboundLink className="btn-hero"
                         href="https://www.meetup.com/refactr-tech/" target="_blank">
                          Join
                        </OutboundLink>
                      </div>
                    </div>

                  {/*<div className="row justify-content-center" style={{marginTop: '30px'}}>
                    <div className="col-lg-6">
                        <img
                        className="img-fluid"
                        src="/img/logo/refactr2020-header-slogan.svg"
                        alt="Conference slogan: Diversity.Inclusion.Tech"
                      />
                    </div>
                  </div>*/}

                  

                 {/* <div className="row justify-content-center">
                    <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                    <img
                    className="img-fluid"
                    style={{marginTop: '20px'}}
                    src="/img/logo/location-2022.svg"
                    alt="Conference location: Atlanta"
                  />
                    </div>
              </div>*/}

                  {/*<div className="upcoming">
                    <span className="is-countdown"> </span>
                    <div data-countdown="2022/09/15" /> 
                </div>*/}

                   {/*<div className="row justify-content-center">
                        <Countdown date={`2022-09-15T12:00:00`} />
                        
              </div>*/}
                  

                  {/* <div className="row justify-content-end" style={{marginTop: '-30px', marginBottom: '0'}}>
                    <div className="col-sm-5 col-5">
                        <img
                        src="/img/logo/refactr2020-header-location.svg"
                        alt="Diversity.Inclusion.Tech"
                      />
                    </div>
                </div> */}

              

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
       {/* <div className="counter-up-area pad100 bg-tricolor parallax">
          <div className="container">
            <div className="row ">
              
              <div className="col-xl-3 col-lg-3 col-md-3 .d-md-none">
                <div className="single-counter xs-mb40">
                  <div className="count-content">
                  <img
                  className="img-fluid"
                  src="/img/logo/workshops-August-14.svg"
                  alt="REFACTR.TECH Workshops - August 14th"
                />
                  </div>
                </div>
              </div> */}
              {/* /col end*/}
              {/* <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1">
                <div className="single-counter xs-mb40">
                <div className="count-content">
                
                </div>
              </div>
            </div> */}
            {/* /col end*/}
              {/*<div className="col-xl-4 col-lg-4 col-md-3 	.d-md-none">
                <div className="single-counter xs-mb40">
                  <div className="count-content">
                  <img
                  className="img-fluid"
                  src="/img/logo/conference-August-18-20.svg"
                  alt="REFACTR.TECH Workshops - August 14th"
                />
                  </div>
                </div>
              </div>
              <div className="col-xl-1 col-lg-1 col-md-3 col-sm-1">
                <div className="single-counter xs-mb40">
                <div className="count-content">
                
                </div>
              </div>
          </div> */}
            {/* /col end*/}
              {/* /col end*/}
              {/*<div className="col-xl-3 col-lg-3 col-md-3 .d-md-none">
                <div className="single-counter ">
                  <div className="count-content">
                  <img
                  className="img-fluid"
                  src="/img/logo/career-fair-August 17.svg"
                  alt="REFACTR.TECH Workshops - August 14th"
                />
                  </div>
                </div>
                  </div> */}
              {/* /col end*/}
               {/* </div> */}
            {/* /row end*/}
               {/* </div> */}
          {/* /container end*/}
                {/* </div> */}
        {/*Counter Up Area End Here*/}

        
        {/*Pricing Tables Area Start Here*/}
        {/*<a name="pricing"/>
        <div className="pricing-tables-area ptb50">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title text-center">
                  <div className="title-text mb50">
                    <h2>Conference Pricing</h2>
                  </div>
                </div>
              </div>

            </div>

            <div className="row">
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                <div className="pricing-box bg-pricing xs-mb30">
                  <div className="pricing-header">
                    <div className="pricing-value">
                    <span>$</span>50
                    </div>
                  </div>
                  <div className="pricing-title">Early Bird</div>
                  <div className="pricing-content">
                  <ul>
                  <li><span style={{ color: '#4225DD', fontWeight: 'bold' }}>Early Bird sales end Aug 16!</span></li>
                  <li>Main Stage Keynotes</li>
                  <li>Single track, 14 Sessions & Panels</li>
                  <li>Expo Hall</li>
                  <li>Networking Opportunities</li>
                  <li>Socials!</li>
                  {/*<li><a style={{ color: '#F20688', fontWeight: 'bold' }} href="/workshops">+ Add full-day workshop for $99</a></li>
                </ul>
                  </div>
                  <br/>
                  <div className="primary-btn">
                    <OutboundLink className="btn-primary disabled" href="" target="_blank">
                    Sold Out
                    </OutboundLink>
                  </div>
                </div>
              </div>

              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                <div className="pricing-box bg-pricing xs-mb30">
                  <div className="pricing-header">
                    <div className="pricing-value">
                      <span>$</span>60
                    </div>
                  </div>
                  <div className="pricing-title">Regular</div>
                  <div className="pricing-content">
                  <ul>
                  <li><span style={{ color: '#4225DD', fontWeight: 'bold' }}>Regular sales end Oct 11th!</span></li>
                  <li>Main Stage Keynotes</li>
                  <li>Single track, 14 Sessions & Panels</li>
                  <li>Expo Hall</li>
                  <li>Networking Opportunities</li>
                  <li>Socials!</li>
                  {/*<li><a style={{ color: '#F20688', fontWeight: 'bold' }} href="/workshops">+ Add full-day workshop for $99</a></li>
                  </ul>
                  </div>
                  <br/>
                  <div className="primary-btn">
                    <OutboundLink className="btn-primary disabled" href="" target="_blank">
                    Sold Out
                    </OutboundLink>
                  </div>
                </div>
              </div>

              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                <div className="pricing-box bg-pricing xs-mb30">
                  <div className="pricing-header">
                    <div className="pricing-value">
                      <span>$</span>75
                    </div>
                  </div>
                  <div className="pricing-title">Late</div>
                  <div className="pricing-content">
                  <ul>
                  <li>&nbsp;</li>
                  <li>Main Stage Keynotes</li>
                  <li>Single track, 14 Sessions & Panels</li>
                  <li>Expo Hall</li>
                  <li>Networking Opportunities</li>
                  <li>Socials!</li>
                  {/*<li><a style={{ color: '#F20688', fontWeight: 'bold' }} href="/workshops">+ Add full-day workshop for $99</a></li>
                  </ul>
                  </div>
                  <br/>
                  <div className="primary-btn">
                    <OutboundLink className="btn-primary disabled" href="" target="_blank">
                    Sold Out
                    </OutboundLink>
                  </div>
                </div>
              </div>

            </div>

          </div>

                </div>*/}
        {/*Pricing Tables Area End Here*/}
        
        
      
        <div className="counter-up-area ptb60 bg-counter parallax">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="single-counter xs-mb40">
                <div className="count-content" style={{ textAlign: "center"}}>
                  <span className="count" style={{ fontSize: "3.1em"}}>Don't Miss a Thing</span>
                  <p style={{ fontSize: "1.5em", fontWeight: "400"}}>Stay in the know! Find the latest REFACTR news by subscribing to our newsletter & checking for updates.</p>
                    <div className="row justify-content-center">
                      <div className="col-md-3 col-sm-12">
                        <div className="primary-btn text-center mt30">
                            {/* <a href="https://2019.refactr.tech" class="btn-primary" style={{border: "2px solid #fff"}}>2019 Conference</a> */}
                            <a href="https://tech.us19.list-manage.com/subscribe?u=5ae8995a4bf065a3c7cd6ad50&id=e8f624f474" class="btn-primary" style={{border: "2px solid #fff"}}>Newsletter &nbsp;&nbsp;<i className="fa fa-external-link"/></a> 
                        </div>
                      </div>
                      <div className="col-md-3 col-sm-12">
                        <div className="primary-btn text-center mt30">
                            <a href="https://www.meetup.com/refactr-tech/" class="btn-primary" style={{border: "2px solid #fff"}}>Meetup &nbsp;&nbsp;<i className="fa fa-external-link"/></a>
                        </div>
                      </div> 
                      <div className="col-md-3 col-sm-12">
                        <div className="primary-btn text-center mt30">
                            <a href="https://discord.gg/SqDAxbAKHZ" class="btn-primary" style={{border: "2px solid #fff"}}>Discord &nbsp;&nbsp;<i className="fa fa-external-link"/></a>
                        </div>
                      </div> 
                      <div className="col-md-3 col-sm-12">
                        <div className="primary-btn text-center mt30">
                            <a href="/updates" class="btn-primary" style={{border: "2px solid #fff"}}>Blog</a>
                        </div>
                      </div>   
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



        {/*Event CTA Starts Here*/}
        <div className="our-sponsors-area ptb50 bg-color">
          <div className="container">

          <div className="row">
              <div className="col-lg-12">
                  <div className="section-title text-center">
                      <div className="title-text mtb30 xs-mb40">
                          <h2>Featured Talks</h2>
                      </div>
                  </div>

                  {/*<SessionCardList items={data.featuredSessions.edges} showBuyTickets={false}  soldOut={false} showTrack={false}/>*/}
                  
                  <h3>Celebrating Open Source</h3>
                  <div class="elfsight-app-9479e05a-423d-4050-9616-529b5c01ded6" data-elfsight-app-lazy></div>

              </div>
          </div>

          {/*<div className="row pad-bot30">
                <div className="col-lg-3 col-sm-12">
                    <div className="primary-btn text-center mt30">
                      <a href="https://reg.connectevents.io/ConnectEvents/refactrsept2024/" className="btn-primary" target="_blank"><i class="fa fa-ticket"></i> &nbsp;Reserve Your Spot</a>
                    </div>
                </div>
                <div className="col-md-3 col-sm-12">
                        <div className="primary-btn text-center mt30">
                        <a title="Add to Calendar" className="addeventatc btn-primary" data-id="nF22881601" href="https://www.addevent.com/event/nF22881601" target="_blank"><i class="fa fa-calendar-plus-o"></i>&nbsp;&nbsp;&nbsp;Add to Calendar</a>
                        </div>
                </div>
                <div className="col-md-3 col-sm-12">
                  <div className="primary-btn text-center mt30">
                  <a href="https://www.meetup.com/refactr-tech/" className="btn-primary" target="_blank"><i class="fa fa-meetup"></i> &nbsp;Join Meetup For Updates</a>
                  </div>
                </div> 
                <div className="col-md-3 col-sm-12">
                  <div className="primary-btn text-center mt30">
                  <a href="/events" className="btn-primary" target="_blank"><i class="fa fa-list-ul"></i> &nbsp;See Upcoming Events</a>
                  </div>
                </div>
            </div>*/}

          </div>
        </div>
        {/*Event CTA Ends Here*/}



        {/*Featured Careers Area Starts Here*/}
        <div className="whos-speaking-area ptb50">
          <div className="container">

            <div className="row">
              <div className="col-lg-12">
                <div className="section-title text-center">
                  <div className="title-text mb30">
                    <h2>Featured Sponsor Career Opportunities</h2>
                    <div class="elfsight-app-0592bbfe-5429-4270-b2c3-bc921365cc8c" data-elfsight-app-lazy></div>

                    <a style={{textAlign: 'center', color: '#CF057C', fontWeight: 'normal'}} href="/jobs-at-fanduel">
                    <h3>See More Career Opportunities &gt;&gt;</h3>
                  </a>
                  </div>
                </div>
              </div>


              
                
              
              {/* /container end*/}
            </div>
            {/*Featured Career Area Ends Here*/}
            
          </div>
          
        </div>



        {/*Sponsors CTA Starts Here*/}
        <div className="our-sponsors-area ptb50 bg-color">
          <div className="container">

          <div className="row">
                <div className="col-lg-12">
                    <div className="section-title text-center">
                      <div className="title-text">
                        <h2>Platinum Sponsor</h2>
                      </div>
                    </div>
                  </div>
              </div>

        <FeaturedSponsorsList data={data.platinumSponsors.edges} />

        <div className="row">
                <div className="col-lg-12">
                    <div className="section-title text-center">
                      <div className="title-text">
                        <h2>Hosting Sponsors</h2>
                      </div>
                    </div>
                  </div>
              </div>

        <FeaturedSponsorsList data={data.hostingSponsors.edges} />

        <div className="row">
                <div className="col-lg-12">
                    <div className="section-title text-center">
                      <div className="title-text mb30">
                        <h2>Featured Sponsors</h2>
                      </div>
                    </div>
                  </div>
              </div>

              <div class="elfsight-app-3739f71f-f3ae-416a-a80d-3d0c4b5cd012" data-elfsight-app-lazy></div>


          <div className="row">
              <div className="col-lg-12">
                  <div className="section-title text-center">
                      <div className="title-text mtb50 xs-mb40">
                          <h2>Sponsor REFACTR.TECH 2025 Events</h2>
                      <p style={{marginTop: "15px", fontSize: "1.3em"}}>Companies, are you looking for an opportunity to engage with our community of thousands of local and regional technologists? Check out our sponsorship prospectus to review the many ways to partner with REFACTR.TECH.</p>
                      </div>
                  </div>
              </div>
          </div>

          <div className="row pad-bot30">
                <div className="col-lg-12">
                    <div className="primary-btn text-center">
                        <a href="https://airtable.com/appjEFNuK5jwLsL1K/pagnYbn239nxX47BQ/form" class="btn-primary" rel="noreferrer noopener" target="_blank">Become a Sponsor</a>
                    </div>
                </div>
            </div>

            {/*<hr />


              <div className="row">
                <div className="col-lg-12">
                    <div className="section-title text-center">
                      <div className="title-text mb30">
                        <h2>Past Sponsors</h2>
                      </div>
                    </div>
                  </div>
              </div>

        <CurrentSponsorsList data={data.currentSponsors.edges} />*/}

            {/*<div className="row">
                <div className="col-lg-12">
                  <a style={{textAlign: 'center', color: '#CF057C', fontWeight: 'normal'}} href="/sponsors">
                    <h3>See 2022 Sponsors &gt;&gt;</h3>
      </a>*/}
                  {/*<p style={{textAlign: 'center'}}>More Speakers Coming Soon!</p>*/}
                {/*</div>
    </div>*/}

        

            
      

          </div>
        </div>
        {/*Sponsors CTA Ends Here*/}  


        
        
        {/*Keynote Speaker Area Start Here*/}
        {/*<div className="whos-speaking-area-two speakers bg-team parallax pad100">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title text-center">
                  <div className="title-text mb50">
                    <p>Introducing Our Keynote Speakers</p>
                  </div>
                </div>
              </div>
              
            </div>
            
            <div className="row justify-content-center">
              
            <KeynoteSpeakerList items={data.keynoteSpeakers.edges} />

            </div>
           
          </div>
          
              </div>*/}
        {/*Keynote Speakers Area End Here*/}



        


      


        {/*Whos Speaking Area Start Here*/}
        <div className="whos-speaking-area ptb50">
          <div className="container">


          {/*<div>
              <div className="col-lg-12">
                <div className="section-title text-center">
                  <div className="title-text mb50">
                    <h2>Ethics in AI Keynote Panelists</h2>
                  </div>
                </div>
              </div>


              <div className="row mb30 " style={{justifyContent: 'center'}}>

               <SpeakerCardList items={data.panelists.edges} />

              </div>

              <div className="row justify-content-center mb50">
                <h2>Moderator &amp; Curator</h2>   
              </div>
              <div className="row justify-content-center">
                  <SpeakerCardList items={data.mods.edges} />
              </div>
          </div>*/}



            <div className="row">
              <div className="col-lg-12">
                <div className="section-title text-center">
                  <div className="title-text mb50">
                    <h2>Featured Speakers</h2>
                  </div>
                </div>
              </div>

              {/* /.row  end*/}

              {/*<div className="row mb50">*/}
              
                {/*<OnlineSchedule />*/}
              
              {/*</div>*/}

              <div className="row mb30">
                {/*Whos Speaking Area End Here*/}

                <FeaturedSpeakerCard items={data.featuredSpeakers.edges} />

                {/*<div className="col-lg-12">
                  <a style={{textAlign: 'center', color: '#CF057C', fontWeight: 'normal'}} href="/speakers">
                    <h3>See All Confirmed Speakers &gt;&gt;</h3>
                  </a>
                  {/*<p style={{textAlign: 'center'}}>More Speakers Coming Soon!</p>
                </div>*/}
                {/* /row end*/}
              </div>
              
              {/* /container end*/}
            </div>
            {/*Whos Speaking Area End Here*/}
            
          </div>
          
        </div>

        {/*<div className="our-sponsors-area ptb50 bg-color">
          <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="section-title text-center">
                        <div className="title-text mb30 xs-mb40">
                            <h2>Ways to Attend</h2>
                        <p style={{marginTop: "15px"}}>At REFACTR.TECH you'll have the opportunity to highlight your company while meeting amazing people. The conference provides content valuable to a wide range of experience levels and interests. Technical topics of interest from intermediate to senior developers, alongside beginner-friendly sessions and workshops, are all part of the event. </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="primary-btn text-center">
                        <a href="/convince-your-boss" class="btn-primary">Convince Your Boss</a>
                    </div>
                </div>
            </div>
          </div>
          </div>*/}



        

        {/*Registration CTA Starts Here*/}
        {/*<div className="our-sponsors-area ptb50">
          <div className="container">

            <div className="row">
              <div className="col-lg-12">
                  <div className="section-title text-center">
                    <div className="title-text mb30">
                      <h2>Register</h2>
                      <p style={{marginTop: "15px", fontSize: "1.3em"}}>Get your ticket to attend REFACTR.TECH in Atlanta,  for a day full of keynotes, tech sessions and demos, and of course, parties! 
                        With <Link to="/sessions">topics ranging from software engineering to leadership to data and community,</Link> there’s something for everybody!
                      </p>
                      <div className="row justify-content-center">
                      <div className="primary-btn" style={{marginTop: '10px', fontWeight: "bold"}}>
                        <OutboundLink className="btn-hero"
                         href="https://reg.connectevents.io/ConnectEvents/rtech2023/" target="_blank">
                          Sold Out
                        </OutboundLink>
                      </div>
                    </div>
                    
            
            
                    </div>
                  </div>
                </div>
            </div>
              

            

            </div>
  </div>*/}
          {/*Registration CTA Ends Here*/}



        
        <div className="counter-up-area ptb60 bg-counter parallax">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="single-counter xs-mb40">
                  <div className="count-content" style={{ textAlign: "center"}}>
                    <span className="count" style={{ fontSize: "3.1em"}}>Recap Past REFACTR Events</span>
                    <p style={{ fontSize: "1.3em", fontWeight: "400"}}>Missed the last REFACTR.TECH event? Or just want to relive the vibes from our previous conferences?</p>
                    
                    <div className="row justify-content-center">
                    

                      {/*<div className="col-md-3 col-sm-12">
                        <div className="primary-btn text-center mt30">
                            <a href="https://www.youtube.com/@refactrtech/playlists" class="btn-primary" style={{border: "2px solid #fff"}}>2023 Videos</a> 
                        </div>
                      </div>

                      <div className="col-md-3 col-sm-12">
                        <div className="primary-btn text-center mt30">
                            <a href="https://www.youtube.com/playlist?list=PLtsNj-uCrJ4bbjFYU2RocECQv_JyQIaxK" class="btn-primary" style={{border: "2px solid #fff"}}>2022 Videos</a> 
                        </div>
                      </div>
                      
                        <div className="col-md-3 col-sm-12">
                          <div className="primary-btn text-center mt30">
                              <a href="https://www.youtube.com/playlist?list=PLtsNj-uCrJ4a2S2DAIsLRCj1dus_TGnIn" class="btn-primary" style={{border: "2px solid #fff"}}>2021 Videos</a> 
                          </div>
                        </div>

                        <div className="col-md-3 col-sm-12">
                          <div className="primary-btn text-center mt30">
                              <a href="https://www.youtube.com/channel/UCfBdXCYPCHEXX8ISwOQM08A" class="btn-primary" style={{border: "2px solid #fff"}}>2019 Videos</a>
                          </div>
                        </div> */}
                        
                        
                      </div>
                  </div>
                  <div class="elfsight-app-b6bd374b-3147-4edc-b2b5-3f1a19b61b4a" data-elfsight-app-lazy></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*Main Container End Here*/}
      </div>
      <Footer />
    </div>
  </div>
);

export const speakerPageQuery = graphql`
  {
    keynoteSpeakers: allAirtable(
      filter: { table: { eq: "Speakers" }, data: { keynotes: { eq: true } } }
      sort: { fields: data___order }
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
              localFiles {
                childImageSharp {
                  fluid(maxWidth: 512, maxHeight: 512) {
                    ...GatsbyImageSharpFluid_tracedSVG
                  }
                }
              }
            }
            order
            linkedIn
            company_url
            pronouns
          }
        }
      }
    }


    panelists: allAirtable(
      filter: { table: { eq: "Speakers" }, data: { panelist: { eq: true } } }
      sort: { fields: data___speaker_name }
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
              localFiles {
                childImageSharp {
                  fluid(maxWidth: 512, maxHeight: 512) {
                    ...GatsbyImageSharpFluid_tracedSVG
                  }
                }
              }
            }
            linkedIn
            company_url
            pronouns
          }
        }
      }
    }

    mods: allAirtable(
      filter: { table: { eq: "Speakers" }, data: { moderator: { eq: true } } }
      sort: { fields: data___speaker_name }
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
              localFiles {
                childImageSharp {
                  fluid(maxWidth: 512, maxHeight: 512) {
                    ...GatsbyImageSharpFluid_tracedSVG
                  }
                }
              }
            }
            linkedIn
            company_url
            pronouns
          }
        }
      }
    }

    workshopInstructors: allAirtable(
      filter: { table: { eq: "Speakers" }, data: { session_track: { eq: "Workshops" }, Status: { eq: "Confirmed" } } }
      sort: { fields: data___speaker_name }
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
              localFiles {
                childImageSharp {
                  fluid(maxWidth: 512, maxHeight: 512) {
                    ...GatsbyImageSharpFluid_tracedSVG
                  }
                }
              }
            }
            linkedIn
            company_url
            pronouns
          }
        }
      }
    }

    featuredSpeakers: allAirtable(
      filter: { table: { eq: "Speakers" }, data: { featured: { eq: true }, Status: { eq: "Confirmed" } } }
      sort: { fields: data___speaker_name }
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
              localFiles {
                childImageSharp {
                  fluid(maxWidth: 512, maxHeight: 512) {
                    ...GatsbyImageSharpFluid_tracedSVG
                  }
                }
              }
            }
            linkedIn
            company_url
            pronouns
          }
        }
      }
    }

    platinumSponsors: allAirtable(
      filter: { table: { eq: "Sponsors" }, data: { tier: { eq: "Platinum" } } }
      sort: { fields: data___list_order }
    ) {
      edges {
        node {
          fields {
            slug
          }
          data {
            sponsor_name
            sponsor_logo {
              localFiles {
                childImageSharp {
                  fluid(maxWidth: 512, maxHeight: 512) {
                    ...GatsbyImageSharpFluid_tracedSVG
                  }
                }
              }
            }
            sponsor_url
          }
        }
      }
    }

    hostingSponsors: allAirtable(
      filter: { table: { eq: "Sponsors" }, data: { tier: { eq: "Annual Host" } } }
      sort: { fields: data___list_order }
    ) {
      edges {
        node {
          fields {
            slug
          }
          data {
            sponsor_name
            sponsor_logo {
              localFiles {
                childImageSharp {
                  fluid(maxWidth: 512, maxHeight: 512) {
                    ...GatsbyImageSharpFluid_tracedSVG
                  }
                }
              }
            }
            sponsor_url
          }
        }
      }
    }

    featuredSessions: allAirtable(
      filter: { table: { eq: "Sessions" }, data: { Feature: { eq: true } } }
      sort: { fields: [data___Track, data___start_time] }
      ) {
      edges {
        node {
          fields {
            slug
          }
          data {
            Abstract
            speaker_display_name
            url
            Track
            title
            speaker_url
            date_friendly
            end_date_friendly
            ends
            Day
            Duration
            Feature
            speaker_pic {
              thumbnails {
                large {
                  url
                }
              }
            }
            Speakers {
              data {
                speaker_name
                headshot {
                  localFiles {
                    childImageSharp {
                      fluid(maxWidth: 512, maxHeight:512) {
                        ...GatsbyImageSharpFluid_tracedSVG
                      }
                    }
                  }
                }
                role
                company
                speaker_anchor
              }
            }
          }
        }
      }
    }


  }
`;
