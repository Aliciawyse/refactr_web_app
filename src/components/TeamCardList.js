import React from "react";
import { TeamCard } from "./TeamCard";

export const TeamCardList = ({ items }) => {
  return items.map(item => (
    <TeamCard {...item.node.data} />
  ));
};
