import React from "react";
import { SponsorTier } from "./SponsorTier";

export const SponsorsFiltered = ({ items }) => {
    return (
        <div>
            {items.map((item) => (
                <SponsorTier data={item} key={item.tier}/>
            ))};
        </div>
    )
};
