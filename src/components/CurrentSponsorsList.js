import React from "react";

export const CurrentSponsorsList = ({data}) => {
    console.log("data obj:", data);
    return (
        <span>
            <div className="row justify-content-center">
                {data.map((sponsor) => (
                    <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3" key={sponsor.node.data.company_name}>
                        <a href={sponsor.node.data.url} rel="noreferrer noopener" target="_blank">
                            <img
                                src={sponsor.node.data.logo[0].url}
                                style={{
                                    display: 'block',
                                    width: '100%',
                                    height: 'auto'
                                }}
                                alt={`Featured Sponsor: ${sponsor.node.data.company_name}`}
                            />
                        </a>
                    </div>
                ))}
            </div>
        </span>

    );
};
