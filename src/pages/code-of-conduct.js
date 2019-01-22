import React from "react"

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
                    <a className="eventex-brand" href="index.html"><img src="assets/img/logo/logo-3.png?123" alt /></a>
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
                          <a className="nav-link" href="index.html">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="about.html">About</a>
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
                        <li className="nav-item active">
                          <a className="nav-link" href="#">Code of Conduct</a>
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
                      <h2>Code of Conduct</h2>
                    </div>
                    <ol className="breadcrumb">
                      <li><a href="index.html">Home</a></li>
                      <li>|</li>
                      <li>Code of Conduct</li>
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
          {/*Code of Conduct Content Area Start Here*/}
          <div style={{marginTop: '15px', marginBottom: '20px'}}>
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="inner-content">
                    <p>
                      Everyone participating in the REFACTR.TECH conference, events and Slack community—including, but not limited to attendees, speakers, sponsors and volunteers at REFACTR.TECH, are required to agree to the following code of conduct. Organizers will enforce this code throughout the event.
                    </p>
                    <h2>The Quick Version</h2>
                    <br />
                    <p>
                      REFACTR.TECH is dedicated to providing a harassment-free experience and environment for everyone, regardless of gender, gender identity and expression, age, sexual orientation, disability, physical appearance, body size, race, ethnicity, religion (or lack thereof), or technology choices. We do not tolerate harassment of conference participants in any form. Sexual language and imagery is not appropriate for any conference venue, including talks, workshops, parties, social media and other online media. Conference participants violating these rules may be sanctioned or expelled from the conference without a refund at the discretion of the conference organizers.
                    </p>
                    <p>
                      No weapons of any kind are allowed at REFACTR.TECH.
                    </p>
                    <h2>The More Detailed Version</h2>
                    <br />
                    {/*p>
Harassment includes offensive verbal comments related to gender, gender identity and expression, age, sexual orientation, disability, physical appearance, body size, race, ethnicity, religion, technology choices, sexual images in public spaces, deliberate intimidation, stalking, following, harassing photography or recording, sustained disruption of talks or other events, inappropriate physical contact, and unwelcome sexual attention.
</p*/}
                    <p><i><strong>Harassment includes:</strong></i></p>
                    <p /><ul>
                      <li>Offensive comments related to gender, gender identity and expression, sexual orientation, disability, mental illness, neuro(a)typicality, physical appearance, body size, age, race, ethnicity or religion.</li>
                      <li>Unwelcome comments regarding a person's lifestyle choices and practices, including those related to food, health, parenting, drugs, and employment.</li>
                      <li>Offensive comments regarding a person's technology choices.</li>
                      <li>Deliberate misgendering or use of 'dead' or rejected names.</li>
                      <li>Gratuitous or off-topic sexual images or behaviour in public spaces and/or spaces where they're not appropriate.</li>
                      <li>Physical contact and simulated physical contact (eg, textual descriptions like "hug" or "backrub") without consent or after a request to stop.</li>
                      <li>Threats of violence.</li>
                      <li>Incitement of violence towards any individual, including encouraging a person to commit suicide or to engage in self-harm.</li>
                      <li>Deliberate intimidation.</li>
                      <li>Stalking or following.</li>
                      <li>Harassing photography or recording, including logging online activity for harassment purposes.</li>
                      <li>Sustained disruption of sessions or other events
                      </li><li>Unwelcome sexual attention.</li>
                      <li>Pattern of inappropriate social contact, such as requesting/assuming inappropriate levels of intimacy with others.</li>
                      <li>Continued one-on-one communication after requests to cease.</li>
                      <li>Deliberate "outing" of any aspect of a person's identity without their consent except as necessary to protect vulnerable people from intentional abuse.</li>
                      <li>Publication of non-harassing private communication.</li>
                      <p />
                      <p>
                        <i><strong>REFACTR.TECH prioritizes marginalized people's safety over privileged people's comfort and therefore we will not act on complaints regarding:</strong></i></p>
                      <ul>
                        <li>'Reverse' -isms, including 'reverse racism,' 'reverse sexism,' and 'cisphobia'.</li>
                        <li>Reasonable communication of boundaries, such as "leave me alone," "go away," or "I'm not discussing this with you".</li>
                        <li>Communicating in a 'tone' you don't find congenial.</li>
                        <li>Criticizing racist, sexist, cissexist, or otherwise oppressive behavior or assumptions.</li>
                      </ul>
                      <p />
                      <h2>Consequences</h2>
                      <p>Participants asked to stop any harassing behavior are expected to comply immediately.</p>
                      <p>If a participant engages in harassing behavior, REFACTR.TECH may take any action we deem appropriate, up to and including expulsion from all REFACTR.TECH spaces and identification of the participant as a harasser to other REFACTR.TECH community members or the general public.</p>
                      <h2>Reporting and Enforcement</h2>
                      <p>If you are being harassed by a member of the REFACTR.TECH community, notice that someone else is being harassed, or have any other concerns, please contact us immediately via email at hello@refactr.tech.</p>
                      <p><strong>Conference</strong>
                        Please contact any member of our organizing, volunteer or security team. Our team can be identified by their volunteer t-shirts and will be trained in how to address and report any incidents that attendees bring to their attention.</p>
                      <p><strong>Slack</strong>
                        Please contact an admin or moderator (designated with a crown  emoji “👑” in their status) via direct message.</p>
                      <p>If the person who is harassing you is a member of staff, they will recuse themselves from handling your incident.</p>
                      <p>All reports will be handled in the strictest confidence. We will respond as promptly as we can.</p>
                      <h2>Acknowledgements</h2>
                      <p>This policy borrows heavily from similar open source policies authored by <a href="http://jsconf.com/codeofconduct.html">JSConf</a>, <a href="http://www.writespeakcode.com/code-of-conduct.html">Write/Speak/Code</a> and <a href="https://2018.xoxofest.com/conduct">XOXO</a>.</p>
                      <p>This policy is licensed under a Creative Commons Attribution 4.0 International license. We encourage other events to adopt (and enforce) similar policies by using and remixing ours.</p>
                    </ul></div>
                </div>
                {/* /col end*/}
              </div>
              {/* /row end*/}
            </div>
            {/* /container end*/}
          </div>
          {/*Code of Conduct Content Area End Here*/}
          
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
