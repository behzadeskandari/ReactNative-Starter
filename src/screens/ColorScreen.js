import React,{useState} from 'react';

import {View ,Text, StyleSheet, Button,FlatList}from 'react-native';


const ColorScreen = () => {
    const [colors,setColors] = useState([]);
    console.log('colors',colors);
    return (
        <View>
            <Button title='add a Color' onPress={(event) => {
                if(event) event.preventDefault();
                setColors([...colors,randomRgb()])
            }}/>
            
            <FlatList 
            keyExtractor={(item) => item}
            data={colors}
            renderItem={(props) => {
                return <View style={{height: 100, width: 100,backgroundColor: props.item }}/>
            }}
            />
        </View>
    )
}

const randomRgb = () => {
    const red = Math.floor(Math.random() * 256)

    const green = Math.floor(Math.random() * 256)

    const blue = Math.floor(Math.random() * 256)
    return `rgb(${red}, ${green}, ${blue})`

}
const styles = StyleSheet.create({

})


export default ColorScreen;