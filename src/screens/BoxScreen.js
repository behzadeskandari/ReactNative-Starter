import React from "react";
import { StyleSheet, Text, View } from "react-native";

const BoxScreen = () => {
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>Box Number1</Text>

            <Text style={styles.textStyle}>Box number2</Text>

            <Text style={styles.textStyle}>Box NUmber3</Text>
        </View>
    );
};



const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 1,
        borderColor: 'black',
        flexDirection: 'column',
        height: 200,
        justifyContent: 'flex-start'
    },
    textStyle:{
        borderWidth:1,
        borderColor: 'red',
        flex: 1
        // marginVertical: 20,
        // marginHorizontal: 20
    }

})
export default BoxScreen;

