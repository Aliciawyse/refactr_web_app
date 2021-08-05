import React from "react"
import { ExhibitorCard } from './ExhibitorCard'

export const ExhibitorCardList = ({items}) => {

    if (!(items && items.length)) {
        return <div>There are no exhibitors!</div>
    }

    return (
        items.map((item, index) => <ExhibitorCard key={index} {...item.data}/>)
    )
}
