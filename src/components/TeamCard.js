import React from "react";
import Img from "gatsby-image";

export const TeamCard = ({
  name,
  member_role,
  member_headshot,
  member_linkedIn,
  member_twitter
}) => (
  <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12">
    <div className="speakers xs-mb30">
      <div className="spk-img">
        {member_headshot.localFiles && (
          <Img
            alt={"Team member, "+ member_role+", "+ name}
            fluid={member_headshot.localFiles[0].childImageSharp.fluid}
          />
        )}
        {/* <img className="img-fluid" alt="trainer-img" src={headshot[0].url}/> */}
        <ul>
          <li>
            <a href={member_twitter}>
              <i className="fa fa-twitter" />
            </a>
          </li>
          <li>
            <a href={member_linkedIn}>
              <i className="fa fa-linkedin" />
            </a>
          </li>
        </ul>
      </div>
      <div className="spk-info">
        <a href={member_twitter}>
          <h3>
            {name}
          </h3>
        </a>
        <p>{member_role}</p>
      </div>
    </div>
  </div>
);
