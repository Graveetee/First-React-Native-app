import { Image, StyleSheet, Text, View, } from 'react-native'
import React from 'react'

export default function App() {
    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>App</Text>
            <Text style={styles.bodyText}>App</Text>
            <Image source={{ uri: "https://static01.nyt.com/athletic/uploads/wp/2025/03/05134503/GettyImages-2195109233-scaled-e1741200343420-1024x682.jpg?width=1248&quality=70&auto=webp" }} style={styles.image} />
        </View>
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

    },
    bodyText: {
        fontSize: 30 / 1.618,
        color: "White",
    },
    image: {
        width: "100%",
        height: 300,
        marginTop: 20,

    },
})