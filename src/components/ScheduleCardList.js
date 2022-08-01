import React from "react";
import _ from "lodash";
import { Link } from "gatsby";

//import { SessionSpeakerList } from "../components/SessionSpeakerList";

export const ScheduleCardList = ({ items, day, group }) => {
  //const sessions_data = items.map(edge => edge.node);
  //const sessions_data = items.filter(edge => edge.node.data.Status === 'Confirmed');
  //const tracks = _.groupBy(sessions_data, "data.Track");
  const sessions_data = items.filter(edge => (edge.node.data.Day === day && edge.node.data.begins === group) );

  console.log('sessions data in schedule?', sessions_data);

  return sessions_data.map(session => (
    <td colspan={session.node.data.colspan} rowspan={session.node.data.rowspan} className={`track-bdr-${session.node.data.session__track}`.replace(/[\s&$!]+/g, "")}>
    
      <Link style={{ pointerEvents: session.node.data.anchor_truncated? "auto":"none"}}
        to={ session.node.data.anchor_truncated? `/sessions/${session.node.data.anchor_truncated}`:""}>
      {session.node.data.session__title}
      </Link>
      <span>{session.node.data.speaker__name}</span>

      <p>
      {session.node.data.begins} - {session.node.data.ends}<br/>
      
      {session.node.data.venue_room}
      </p>

      <Link className={`pill `+`track-${session.node.data.session__track}`.replace(/[\s&$!]+/g, "")}
        style={{ fontSize: "0.7em" }}
        title={`See more ${session.node.data.session__track} sessions`} 
        to={`/sessions/#${session.node.data.session__track}`.replace(/\s+/g, "")}>
        {session.node.data.session__track}
      </Link>

    </td>
  ));
};
