import React from "react"
import { SpeakerCard } from './SpeakerCard'

export const CurrentSpeakerCard = ({items}) => {
    console.log("items list:", items);

    return (
        items.map(item => <SpeakerCard {...item.node.data} slug={item.node.fields.slug}/>)
    )
}
