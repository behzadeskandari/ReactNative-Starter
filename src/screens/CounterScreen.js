import { View, Text,StyleSheet,Button } from 'react-native'
import React,{useState,useReducer} from 'react'

const reducer = (state,action) => {
    ///state === {count : number}
    console.log()
    ///action === {type: 'increment' || 'decrement', payload:}
    switch (action.type) {
        case 'increment':
            return {
                ...state, count: state.count + action.payload
            };
        case 'decrement':
            return {
                ...state , count: state.count - action.payload
            };
            break;
        default:
            break;
    }
}

const CounterScreen = () => {
    // const [counter,setCounter] = useState(0);
//   let counter = 0;
    const [state,dispatch] = useReducer(reducer, { count: 0 })
  return (
    <View>
        <Button title='Increase' onPress={(event) => {
            if(event) event.preventDefault();
            dispatch({type: 'increment', payload: 1})
            // setCounter(counter + 1)
        }}/>

        <Button title='Decrease' onPress={(event) => {
            if(event) event.preventDefault();
            // setCounter(counter - 1)
       
            dispatch({type: 'decrement', payload: 1})
       }}/>
        <Text>CurrentCOunter : </Text>
        {/* {counter} */}
    </View>
  )
}


const styles = StyleSheet.create({

})

export default CounterScreen;