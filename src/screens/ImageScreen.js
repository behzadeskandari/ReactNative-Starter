import React, { Component } from 'react';
import { View, Text ,StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import ImageDetail from '../components/ImageDetail';

const ImageScreen = () => {

    return( 
    <ScrollView>
    <View style={{flex: 1, flexDirection: 'column',padding: 10}}>
        <ImageDetail title="Forest" score={9} imageSource={require('../../assets/Forests.jpeg')}/>

        <ImageDetail title="Beach" score={10} imageSource={require('../../assets/Beach.jpg')}/>

        <ImageDetail title="Mountain" score={4} imageSource={require('../../assets/Mountain.jpeg')}/>

    </View>
    </ScrollView>
    )
}

const styles = StyleSheet.create({

})

export default ImageScreen;

