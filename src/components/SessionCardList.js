import React from "react";
import _ from "lodash";
import { Link } from "gatsby";
import Img from "gatsby-image";

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
                    <span class="m0">{session.data.title}</span>
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

                  <div className="mb40">
                    <Link
                      className="detail-view"
                      to={`/speakers/${session.data.Speakers[0].data.anchor}`}
                    >
                      {/* <img
                        className="img-fluid speaker-avatar"
                        src={session.data.speaker_pic[0].thumbnails.large.url}
                      /> */}
                      <Img
                      alt="Speaker"
                      className="img-fluid speaker-avatar"
                      fluid={session.data.Speakers[0].data.headshot.localFiles[0].childImageSharp.fluid}
                    />
                      <p className="m0">
                        <span className="speaker-text">
                          {session.data.speaker_display_name}
                        </span>
                        <p>
                          {session.data.Speakers[0].data.role},{" "}
                          {session.data.Speakers[0].data.company}
                        </p>
                      </p>
                      <p style={{ clear: "left" }} />
                    </Link>
                  </div>
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
