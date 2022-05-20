import React from "react";
import { BadState } from "./common/BadState";

export const AreYouLost: React.FC = () => (
  <BadState
    title="404"
    subtitle="This is not the quest you are looking for."
    imageURL={`https://source.unsplash.com/collection/1443572/400x400?dummy=${new Date().getTime()}`}
  />
);
