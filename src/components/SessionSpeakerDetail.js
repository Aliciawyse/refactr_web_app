import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";

export const SessionSpeakerDetail = ({speaker_name, role, company, speaker_anchor, headshot}) => (
  <li style={{flexGrow: "1"}} className='col-lg-5 col-md-6'>
    <Link
      className="detail-view"
      to={`/speakers/${speaker_anchor}`}
    >
      {/* <img
        className="img-fluid speaker-avatar"
        src={data.airtable.data.speaker_pic[0].thumbnails.large.url}
      /> */}

      {headshot.localFiles && (
          <Img
            className="img-fluid speaker-avatar"
            alt={"Speaker - "+ speaker_name}
            fluid={headshot.localFiles[0].childImageSharp.fluid}
          />
        )}
      <div className="m0">
        <span className="speaker-text">
          {speaker_name}
        </span>
        <p>
          {role},{" "}
          {company}
        </p>
      </div>
      <p style={{ clear: "left" }} />
    </Link>
  </li>
);
