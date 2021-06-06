import React from "react";
import Img from "gatsby-image";

export const KeynoteSpeakerCard = ({
  speaker_name,
  company,
  role,
  headshot,
  slug,
  session_track,
  pronouns
}) => (
  <div className="col-md-3 col-sm-12">
    <div className="speakers xs-mb30">
      <div className="spk-img">
      {headshot.localFiles && (
        <Img
          alt={"Keynote Speaker - "+ speaker_name}
          fluid={headshot.localFiles[0].childImageSharp.fluid}
        />
      )}
        
      </div>
      <div className="spk-info">
        <a
          href={slug}
          rel="noreferrer noopener"
          target="_blank"
        >
          <h3 style={{ color: "white" }}>{speaker_name}</h3>
        </a>
        <span style={{ color: "#aaa" }}>
          {pronouns}
        </span>
        <p style={{ color: "#aaa", "font-weight": "300" }}>
          {role}, <span style={{ "font-weight": "600"}}>{company}</span>
        </p>
      </div>
    </div>
  </div>
);
