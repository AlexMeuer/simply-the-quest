import React from "react";
import { BadState } from "./BadState";

export const ErrorState: React.FC = () => (
  <BadState
    isError
    title="Something went wrong."
    subtitle="Sorry this isn't more helpful."
    imageURL={`https://source.unsplash.com/collection/4612163/400x400?dummy=${new Date().getTime()}`}
  />
);
