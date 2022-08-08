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

      <span style={{ display: session.node.data.Speakers && session.node.data.Speakers[0]?"block":"none"}}>
        <Link style={{ pointerEvents: session.node.data.Speakers && session.node.data.Speakers[0]? "auto":"none"}}
          to={ session.node.data.Speakers && session.node.data.Speakers[0]? `/speakers/${session.node.data.Speakers[0].data.speaker_anchor}`:""}>
          {session.node.data.Speakers && session.node.data.Speakers[0]? session.node.data.Speakers[0].data.speaker_name+" ":""}
        </Link>
      </span>

      <span style={{ display: session.node.data.Speakers && session.node.data.Speakers[1]?"block":"none"}}>
        <Link style={{ pointerEvents: session.node.data.Speakers && session.node.data.Speakers[1]? "auto":"none"}}
          to={ session.node.data.Speakers && session.node.data.Speakers[1]? `/speakers/${session.node.data.Speakers[1].data.speaker_anchor}`:""}>
          {session.node.data.Speakers && session.node.data.Speakers[1]? session.node.data.Speakers[1].data.speaker_name+" ":""}
        </Link>
      </span>

      <p>
      {session.node.data.begins} - {session.node.data.ends}&nbsp;<br/>
      
      {session.node.data.venue_room}
      </p>

      <div style={{ marginBottom: "0", bottom: "0", verticalAlign: "bottom"}}>
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
