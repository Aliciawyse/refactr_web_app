import React from "react";

export const SponsorTier = ({data}) => {
    return (
        <span>
            <h2 className="text-center mt50">{data.title}</h2>
            <div className="row">
                {data.sponsors.map((sponsor) => (
                    <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                        <a href={sponsor.url} rel="noreferrer noopener" target="_blank">
                            <img
                                src={sponsor.logo}
                                style={{
                                    display: 'block',
                                    width: '100%',
                                    height: 'auto'
                                }}
                                alt="`Sponsor: ${sponsor.company_name}`"
                            />
                        </a>
                    </div>
                ))}
            </div>
            <hr />
        </span>

    );
};
