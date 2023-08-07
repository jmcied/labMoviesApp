import React from "react";
import ActorCard from "../components/actorsCard";
import SampleActor from "./sampleActorData";


export default {
  title: "Actor/Actor Card",
  component: ActorCard,
};

export const Basic = () => {

    <ActorCard actor={SampleActor}
    />
  
};
Basic.storyName = "Default";

/* export const Exceptional = () => {
  const sampleNoPoster = { ...SampleActor, poster_path: undefined };
  return (
    <ActorCard
      actor={sampleNoPoster}
    />
  );
};
Exceptional.storyName = "exception"; */