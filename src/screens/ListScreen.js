import React from 'react'
import {View ,Text , StyleSheet, FlatList} from 'react-native';


const ListScreen = () => {
    const firends = [
        {name : 'Freind#1',age: 30, key: 'number1'},

        {name : 'Freind#2', key: 'number2',age: 32},
        {name : 'Freind#3', key: 'number3',age: 35},

        {name : 'Freind#4', key: 'number4',age: 31},

        {name : 'Freind#5', key: 'number5',age: 39},

        {name : 'Freind#6', key: 'number6',age: 36},

        {name : 'Freind#7', key: 'number7',age: 42},

        {name : 'Freind#8', key: 'number8',age: 53},

        {name : 'Freind#9', key: 'number9',age: 21},

        {name : 'Freind#10', key: 'number10',age: 43},

    ]

    return (
        <FlatList 
        // horizontal
        // showsHorizontalScrollIndicator={false}
         keyExtractor={(friend) => friend.key} 
         data={firends} 
         renderItem={({item, index}) => {
            return (<View style={styles.FlexBox}>
                        <Text style={styles.textStyle}>{item.name}</Text>
                        <Text>- Age {item.age}</Text>
                    </View>
                    )
         }}
        /> 
    )
}

export default ListScreen;


const styles = StyleSheet.create({
    textStyle: {
        borderColor: '#ff2',
        borderWidth: 2,
    },
    FlexBox:{
        dispaly: 'flex',
        flexDirection: 'row'
    }
})