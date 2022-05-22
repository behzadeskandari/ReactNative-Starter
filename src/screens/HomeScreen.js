import React from 'react'
import {Text,View, StyleSheet, Button, TouchableOpacity, Animated } from 'react-native';

export default function HomeScreen({navigation}) {
    console.log('navigation',navigation);
    return (
        <View>
            <Text style={styles.text}>HI THERE</Text>
            <Button title="go to The Component Demo" onPress={() => {
                console.log('buttonPressed');
                navigation.navigate('Components')
            }}/>
            <Button title="Go to list demo" onPress={() => navigation.navigate('List')}/>

            <Button title="Go to Image demo" onPress={() => navigation.navigate('Image')}/>
            <Button title="Go to Counter demo" onPress={() => navigation.navigate('Counter')}/>
            <Button title="Go to Color demo" onPress={() => navigation.navigate('Color')}/>
            <Button title="Go to Square demo" onPress={() => navigation.navigate('Square')}/>
            <Button title="Go to Text demo" onPress={() => navigation.navigate('Text')}/>
            <Button title="Go to Box demo" onPress={() => navigation.navigate('Box')}/>
    
            {/* <TouchableOpacity onPress={(event)=> {
                if(event) event.preventDefault();
                props.navigation.navigate('List')
                console.log('ListClicked')
            }}>
                <Text>Go TO list demo</Text>
            </TouchableOpacity> */}
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 30
    }
})