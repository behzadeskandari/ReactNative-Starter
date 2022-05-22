import React from "react";
import { View,Text,StyleSheet,Button } from "react-native";

const ColorCounter = (props) => {
    console.log('props', props);
    return (
        <View>
            <Text>{props.color}</Text>
            <Button onPress={() => props.onIncrease()} title={`increase ${props.color}`}/>
            <Button onPress={() => props.onDecrease()} title={`Decrease ${props.color}`}/>
        </View>
    );
};

export default ColorCounter;
