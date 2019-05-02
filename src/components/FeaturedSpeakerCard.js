import React from "react"
import { SpeakerCard } from './SpeakerCard'

export const FeaturedSpeakerCard = ({items}) => {
    return (
        items.map(item => <SpeakerCard {...item.node.data} slug={item.node.fields.slug}/>)
    )
}
