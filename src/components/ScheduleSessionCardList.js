import React from "react";
import _ from "lodash";
import { SessionSpeakerList } from "./SessionSpeakerList";

export const ScheduleSessionCardList = ({ items, showBuyTickets, soldOut }) => {
  const sessions_data = items.map(edge => edge.node);
  //const sessions_data = items.filter(edge => edge.node.data.Status === 'Confirmed');
  const days = _.groupBy(sessions_data, "data.Day");

  return Object.keys(days).map(day => (
    <div className="speakers-single-area">
      <div id={day.replace(/\s+/g, "")} className="container">
        <a name={day.replace(/\s+/g, "")} />

        {/* A day title */}
        <div className="section-title mt40 mb30">
          <div className="title-text pl mt30 mb30">
            <h2>{day}</h2>
          </div>
        </div>

        <div className="row mt15">
          <div className="col-md-12">
            <div className="inner-content">
              {/* Details of each session within the given day*/}
              {days[day].map(session => (
                <div>
                  {/* <a name="frontend-sessions" /> */}
                  <p className="session-title">
                    <span className="m0">{session.data.title}</span>
                  </p>
                  <br/>
                  <p>
                    <a className="detail-view">
                      {" "}
                      {session.data.Day} {session.data.date_friendly}{" ET "}({ (session.data.Duration/ 60) > 59? (session.data.Duration/ 3600) : (session.data.Duration/ 60) } {session.data.Duration < 3600 ? "min" : "hrs"})
                    </a>
                  </p>

                  <p>{session.data.Abstract}</p>

                  <span className="speaker-header">Speakers</span>

                  <SessionSpeakerList speakers={session.data.Speakers}/>

                  <div style={{display: showBuyTickets ? 'block':'none', textAlign: 'center' }}>
                    {soldOut ? <span className="primary-btn"><a className="btn-primary" href="" rel="noreferrer noopener" target="_blank">Sold Out</a></span>: <span className="primary-btn"><a className="btn-primary" href="https://reg.connectevents.io/ConnectEvents/rtech2021/" rel="noreferrer noopener" target="_blank">Buy Tickets</a></span>}
                  </div>

                  <hr/>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  ));
};
