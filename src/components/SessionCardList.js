import React from "react";
import _ from "lodash";
import { SessionSpeakerList } from "../components/SessionSpeakerList";

export const SessionCardList = ({ items, showBuyTickets, soldOut }) => {
  const sessions_data = items.map(edge => edge.node);
  //const sessions_data = items.filter(edge => edge.node.data.Status === 'Confirmed');
  const tracks = _.groupBy(sessions_data, "data.Track");

  return Object.keys(tracks).map(track => (
    <div className="speakers-single-area">
      <div id={track.replace(/\s+/g, "")} className="container">
        <a name={track.replace(/\s+/g, "")} />

        {/* A track title */}
        <div className="section-title mt40 mb30">
          <div className="title-text pl mt30 mb30">
            <h2 className={"track-title-"+track.replace(/[\s&$!]+/g, "")}>{track}</h2>
          </div>
        </div>

        <div className="row mt15">
          <div className="col-md-12">
            <div className="inner-content">
              {/* Details of each session within the given track*/}
              {tracks[track].map(session => (
                <div>
                  {/* <a name="frontend-sessions" /> */}
                  <p className="session-title">
                    <span className="m0">{session.data.title}</span>
                  </p>
                  <br/>
                  <p>
                    <a className="detail-view">
                      {" "}
                      {session.data.date_friendly} {session.data.end_date_friendly}
                    </a>
                  </p>

                  <p>{session.data.Abstract}</p>

                  <span className="speaker-header">Speakers</span>

                  <SessionSpeakerList speakers={session.data.Speakers}/>

                  <div className="no-pad no-margin" style={{display: showBuyTickets ? 'block':'none', textAlign: 'center'}}>
                    {soldOut ? <span className="primary-btn"><a className="btn-primary" href="" rel="noreferrer noopener" target="_blank">Sold Out</a></span>: <span className="primary-btn"><a className="btn-primary" href="https://reg.connectevents.io/ConnectEvents/rtech2022/" rel="noreferrer noopener" target="_blank">Buy Tickets</a></span>}
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
