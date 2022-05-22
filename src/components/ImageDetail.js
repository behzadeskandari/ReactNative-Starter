import { View, Text,StyleSheet, Image } from 'react-native'
import React from 'react'

 const ImageDetail = (props) => {
  console.log(props,'props')
    return (
     
    <View style={{ flexDirection: 'column', display: 'flex',margin: 10}}>
      <Image source={props.imageSource} style={{width:  350}}/>
      <Text>{props.title}</Text>
      <Text>The Score Is  {props.score}</Text>
    </View>
  )
}
export default ImageDetail;
const styles = StyleSheet.create({

})

