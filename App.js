
import { ImageBackground, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <ImageBackground source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Flag_of_Nigeria.svg/195px-Flag_of_Nigeria.svg.png" }}> // use the URI to add images from the web.
      <View style={styles.container}>
        <Text style={styles.headerText}>React Native</Text>
        <Text style={styles.bodyText}>Reatct native is a framework for building mobile applicatiosn with Javascript and react</Text>
      </View>
      <image source={require("./assets/pexeels-stuffedbox-ng-513424808-16237519 (1).jpg")} style={styles.img} /> //add images from a directory in the project files.
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 100,
    backgroundColors: "#9eb198",
    height: "100%"
  },
  headerText: {
    fontSize: 20,
    color: "orangeRed",
    marginTop: 20,
    textAlign: "center",

  },
  bodyText: {
    fontSize: 20,
    color: "orangeRed",
    borderWidth: 1,
    borderColor: "white",
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#fffffff10",
    width: "100%",
  }
});
