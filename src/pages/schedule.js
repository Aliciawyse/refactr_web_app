import React from "react";
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/footer";
import { Helmet } from "react-helmet";


export default ({ data }) => (
  <div>
    <Helmet>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <title>Schedule | REFACTR.TECH</title>
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
              <li>Schedule</li>
              <li>|</li>
              <li><a href="/workshops">Workshops</a></li>
              <li>|</li>
              <li><a href="/careerfair">Career Fair</a></li>
              <li>|</li>
              <li><a href="/sessions">Sessions</a></li>
            </ol>
                
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*Conference Synopsis Area Start Here*/}
      

  {/*Event Schedule Area Start Here*/}
  <div className="event-schedule-area-two bg-color pad100">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="section-title text-center">
            <div className="title-text">
              <h2>Schedule</h2>
              <p><a href="/schedule_mobile">See mobile version</a></p>
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
                className="nav-link active"
                id="home-taThursday"
                data-toggle="tab"
                href="#home"
                role="tab"
                aria-controls="home"
                aria-selected="true"
              >
                August 14<br/><span style={{fontSize:"12pt"}}>Workshops</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="profile-tab"
                data-toggle="tab"
                href="#profile"
                role="tab"
                aria-controls="profile"
                aria-selected="false"
              >
                August 17<br/><span style={{fontSize:"12pt"}}>Career Fair</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="contact-tab"
                data-toggle="tab"
                href="#contact"
                role="tab"
                aria-controls="contact"
                aria-selected="false"
              >
                August 18<br/><span style={{fontSize:"12pt"}}>Conference Day 1</span>
              </a>
            </li>
            <li className="nav-item d-none d-lg-block">
              <a
                className="nav-link"
                id="sunday-tab"
                data-toggle="tab"
                href="#sunday"
                role="tab"
                aria-controls="sunday"
                aria-selected="false"
              >
                August 19<br/><span style={{fontSize:"12pt"}}>Conference Day 2</span>
              </a>
            </li>
            <li className="nav-item mr-0 d-none d-lg-block">
              <a
                className="nav-link"
                id="monday-tab"
                data-toggle="tab"
                href="#monday"
                role="tab"
                aria-controls="monday"
                aria-selected="false"
              >
                August 20<br/><span style={{fontSize:"12pt"}}>Conference Day 3</span>
              </a>
            </li>
          </ul>
          <div className="tab-content" id="myTabContent">
            <div
              className="tab-pane fade show active"
              id="home"
              role="tabpanel"
              aria-labelledby="home-tab"
            >
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">Speakers</th>
                      <th scope="col">Event</th>
                      <th scope="col">Venue Platform</th>
                      <th className="text-center" scope="col">
                        Details
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="inner-box">
                      
                      <td>
                        <div className="event-img">
                          <img src="/static/06561c9a49ee7afd91be34485188ddf1/adf82/mike-hartington.png" alt />
                        </div>
                      </td>
                      <td>
                        <div className="event-wrap">
                          <h3>
                            <a href="/sessions/Cross-Platform-with-Ionic--26-Capacitor">Cross Platform with Ionic...</a>
                          </h3>
                          <div className="meta">
                            <div className="organizers">
                              <a href="/speakers/mike-hartington">Mike Hartington</a>
                            </div>
                            <div className="categories">
                              <a href="/workshops">Workshops</a>
                            </div>
                            <div className="time">
                              <span>11:00 AM ET - 04:00 PM ET 5h</span>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="event-img">
                          <a href="https://refactrtech-workshop1.eulerr.app/">
                            <img src="https://dl.airtable.com/.attachments/beb4c2a5fb9aa9f1a4fca328f6f281ca/57bde377/eulerr-logo.png" alt />
                          </a>
                            <p><a href="https://refactrtech-workshop1.eulerr.app/">Join Workshop</a></p>
                        </div>
                      </td>
                      <td>
                        <div className="primary-btn">
                          <a className="btn-primary" href="/sessions/Cross-Platform-with-Ionic--26-Capacitor">
                            Read More
                          </a>
                        </div>
                      </td>
                    </tr>
                    <tr className="inner-box">
                      
                      <td>
                        <div className="event-img">
                          <img src="/static/4d85fa3c8242da85a0e9e9fd59c764fe/e7f0a/alyssa-nicoll-05-2021.png" alt />
                        </div>
                      </td>
                      <td>
                        <div className="event-wrap">
                          <h3>
                            <a href="/sessions/Beginner-UI--26-Angular-Workshop">Beginner UI & Angular...</a>
                          </h3>
                          <div className="meta">
                            <div className="organizers">
                              <a href="/speakers/alyssa-nicoll">Alyssa Nicoll</a>
                            </div>
                            <div className="categories">
                              <a href="/workshops">Workshops</a>
                            </div>
                            <div className="time">
                              <span>11:00 AM ET - 04:00 PM ET 5h</span>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>
                      <div className="event-img">
                      <a href="https://refactrtech-workshop3.eulerr.app/">
                        <img src="https://dl.airtable.com/.attachments/beb4c2a5fb9aa9f1a4fca328f6f281ca/57bde377/eulerr-logo.png" alt />
                      </a>
                        <p><a href="https://refactrtech-workshop3.eulerr.app/">Join Workshop</a></p>
                    </div>
                      </td>
                      <td>
                        <div className="primary-btn">
                          <a className="btn-primary" href="/sessions/Beginner-UI--26-Angular-Workshop">
                            Read More
                          </a>
                        </div>
                      </td>
                    </tr>
                    <tr className="inner-box border-bottom-0">
                      
                      <td>
                        <div className="event-img">
                          <img src="/static/e5819b7f81ca12c11a3f7241eac3f033/3ad1c/zack-derose.jpg" alt />
                        </div>
                      </td>
                      <td>
                        <div className="event-wrap">
                          <h3>
                            <a href="/sessions/Nx-Workshop---Building-a-Board-Game-Store-with-React">Nx Workshop - Building a...</a>
                          </h3>
                          <div className="meta">
                            <div className="organizers">
                              <a href="/speakers/zack-derose">Zack Derose</a>
                            </div>
                            <div className="categories">
                              <a href="/workshops">Workshops</a>
                            </div>
                            <div className="time">
                              <span>11:00 AM ET - 04:00 PM ET 5h</span>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>
                      <div className="event-img">
                          <a href="https://refactrtech-workshop2.eulerr.app/">
                            <img src="https://dl.airtable.com/.attachments/beb4c2a5fb9aa9f1a4fca328f6f281ca/57bde377/eulerr-logo.png" alt />
                          </a>
                            <p><a href="https://refactrtech-workshop2.eulerr.app/">Join Workshop</a></p>
                        </div>
                      </td>
                      <td>
                        <div className="primary-btn">
                          <a className="btn-primary" href="/sessions/Nx-Workshop---Building-a-Board-Game-Store-with-React">
                            Read More
                          </a>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="profile"
              role="tabpanel"
              aria-labelledby="profile-tab"
            >
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col"> </th>
                      <th scope="col">Event</th>
                      <th scope="col">Venue Platform</th>
                      <th scope="col">Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="inner-box">
                      
                      <td>
                        <div className="event-img">
                        <img src="/img/careerfair-meta-square.jpeg" alt />
                        </div>
                      </td>
                      <td>
                        <div className="event-wrap">
                          <h3>
                            <a href="/careerfair">Virtual Career Fair</a>
                          </h3>
                          <div className="meta">
                            
                            <div className="categories">
                              <a href="/jobs">Jobs</a>
                            </div>
                            <div className="time">
                              <span>11:00 AM ET - 02:00 PM ET 3h</span>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>
                      <div className="event-img">
                        <img src="https://dl.airtable.com/.attachments/bfc58c616c4f481b9627636a75648260/e7841e89/gatherly-logo.png" alt />
                      </div>
                      </td>
                      <td>
                        <div className="primary-btn">
                          <a className="btn-primary" href="/careerfair">
                            Read More
                          </a>
                        </div>
                      </td>
                    </tr>
                    
                  </tbody>
                </table>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="contact"
              role="tabpanel"
              aria-labelledby="contact-tab"
            >
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">Speakers</th>
                      <th scope="col">Session</th>
                      <th scope="col">Venue Platform</th>
                      <th scope="col">Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="inner-box">
                      
                      <td>
                        <div className="event-img">
                          <img src="https://dl.airtable.com/.attachmentThumbnails/5a1d4e007b0c0e5ebfdf5fd1218c3784/70ff1a61" alt />
                        </div>
                      </td>
                      <td>
                        <div className="event-wrap">
                          <h3>
                            <a href="/sessions/Mentorship--2B-Sponsorship">Mentorship + Sponsorship
                            </a>
                          </h3>
                          <div className="meta">
                            <div className="organizers">
                              <a href="/speakers/lara-hogan
                              ">Lara Hogan</a>
                            </div>
                            <div className="categories">
                              <a href="/sessions/#Keynotes">Keynotes</a>
                            </div>
                            <div className="time">
                              <span>12:10 PM ET - 12:40 PM ET 0h 30'</span>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="event-img">
                          <img src="/img/learn-tv-square.png" alt />
                          <img src="https://dl.airtable.com/.attachments/beb4c2a5fb9aa9f1a4fca328f6f281ca/57bde377/eulerr-logo.png" alt />
                        </div>
                      </td>
                      <td>
                        <div className="primary-btn">
                          <a className="btn-primary" href="/sessions/Mentorship--2B-Sponsorship">
                            Read More
                          </a>
                        </div>
                      </td>
                    </tr>
                    <tr className="inner-box">
                      
                      <td>
                        <div className="event-img">
                          <img src="https://dl.airtable.com/.attachmentThumbnails/952bd2370a959fb36c4b4021eb5d0668/43c3d4f6" alt />
                        </div>
                      </td>
                      <td>
                        <div className="event-wrap">
                          <h3>
                            <a href="/sessions/Microcontrollers--28MCUs-29-2C-Cloud-2C-and-a-Chance-of-AI">Microcontrollers (MCUs), Cloud, and...
                            </a>
                          </h3>
                          <div className="meta">
                            <div className="organizers">
                              <a href="/speakers/tara-walker">Tara Walker</a>
                            </div>
                            <div className="categories">
                              <a href="/sessions/#SoftwareEngineering">Software Engineering</a>
                            </div>
                            <div className="time">
                              <span>01:15 PM ET - 01:45 PM ET 0h 30'</span>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>
                      <div className="event-img">
                      <img src="/img/learn-tv-square.png" alt />
                      <img src="https://dl.airtable.com/.attachments/beb4c2a5fb9aa9f1a4fca328f6f281ca/57bde377/eulerr-logo.png" alt />
                    </div>
                      </td>
                      <td>
                        <div className="primary-btn">
                          <a className="btn-primary" href="/sessions/Microcontrollers--28MCUs-29-2C-Cloud-2C-and-a-Chance-of-AI">
                            Read More
                          </a>
                        </div>
                      </td>
                    </tr>
                    <tr className="inner-box border-bottom-0">
                      
                      <td>
                        <div className="event-img">
                          <img src="https://dl.airtable.com/.attachmentThumbnails/dc24ebf836814dd73b319f4311a98931/381d7de5" alt />
                        </div>
                      </td>
                      <td>
                        <div className="event-wrap">
                          <h3>
                            <a href="/sessions/Building-Open-Source-Communities
                            ">Building Open Source Communities
                            </a>
                          </h3>
                          <div className="meta">
                            <div className="organizers">
                              <a href="/speakers/tierney-cyren
                              ">Tierney Cyren</a>
                            </div>
                            <div className="categories">
                              <a href="/sessions/#SoftwareEngineering">Software Engineering</a>
                            </div>
                            <div className="time">
                              <span>02:00 PM ET - 02:00 PM ET 0h 30'</span>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>
                      <div className="event-img">
                      <img src="/img/learn-tv-square.png" alt />
                      <img src="https://dl.airtable.com/.attachments/beb4c2a5fb9aa9f1a4fca328f6f281ca/57bde377/eulerr-logo.png" alt />
                    </div>
                      </td>
                      <td>
                        <div className="primary-btn">
                          <a className="btn-primary" href="/sessions/Building-Open-Source-Communities">
                            Read More
                          </a>
                        </div>
                      </td>
                    </tr>
                    <tr className="inner-box">
                      
                      <td>
                        <div className="event-img">
                          <img src="https://dl.airtable.com/.attachmentThumbnails/2d897a3fe7b2165d0fe5dc15386ae6f6/6dbdfac5" alt />
                        </div>
                      </td>
                      <td>
                        <div className="event-wrap">
                          <h3>
                            <a href="/sessions/Everything-counts-21-Use-your-superpowers-for-good-21
                            ">Everything counts! Use your super...
                            </a>
                          </h3>
                          <div className="meta">
                            <div className="organizers">
                              <a href="/speakers/diana-rodriguez
                              ">Diana Rodriguez</a>
                            </div>
                            <div className="categories">
                              <a href="/sessions/#SoftwareEngineering">Software Engineering</a>
                            </div>
                            <div className="time">
                              <span>02:45 PM ET - 03:15 PM ET 0h 30'</span>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>
                      <div className="event-img">
                      <img src="/img/learn-tv-square.png" alt />
                        <img src="https://dl.airtable.com/.attachments/beb4c2a5fb9aa9f1a4fca328f6f281ca/57bde377/eulerr-logo.png" alt />
                      </div>
                      </td>
                      <td>
                        <div className="primary-btn">
                          <a className="btn-primary" href="/sessions/Everything-counts-21-Use-your-superpowers-for-good-21">
                            Read More
                          </a>
                        </div>
                      </td>
                    </tr>

                    <tr className="inner-box">
                      
                      <td>
                        <div className="event-img">
                          <img src="https://dl.airtable.com/.attachmentThumbnails/6d4d1f9cc6b19546eee73a7b3d0c86ab/0c409a52" alt />
                        </div>
                      </td>
                      <td>
                        <div className="event-wrap">
                          <h3>
                            <a href="/sessions/Effective-Testing-Approaches-for-your-Application
                            ">Effective Testing Approaches for...
                            </a>
                          </h3>
                          <div className="meta">
                            <div className="organizers">
                              <a href="/speakers/cecelia-martinez
                              ">Cecelia Martinez</a>
                            </div>
                            <div className="categories">
                              <a href="/sessions/#SoftwareEngineering">Software Engineering</a>
                            </div>
                            <div className="time">
                              <span>03:45 PM ET - 04:15 PM 0h 30'</span>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>
                      <div className="event-img">
                        <img src="/img/learn-tv-square.png" alt />
                        <img src="https://dl.airtable.com/.attachments/beb4c2a5fb9aa9f1a4fca328f6f281ca/57bde377/eulerr-logo.png" alt />
                      </div>
                      </td>
                      <td>
                        <div className="primary-btn">
                          <a className="btn-primary" href="/sessions/Effective-Testing-Approaches-for-your-Application">
                            Read More
                          </a>
                        </div>
                      </td>
                    </tr>

                    <tr className="inner-box">
                      
                      <td>
                        <div className="event-img">
                          <img src="https://dl.airtable.com/.attachmentThumbnails/0d61df0497a4bcf902df0890a8bb7df8/1526e86a" alt />
                        </div>
                      </td>
                      <td>
                        <div className="event-wrap">
                          <h3>
                            <a href="/sessions/Where-to-Start-with-AWS-as-a-Developer
                            ">Where to Start with AWS...
                            </a>
                          </h3>
                          <div className="meta">
                            <div className="organizers">
                              <a href="/speakers/sam-julien
                              ">Sam Julien</a>
                            </div>
                            <div className="categories">
                              <a href="/sessions/#SoftwareEngineering">Software Engineering</a>
                            </div>
                            <div className="time">
                              <span>04:30 PM ET- 05:00 PM ET 0h 30'</span>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>
                      <div className="event-img">
                        <img src="https://dl.airtable.com/.attachments/beb4c2a5fb9aa9f1a4fca328f6f281ca/57bde377/eulerr-logo.png" alt />
                      </div>
                      </td>
                      <td>
                        <div className="primary-btn">
                          <a className="btn-primary" href="/sessions/Where-to-Start-with-AWS-as-a-Developer">
                            Read More
                          </a>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="sunday"
              role="tabpanel"
              aria-labelledby="sunday-tab"
            >
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">Speakers</th>
                      <th scope="col">Session</th>
                      <th scope="col">Venue Platform</th>
                      <th scope="col">Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="inner-box">
                      
                      <td>
                        <div className="event-img">
                          <img src="https://dl.airtable.com/.attachmentThumbnails/56dd1a4c2819a38dcd76d41017bfbf43/83091dbd" alt />&nbsp;
                          <img src="https://dl.airtable.com/.attachmentThumbnails/dc8321a7e0fc8d0f47612b43f26b0b7b/9842c8da" alt />
                        </div>
                      </td>
                      <td>
                        <div className="event-wrap">
                          <h3>
                            <a href="/sessions/Moving-Beyond-Performative-Racial-Equity-in-Tech
                            ">Moving Beyond Performative Racial...
                            </a>
                          </h3>
                          <div className="meta">
                            <div className="organizers">
                              <a href="/speakers/albrey-bristo-brown">Albrey Bristo-Brown</a>&nbsp;<a href="/speakers/nicole-sanchez">Nicole Sanchez</a>
                            </div>
                            <div className="categories">
                            <a href="/sessions/#Keynotes">Keynotes</a>
                            </div>
                            <div className="time">
                              <span>12:10 PM ET - 12:55P PM ET 0h 45'</span>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>
                      <div className="event-img">
                        <img src="https://dl.airtable.com/.attachments/beb4c2a5fb9aa9f1a4fca328f6f281ca/57bde377/eulerr-logo.png" alt />
                      </div>
                      </td>
                      <td>
                        <div className="primary-btn">
                          <a className="btn-primary" href="/sessions/Moving-Beyond-Performative-Racial-Equity-in-Tech">
                            Read More
                          </a>
                        </div>
                      </td>
                    </tr>
                    <tr className="inner-box">
                     
                      <td>
                        <div className="event-img">
                          <img src="https://dl.airtable.com/.attachmentThumbnails/5d83a5c0c2719fe564d86a59305201d2/7a15dea4" alt />
                        </div>
                      </td>
                      <td>
                        <div className="event-wrap">
                          <h3>
                            <a href="/sessions/FAULT-TEXT-3A-The-Adversities-in-Automated-Alternative-Text
                            ">FAULT TEXT: The Adversities in Auto...
                            </a>
                          </h3>
                          <div className="meta">
                            <div className="organizers">
                              <a href="/speakers/henri-helvetica
                              ">Henri Helvetica</a>
                            </div>
                            <div className="categories">
                              <a href="/sessions/#UX&Accessibility">UX &amp; Accessibility</a>
                            </div>
                            <div className="time">
                              <span>01:15 PM ET - 01:45 PM 0h 30'</span>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>
                      <div className="event-img">
                      <img src="https://dl.airtable.com/.attachments/beb4c2a5fb9aa9f1a4fca328f6f281ca/57bde377/eulerr-logo.png" alt />
                    </div>
                      </td>
                      <td>
                        <div className="primary-btn">
                          <a className="btn-primary" href="/sessions/FAULT-TEXT-3A-The-Adversities-in-Automated-Alternative-Text">
                            Read More
                          </a>
                        </div>
                      </td>
                    </tr>
                    <tr className="inner-box border-bottom-0">
                      
                      <td>
                        <div className="event-img">
                          <img src="https://dl.airtable.com/.attachmentThumbnails/1df8442dc1e4260de06c4c8b445dba71/d1e75b49" alt />
                        </div>
                      </td>
                      <td>
                        <div className="event-wrap">
                          <h3>
                            <a href="/sessions/Accessibility-isn-27t-hard-3B-getting-people-to-see-it-27s-easy-ca
                            ">Accessibility isn't hard; getting peo...
                            </a>
                          </h3>
                          <div className="meta">
                            <div className="organizers">
                              <a href="/speakers/sarrah-vesselov
                              ">Sarrah Vesselov</a>
                            </div>
                            <div className="categories">
                            <a href="/sessions/#UX&Accessibility">UX &amp; Accessibility</a>
                            </div>
                            <div className="time">
                              <span>02:00 PM ET - 02:30 PM ET 0h 30'</span>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>
                      <div className="event-img">
                        <img src="https://dl.airtable.com/.attachments/beb4c2a5fb9aa9f1a4fca328f6f281ca/57bde377/eulerr-logo.png" alt />
                      </div>
                      </td>
                      <td>
                        <div className="primary-btn">
                          <a className="btn-primary" href="/sessions/Accessibility-isn-27t-hard-3B-getting-people-to-see-it-27s-easy-ca">
                            Read More
                          </a>
                        </div>
                      </td>
                    </tr>
                    <tr className="inner-box">
                      
                      <td>
                        <div className="event-img">
                          <img src="https://dl.airtable.com/.attachmentThumbnails/b8be86649fa5804c8d9cef66ff02b7bd/b60681ce" alt />
                        </div>
                      </td>
                      <td>
                        <div className="event-wrap">
                          <h3>
                            <a href="/sessions/ARIA-3A-A-Grande-Method-Of-Accessible-Markup
                            ">ARIA: A Grande Method Of Accessible...
                            </a>
                          </h3>
                          <div className="meta">
                            <div className="organizers">
                              <a href="/speakrs/chris-demars
                              ">Chris DeMars</a>
                            </div>
                            <div className="categories">
                            <a href="/sessions/#UX&Accessibility">UX &amp; Accessibility</a>
                            </div>
                            <div className="time">
                              <span>02:45 PM ET - 03:15 PM ET 0h 30'</span>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>
                      <div className="event-img">
                        <img src="https://dl.airtable.com/.attachments/beb4c2a5fb9aa9f1a4fca328f6f281ca/57bde377/eulerr-logo.png" alt />
                      </div>
                      </td>
                      <td>
                        <div className="primary-btn">
                          <a className="btn-primary" href="/sessions/ARIA-3A-A-Grande-Method-Of-Accessible-Markup">
                            Read More
                          </a>
                        </div>
                      </td>
                    </tr>
                    <tr className="inner-box">
                     
                      <td>
                        <div className="event-img">
                          <img src="https://dl.airtable.com/.attachmentThumbnails/4a0564bb48989bc0e87c32fedad9efdd/94000046" alt />
                        </div>
                      </td>
                      <td>
                        <div className="event-wrap">
                          <h3>
                            <a href="/sessions/Accessible-Components-
                            ">Accessible Components</a>
                          </h3>
                          <div className="meta">
                            <div className="organizers">
                              <a href="/speakers/homer-gaines
                              ">Homer Gaines</a>
                            </div>
                            <div className="categories">
                            <a href="/sessions/#UX&Accessibility">UX &amp; Accessibility</a>
                            </div>
                            <div className="time">
                              <span>03:45 PM ET - 04:15 PM ET 0h 30'</span>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>
                      <div className="event-img">
                      <img src="https://dl.airtable.com/.attachments/beb4c2a5fb9aa9f1a4fca328f6f281ca/57bde377/eulerr-logo.png" alt />
                    </div>
                      </td>
                      <td>
                        <div className="primary-btn">
                          <a className="btn-primary" href="/sessions/Accessible-Components-">
                            Read More
                          </a>
                        </div>
                      </td>
                    </tr>
                    <tr className="inner-box border-bottom-0">
                      
                      <td>
                        <div className="event-img">
                          <img src="https://dl.airtable.com/.attachmentThumbnails/32a6ef9e5d3d6b8ca59ab252ae543e6c/d47433d3" alt />
                        </div>
                      </td>
                      <td>
                        <div className="event-wrap">
                          <h3>
                            <a href="/sessions/Shapeshifters-3A-The--231-UX-Mistake-You-Don-27t-Know-You-27re-Makin">
                            Shapeshifters: The #1 UX Mistake Yo...
                            </a>
                          </h3>
                          <div className="meta">
                            <div className="organizers">
                              <a href="/speakers/sophia-prater
                              ">Sophia Prater</a>
                            </div>
                            <div className="categories">
                            <a href="/sessions/#UX&Accessibility">UX &amp; Accessibility</a>
                            </div>
                            <div className="time">
                              <span>04:30 PM ET - 05:00 PM ET 0h 30'</span>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>
                      <div className="event-img">
                        <img src="https://dl.airtable.com/.attachments/beb4c2a5fb9aa9f1a4fca328f6f281ca/57bde377/eulerr-logo.png" alt />
                      </div>
                      </td>
                      <td>
                        <div className="primary-btn">
                          <a className="btn-primary" href="/sessions/Shapeshifters-3A-The--231-UX-Mistake-You-Don-27t-Know-You-27re-Makin">
                            Read More
                          </a>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="monday"
              role="tabpanel"
              aria-labelledby="monday-tab"
            >
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">Speakers</th>
                      <th scope="col">Session</th>
                      <th scope="col">Venue Platform</th>
                      <th scope="col">Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="inner-box">
                      
                      <td>
                        <div className="event-img">
                          <img src="https://dl.airtable.com/.attachmentThumbnails/24726fccc9630c58d72dfe3a49c1a77f/54c16104" alt />
                        </div>
                      </td>
                      <td>
                        <div className="event-wrap">
                          <h3>
                            <a href="/sessions/Gatekeepers-and-Difficulty-Anchors
                            ">Gatekeepers and Difficulty...
                            </a>
                          </h3>
                          <div className="meta">
                            <div className="organizers">
                              <a href="/speakers/mekka-okereke
                              ">Mekka Okereke</a>
                            </div>
                            <div className="categories">
                              <a href="/sessions/#Career/Leadership">Career &amp; Leadership</a>
                            </div>
                            <div className="time">
                              <span>12:25 PM ET - 12:55 PM ET 0h 30'</span>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>
                      <div className="event-img">
                        <img src="https://dl.airtable.com/.attachments/beb4c2a5fb9aa9f1a4fca328f6f281ca/57bde377/eulerr-logo.png" alt />
                      </div>
                      </td>
                      <td>
                        <div className="primary-btn">
                          <a className="btn-primary" href="/sessions/Gatekeepers-and-Difficulty-Anchors">
                            Read More
                          </a>
                        </div>
                      </td>
                    </tr>
                    <tr className="inner-box">
                      
                      <td>
                        <div className="event-img">
                          <img src="https://dl.airtable.com/.attachmentThumbnails/a2dd8b8c4a7516a3edde945b2cac16a6/146d0710" alt />
                        </div>
                      </td>
                      <td>
                        <div className="event-wrap">
                          <h3>
                            <a href="/sessions/7 Secrets of Highly Successful Developers

                            ">7 Secrets of Highly Succ...
                            </a>
                          </h3>
                          <div className="meta">
                            <div className="organizers">
                              <a href="/speakers/kim-maida">Kim Maida</a>
                            </div>
                            <div className="categories">
                            <a href="/sessions/#Career/Leadership">Career &amp; Leadership</a>
                            </div>
                            <div className="time">
                              <span>01:10 PM ET - 01:40 PM 0h 30'</span>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>
                      <div className="event-img">
                        <img src="https://dl.airtable.com/.attachments/beb4c2a5fb9aa9f1a4fca328f6f281ca/57bde377/eulerr-logo.png" alt />
                      </div>
                      </td>
                      <td>
                        <div className="primary-btn">
                          <a className="btn-primary" href="/sessions/7 Secrets of Highly Successful Developers">
                            Read More
                          </a>
                        </div>
                      </td>
                    </tr>
                    <tr className="inner-box border-bottom-0">
                      
                      <td>
                        <div className="event-img">
                          <img src="https://dl.airtable.com/.attachmentThumbnails/1230a5cd628aeb1aea4b4208b94f3df0/9dd71e1b" alt />
                        </div>
                      </td>
                      <td>
                        <div className="event-wrap">
                          <h3>
                            <a href="/sessions/Taking-charge-3A-how-to-own-your-career-path
                            ">Taking charge: how to own...
                            </a>
                          </h3>
                          <div className="meta">
                            <div className="organizers">
                              <a href="/speakers/katie-wilde
                              ">Katie Wilde</a>
                            </div>
                            <div className="categories">
                            <a href="/sessions/#Career/Leadership">Career &amp; Leadership</a>
                            </div>
                            <div className="time">
                              <span>01:55 PM ET - 02:25 PM ET 0h 30'</span>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>
                      <div className="event-img">
                        <img src="https://dl.airtable.com/.attachments/beb4c2a5fb9aa9f1a4fca328f6f281ca/57bde377/eulerr-logo.png" alt />
                      </div>
                      </td>
                      <td>
                        <div className="primary-btn">
                          <a className="btn-primary" href="/sessions/Taking-charge-3A-how-to-own-your-career-path">
                            Read More
                          </a>
                        </div>
                      </td>
                    </tr>

                    <tr className="inner-box border-bottom-0">
                      
                      <td>
                        <div className="event-img">
                          <img src="https://dl.airtable.com/.attachmentThumbnails/7e24e5a8df4e01f6382ef3da99323bcd/f20d9319" alt />
                        </div>
                      </td>
                      <td>
                        <div className="event-wrap">
                          <h3>
                            <a href="/sessions/The-Interview-3A-What-History-and-Science-Can-Teach-Us-About-H
                            ">The Interview: What History...
                            </a>
                          </h3>
                          <div className="meta">
                            <div className="organizers">
                              <a href="/speakers/jason-wong
                              ">Jason Wong</a>
                            </div>
                            <div className="categories">
                            <a href="/sessions/#Career/Leadership">Career &amp; Leadership</a>
                            </div>
                            <div className="time">
                              <span>02:40 PM ET - 03:10 PM ET 0h 30'</span>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>
                      <div className="event-img">
                        <img src="https://dl.airtable.com/.attachments/beb4c2a5fb9aa9f1a4fca328f6f281ca/57bde377/eulerr-logo.png" alt />
                      </div>
                      </td>
                      <td>
                        <div className="primary-btn">
                          <a className="btn-primary" href="/sessions/The-Interview-3A-What-History-and-Science-Can-Teach-Us-About-H">
                            Read More
                          </a>
                        </div>
                      </td>
                    </tr>

                    <tr className="inner-box border-bottom-0">
                      
                      <td>
                        <div className="event-img">
                          <img src="https://dl.airtable.com/.attachmentThumbnails/f6ac48db29d8badd3b129712366eb357/9b2aa22b" alt />
                          <img src="https://dl.airtable.com/.attachmentThumbnails/bc98eaf041a8be85c2f19b85c2c5c833/0219a48e" alt />
                        </div>
                      </td>
                      <td>
                        <div className="event-wrap">
                          <h3>
                            <a href="/sessions/Keeping-up-with-the-Caldwells
                            ">Keeping up with the Caldwells
                            </a>
                          </h3>
                          <div className="meta">
                            <div className="organizers">
                              <a href="/speakers/nick-caldwell">Nick Caldwell</a>&nbsp;
                              <a href="/speakers/tia-caldwell">Tia Caldwell</a>
                            </div>
                            <div className="categories">
                            <a href="/sessions/#Career/Leadership">Career &amp; Leadership</a>
                            </div>
                            <div className="time">
                              <span>03:40 PM ET - 04:10 PM 0h 30'</span>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>
                      <div className="event-img">
                        <img src="https://dl.airtable.com/.attachments/beb4c2a5fb9aa9f1a4fca328f6f281ca/57bde377/eulerr-logo.png" alt />
                      </div>
                      </td>
                      <td>
                        <div className="primary-btn">
                          <a className="btn-primary" href="/sessions/Keeping-up-with-the-Caldwells">
                            Read More
                          </a>
                        </div>
                      </td>
                    </tr>

                    <tr className="inner-box border-bottom-0">
                      
                      <td>
                        <div className="event-img">
                          <img src="https://dl.airtable.com/.attachmentThumbnails/ac71fa194dd192257f377543a6276c48/6ba48ae4" alt />
                        </div>
                      </td>
                      <td>
                        <div className="event-wrap">
                          <h3>
                            <a href="/sessions/Algorithmic-Bias-3A-Data-as-a-Weapon

                            ">Algorithmic Bias: Data as a Weapon
                            </a>
                          </h3>
                          <div className="meta">
                            <div className="organizers">
                              <a href="/speakers/ayodele-odubela
                              ">Ayodele Odubela
                              </a>
                            </div>
                            <div className="categories">
                            <a href="/sessions/#Keynotes">Keynotes</a>
                            </div>
                            <div className="time">
                              <span>04:30 PM ET - 05:00 PM 0h 30'</span>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>
                      <div className="event-img">
                        <img src="https://dl.airtable.com/.attachments/beb4c2a5fb9aa9f1a4fca328f6f281ca/57bde377/eulerr-logo.png" alt />
                      </div>
                      </td>
                      <td>
                        <div className="primary-btn">
                          <a className="btn-primary" href="/sessions/Algorithmic-Bias-3A-Data-as-a-Weapon">
                            Read More
                          </a>
                        </div>
                      </td>
                    </tr>

                  </tbody>
                </table>
              </div>
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
    <Footer />
  </div>
);
