import React from "react";
import { Link } from "gatsby";

export const SpeakerSession = ({title, anchor_truncated, Track}) => (
  
  <li>
    <p>
      <Link className={`pill `+`track-${Track}`.replace(/[\s&$!]+/g, "")}
      title={`See more ${Track} sessions`}  
      to={`/sessions/#${Track}`.replace(/\s+/g, "")}>
        {Track}
      </Link>
        &nbsp;
      <Link style={{fontSize:18}}
        title="See session details"
        to={`/sessions/${anchor_truncated}`}>
        {title}
      </Link>
    </p>
  </li>
  
);
