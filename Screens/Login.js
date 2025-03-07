import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

export function Login() {
    const [username, setUsername] = useState("")    // This is a state variable used to store the value of the username. the setUsername is a function used to update the value of the username.
    const [password, setPassword] = useState("")    // This is a state variable used to store the value of the password. the setPassword is a function used to update the value of the password.

    function handleLogin() {
        console.log("Btn click");

        const data = {
            username: username,
            password: password
        };  // This is an object used to store the username and password that was entered from the input field and stored in the state variables.
        console.log(data);  // This is used to log the data to the console.
        setUsername("");    // This is used to clear the input field for the username.
        setPassword("");    // This is used to clear the input field for the password.  
    }
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Login</Text>
            <Text style={styles.text}>{username}</Text>

            <TextInput
                style={styles.input}
                placeholder="Username"
                onChangeText={(text) => setUsername(text)}
            />   // This used to create the input field for the username.
            <TextInput
                style={styles.input}
                placeholder="Password"
                onChangeText={(text) => setUsername(text)} />   // This used to create the input field for the password.

            {/* <Button title="login" color="#ff7700" onPress={()=> console.log("Button Clicked")}> */}    // This is a button component used to create a button for the login.(The style for such button is limited, so it is better to use the TouchableOpacity component)

            <TouchableOpacity style={styles.button} onPress={() => handleLogin()}>  //This handleLogin() is called when the button is clicked. and it is used to handle the login by storing the username and password in the state variables.
                <Text style={styles.text}>Login</Text>
            </TouchableOpacity> // This is a TouchableOpacity component used to create a button for the login.
        </View>
    )
}

const styles = StyleSheet.create({
    container: {

        backgroundColor: "white",
        height: "100%"
    },
    text: {
        fontSize: 20,
        color: "#ff7700",
        textAlign: "center",

    },
    input: {
        borderWidth: 1,
        borderColor: "#ff7700",
        padding: 10,

        borderRadius: 10,
        backgroundColor: "#fffffff10",
        width: "100%",
        margin: 12,
    },
    button: {
        backgroundColor: "#ff7700",
        padding: 10,
        borderRadius: 10,
        width: "100%",
        margin: 12,
    }
})