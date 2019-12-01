import React from "react"
import { KeynoteSpeakerCard } from './KeynoteSpeakerCard'

export const KeynoteSpeakerList = ({items}) => {
    return (
        items.map(item => <KeynoteSpeakerCard {...item.node.data} slug={item.node.fields.slug}/>)
    )
}
