
// import { ImageBackground, StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <ImageBackground source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Flag_of_Nigeria.svg/195px-Flag_of_Nigeria.svg.png" }}> // use the URI to add images from the web.
//       <View style={styles.container}>
//         <Text style={styles.headerText}>React Native</Text>
//         <Text style={styles.bodyText}>Reatct native is a framework for building mobile applicatiosn with Javascript and react</Text>
//       </View>
//       <image source={require("./assets/pexeels-stuffedbox-ng-513424808-16237519 (1).jpg")} style={styles.img} /> //add images from a directory in the project files.
//     </ImageBackground>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     padding: 20,
//     paddingTop: 100,
//     backgroundColors: "#9eb198",
//     height: "100%"
//   },
//   headerText: {
//     fontSize: 20,
//     color: "orangeRed",
//     marginTop: 20,
//     textAlign: "center",

//   },
//   bodyText: {
//     fontSize: 20,
//     color: "orangeRed",
//     borderWidth: 1,
//     borderColor: "white",
//     padding: 10,
//     borderRadius: 10,
//     backgroundColor: "#fffffff10",
//     width: "100%",
//   }
// });



// //Create an article page (Assignment)


import { Image, ScrollView, StyleSheet, Text, View, } from 'react-native'
import React from 'react'

export default function App() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.headerText}>Chelsea's Defender, Marc Cucurella comments on their effort to win the UECL</Text>

        <Image source={{ uri: "https://static01.nyt.com/athletic/uploads/wp/2025/03/05134503/GettyImages-2195109233-scaled-e1741200343420-1024x682.jpg?width=1248&quality=70&auto=webp" }} style={styles.image} />

        <Text style={styles.bodyText}>Chelsea defender Marc Cucurella hass expressed his desire to win the UEFA Europa conference League, stating that it would be a dissapointment if they fail to lift the trophy. The Blues are set to face West Ham United in the quarter-finals, and Cucurella is confident that his team has what it takes to go all the way </Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 100,
    backgroundColors: "#9eb198",
    height: "100%"
  },
  headerText: {
    fontSize: 30,
    color: "White",
    marginTop: 40,
    fontWeight: "bold",
    textAlign: "center",

  },
  bodyText: {
    fontSize: 30 / 1.618,
    color: "White",
    borderWidth: 1,
    borderColor: "white",
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#fffffff10",
    width: "100%",
    marginTop: 20,

  },
  image: {
    width: "100%",
    height: 300,
    marginTop: 20,

  },
})