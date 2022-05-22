import { View, Text,StyleSheet } from 'react-native'
import React,{useState,useReducer} from 'react'
import ColorCounter from '../components/ColorCounter'

    const COLOR_INCREMENT = 15;

    const reducer = (state,action) => {
        switch (action.type) {
            case 'change_red':
               return state.red + action.payload > 255 || state.red + action.payload < 0 
                ? state
                : {...state, red: state.red + action.payload}
                
                case 'change_green':
                    return state.green + action.payload > 255 || state.green + action.payload < 0 
                    ? state
                    : {...state, green: state.green + action.payload}
                    
            case 'change_blue':
                return state.blue + action.payload > 255 || state.blue + action.payload < 0 
                ? state
                : {...state, blue: state.blue + action.payload}
                
            default:
                return state;
        }


    }   
export default function SquareScreen() {
    //-------------------------------------
    // const [red,setRed] = React.useState(0);
    // const [green,setGreen] = React.useState(0);
    // const [blue,setBlue] = React.useState(0);
    
    // const setColor = (color,change) => {
    //     // color === 'red','green','blue
    //     // change === +15 , -15
    //     // if(color === 'red'){
    //     //     if(red + change > 255 || red + change < 0){
    //     //         return;
    //     //     }else{
    //     //         setRed(red + change);
    //     //     }
    //     // }
    //     switch (color) {
    //         case 'red':
    //             red + change > 255 || red + change < 0 ? null : setRed(red + change);
    //             return;
    //         case 'green':
    //             green + change > 255 || green + change < 0 ? null : setGreen(green + change);
    //             return;
    //         case 'blue':
    //             blue + change > 255 || blue + change < 0 ? null : setBlue(blue + change);
    //             return;
    //         default:
    //             return;
    //     }
    // }
    ///////////---------------------------------

  
    const [state,dispatch] = useReducer(reducer , {red : 0 , green: 0 , blue : 0})
    console.log(state,'state');
    const { red , green , blue } = state;
    return (

    <View>
     {/* <ColorCounter 
     onIncrease={() => {
        // if(red + COLOR_INCREMENT > 255){
        //     return ;
        // // }
        // setRed(red + COLOR_INCREMENT)
        setColor('red',COLOR_INCREMENT)
     }} 

     onDecrease={() => setColor('red',-1 * COLOR_INCREMENT)}
     color="Red"/>

     <ColorCounter 
     onIncrease={() => setColor('blue' , COLOR_INCREMENT)}
     onDecrease={() => setColor('blue' ,-1 * COLOR_INCREMENT)} 
     color="Blue"/>

     <ColorCounter 
     onIncrease={() => setColor('green' , COLOR_INCREMENT)} 
     onDecrease={() => setColor('green' ,-1 * COLOR_INCREMENT)}  
     color="Green"/> */}
     
     <ColorCounter 
     onIncrease={() => dispatch({ type : 'change_red', payload: COLOR_INCREMENT})} 

     onDecrease={() => dispatch({ type : 'change_red', payload: -1 * COLOR_INCREMENT})}
     color="Red"/>

     <ColorCounter 
     onIncrease={() => dispatch({ type : 'change_blue', payload: COLOR_INCREMENT})}
     onDecrease={() => dispatch({ type : 'change_blue', payload: -1 * COLOR_INCREMENT})} 
     color="Blue"/>

     <ColorCounter 
     onIncrease={() => dispatch({ type : 'change_green', payload: COLOR_INCREMENT})} 
     onDecrease={() => dispatch({ type : 'change_green', payload: -1 * COLOR_INCREMENT})}  
     color="Green"/>
     
     <View style={{ height : 150, width: 150,backgroundColor: `rgb(${red},${green},${blue})`}}/>


    </View>
  )
}

const styles =StyleSheet.create({

})