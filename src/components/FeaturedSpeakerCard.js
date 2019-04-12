import React from "react"
import { SpeakerCard } from './SpeakerCard'

export const FeaturedSpeakerCard = ({items}) => {
    const featured =  items.filter(function(item) {
        if (item.fields.featured === true){
            return item
        }
      })
    return (
        featured.map(item => <SpeakerCard key={item.fields} {...item.fields} />)
    )
}