import React from "react";
import Img from "gatsby-image";

export const SponsorTier = ({data}) => {
    return (
        <span>
            <h2 id={data.tier} className="text-center mt50">{data.title}</h2>
            <a name={data.tier}></a>
            <div className="row justify-content-center">
                {data.sponsors.map((sponsor) => (
                    <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3" key={sponsor.company_name}>
                        <a href={sponsor.url} rel="noreferrer noopener" target="_blank" title={`${sponsor.tier} Partner: ${sponsor.company_name}`}>
                        {sponsor.logo.localFiles && (
                            <Img
                                fluid={sponsor.logo.localFiles[0].childImageSharp.fluid}
                                style={{
                                    display: 'block',
                                    width: '100%',
                                    height: 'auto'
                                }}
                                alt={`${sponsor.tier} Partner: ${sponsor.company_name}`}
                            />
                            )}

                        </a>
                    </div>
                ))}
            </div>
            <hr />
        </span>

    );
};
