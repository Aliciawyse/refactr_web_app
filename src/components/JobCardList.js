import React, { Children } from "react"
import { JobCard } from './JobCard'

export const JobCardList = ({items}) => {
    if (!(items && items.length)) {
        return <div>Check back later for available jobs!</div>
    }

    return (
        Children.toArray(items.map(item => <JobCard {...item.node.data} slug={item.node.fields.slug} />))
    )
}