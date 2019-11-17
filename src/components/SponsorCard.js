import React from "react";
import Img from "gatsby-image";

export const SponsorCard = ({
                                company_name,
                                url,
                                tier,
                                logo
                            }) => (
    <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12">
        <div className="speakers xs-mb30">
            <div className="spk-info">
                <h3>
                    <a href={url} rel="noreferrer noopener" target="_blank">
                        {company_name}
                    </a>
                </h3>
                <p>{tier}</p>
            </div>
        </div>
    </div>
);
