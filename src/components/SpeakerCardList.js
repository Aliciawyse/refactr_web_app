import React from "react"
import { SpeakerCard } from './SpeakerCard'

export const SpeakerCardList = ({items}) => {
    if (!(items && items.length)) {
        return <div>There are no Speakers!</div>
    }

    return (
        items.map(item => <SpeakerCard key={item.id} {...item} />)
    )
}