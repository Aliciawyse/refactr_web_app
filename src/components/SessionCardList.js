import React from "react";
import _ from "lodash";
import { Link } from "gatsby"


export const SessionCardList = ({ items }) => {
  const sessions_data = items.map(edge => edge.node);
  const tracks = _.groupBy(sessions_data, "data.Track");

  return Object.keys(tracks).map(track => (

    <div className="speakers-single-area">
      <div id="vapp-swe-sessions" className="container">
        <a name={track.replace(/\s+/g, '')}></a>
        <div className="section-title">
          <div className="title-text pl mt30 mb30">
            <h2>{track}</h2>
          </div>
        </div>
        <div className="row mt15" v-for="session in sessions" />
        <div className="col-md-12">
          <div className="inner-content">
            {tracks[track].map(session => (
              <div>
                <span style={{ fontWeight: 600 }}>{session.data.title}</span>
                <br />
                <p>{session.data.Abstract}</p>
                <span>Speakers</span>
                <br />
                <Link to={`/speakers/${session.data.Speakers[0].data.anchor}`}>{session.data.speaker_display_name}</Link>
                <hr />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  ));
};
