import React from "react";
import ActorListHeader from "../components/headerActorList/index";
import SampleActor from "./sampleActorData";

export default {
  title: "Actor/Actor Header",
  component: ActorListHeader,
};

export const Basic = () => <ActorListHeader actor={'SampleActor'} />;

Basic.storyName = "Default";