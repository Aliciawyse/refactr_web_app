import React from "react";
import { SpeakerCard } from "./SpeakerCard";

export const SpeakerCardList = ({ items }) => {
  return items.map(item => (
    <SpeakerCard {...item.node.data} slug={item.node.fields.slug} />
  ));
};
