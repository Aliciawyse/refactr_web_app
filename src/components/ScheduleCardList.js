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
    <td colspan={session.node.data.colspan} rowspan={session.node.data.rowspan}
    className={"d-block d-xl-table-cell "+`track-bdr-${session.node.data.session__track}`.replace(/[\s&$!]+/g, "")}>
    
      <Link style={{ pointerEvents: session.node.data.anchor_truncated? "auto":"none"}} title={session.node.data.session__title}
        to={ session.node.data.anchor_truncated? `/sessions/${session.node.data.anchor_truncated}`:""}>
      {session.node.data.session__title.substr(0, 67)+ (session.node.data.session__title.length > 68?"...":"")}
      </Link>

      <span>
      <Link style={{ pointerEvents: session.node.data.speaker_anchor? "auto":"none"}}
        to={ session.node.data.speaker_anchor? `/speakers/${session.node.data.speaker_anchor}`:""}>
        {session.node.data.speaker__name? session.node.data.speaker__name+" ":""}
      </Link>
      </span>

      <p>
      {session.node.data.begins} - {session.node.data.ends}&nbsp;<br/>
      
      {session.node.data.venue_room}
      </p>

      <div style={{bottom:"0"}}>
        <Link className={`pill `+`track-${session.node.data.session__track}`.replace(/[\s&$!]+/g, "")}
          style={{ fontSize: "0.7em", verticalAlign: "bottom" }}
          title={`See more ${session.node.data.session__track} sessions`} 
          to={`/sessions/#${session.node.data.session__track}`.replace(/\s+/g, "")}>
          {session.node.data.session__track}
        </Link>
      </div>

    </td>
  ));
};
