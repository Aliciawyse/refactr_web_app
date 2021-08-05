import React from "react"
import { Link } from "gatsby";

export const ExhibitorCard = ({company_name, logo, Company_Profile }) => (
  <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
    <div className="single-blog mb30 pad-bot30">
      <div className="blog-img" style={{borderBottom: ".5px solid #80808029"}}>
        {Company_Profile !== null ?<a href={"/company/"+Company_Profile[0].data.company_anchor}><img className="img-fluid" src={logo[0].url} alt="company_logo" /></a>:
        <img className="img-fluid" src={logo[0].url} alt="company_logo" /> }
      </div>
      <div className="blog-content">
      {Company_Profile !== null ?<Link to={"/company/"+Company_Profile[0].data.company_anchor}><h3>{company_name}</h3></Link>:<h3>{company_name}</h3>}

        <p>{ Company_Profile !== null ? Company_Profile[0].data.description_truncated : 'Company details coming soon!'}</p>
        <br></br>
        <p>
          { Company_Profile !== null ? <span className="float-right primary-btn bordered-btn">
            <Link className="btn-primary" to={"/company/"+Company_Profile[0].data.company_anchor}>View Company</Link>
          </span> : ''}
        </p>

      </div>
    </div>
  </div>
)