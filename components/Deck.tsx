import React from "react";
import { View } from "react-native";

type DataDummy = {
  id: number;
  text: string;
  uri: string;
};

type Props = {
  data: DataDummy[];
  renderCard: (item: DataDummy) => void;
};

export const Deck = ({}: Props) => {
  return <View />;
};
