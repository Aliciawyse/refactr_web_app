import React from "react";
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/footer";
import { Helmet } from "react-helmet";
import "../../src/styles/assets/css/style.css";
import "../../src/styles/assets/css/style2.css";
import "../../src/styles/assets/css/style.css";
import "../../src/styles/assets/css/responsive.css";
import { Link } from "gatsby";
import { OutboundLink } from "gatsby-plugin-google-gtag";


export default ({ data }) => (
  <div>
    <Helmet>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <title>Book Signings | REFACTR.TECH</title>
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
              <h2>Events</h2>
            </div>
            <ol className="breadcrumb">
              <li>
                <a href="/">Home</a>
              </li>
              <li>|</li>
              <li><a href="/workshops">Workshops</a></li>
              <li>|</li>
              <li><a href="/schedule">Schedule</a></li>
              <li>|</li>
              <li><a href="/sessions">All Sessions by Track</a></li>
              <li>|</li>
			        <li>Book Signings</li>
            </ol>
                
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*Conference Synopsis Area Start Here*/}
      

  {/*Event Schedule Area Start Here*/}
  <div className="event-schedule-area-two pad100">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="section-title text-center">
            <div className="title-text">
              <h2>Book Signings</h2>
              {/*<p><a href="/schedule_mobile">See mobile version</a></p>*/}
            </div>
            {/*<p>
              In ludus latine mea, eos paulo quaestio an. Meis possit ea sit.
              Vidisse molestie
              <br /> cum te, sea lorem instructior at.
            </p>*/}
          </div>
        </div>
        {/* /.col end*/}
      </div>
      {/* row end*/}
      <div className="row">
        <div className="col-lg-12">
          <ul className="nav custom-tab" style={{textAlign:"center"}} id="myTab" role="tablist">
            <li className="nav-item">
              <a
                className="nav-link"
                id="home-tab"
                data-toggle="tab"
                href="#pwo"
                role="tab"
                aria-controls="pwo"
                aria-selected="true"
              >
                Profit&nbsp;Without Oppression<br/><br/><p style={{fontSize:"12pt", marginTop:"5px"}}>by Kim Crayton</p> 				
				<p style={{fontSize:"12pt", marginTop:"5px"}}>Thursday, September 15, 11:00 AM - 1:45 PM</p>

              </a>
            </li>
            
            <li className="nav-item">
              <a
                className="nav-link active"
                id="data-tab"
                data-toggle="tab"
                href="#data"
                role="tab"
                aria-controls="data"
                aria-selected="false"
              >
			  Data&nbsp;Conscience:&nbsp;Algorithmic <br/>Siege on our Humanity<br/><p style={{fontSize:"12pt", marginTop:"5px"}}>by Dr. Brandeis Hill Marshall</p>
			  <p style={{fontSize:"12pt", marginTop:"5px"}}>Thursday, September 15, 11:00 AM - 1:45 PM</p>
              </a>
            </li>   
            
          </ul>
          <div className="tab-content" id="myTabContent">
            <div
              className="tab-pane fade schedule"
              id="pwo"
              role="tabpanel"
              aria-labelledby="home-tab"
            >

			<div className="row">
            <div className="col-lg-3 xs-mb40">
              <img
			  style={{marginTop:"30px"}}
			  className="img-fluid"
                src="/img/books/kim-book-cover.png"
                alt="element"
              />
            </div>
            <div className="col-lg-9">
              <div className="inner-content">
                <div className="section-title">
                  <div className="title-text pl">
                    <h2 style={{marginTop:"25px"}}>Profit Without Oppression</h2>
                  </div>
                </div>
                <p style={{fontWeight:"bold", fontStyle:"italic", fontSize:"13pt"}}>
				"While many of you view disruption as an innovative/clever product or service… my aim is to disrupt your thinking; to challenge the status quo; to scale welcoming and psychological safety."
                </p>
                <p>
				-Kim Crayton, Antiracist Economist
                </p>
                <p>
				Profit Without Oppression unapologetically identifies the systems, institutions, and policies that privilege the few while excluding and harming the many. This book charts an inclusionary strategic path forward that seeks to develop an economic ethos and series of business models that are supremacy, coercion, discrimination, and exploitation free.
                </p>
				<p className="session-title"><span style={{fontSize:"18pt"}}>Getting Your Book Signed at REFACTR.TECH</span></p>
				<p>Check back here for instructions to have your physical copy of "Profit Without Oppression" signed <em>in-person</em> by Kim Crayton.</p>
              </div>
            </div>
            {/* /col end*/}
          </div>
          {/* /row end*/}

		  <div className="row">
            <div className="col-lg-3 xs-mb40">
              <img
			  style={{marginTop:"30px"}}
			  className="img-fluid"
                src="/img/authors/kim-crayton-headshot.jpeg"
                alt="element"
              />
            </div>
            <div className="col-lg-9">
              <div className="inner-content">
                <div className="section-title">
                  <div className="title-text pl">
                    <h2 style={{marginTop:"25px"}}>Meet the Author</h2>
                  </div>
                </div>
                
                <p>
				<strong>As the Antiracist Economist, Kim Crayton</strong> is dedicated to building a future that Is Supremacy, Coercion, Discrimination, and Exploitation FREE. Formerly known for #causeascene, she used her platform to call out harm and the facade of inclusion, often consulting with tech companies that were experiencing “challenges” when it came to ensuring the welcoming and psychological
                </p>

                <p>
				After years of the status quo Kim has shifted. She is no longer putting out fires and instead is ready to focus her time and efforts on moving forward. Having worked many years as an educator she decided to become the mentor she wished she’d had. Using her own lived experience to guide her, Kim has been actively working to build businesses that model Profit Without Oppression by sharing knowledge and helping others develop skills in ways that accommodate the masses. In doing so Kim is laying the foundation for a Future that is Hopeful, Authentic and Strategic in Action…are you in?                </p>
				</div>
				
				
				<div className="speakers-single-area">
					<div className="inner-content">
						<div className="social-icon">
							<ul style={{listStyleType: "none"}}>
								<li><a href="https://www.linkedin.com/in/kimcrayton/"><i className="fa fa-linkedin"></i></a></li>
								<li><a href="https://twitter.com/kimcrayton1"><i className="fa fa-twitter"></i></a></li>
							</ul>
						</div>

						<p className="session-title"><span style={{fontSize:"18pt"}}>Sessions&nbsp;</span></p>
						<span style={{marginTop: "0"}}>
							<ul>
								<li>
									<p><a className="pill track-Culture" title="See more Culture sessions" href="/sessions/#Culture">Culture</a>&nbsp;<a title="See session details" href="/sessions/Profit-Without-Oppression" style={{fontSize: "18px"}}>Profit Without Oppression</a>
									</p>
								</li>
							</ul>
						</span>

					</div>
				</div>

            </div>
            {/* /col end*/}
          </div>
          {/* /row end*/}
            

            </div>


            <div
              className="tab-pane fade show active"
              id="data"
              role="tabpanel"
              aria-labelledby="data-tab"
            >


			<div className="row">
            <div className="col-lg-3 xs-mb40">
              <img
			  style={{marginTop:"30px"}}
			  className="img-fluid"
                src="/img/books/brandeis-book-cover.png"
                alt="element"
              />
            </div>
            <div className="col-lg-9">
              <div className="inner-content">
                <div className="section-title">
                  <div className="title-text pl">
                    <h2 style={{marginTop:"25px"}}>Data Conscience: Algorithmic Siege on our Humanity</h2>
                  </div>
                </div>
                <p>Data Conscience: Algorithmic Siege on our Humanity delivers an incisive and eye-opening discussion of how to fix tech’s dominant philosophy of “move fast and break things” with a renewed focus on equity and oppression. The book explores how to address discrimination in the digital data space with several known algorithms, including social network analysis, linear regression and sentiment analysis.</p>

				<p className="session-title"><span style={{fontSize:"18pt"}}>Getting Your Book Signed at REFACTR.TECH</span></p>
				<p>REFACTR.TECH attendees can get <strong><em>exclusive</em>&nbsp;&nbsp;early-access</strong> to Data Conscience: Algorithmic Siege on our Humanity, <em>before</em> the official release, at a <strong>28% discount!</strong></p>
        
        <p>Pick up your book at the conference before 11:00&nbsp;AM on September 15th, and you'll be all set to get your copy signed in-person by Dr. Brandeis Hill Marshall. Reserve yours today, before all our copies are sold out!</p>
        
        <p><strong>You have to <a href="https://reg.connectevents.io/ConnectEvents/rtech2022/" target="_blank">pre-order with REFACTR.TECH</a> 1&#41; to get this discount <em>and</em>&nbsp;&nbsp;2&#41; to ensure we will have your book ready for to pick up at the conference.</strong></p>
        
        <div className="primary-btn" style={{marginTop:"10px"}}>
          <a className="btn-primary" href="https://reg.connectevents.io/ConnectEvents/rtech2022/" target="_blank">
          <strong>Reserve Your Copy NOW*</strong>
          </a>
          <p style={{marginTop: "0", marginLeft: "42px", fontSize: "10pt"}}>*while supplies last</p>
           
        </div>
        
        
        
        </div>
            </div>
            {/* /col end*/}
          </div>
          {/* /row end*/}

		  <div className="row">
            <div className="col-lg-3 xs-mb40">
              <img
			  style={{marginTop:"30px"}}
			  className="img-fluid"
                src="/img/authors/BMarshall.jpg"
                alt="element"
              />
            </div>
            <div className="col-lg-9">
              <div className="inner-content">
                <div className="section-title">
                  <div className="title-text pl">
                    <h2 style={{marginTop:"25px"}}>Meet the Author</h2>
                  </div>
                </div>
                
                <p>
                <strong>Brandeis Hill Marshall</strong> teaches, speaks, and writes about the impact of data practices on technology and society. Her work contributes to data education, computer science education, and data science fields. She leads and runs a social impact business that provides educational resources and training designed to help data educators, scholars, and practitioners humanize data operations. She has advised and educated thousands in the public and corporate sectors. She also consults with organizations that are proactive in mitigating harmful effects of their data pipelines. Brandeis holds a PhD and master’s degree in computer science from Rensselaer Polytechnic Institute and a BS in computer science from the University of Rochester. </p>
				</div>


        <div className="speakers-single-area">
					<div className="inner-content">
						<div className="social-icon">
							<ul style={{listStyleType: "none"}}>
								<li><a href="https://www.linkedin.com/in/brandeis-marshall"><i className="fa fa-linkedin"></i></a></li>
								<li><a href="https://twitter.com/csdoctorsister"><i className="fa fa-twitter"></i></a></li>
							</ul>
						</div>

						<p className="session-title"><span style={{fontSize:"18pt"}}>Sessions&nbsp;</span></p>
						<span style={{marginTop: "0"}}>
							<ul>
								<li>
									<p><a className="pill track-Data" title="See more Data sessions" href="/sessions/#Data">Data</a>&nbsp;<a title="See session details" href="/sessions/Address-the-Spectrum-of-Bias-in-AI-Across-Organizations" style={{fontSize: "18px"}}>Address the Spectrum of Bias in AI Across Organizations</a>
									</p>
								</li>
							</ul>
						</span>

					</div>
				</div>
            
        
            </div>
            {/* /col end*/}
          </div>
          {/* /row end*/}

              
            </div>
            

          
            </div>
          
        </div>
        {/* /col end*/}
      </div>
      {/* /row end*/}
    </div>
    {/* /container end*/}
  </div>
  {/*Event Schedule Area End Here*/}

    </div>


    <div className="counter-up-area ptb60 bg-counter parallax">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="single-counter xs-mb40">
                  <div className="count-content" style={{ textAlign: "center"}}>
                    <span className="count" style={{ fontSize: "3.1em"}}>Register</span>
                    <p style={{ fontSize: "1.3em", fontWeight: "400", textTransform:"none"}}>Get your ticket to attend REFACTR.TECH in Atlanta, September 14 - 16 for 3 days packed full of workshops, keynotes, tech sessions and demos, and of course, parties! 
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
