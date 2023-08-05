import React from "react";
import TvCard from "../components/tvCard";
import SampleTv from "./sampleTvData";


export default {
  title: "Tv Show/TvCard",
  component: TvCard,
};

export const Basic = () => {
  return (
    <TvCard
      tv={SampleTv}
    />
  );
};
Basic.storyName = "Default";

export const Exceptional = () => {
  const sampleNoPoster = { ...SampleTv, poster_path: undefined };
  return (
    <TvCard
      tv={sampleNoPoster}
    />
  );
};
Exceptional.storyName = "exception";