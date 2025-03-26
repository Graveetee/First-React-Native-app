import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'


export default function App() {
    return (
        <View>
            <FontAwesomeIcon icon="fa-solid fa-church" />
            <Text>App</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'roboto',
    },
    text: {
        color: 'black',
        fontSize: 24,
        fontFamily: Themes.fonts.header,
    }
})