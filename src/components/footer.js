import React from "react";
import MailChimpEmbeddedForm from "../components/MailChimpEmbeddedForm.js";

export default () => 

<div className="footer-area bg-footer parallax ptb">
    <div className="container">
        <div className="row">
            <div className="col-lg-5">
                <div className="am">
                    <div className="f-logo">
                        <img src="/img/logo/refactr-logo.svg" width="428" height="188" alt=""/>
                    </div>
                <div className="border-right"></div>
            </div>
        </div>

        <div className="col-lg-6 offset-1">
            <div id="mc_embed_signup" className="f-content">
                <div className="inner-content">
                    <div className="f-icon">
                        <i className="fa fa-map-marker"></i>
                    </div>
                    <span>40 Courtland St NE<br/> Atlanta, GA 30303</span>
                </div>
                <p>Don't miss the buzz about our speakers, sessions and events! Sign up below to get the latest news about REFACTR.TECH right in your inbox. </p>
                {/* mailchimp embed form component starts here */}
                
                <MailChimpEmbeddedForm />

                {/* mailchimp embed form component ends here */}
                <div className="f-social">
                    <ul>
                        <li><a href="https://twitter.com/RefactrTech"><i className="fa fa-twitter"></i></a></li>
                        <li><a href="https://www.instagram.com/RefactrTech/"><i className="fa fa-instagram"></i></a></li>
                        <li><a href="https://www.youtube.com/channel/UCfBdXCYPCHEXX8ISwOQM08A"><i className="fa fa-youtube"></i></a></li>
                        <li><a href="mailto:hello@refactr.tech"><i className="fa fa-envelope-square"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div className="row">
        <div className="col-lg-12">
            <div className="copyright">
                <p>©2018-2022 ConnectEvents.io&nbsp;&nbsp;&nbsp;&nbsp;
                <a href="/privacy-policy">Privacy Policy</a>&nbsp;&nbsp;&nbsp;&nbsp;
                <a href="/terms-and-conditions"> Terms and Conditions</a>&nbsp;&nbsp;&nbsp;&nbsp;
                <a href="/code-of-conduct">Code of Conduct</a>
                <a href="/updates">Updates</a>
                </p>
            </div>
        </div>
    </div>
</div>
</div>
