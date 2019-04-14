import React from "react";
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
                  <h2>Terms and Conditions</h2>
                </div>
                <ol className="breadcrumb">
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li>|</li>
                  <li>Terms and Conditions</li>
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
      <div style={{ marginTop: "15px", marginBottom: "20px" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="inner-content">
              <div>
        <p className="c1"><span className="c0">REFACTR.TECH 2019 Terms &amp; Conditions</span></p>
        <p className="c1"><span className="c0">&nbsp;</span></p>
        <p className="c1"><span className="c0">1. Registration Terms and Conditions</span></p>
        <p className="c1"><span className="c0">&nbsp;</span></p>
        <p className="c1"><span className="c0">The REFACTR.TECH 2019 conference (the "Conference") are hosted by ConnectJS LLC ("ConnectEvents"). By registering for the Conference, you agree to be bound by these terms and conditions.</span></p>
        <p className="c1"><span className="c0">&nbsp;</span></p>
        <p className="c1"><span className="c0">Note: See http://refactr.tech for current available programs and schedules. Conference speakers, program and event schedules are subject to change.</span></p>
        <p className="c1"><span className="c0">&nbsp;</span></p>
        <p className="c1"><span className="c0">2. Substitutions, Cancellation and Refund Policies</span></p>
        <p className="c1"><span className="c0">&nbsp;</span></p>
        <p className="c1"><span className="c2">Registration substitutions and changes of the registration can be made up until 11:59pm EST on 22 May, 2019, which is ten (10) business days prior to the start of the Conference. Registration for individuals registered to attend the Conference and/or any associated ancillary event (each, an "Event", collectively, the "Events") must be made in writing and sent by e-mail at </span><span className="c9">hello@refactr.tech</span><span className="c0">&nbsp;no later than 11:59pm EST on 22 May 2019</span></p>
        <p className="c1"><span className="c0">&nbsp;</span></p>
        <p className="c1"><span className="c0">Registrants of Conference and/or any associated ancillary event (collectively, "Registrants") cannot "share" a ticket.</span></p>
        <p className="c1"><span className="c0">&nbsp;</span></p>
        <p className="c1"><span className="c0">Registration Cancellations: Cancellations must be made in writing and sent to the Registrar by e-mail no later than 11:59pm EST on 10 May 2019 to receive a refund of the fee. There will be no refunds for cancellations received after 11:59pm EST on 22 May 2019.</span></p>
        <p className="c1"><span className="c0">&nbsp;</span></p>
        <p className="c1"><span className="c0">Refund policy only applies to registration fees. Cancellation of travel reservations and hotel reservations is the exclusive responsibility of the registrant. ConnectEvents and/or Registrar will not be held responsible for any cancellation fees or surcharges, including hotel cancellation fees, for Registrants who have made their own travel arrangements (either with or without the assistance of Registrar).</span></p>
        <p className="c1"><span className="c0">&nbsp;</span></p>
        <p className="c1"><span className="c0">In case of transmission difficulties or other technical problems related to registration or emailed written notification to the Registrar, please email hello@refactr.tech to notify the Registrar.</span></p>
        <p className="c1"><span className="c0">&nbsp;</span></p>
        <p className="c1"><span className="c0">The ConnectEvents server or designated timekeeper shall be the official timekeeper for the purposes of determining the timing of any registration or notification.</span></p>
        <p className="c1"><span className="c0">&nbsp;</span></p>
        <p className="c1"><span className="c0">3. Conference Fees and Deadlines</span></p>
        <p className="c1"><span className="c0">&nbsp;</span></p>
        <p className="c1"><span className="c0">To attend one or all of the Conference and/or Events, payment in full must be received by Registrar within 30 days of your registration date. If payment is not received within 30 days of your registration date your registration will be considered incomplete. ConnectEvents reserves the right to review and cancel your registration if payment is not received in full in accordance with these terms and conditions.</span></p>
        <p className="c1"><span className="c0">&nbsp;</span></p>
        <p className="c1"><span className="c0">If payment in full is not received before arrival onsite, the balance of any and all outstanding monies must be paid onsite at the Registration desk before entry to the Conference and/or Events will be permitted.</span></p>
        <p className="c1"><span className="c0">&nbsp;</span></p>
        <p className="c1"><span className="c0">4. Other Conference Terms and Conditions</span></p>
        <p className="c1"><span className="c0">&nbsp;</span></p>
        <p className="c1"><span className="c0">Program and Presentations:</span></p>
        <p className="c1"><span className="c0">&nbsp;</span></p>
        <p className="c1"><span className="c0">(A) ConnectEvents reserves the right, in its sole discretion, to make changes to the Conference program. Every effort will be made to keep presentations and speakers as represented. However, unforeseen circumstances may result in the substitution of presentation topic(s) or speaker(s).</span></p>
        <p className="c1"><span className="c0">&nbsp;</span></p>
        <p className="c1"><span className="c0">(B) In the event that one or all of the Conference has to be cancelled or changed due to events beyond ConnectEvents control, ConnectEvents will not be held liable to Registrants for any damages, losses or costs incurred, including but not limited to transportation and accommodation costs. ConnectEvents is not liable for changes in program date, content, speakers or venue.</span></p>
        <p className="c1"><span className="c0">&nbsp;</span></p>
        <p className="c1"><span className="c0">6. Participation</span></p>
        <p className="c1"><span className="c0">&nbsp;</span></p>
        <p className="c1"><span className="c0">(A) ConnectEvents reserves the right to restrict participation in the Conference and all associated ancillary events at its sole discretion.</span></p>
        <p className="c1"><span className="c0">&nbsp;</span></p>
        <p className="c1"><span className="c0">(B) Registrants must have reached the age of majority in their respective state, province or territory of residence in order to register for the Conference.</span></p>
        <p className="c1"><span className="c0">&nbsp;</span></p>
        <p className="c1"><span className="c0">(C) For registrants who are public officials or employees of a government department, ministry, agency or government-owned enterprise, you agree that your participation in the Conference is for legitimate business purposes related to the activities of your employer or the government department, ministry, agency or government-owned enterprise that you represent, and that you have not been requested by any person and have not offered to provide any business advantage or other benefit for or on behalf of ConnectEvents as a condition of your participation in the Conference. It is expected that you will attend plenary talks, workshops and other conference events in order to benefit from the curriculum and the opportunity to learn.</span></p>
        <p className="c1"><span className="c0">&nbsp;</span></p>
        <p className="c1"><span className="c2">(D) All participants at the conference agree to abide by the Conference Code of Conduct, which can be found at http://refactr.tech/code-of-conduct.html</span></p>
        <p className="c1"><span className="c0">&nbsp;</span></p>
        <p className="c1"><span className="c0">7. Release from Liability</span></p>
        <p className="c1"><span className="c0">&nbsp;</span></p>
        <p className="c1"><span className="c0">(A) By attending the Conference, you agree to release and hold ConnectEvents, its subsidiaries, affiliates, agents and representatives and each of their officers, directors, agents, representatives and employees (each a "Released Party" and collectively, "Released Parties"), harmless from any and all liability, losses or damages whatsoever for any injuries, losses or damages of any kind, except bodily injury or death to the extent caused by a Released Party, arising from participation in or in connection with the Conference.</span></p>
        <p className="c1"><span className="c0">&nbsp;</span></p>
        <p className="c1"><span className="c0">(B) By agreeing to these Registration Conditions, you release and discharge ConnectEvents and its service providers and their respective and their respective parent companies, affiliates, subsidiaries, officers, directors, agents, representatives, and employees from any and all liability, losses or damages resulting from: (i) late, lost, delayed, stolen, misdirected, incomplete, unreadable, inaccurate, garbled or unintelligible communications or affidavits, regardless of the method of transmission; (ii) telephone system, telephone or computer hardware, software or other technical or computer malfunctions, lost connections, disconnections, delays or transmission errors; (iii) data corruption, theft, destruction, unauthorized access to or alteration of registration data; and (iv) any printing, typographical, administrative or technological errors in any materials associated with the Conference; or (v) any liability for damage to any computer system resulting from participating in, or accessing or downloading information in connection with these Conference.</span></p>
        <p className="c1"><span className="c0">&nbsp;</span></p>
        <p className="c1"><span className="c0">8. Consent to Use of Personal Information</span></p>
        <p className="c1"><span className="c0">&nbsp;</span></p>
        <p className="c1"><span className="c2">ConnectEvents takes your privacy seriously, please see our privacy policy at </span><span className="c4"><a className="c5" href="https://www.google.com/url?q=http://refactr.tech/privacy-policy.html&sa=D&ust=1548622396646000">http://refactr.tech/privacy-policy.html</a></span><span className="c2">&nbsp;</span></p>
        <p className="c1"><span className="c0">&nbsp;</span></p>
        <p className="c1"><span className="c0">9. General</span></p>
        <p className="c1"><span className="c0">&nbsp;</span></p>
        <p className="c1"><span className="c0">(A) ConnectEvents may film, photograph or audio record portions of the Conference, including lectures and interactions in common areas. These recordings may be archived and used for educational and commercial purposes. By attending, Registrant consents to ConnectEvents global and perpetual use of his or her name, photograph, recorded voice and statements ("Information") in whole or in part, in all media and/or distribution formats, now known and hereafter developed for any lawful purpose, including but not limited to marketing, advertising, publicity, educational, sales, trade, and promotional purposes, with no right of approval and no right to compensation. Registrant releases and discharges ConnectEvents from and against any and all claims, damages, costs and/or other liability arising from or relating to use of the Information. ConnectEvents shall be the exclusive owner of any and all rights, title and interest, including, without limitation, copyright, electronic and distribution rights, in and to any materials containing the Information created by or on behalf of ConnectEvents, in any form.</span></p>
        <p className="c1"><span className="c0">&nbsp;</span></p>
        <p className="c1"><span className="c0">(B) Please be aware that any information you provide to ConnectEvents before, during or after the Conference, in whatever form, is public non-confidential information. You further agree that the information you provide will not be used to establish any notice of patent infringement or related damage enhancements.</span></p>
        <p className="c1"><span className="c0">&nbsp;</span></p>
        <p className="c1"><span className="c0">(C) ConnectEvents reserves the right in its sole discretion to amend these Registration Terms &amp; Conditions to remedy administrative, including without limitation, typographical errors.</span></p>
        <p className="c1"><span className="c0">&nbsp;</span></p>
        <p className="c1"><span className="c2">(D) Registrar is ConnectJS LLC, </span><span className="c6"><a className="c5" href="https://www.google.com/url?q=https://maps.google.com/?q%3D1224%2BSpring%2BValley%2BLane,%2BAtlanta%2BGA%2B30306,%2BUSA%26entry%3Dgmail%26source%3Dg&sa=D&ust=1548622396648000">1224 Spring Valley Lane, Atlanta GA 30306, USA</a></span><span className="c0">&nbsp; </span></p>
        <p className="c1"><span className="c0">&nbsp;</span></p>
        <p className="c1"><span className="c2">(E) Listing of Conference sponsors can be found at </span><span className="c4"><a className="c5" href="https://www.google.com/url?q=http://refactr.tech&sa=D&ust=1548622396649000">http://refactr.tech</a></span><span className="c2">&nbsp;</span></p>
        <p className="c1"><span className="c0">&nbsp;</span></p>
        <p className="c1"><span className="c0">(F) This Agreement shall be governed by and construed under the laws of the State of Georgia USA applicable therein. Each Party hereto irrevocably waives any objection on the grounds of venue, forum non-conveniens or any similar grounds and irrevocably consents to service of process by mail or in any other manner permitted by applicable law and consents to the jurisdiction of the courts located in the State of Georgia USA. The Parties further hereby waive any right to a trial by jury with respect to any lawsuit or judicial proceeding arising or relating to this Agreement.</span></p>
        <p className="c1"><span className="c0">&nbsp;</span></p>
        <p className="c1"><span className="c0">&nbsp;</span></p>
        <p className="c1"><span className="c0">Wi-Fi is a trademark of the Wi-Fi Alliance. All other brands, product names, company names, trademarks, and service marks are the properties of their respective owners.</span></p>
        <p className="c1 c10"><span className="c7" /></p>
      </div>
              </div>
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
);
