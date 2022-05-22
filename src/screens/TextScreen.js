import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

const TextScreen = () => {

    const [name,setName] = useState('');

    const [password,setPasswrod] = useState('');
    return (
        <View>
            <Text>Enter Name:</Text>
            <TextInput style={styles.input} value={name} onChangeText={(newValue) => setName(newValue) } autoCapitalize="none" autoCorrect={false}/>
            <Text>Enter password:</Text>
            <TextInput style={styles.input} value={password} onChangeText={(newValue) => setPasswrod(newValue) } autoCapitalize="none" autoCorrect={false}/>
           

            {password.length < 4 ? <Text>password Must be 4 Character</Text> : null}
            {/* <Text> My name is :{name}</Text>
            <Text> The pass is {password}</Text> */}
        </View>
    );
};

const styles = StyleSheet.create({
    input:{
        margin:15,
        borderColor: 'black',
        borderWidth:1
    }
})

export default TextScreen;

