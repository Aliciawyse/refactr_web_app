import React, { Children } from "react"
import { JobCard } from './JobCard'

export const JobCardList = ({ items, searchedItems, query }) => {


    const getJobCardSearchData = (data) => {
        if (data) {
            return data.results.map((job) => {
                return {
                    job_title: job.job_title,
                    time_since_post: job.time_since_post,
                    company_name: job.sponsors.company_name,
                    department: job.department,
                    url: job.sponsors.logo[0].url,
                    slug: `/jobs/${job.anchor}`
                }
            })
        }
        return []
    }

    const mapItemToJobs = (data) => {
        return data.map(item => {
            return {
                job_title: item.node.data.job_title,
                time_since_post: item.node.data.time_since_post,
                company_name: item.node.data.Sponsors[0].data.company_name,
                department: item.node.data.department,
                url: item.node.data.Sponsors[0].data.logo[0].url,
                slug: item.node.fields.slug
            }
        })
    }



    const allResults = Children.toArray(mapItemToJobs(items).map(item => <JobCard {...item} />))
    const searchedResults = Children.toArray(getJobCardSearchData(searchedItems).map(item => <JobCard {...item} />))

    if (!(items && items.length)) {
        return <div>Check back later for available jobs!</div>
    }

    return (
        query && searchedResults.length > 0 ? searchedResults : allResults
    )

}