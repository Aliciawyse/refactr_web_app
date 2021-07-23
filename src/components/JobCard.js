import React from "react"
import { Link } from "gatsby";

export const JobCard = ({company_name, job_title, time_since_post, Sponsors, slug}) => (


 <div className="row mb50 jobcard">
    <div className="col-lg-2 col-md-4">
        <div>
            <img className="img-fluid" src={Sponsors[0].data.logo[0].url} alt={company_name} />  
            {console.log("company", Sponsors[0].data.company_name)}      
        </div>
    </div>

    <div className="col-lg-10 col-md-8 jobcard-text">
        <Link to={slug}>
            <h5>{job_title}</h5>
        </Link>
        <p>{Sponsors[0].data.company_name}</p>
        <div>Posted {time_since_post} ago</div>
    </div>
</div>

)