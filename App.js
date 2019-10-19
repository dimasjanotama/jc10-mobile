import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {

  const [counter, setCounter] = useState(0)
  const [inputText, setInputText] = useState('')
  //useState menerima initial state, dlm kasus ini 0

  // Kalau biasanya :
  // state = {
  //   counter : 0
  // }

  // untuk setstate biasanya pakai this.setState({counter : 1})
  // di react hook pake setCounter(1)


  return ( 
    <View style={{...styles.container}}>
      <View style={styles.containerB}>
        <Text style={{fontSize : 30}}>{counter}</Text>
        <Button title='ADD' onPress={()=>{setCounter(counter + 1)}}/>
      </View>
      <View style={styles.containerB}>
        <TextInput onChangeText={(e)=>{setInputText(e)}} placeholder='Input text anda'></TextInput>
        <Button title='ADD' onPress={()=>{setInputText(inputText)}}/>
        <Text style={{fontSize : 30}}>{inputText}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },

  containerA : {
    flex: 1,
    backgroundColor: 'red',
    width: 300,
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white'
  },

  containerB : {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white'
  },

});
