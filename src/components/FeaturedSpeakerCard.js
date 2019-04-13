import React from "react"
import { SpeakerCard } from './SpeakerCard'

export const FeaturedSpeakerCard = ({items}) => {
    const featured = items.map(item => {
        const speaker_data = item.node.data
        return speaker_data
    });
    return (
        featured.map(item => <SpeakerCard key={item.fields} {...item} />)
    )
}
