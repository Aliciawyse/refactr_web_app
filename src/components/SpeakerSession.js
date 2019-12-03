import React from "react";
import { Link } from "gatsby";

export const SpeakerSession = ({title, anchor_truncated}) => (
  <li>
      <Link
        to={`/sessions/${anchor_truncated}`}>
        {title}
      </Link>
  </li>
);
