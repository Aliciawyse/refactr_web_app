import React from "react";
import Footer from "../components/footer";
import NavigationBar from "../components/NavigationBar";
import "../../src/styles/assets/css/style.css";
import { Helmet } from "react-helmet";

export default ({ data }) => (
  <div>
    <Helmet>
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <title>Workshops | REFACTR.TECH</title>
    <meta name="author" content="iThemesLab"/>
    <meta name="description" content=""/>
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
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
                  <h2>Events</h2>
                </div>
                <ol className="breadcrumb">
                  <li>
                    <a href="/">Home</a>
                  </li>

                  <li>|</li>

                  <li>
                    <a href="workshops">Workshops</a>
                  </li>

                  <li>|</li>

                  <li>
                    <a href="/sessions">Sessions</a>
                  </li>

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

<div className="speakers-single-area">
        <div className="container">
          <a name="amp" /> 
          <div className="row mt50">
            <div className="col-lg-5 col-md-12">
              <div className="speakers-img">
                <img className="img-fluid" src="/img/workshops/amp.png" alt />
              </div>
            </div>
            {/* /.col end*/}
            <div className="col-lg-7 col-md-12">
              <div className="inner-content">
                <h1>AMP Roadshow *FREE*</h1>
                {/* <span>CEO  Mockplus</span> */}
                <br />
                <p>The roadshow is a free, single day event supported and organized by members of the AMP team at REFACTR.TECH. 
                  <strong>Attendees also get a special discount for REFACTR.TECH <a href="https://tickets.connectevents.io/events/rtech2019/" rel="noreferrer noopener" target="_blank">conference tickets</a>- just use the code "REFACTR-AMP" at <a className="pr-0" href="https://tickets.connectevents.io/events/rtech2019/" rel="noreferrer noopener" target="_blank">checkout!</a></strong> 
                  You're looking at the registration page for the Atlanta event – for more general information about the 
                  roadshow, head to the <a href="https://amp.dev/events/amp-roadshow#Content" rel="noreferrer noopener" target="_blank">AMP Roadshow site.</a></p>
                <span>What's AMP?</span>
                <p>The AMP Project, short for Accelerated Mobile Pages, is an open-source initiative aiming to make the web better for all. 
                  The project enables the creation of websites and ads that are consistently fast, beautiful and 
                  high-performing across devices and distribution platforms.</p>
                <span>Why Should I Come?</span>
                <p>Whether you're a developer starting to become interested in AMP, or whether you want to build even more advanced, interactive AMP pages, or even if you're a CTO setting your companies' strategy, you should come.</p>
                <p>Please join us to learn about building, monetizing and deploying highly interactive, responsive sites with AMP. Remember to bring your laptop!</p>
                <span>Speakers<br />
                  <a href="https://events.withgoogle.com/amp-roadshow-atlanta/speakers/#content" rel="noreferrer noopener" target="_blank">AMP Team</a><br />
                  <span className="primary-btn"><a className="btn-primary" href="https://tickets.connectevents.io/events/rtech2019/" rel="noreferrer noopener" target="_blank">Buy Tickets</a></span>
                </span>
              </div>
            </div>
            {/* /.col end*/}
          </div>
          <a name="flutter" /> 
          <hr />
          {/* /.row end*/}
          <div className="row mt50">
            <div className="col-lg-5 col-md-12">
              <div className="speakers-img">
                <img className="img-fluid" src="/img/workshops/flutter.png" alt />
              </div>
            </div>
            {/* /.col end*/}
            <div className="col-lg-7 col-md-12">
              <div className="inner-content">
                <h1>Get Flapping with Flutter</h1>
                <br />
                <p>Flutter is a new tool from Google that allows you to quickly create beautiful native apps for iOS and Android from a single codebase. We'll take attendees on a tour of Flutter, highlighting its extensive widget library and tools for speedy development. We'll show attendees how Flutter works, how it compares with other cross-platform frameworks, and how to create and test Flutter apps.
                </p>
                <span>Speakers<br />
                  <a href="https://twitter.com/pblatteier" rel="noreferrer noopener" target="_blank">Pearl Latteier</a><br />
                  <a href="https://twitter.com/abraham" rel="noreferrer noopener" target="_blank">Abraham Williams</a><br />
                  <span className="primary-btn"><a className="btn-primary" href="https://tickets.connectevents.io/events/rtech2019/" rel="noreferrer noopener" target="_blank">Buy Tickets</a></span>
                </span>
              </div>
            </div>
            {/* /.col end*/}
          </div>
          {/* /.row end*/}   
          <a name="gatsby" /> 
          <hr />
          {/* /.row end*/}
          <div className="row mt50">
            <div className="col-lg-5 col-md-12">
              <div className="speakers-img">
                <img className="img-fluid" src="/img/workshops/gatsby.png" alt />
              </div>
            </div>
            {/* /.col end*/}
            <div className="col-lg-7 col-md-12">
              <div className="inner-content">
                <h1>We're Not in East Egg, Anymore: GatsbyJS in Practice</h1>
                <br />
                <p>
                  Did you know that Gatsby.js is much more than a static site generator?</p>
                <p>Well, let’s build something to find out just what makes Gatsby.js not only an excellent choice for your personal website but also a great option for client and production sites, also.</p>
                <p>In this workshop, we’ll build a few different sites with Gatsby in order to learn how:</p>
                <ul>
                  <li>Gatsby sources data (from almost anywhere) using GraphQL</li>
                  <li>Gatsby generates your site as a progressive web app (PWA) and why that matters</li>
                  <li>Gatsby simplifies deployment of your site by building it as static files</li>
                  <li>How liberating the developer experience can be with Gatsby.js</li>
                  <li>Attendees can expect to leave with at least one deployed Gatsby.js site.</li>
                </ul>
                <br />
                <p>(Based on the desires of the attendees and time permitting, we will also demo hosting a Gatsby site at your own personal domain name - I’ve done it and have not looked back since.)</p><p>
                </p>
                <span>Speakers<br />
                  <a href="https://twitter.com/brandon_kearns" rel="noreferrer noopener" target="_blank">Brandon Kearns</a><br />
                  <span className="primary-btn"><a className="btn-primary" href="https://tickets.connectevents.io/events/rtech2019/" rel="noreferrer noopener" target="_blank">Buy Tickets</a></span>
                </span>
              </div>
            </div>
            {/* /.col end*/}
          </div>
          <a name="cypress" />
          <hr />
          {/* /.row end*/}
          <div className="row mt50">
            <div className="col-lg-5 col-md-12">
              <div className="speakers-img">
                <img className="img-fluid" src="/img/workshops/cypress.png" alt />
              </div>
            </div>
            {/* /.col end*/}
            <div className="col-lg-7 col-md-12">
              <div className="inner-content">
                <h1>Next-Generation End-to-End Testing with Cypress</h1>
                {/* <span>CEO  Mockplus</span> */}
                <br />
                <p>We all want to consistently ship quality software. One of the best ways to do that is by end-to-end (E2E) testing our code as it simulates the real actions of our beloved users. Let’s be frank though, E2E testing is notoriously time-consuming, expensive, slow, and often flaky. Unfortunately, these issues lead to developers doing very little to no E2E testing, and taking solace in a plethora of unit-tests that cannot fully test the intended experience of users.</p>
                <p>In this hands-on session, we’ll dive deep into using Cypress, an open-source tool that enables us to easily and beautifully write flake-free, reliable, deterministic E2E tests for our web applications. Like a good friend, E2E tests should be there to give us confidence in the software we ship down the wire.</p>
                <span>Session Outline</span>
                <ul>
                  <li>Introduction &amp; Overview</li>
                  <li>Cypress basics</li>
                  <li>Adding tests and configurations</li>
                  <li>Cypress Selector Playground</li>
                  <li>Reseting/cleanup between tests</li>
                  <li>Spying and stubbing XHR requests</li>
                  <li>Accessing application code and data</li>
                  <li>Setting up E2E tests on CI</li>
                  <li>Setting up Cypress Dashboard</li>
                </ul><br />
                The session will be accompanied by exercises, demo app, and slides.
                <p />
                <span>Speakers<br />
                  <a href="https://twitter.com/amirrustam" rel="noreferrer noopener" target="_blank">Amir Rustamzadeh</a><br />
                  <span className="primary-btn"><a className="btn-primary" href="https://tickets.connectevents.io/events/rtech2019/" rel="noreferrer noopener" target="_blank">Buy Tickets</a></span>
                </span>
              </div>
            </div>
            {/* /.col end*/}
          </div>
          <a name="graphql" />
          <hr />
          {/* /.row end*/}
          <div className="row mt50">
            <div className="col-lg-5 col-md-12">
              <div className="speakers-img">
                <img className="img-fluid" src="/img/workshops/graphql.png" alt />
              </div>
            </div>
            {/* /.col end*/}
            <div className="col-lg-7 col-md-12">
              <div className="inner-content">
                <h1>Let's Learn GraphQL: The End of REST *SOLD OUT*</h1>
                <br />
                <p>GraphQL is a technology that is poised to replace, or at the very least, drastically change the way APIs are designed and presented. In this hands-on workshop, you'll learn GraphQL from the ground up. We start with creating a backend server using Node.js then learn about schemas, mutations and using GraphiQL to test queries. By the end of this workshop, you will understand how to install and utilize GraphQL.
                </p><ul><span>Pre-workshop requirements:</span>
                  <li>NodeJS installed on your computer</li>
                  <li>Text Editor (Atom, VIM, Sublime Text, Visual Studio Code, WebStorm</li>
                  <li>Terminal</li>
                  <li>Create an account on mLab</li>
                </ul>    
                <p />
                <span>Speakers<br />
                  <a href="https://twitter.com/ratracegrad" rel="noreferrer noopener" target="_blank">Jennifer Bland</a><br />
                  <span className="primary-btn"><a className="btn-primary" href>Sold Out!</a></span>
                </span>
              </div>
            </div>
            {/* /.col end*/}
          </div>
          <a name="vue-vixens" />
          <hr />
          {/* /.row end*/}
          <div className="row mt50">
            <div className="col-lg-5 col-md-12">
              <div className="speakers-img">
                <img className="img-fluid" src="/img/workshops/vue-vixens.png" alt />
              </div>
            </div>
            {/* /.col end*/}
            <div className="col-lg-7 col-md-12">
              <div className="inner-content">
                <h1>Vue Vixens *Sold Out!*</h1>
                {/* <span>CEO  Mockplus</span> */}
                <br />
                <p>The workshop is a free <i>addition</i> to the REFACTR.TECH main conference ticket.</p>
                <p>Vue Vixens is an initiative that aims to create workshops to teach Vue.js in a cool and fun way to foxy people who identify as women. It is based on the successful model pioneered by ng-Girls, Rails Bridge and Django Girls initiatives. The format is a self-driven code lab completed in a workshop format in groups with mentoring by conference-goers and speakers who volunteer to help. The goal of the program is to familiarize women and those who identify as such in a supportive and inclusive location with Vue.js and general web and mobile programming concepts. Welcome to the skulk!
                </p>
                <span>Speakers<br />
                  <a href="/speakers/marina-mosti/" rel="noreferrer noopener" target="_blank">Marina Mosti</a><br />
                  <span className="primary-btn"><a className="btn-primary" href>Sold Out!</a></span>
                </span>
              </div>
            </div>
            {/* /.col end*/}
          </div>
        </div>
        {/* /container end*/}
      </div>







      {/*Footer Area Start Here*/}
      <Footer />
      {/*Footer Area End Here*/}
    </div>
  </div>
);


