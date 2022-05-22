

import React from 'react'
import {Text,View ,StyleSheet} from 'react-native';

const ComponentScreen = () => {
    const name = 'stephen'
    return (
        <View>
            <Text style={styles.textStyle}>
               Geeting Started with react native!
            </Text>
            <Text style={styles.subHeaderStyle}>My Name is {name}</Text>
        </View>
    )
};



export default ComponentScreen

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 45
    },
    subHeaderStyle: {
        fontSize: 20
    }
});

