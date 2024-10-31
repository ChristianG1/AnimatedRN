import { StyleSheet, View } from "react-native";
import { Deck } from "../../components/Deck";
import { Card, Button, Text } from "react-native-elements";

type DataDummy = {
  id: number;
  text: string;
  uri: string;
};

const DATA: DataDummy[] = [
  {
    id: 1,
    text: "Card #1",
    uri: "https://images.pexels.com/photos/28802213/pexels-photo-28802213/free-photo-of-mujer-joven-en-otono-con-calabaza-de-halloween.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
  },
  {
    id: 2,
    text: "Card #2",
    uri: "https://images.pexels.com/photos/14014270/pexels-photo-14014270.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
  },
  {
    id: 3,
    text: "Card #3",
    uri: "https://images.pexels.com/photos/19300468/pexels-photo-19300468/free-photo-of-paisaje-naturaleza-bosque-arboles.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
  },
  {
    id: 4,
    text: "Card #4",
    uri: "https://images.pexels.com/photos/13920418/pexels-photo-13920418.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
  },
  {
    id: 5,
    text: "Card #5",
    uri: "https://images.pexels.com/photos/29029291/pexels-photo-29029291/free-photo-of-surtido-colorido-de-calabazas-decorativas.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
  },
  {
    id: 6,
    text: "Card #6",
    uri: "https://images.pexels.com/photos/5759857/pexels-photo-5759857.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
  },
  {
    id: 7,
    text: "Card #7",
    uri: "https://images.pexels.com/photos/28778880/pexels-photo-28778880/free-photo-of-vela-fantasma-de-halloween-con-decoracion-otonal.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
  },
  {
    id: 8,
    text: "Card #8",
    uri: "https://images.pexels.com/photos/28929438/pexels-photo-28929438/free-photo-of-calabaza-tallada-apoyada-contra-una-pared-de-ladrillos.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
  },
];

export default function HomeScreen() {
  const renderCard = (item: DataDummy) => {
    return (
      <Card key={item.id}>
        <>
          <Card.Image source={{ uri: item.uri }} />
          <Card.Title style={{ marginTop: 8 }}>{item.text}</Card.Title>
          <Text style={{ marginTop: 8 }}>I can customize the Card Future</Text>
          <Button
            icon={{ name: "code", color: "#FFF" }}
            buttonStyle={{ backgroundColor: "#03A9F4" }}
            title="View Now!"
          />
        </>
      </Card>
    );
  };

  return (
    <View style={styles.container}>
      <Deck data={DATA} renderCard={renderCard} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
});
