import React from "react";
import Img from "gatsby-image";

export const FeaturedSponsorsList = ({data}) => {
    console.log("data obj:", data);
    return (
        <span>
            <div className="row justify-content-center">
                {data.map((sponsor) => (
                    <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3" key={sponsor.node.data.sponsor_name}>
                        <a href={sponsor.node.data.sponsor_url} rel="noreferrer noopener" target="_blank">
                            <Img
                                fluid={sponsor.node.data.sponsor_logo.localFiles[0].childImageSharp.fluid}
                                style={{
                                    display: 'block',
                                    width: '100%',
                                    height: 'auto'
                                }}
                                alt={`Featured Sponsor: ${sponsor.node.data.sponsor_name}`}
                            />
                        </a>
                    </div>
                ))}
            </div>
        </span>

    );
};
