import React from "react";
import { SessionSpeakerDetail } from "./SessionSpeakerDetail";

export const SessionSpeakerList = ({speakers=[]}) => {

    if (speakers === null){
        return (<div>Sorry no speaker!</div>)
    }

    return (
        <ul style={{display: 'flex',  flexWrap: "wrap"}}>
            {speakers.map(speaker => <SessionSpeakerDetail {...speaker.data} />)}
        </ul>)

};