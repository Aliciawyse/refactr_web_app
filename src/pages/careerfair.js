import React from "react";
import { graphql } from "gatsby";
import { ExhibitorCardList } from "../components/ExhibitorCardList";
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/footer";
import { Helmet } from "react-helmet";


export default ({ data }) => (
  <div>
    <Helmet>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <title>Career Fair | REFACTR.TECH</title>
      <meta name="author" content="iThemesLab" />
      <meta name="description" content="" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
    </Helmet>
    <div className="main-container">
      <NavigationBar whiteText/>
      <div className="about-us-area pad-head bg-about">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="about-content">
                <div className="section-title text-center">
                  <h2>Career Fair</h2>
                </div>
                <ol className="breadcrumb">
                  <li><a href="/">Home</a></li>
                  <li>|</li>
                  <li>Career Fair</li>
                  <li>|</li>
                  <li>
                      <a href="/jobs">All Jobs</a>
                  </li>
                    <li>|</li>
                    <li>
                      <a href="/uploadresume">Upload Resume</a>
                    </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*Conference Synopsis Area Start Here*/}
      <div className="our-blog-area pad100">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <div className="title-text mb50">
                  <h2>Career Fair</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="inner-blog">
            <div>
              <div className="row">
               <ExhibitorCardList items={data.allAirtable.nodes} />
              </div>
            </div>
          </div>
        </div>
      </div>
    <Footer />
  </div>
</div>
);

export const query = graphql`
  {
    allAirtable(filter: {table: {eq: "Sponsors"}, data: {exhibitor: {eq: true}}}
    sort: { fields: data___profile_status}
    ) {
      nodes {
        fields {
          slug
        }
        data {
          company_name
          exhibitor
          logo {
            url
          }
          Company_Profile{
            data{
              company_anchor
              description
              description_truncated
              why_work_here
              has_dei_info
              DEI_URL
            }
          }
        }
      }
    }
  }
`;
