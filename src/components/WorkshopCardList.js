import React from "react"
import { WorkshopCard } from './WorkshopCard'

export const WorkshopCardList = ({items}) => {
    if (!(items && items.length)) {
        return <div>There are no workshops!</div>
    }

    return (
        items.map(item => <WorkshopCard key={item.id} {...item} />)
    )
}