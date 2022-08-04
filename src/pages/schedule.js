import React from "react";
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/footer";
import { Helmet } from "react-helmet";
import { ScheduleCardList } from "../components/ScheduleCardList";
import { graphql } from "gatsby";
import { Link } from "gatsby";
import "../../src/styles/assets/css/style.css";
import "../../src/styles/assets/css/style2.css";
import "../../src/styles/assets/css/style.css";
import "../../src/styles/assets/css/responsive.css";


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
              <li><a href="/workshops">Workshops</a></li>
              <li>|</li>
              <li>Schedule</li>
              <li>|</li>
              <li><a href="/sessions">All Sessions by Track</a></li>
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
                className="nav-link active"
                id="home-taThursday"
                data-toggle="tab"
                href="#wednesday"
                role="tab"
                aria-controls="wednesday"
                aria-selected="true"
              >
                September 14&nbsp;<br/><span style={{fontSize:"12pt"}}>Workshops</span>
              </a>
            </li>
            
            <li className="nav-item">
              <a
                className="nav-link"
                id="contact-tab"
                data-toggle="tab"
                href="#thursday"
                role="tab"
                aria-controls="thursday"
                aria-selected="false"
              >
                September 15&nbsp;<br/><span style={{fontSize:"12pt"}}>Conference Day 1</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="sunday-tab"
                data-toggle="tab"
                href="#friday"
                role="tab"
                aria-controls="friday"
                aria-selected="false"
              >
                September 16&nbsp;<br/><span style={{fontSize:"12pt"}}>Conference Day 2</span>
              </a>
            </li>
            
          </ul>
          <div className="tab-content" id="myTabContent">
            <div
              className="tab-pane fade show active schedule"
              id="wednesday"
              role="tabpanel"
              aria-labelledby="home-tab"
            >

            <table>
		<tr>
			<th>08:00</th>
      <ScheduleCardList items={data.allAirtable.edges} day={'Wednesday'} group={'8:00 AM'}/>
		</tr>
    <tr>
			<th>08:15</th>
		</tr>
		<tr>
			<th>08:30</th>
		</tr>
    <tr>
			<th>08:45</th>
		</tr>
		<tr>
			<th>09:00</th>
      <ScheduleCardList items={data.allAirtable.edges} day={'Wednesday'} group={'9:00 AM'}/>
		</tr>
    <tr>
			<th>09:15</th>
		</tr>
		<tr>
			<th>09:30</th>
		</tr>
    <tr>
			<th>09:45</th>
		</tr>
		<tr>
			<th>10:00</th>
		</tr>
    <tr>
			<th>10:15</th>
		</tr>
		<tr>
			<th>10:30</th>
      <ScheduleCardList items={data.allAirtable.edges} day={'Wednesday'} group={'10:30 AM'}/>

		</tr>
    <tr>
			<th>10:45</th>
      <ScheduleCardList items={data.allAirtable.edges} day={'Wednesday'} group={'10:45 AM'}/>
		</tr>
		<tr>
			<th>11:00</th>
		</tr>
		<tr>
			<th>11:15</th>
		</tr>
		<tr>
			<th>11:30</th>
		</tr>
    <tr>
			<th>11:45</th>
		</tr>
		<tr>
			<th>12:00</th>
      <ScheduleCardList items={data.allAirtable.edges} day={'Wednesday'} group={'12:00 PM'}/>
		</tr>
		<tr>
			<th>12:15</th>
		</tr>
		<tr>
			<th>12:30</th>
		</tr>
    <tr>
			<th>12:45</th>
		</tr>
		<tr>
			<th>01:00</th>
      <ScheduleCardList items={data.allAirtable.edges} day={'Wednesday'} group={'1:00 PM'}/>
		</tr>
		<tr>
			<th>01:15</th>
		</tr>
		<tr>
			<th>01:30</th>
		</tr>
    <tr>
			<th>01:45</th>
		</tr>
		<tr>
			<th>02:00</th>
		</tr>
		<tr>
			<th>02:15</th>
		</tr>
		<tr>
			<th>02:30</th>
      <ScheduleCardList items={data.allAirtable.edges} day={'Wednesday'} group={'2:30 PM'}/>
		</tr>
    <tr>
			<th>02:45</th>
      <ScheduleCardList items={data.allAirtable.edges} day={'Wednesday'} group={'2:45 PM'}/>
		</tr>
		<tr>
			<th>03:00</th>
		</tr>
		<tr>
			<th>03:15</th>
      
		</tr>
		<tr>
			<th>03:30</th>
		</tr>
    <tr>
			<th>03:45</th>
		</tr>
		<tr>
			<th>04:00</th>
      <ScheduleCardList items={data.allAirtable.edges} day={'Wednesday'} group={'4:00 PM'}/>
		</tr>
		<tr>
			<th>04:15</th>
      
		</tr>
		<tr>
			<th>04:30</th>
		</tr>
    <tr>
			<th>04:45</th>
		</tr>
		<tr>
			<th>05:00</th>
		</tr>
		<tr>
			<th>05:15</th>
		</tr>
		<tr>
			<th>05:30</th>
		</tr>
    <tr>
			<th>05:45</th>
		</tr>
		<tr>
			<th>06:00</th>
      <ScheduleCardList items={data.allAirtable.edges} day={'Wednesday'} group={'6:00 PM'}/>
		</tr>
		<tr>
			<th>06:15</th>
		</tr>
		<tr>
			<th>06:30</th>
		</tr>
    <tr>
			<th>06:45</th>
		</tr>
		<tr>
			<th>07:00</th>
		</tr>
    <tr>
			<th>07:15</th>
		</tr>
		<tr>
			<th>07:30</th>
		</tr>
    <tr>
			<th>07:45</th>
		</tr>
		<tr>
			<th>08:00</th>
		</tr>
    <tr>
			<th>08:15</th>
		</tr>
		<tr>
			<th>08:30</th>
		</tr>
    <tr>
			<th>08:45</th>
		</tr>
		<tr>
			<th>09:00</th>
		</tr>
</table>

            </div>
            <div
              className="tab-pane fade"
              id="profile"
              role="tabpanel"
              aria-labelledby="profile-tab"
            >
              
            </div>
            <div
              className="tab-pane fade schedule"
              id="thursday"
              role="tabpanel"
              aria-labelledby="contact-tab"
            >


            <table>
		<tr>
			<th>08:00</th>
      <ScheduleCardList items={data.allAirtable.edges} day={'Thursday'} group={'8:00 AM'}/>
		</tr>
    <tr>
			<th>08:15</th>
		</tr>
		<tr>
			<th>08:30</th>
		</tr>
    <tr>
			<th>08:45</th>
		</tr>
		<tr>
			<th>09:00</th>
      <ScheduleCardList items={data.allAirtable.edges} day={'Thursday'} group={'9:00 AM'}/>
		</tr>
    <tr>
			<th>09:15</th>
      <ScheduleCardList items={data.allAirtable.edges} day={'Thursday'} group={'9:15 AM'}/>
		</tr>
		<tr>
			<th>09:30</th>
		</tr>
    <tr>
			<th>09:45</th>
      <ScheduleCardList items={data.allAirtable.edges} day={'Thursday'} group={'9:45 AM'}/>
		</tr>
		<tr>
			<th>10:00</th>
			<ScheduleCardList items={data.allAirtable.edges} day={'Thursday'} group={'10:00 AM'}/>
		</tr>
    <tr>
			<th>10:15</th>
		</tr>
		<tr>
			<th>10:30</th>
		</tr>
    <tr>
			<th>10:45</th>
      <ScheduleCardList items={data.allAirtable.edges} day={'Thursday'} group={'10:45 AM'}/>
		</tr>
		<tr>
			<th>11:00</th>
			<ScheduleCardList items={data.allAirtable.edges} day={'Thursday'} group={'11:00 AM'}/>
		</tr>
		<tr>
			<th>11:15</th>
		</tr>
		<tr>
			<th>11:30</th>
		</tr>
    <tr>
			<th>11:45</th>
      <ScheduleCardList items={data.allAirtable.edges} day={'Thursday'} group={'11:45 AM'}/>
		</tr>
		<tr>
			<th>12:00</th>
		</tr>
		<tr>
			<th>12:15</th>
		</tr>
		<tr>
			<th>12:30</th>
		</tr>
    <tr>
			<th>12:45</th>
      <ScheduleCardList items={data.allAirtable.edges} day={'Thursday'} group={'12:45 PM'}/>
		</tr>
		<tr>
			<th>01:00</th>
		</tr>
		<tr>
			<th>01:15</th>
		</tr>
		<tr>
			<th>01:30</th>
      <ScheduleCardList items={data.allAirtable.edges} day={'Thursday'} group={'1:30 PM'}/>
		</tr>
    <tr>
			<th>01:45</th>
      <ScheduleCardList items={data.allAirtable.edges} day={'Thursday'} group={'1:45 PM'}/>
		</tr>
		<tr>
			<th>02:00</th>
		</tr>
		<tr>
			<th>02:15</th>
		</tr>
		<tr>
			<th>02:30</th>
      <ScheduleCardList items={data.allAirtable.edges} day={'Thursday'} group={'2:30 PM'}/>
		</tr>
    <tr>
			<th>02:45</th>
      <ScheduleCardList items={data.allAirtable.edges} day={'Thursday'} group={'2:45 PM'}/>
		</tr>
		<tr>
			<th>03:00</th>
		</tr>
		<tr>
			<th>03:15</th>
      
		</tr>
		<tr>
			<th>03:30</th>
      <ScheduleCardList items={data.allAirtable.edges} day={'Thursday'} group={'3:30 PM'}/>
		</tr>
    <tr>
			<th>03:45</th>
      <ScheduleCardList items={data.allAirtable.edges} day={'Thursday'} group={'3:45 PM'}/>
		</tr>
		<tr>
			<th>04:00</th>
		</tr>
		<tr>
			<th>04:15</th>
      
		</tr>
		<tr>
			<th>04:30</th>
      <ScheduleCardList items={data.allAirtable.edges} day={'Thursday'} group={'4:30 PM'}/>
		</tr>
    <tr>
			<th>04:45</th>
		</tr>
		<tr>
			<th>05:00</th>
		</tr>
		<tr>
			<th>05:15</th>
		</tr>
		<tr>
			<th>05:30</th>
		</tr>
    <tr>
			<th>05:45</th>
		</tr>
		<tr>
			<th>06:00</th>
		</tr>
		<tr>
			<th>06:15</th>
		</tr>
		<tr>
			<th>06:30</th>
		</tr>
    <tr>
			<th>06:45</th>
		</tr>
		<tr>
			<th>07:00</th>
		</tr>
</table>

              
            </div>



            <div
              className="tab-pane fade schedule"
              id="friday"
              role="tabpanel"
              aria-labelledby="sunday-tab"
            >
              
            
            <table>
		<tr>
			<th>08:00</th>
		</tr>
    <tr>
			<th>08:15</th>
		</tr>
		<tr>
			<th>08:30</th>
      <ScheduleCardList items={data.allAirtable.edges} day={'Friday'} group={'8:30 AM'}/>
		</tr>
    <tr>
			<th>08:45</th>
		</tr>
		<tr>
			<th>09:00</th>
      <ScheduleCardList items={data.allAirtable.edges} day={'Friday'} group={'9:00 AM'}/>
		</tr>
    <tr>
			<th>09:15</th>
		</tr>
		<tr>
			<th>09:30</th>
      <ScheduleCardList items={data.allAirtable.edges} day={'Friday'} group={'9:30 AM'}/>
		</tr>
    <tr>
			<th>09:45</th>
		</tr>
		<tr>
			<th>10:00</th>
			<ScheduleCardList items={data.allAirtable.edges} day={'Friday'} group={'10:00 AM'}/>
		</tr>
    <tr>
			<th>10:15</th>
		</tr>
		<tr>
			<th>10:30</th>
		</tr>
    <tr>
			<th>10:45</th>
      <ScheduleCardList items={data.allAirtable.edges} day={'Friday'} group={'10:45 AM'}/>
		</tr>
		<tr>
			<th>11:00</th>
			<ScheduleCardList items={data.allAirtable.edges} day={'Friday'} group={'11:00 AM'}/>
		</tr>
		<tr>
			<th>11:15</th>
		</tr>
		<tr>
			<th>11:30</th>
		</tr>
    <tr>
			<th>11:45</th>
      <ScheduleCardList items={data.allAirtable.edges} day={'Friday'} group={'11:45 AM'}/>
		</tr>
		<tr>
			<th>12:00</th>
		</tr>
		<tr>
			<th>12:15</th>
		</tr>
		<tr>
			<th>12:30</th>
		</tr>
    <tr>
			<th>12:45</th>
		</tr>
		<tr>
			<th>01:00</th>
      <ScheduleCardList items={data.allAirtable.edges} day={'Friday'} group={'1:00 PM'}/>
		</tr>
		<tr>
			<th>01:15</th>
		</tr>
		<tr>
			<th>01:30</th>
		</tr>
    <tr>
			<th>01:45</th>
      <ScheduleCardList items={data.allAirtable.edges} day={'Friday'} group={'1:45 PM'}/>
		</tr>
		<tr>
			<th>02:00</th>
      <ScheduleCardList items={data.allAirtable.edges} day={'Friday'} group={'2:00 PM'}/>
		</tr>
		<tr>
			<th>02:15</th>
		</tr>
		<tr>
			<th>02:30</th>
		</tr>
    <tr>
			<th>02:45</th>
      <ScheduleCardList items={data.allAirtable.edges} day={'Friday'} group={'2:45 PM'}/>

		</tr>
		<tr>
			<th>03:00</th>
		</tr>
		<tr>
			<th>03:15</th>
      <ScheduleCardList items={data.allAirtable.edges} day={'Friday'} group={'3:15 PM'}/>
		</tr>
		<tr>
			<th>03:30</th>
		</tr>
    <tr>
			<th>03:45</th>
		</tr>
		<tr>
			<th>04:00</th>
      <ScheduleCardList items={data.allAirtable.edges} day={'Friday'} group={'4:00 PM'}/>
		</tr>
		<tr>
			<th>04:15</th>
      <ScheduleCardList items={data.allAirtable.edges} day={'Friday'} group={'4:15 PM'}/>
		</tr>
		<tr>
			<th>04:30</th>
		</tr>
    <tr>
			<th>04:45</th>
      <ScheduleCardList items={data.allAirtable.edges} day={'Friday'} group={'4:45 PM'}/>
		</tr>
		<tr>
			<th>05:00</th>
		</tr>
		<tr>
			<th>05:15</th>
		</tr>
		<tr>
			<th>05:30</th>
		</tr>
    <tr>
			<th>05:45</th>
		</tr>
		<tr>
			<th>06:00</th>
		</tr>
		<tr>
			<th>06:15</th>
		</tr>
		<tr>
			<th>06:30</th>
		</tr>
    <tr>
			<th>06:45</th>
		</tr>
		<tr>
			<th>07:00</th>
		</tr>
		<tr>
			<th>07:15</th>
		</tr>
		<tr>
			<th>07:30</th>
      <ScheduleCardList items={data.allAirtable.edges} day={'Friday'} group={'7:30 PM'}/>
		</tr>
    <tr>
			<th>07:45</th>
		</tr>
		<tr>
			<th>08:00</th>
		</tr>
		<tr>
			<th>08:15</th>
		</tr>
		<tr>
			<th>08:30</th>
		</tr>
    <tr>
			<th>08:45</th>
		</tr>
		<tr>
			<th>09:00</th>
		</tr>
    <tr>
			<th>09:30</th>
		</tr>
</table>
              
            
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

export const all_sessions = graphql`
  {
    allAirtable(
      filter: { table: { eq: "FullSchedule" } }
      sort: { fields: [data___rowspan, data___TableDisplayOrder] }
      ) {
      edges {
        node {
          fields {
            slug
          }
          data {
            session__title
            session__track
            venue_room
            Day
            begins
            ends
            Duration
            speaker__name
            speaker_anchor
            anchor_truncated
            colspan
            rowspan
            speaker_meta_image {
              thumbnails {
                large {
                  url
                }
              }
            }
            
          }
        }
      }
    }
  }
`;