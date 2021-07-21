import React, { Children } from "react"
import { KeynoteSpeakerCard } from './KeynoteSpeakerCard'

export const KeynoteSpeakerList = ({ items }) => {
    return (
        Children.toArray(items.map(item => <KeynoteSpeakerCard {...item.node.data} slug={item.node.fields.slug} />))
    )
}
