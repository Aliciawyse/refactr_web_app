import React from "react";
import _ from "lodash";
import { Link } from "gatsby";
import Img from "gatsby-image";
import { SessionSpeakerList } from "../components/SessionSpeakerList";

export const SessionCardList = ({ items }) => {
  const sessions_data = items.map(edge => edge.node);
  const tracks = _.groupBy(sessions_data, "data.Track");

  return Object.keys(tracks).map(track => (
    <div className="speakers-single-area">
      <div id="vapp-swe-sessions" className="container">
        <a name={track.replace(/\s+/g, "")} />

        {/* A track title */}
        <div className="section-title mt40 mb30">
          <div className="title-text pl mt30 mb30">
            <h2>{track}</h2>
          </div>
        </div>

        <div className="row mt15">
          <div className="col-md-12">
            <div className="inner-content">
              {/* Details of each session within the given track*/}
              {tracks[track].map(session => (
                <div>
                  <a name="frontend-sessions" />
                  <p className="session-title">
                    <span className="m0">{session.data.title}</span>
                  </p>

                  <p>
                    <a className="detail-view">
                      {" "}
                      {session.data.Day} {session.data.date_friendly},{" "}
                      {session.data.Time} (45 min)
                    </a>
                  </p>

                  <p>{session.data.Abstract}</p>

                  <span className="speaker-header">Speakers</span>

                  <SessionSpeakerList speakers={session.data.Speakers}/>

                  <hr />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  ));
};
