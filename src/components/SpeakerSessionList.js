import React from "react";
import { SpeakerSession } from "./SpeakerSession";

export const SpeakerSessionList = ({sessions=[]}) => {

    if (sessions.length === 0){
        return (<div>Session coming soon!</div>)
    }

    return (
        <ul>
            {sessions.map(session => <SpeakerSession {...session.data} />)}
        </ul>)

};