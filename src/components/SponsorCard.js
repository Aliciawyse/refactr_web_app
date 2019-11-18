import React from "react";
import Img from "gatsby-image";

export const SponsorCard = ({
                                company_name,
                                url,
                                logo
                            }) => (
        <ul>
            <li className="col-lg-12">
                <a href={url} rel="noreferrer noopener" target="_blank">
                    <h2>{company_name}</h2>
                    <p>{logo[0].filename}</p>
                </a>
            </li>
        </ul>
);
