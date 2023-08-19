import React from "react"
import { Link } from "gatsby";

export const WorkshopCard = ({title, description, imageSource, date, soldOut, page}) => (
    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
        <div className="single-blog mb30 pad-bot30">
        <div className="blog-img">
            <a href={page}><img className="img-fluid" src={imageSource} alt={title} /></a>
        </div>
        <div className="blog-content">
            <Link to={page}>
                <h3>{title}</h3>
            </Link>
            <p>{description}</p>
            <div className="date">{date}
            <p>
            {/*<span className="bordered-btn"><Link to={page}>See Details</Link></span>*/}
            <span className="float-right primary-btn"><Link className="btn-primary" to={page}> Read more</Link></span>
{/*{soldOut ? <span className="float-right primary-btn"><a className="btn-primary" href="" rel="noreferrer noopener" target="_blank">Sold Out</a></span>: <span className="float-right primary-btn"><a className="btn-primary" href="https://tickets.connectevents.io/events/rtech2019/" rel="noreferrer noopener" target="_blank">Buy Tickets</a></span>} */}
            </p>
            
            </div> 
        </div>
        </div>
    </div>
)