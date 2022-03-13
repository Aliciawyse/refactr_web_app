import React from "react";

export const FeaturedSponsorsList = ({data}) => {
    console.log("data obj:", data);
    return (
        <span>
            <div className="row justify-content-center">
                {data.map((sponsor) => (
                    <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3" key={sponsor.node.data.pastSponsor_name}>
                        <a href={sponsor.node.data.pastSponsor_url} rel="noreferrer noopener" target="_blank">
                            <img
                                src={sponsor.node.data.pastSponsor_logo[0].url}
                                style={{
                                    display: 'block',
                                    width: '100%',
                                    height: 'auto'
                                }}
                                alt={`Featured Sponsor: ${sponsor.node.data.pastSponsor_name}`}
                            />
                        </a>
                    </div>
                ))}
            </div>
            <hr />
        </span>

    );
};
