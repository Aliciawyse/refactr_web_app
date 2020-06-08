import React from "react";
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/footer";
import { Helmet } from "react-helmet";

export default ({ data }) => (
  <div>
    <Helmet>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <title>COVID-19 Update | REFACTR.TECH</title>
      <meta name="author" content="iThemesLab" />
      <meta name="description" content="" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
    </Helmet>
    <div className="main-container">
      <NavigationBar whiteText />
      <div className="about-us-area pad-head bg-covid parallax">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="about-content">
                <div className="section-title text-center">
                  
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*Conference Synopsis Area Start Here*/}
      <div className="conference-synopsis-area about pad100">
        <div className="container">
          <div className="row">
          <div className="col-lg-1"></div>
          <div className="col-lg-10">
            <div className="inner-content">
            <div className="section-title">
              <div className="title-text pl text-center">
                <h2>A REFACTR.TECH Update</h2>
              </div>
            </div>
            <p style={{color:'#333'}}>By <a href="https://twitter.com/angelmbanks">ANGEL BANKS</a><br />
               June 7, 2020 | 9:29 PM</p>
            <p style={{fontSize: '1.4em', color:'#333'}}>
            We hold the health and safety of our community above everything. At this time, we don’t believe we can offer a space for our attendees, 
            speakers, and sponsors to responsibly socially distance, so with the continued uncertainty around COVID-19, we’ve decided to move our 
            conference to next year, <strong>September 15-17, 2021</strong>. We greatly appreciate your patience and understanding and look forward to seeing you 
            when we can all safely meet together again.
            </p>

            <p style={{fontSize: '1.4em', color:'#333'}}>
            We have temporarily put a hold on ticket sales, please 
            <a href="https://tech.us19.list-manage.com/subscribe?u=5ae8995a4bf065a3c7cd6ad50&id=e8f624f474">join our mailing list</a> 
            to be notified when you can begin to purchase tickets for 2021. For our current ticket holders, we are offering them the option 
            to forward their ticket to 2021, transfer it to a new attendee, or request a full refund. 
            </p>

            <p style={{fontSize: '1.4em', color:'#333'}}>
            In the meantime...we are going to do our best to provide you with amazing online content from our speakers. We have the following 
            events planned for you in July:
            </p>

            <p style={{fontSize: '1.4em', color:'#333'}}>
            Join us 90's hit "<strong>Bad Boys</strong>" online with Netflix Party on July 12, 2020 at 3:00 pm (est). Sign up on Eventbrite to join us.
            </p>  

            <p style={{fontSize: '1.4em', color:'#333'}}>
            In the meantime...we are going to do our best to provide you with amazing online content from our speakers. We have the following 
            events planned for you in July:
            </p>

            <p style={{fontSize: '1.4em', color:'#333'}}>
            Join us for the second episode of our rerun series, “<strong>Planet of the APIs</strong>” with special guest, <a href="https://twitter.com/HenriHelvetica">Henri Helvetica</a> on July 22, 2020 at 
            7:00 pm (est). We’ll all watch Henri’s talk <a href="https://2019.refactr.tech/sessions/planet-of-the-apis">Planet of the APIs</a> from <a href="https://2019.refactr.tech/">REFACTR.TECH 2019</a> and then join us for a discussion with Henri. 
            <a href="https://www.eventbrite.com/e/refactrtech-rerun-with-henri-helvetica-tickets-106943013432"RSVP here></a>.
            </p>

            <p style={{fontSize: '1.4em', color:'#333'}}>
            You can view our first episode in this series, “<strong>DevOps 101: Automation without frustration!</strong>” with Diana Rodriguez on our 
            <a href="https://www.youtube.com/watch?v=_ZTZWJ749kU&list=PLtsNj-uCrJ4bz4138pDluELbJ5Hz_shLw">YouTube channel</a>. We will be announcing 
            our online events for July soon, <a href="https://tech.us19.list-manage.com/subscribe?u=5ae8995a4bf065a3c7cd6ad50&id=e8f624f474">subscribe to our newsletter</a> for more information.
            </p>

            <p style={{fontSize: '1.4em', color:'#333'}}>
            We want to thank the community, especially our speakers and sponsors, for their ongoing support and contributions. We also want to thank 
            our venue, the <a href="https://loudermilkcenter.com/">Loudermilk Conference Center</a> for working with us to reschedule to these new dates.
            </p>

              </div>
            </div>
            <div className="col-lg-1"></div>
          </div>


          

        </div>
        {/* /container end*/}
      </div>
    </div>
    <Footer />
  </div>
);
