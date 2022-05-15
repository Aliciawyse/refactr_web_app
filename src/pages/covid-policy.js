import React from "react";
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/footer";
import { Helmet } from "react-helmet";

export default () => (
  <div>
    <Helmet>
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <title>COVID-19 Policy | REFACTR.TECH</title>
      <meta name="author" content="iThemesLab" />
      <meta name="description" content="" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
    </Helmet>
    {/*Main Container Start Here*/}
    <div className="main-container">
      {/*Header Start Here*/}
      <NavigationBar whiteText/>
      {/*Header End Here*/}
      {/*About Us Area Start Here*/}
      <div className="about-us-area pad-head bg-about">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="about-content">
                <div className="section-title text-center">
                  <h2>COVID-19 Policy</h2>
                </div>
                <ol className="breadcrumb">
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li>|</li>
                  <li>COVID-19 Policy</li>
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
      {/*Privacy Policy Content Area Start Here*/}
      <div style={{ marginTop: "15px", marginBottom: "20px" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="inner-content">
              <p>
                Our attendees’ health and safety remain our top priority as we continue to monitor COVID-19 and look to venue, local, state, CDC, and WHO guidelines to make the best and most informed decisions around onsite safety and requirements. These guidelines are subject to change based upon health and safety recommendations at the time of the event.
              </p>
              
              <p><h2>Buy tickets with confidence.</h2>
              To ensure the health and safety of all attendees, staff, speakers, and sponsors, REFACTR.TECH 2022 is following this COVID-19 policy. We can offer a refund up to 2 weeks before the conference. If you cancel within two weeks of the event, we cannot offer a refund, but we can transfer your registration to another attendee.
              </p>

              <p><h2>Face Covering Policy</h2>
              Based on recent data, guidelines, and policies from the <a href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/about-face-coverings.html">CDC</a>, face coverings will be optional, but not required. Even though face coverings aren’t required you may prefer to wear one, and we encourage you to do so if that makes you more comfortable.  This policy is subject to change should the CDC update their guidelines prior to the conference.
              </p>

              <p><h2>Vaccinations</h2>
              All attendees will be required to provide proof of full and up-to-date vaccination of COVID-19 with a WHO-approved vaccine in order to attend REFACTR.TECH 2022. The definition of <strong>fully</strong> and <strong>up-to-date vaccination</strong> will be updated to conform to guidelines in place during the event. In accordance with national <a href="https://www.cdc.gov/coronavirus/2019-ncov/vaccines/stay-up-to-date.html?CDC_AA_refVal=https%3A%2F%2Fwww.cdc.gov%2Fcoronavirus%2F2019-ncov%2Fvaccines%2Ffully-vaccinated.html">US health policies</a> and <a href="https://www.cdc.gov/coronavirus/2019-ncov/travelers/proof-of-vaccination.html">CDC traveler policy</a>, people are currently considered fully vaccinated: if a person has received all recommended COVID-19 vaccines, including any booster dose(s) when eligible.
              </p>

              <p>
              We will not accept a negative COVID-19 test in lieu of proof of vaccination.
              </p>

              <p>Acceptable records include:
              <ul>
                <li>Your physical COVID-19 vaccination/immunization card.</li>
                <li>A photo of the front and back of your vaccination/immunization card.</li>
                <li>A digital verification from a recognized smartphone application such as Clear.</li>
              </ul>
              </p>

              <p>
              Individuals should not attend the event if they are COVID-positive, are exhibiting COVID symptoms (as defined by the CDC), or have been exposed, within 14 days prior to the event, to someone who was COVID-positive or showed COVID symptoms.
              </p>

              <p><h2>Travel</h2>
              Anyone traveling to the event should read and abide by the <a href="https://www.cdc.gov/coronavirus/2019-ncov/travelers/index.html">CDC’s Travel Guidelines</a> for domestic and international travel. We ask that participants respect fellow attendees and do everything possible to ensure an environment that is as safe as possible. If traveling internationally, there is a requirement for proof of a negative COVID-19 test or recovery from COVID-19 for all air passengers arriving in the United States. Read more <a href="https://www.cdc.gov/coronavirus/2019-ncov/travelers/testing-international-air-travelers.html">here</a>.
              </p>

              <p><h2>Venue</h2>
              The Loudermilk Center has implemented new measures aimed at protecting the public at large. Review the <a href="https://loudermilkcenter.com/wp-content/uploads/2020/07/loudermilk-safety-protocols.pdf">Loudermilk Safety Protocols</a> for more information.
              </p>

              <p>
                <i>Credit: PyconUS 2022, Devnexus 2022</i>
              </p>



              </div>
            </div>
            {/* /col end*/}
          </div>
          {/* /row end*/}
        </div>
        {/* /container end*/}
      </div>
      {/*Privacy Policy Content Area End Here*/}
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
);
