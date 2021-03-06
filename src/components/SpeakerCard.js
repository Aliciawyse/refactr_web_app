import React from "react";
import Img from "gatsby-image";

export const SpeakerCard = ({
  speaker_name,
  company,
  role,
  headshot,
  linkedIn,
  twitter,
  slug
}) => (
  <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12">
    <div className="speakers xs-mb30">
      <div className="spk-img">
        {headshot.localFiles && (
          <Img
            alt="Speaker"
            fluid={headshot.localFiles[0].childImageSharp.fluid}
          />
        )}
        {/* <img className="img-fluid" alt="trainer-img" src={headshot[0].url}/> */}
        <ul>
          <li>
            <a href={twitter}>
              <i className="fa fa-twitter" />
            </a>
          </li>
          <li>
            <a href={linkedIn}>
              <i className="fa fa-linkedin" />
            </a>
          </li>
        </ul>
      </div>
      <div className="spk-info">
        <h3>
          <a href={slug} rel="noreferrer noopener" target="_blank">
            {speaker_name}
          </a>
        </h3>
        <p>{role}</p>
        <h6>{company}</h6>
      </div>
    </div>
  </div>
);
