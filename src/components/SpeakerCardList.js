import React, { Children } from "react";
import { SpeakerCard } from "./SpeakerCard";

export const SpeakerCardList = ({ items }) => {
  return Children.toArray(items.map(item => (
    <SpeakerCard {...item.node.data} slug={item.node.fields.slug} />
  )));
};
