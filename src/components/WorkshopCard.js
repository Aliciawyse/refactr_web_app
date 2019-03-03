import React from "react"

export const WorkshopCard = ({title, description, imageSource}) => (
    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
        <div className="single-blog mb30">
        <div className="blog-img">
            <a href="workshops.html#cypress"><img className="img-fluid" src={imageSource} alt="Cypress Workshop" /></a>
        </div>
        <div className="blog-content">
            <a href="workshops.html#cypress">
            <h3>{title}</h3>
            </a>
            <p>{description}</p>
            <div className="date">
            <p>
                <span className="bordered-btn"><a href="workshops.html#cypress">See Details</a></span>
                <span className="float-right primary-btn"><a className="btn-primary" href="https://tickets.connectevents.io/events/rtech2019/" rel="noreferrer noopener" target="_blank">Buy Tickets</a></span>
            </p>
            </div>
        </div>
        </div>
    </div>
)