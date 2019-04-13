import React from "react"
import { SpeakerCard } from './SpeakerCard'

export const SpeakerCardList = ({items}) => {
    const all_speakers = items.map(item => {
        const speaker_data = item.node.data
        return speaker_data
    });

    return (
        all_speakers.map(item => <SpeakerCard key={item.fields} {...item} />)
    )
}