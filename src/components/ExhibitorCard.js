import React from "react"
import { Link } from "gatsby";

export const ExhibitorCard = ({company_name, logo, slug, Company_Profile }) => (
  <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
    <div className="single-blog mb30 pad-bot30">
      <div className="blog-img" style={{borderBottom: ".5px solid #80808029"}}>
        <a href="/"><img className="img-fluid" src={logo[0].url} alt="company_logo" /></a>
      </div>
      <div className="blog-content">
        <Link to={"/"}><h3>{company_name}</h3></Link>

        <p>{ Company_Profile !== null ? Company_Profile[0].data.description_truncated : 'Coming soon!'}</p>
        <br></br>
        <p>
          { Company_Profile !== null ? <span className="float-right primary-btn bordered-btn">
            <Link className="btn-primary" to={slug}>See Company</Link>
          </span> : ''}
        </p>

      </div>
    </div>
  </div>
)