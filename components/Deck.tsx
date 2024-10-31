import React, { useRef } from "react";
import { View, PanResponder } from "react-native";

type DataDummy = {
  id: number;
  text: string;
  uri: string;
};

type Props = {
  data: DataDummy[];
  renderCard: (item: DataDummy) => React.ReactNode;
};

export const Deck = ({ renderCard, data }: Props) => {
  const panResponder = useRef(PanResponder.create({})).current;

  const renderCards = () => {
    return data.map((item) => renderCard(item));
  };

  return <View>{renderCards()}</View>;
};
