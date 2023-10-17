import {useState,useEffect} from 'react'
import {View,Button, Text, StyleSheet} from 'react-native'

function App() {
  const [count, setCount] = useState(0);
  const[dispText,setDispText]=useState('');

//This function sets the display text to the current count.
//def update_display():
    setDispText('USE EFFECT- The count is:'+ Count)
  useEffect(() => {
        setDispText('USE EFFECT- The count is:'+ Count)

    },[]);
			return( 
					
					<View style= {style.container}>
					<Text style={styles.textDisp}>Count:</Text>
					<View style={styles.buttons}>
							<Button 	
									onpress={()=> setCount(count -1)}
									title='Decrement'
									
									/>
									</View>
									
									<View styles = {styles.buttons}>
                  <Button 
                  onPress={() => setCount(count + 1)} 
                  title='Increment' 
                  />
                  </View>
                  <Text style={styles.textDisp}>{dispText}</Text>
                  </View>
                  );
      }
      const styles = StyleSheet.create({

        container: {
          flex: 1,
          padding:10,
        },

        buttons: {
                margin: 5,
                padding: 5,
                },

                textDisp: {
                  fontSize: 10,
                  fontWeight: 'bold',
                },
      });
      export default App;
      import React, { useState, useEffect } from 'react';
import { View, Button, Text, StyleSheet, AsyncStorage } from 'react-native';

const CounterScreen = ({ navigation }) => {
  const [count, setCount] = useState(0);

  const incrementCounter = () => {
    setCount(count + 1);
    AsyncStorage.setItem('count', JSON.stringify(count + 1));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textDisp}>Count: {count}</Text>
      <View style={styles.buttons}>
        <Button onPress={incrementCounter} title="Increment" />
      </View>
      <View style={styles.buttons}>
        <Button
          onPress={() => navigation.navigate('DisplayCounterScreen')}
          title="Go to Display Counter Screen"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  buttons: {
    margin: 5,
    padding: 5,
  },
  textDisp: {
    fontSize: 10,
    fontWeight: 'bold',
  },
});

export default CounterScreen;

import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, AsyncStorage } from 'react-native';

const DisplayCounterScreen = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const fetchCounter = async () => {
      const storedCounter = await AsyncStorage.getItem('count');
      setCounter(JSON.parse(storedCounter));
    };
    fetchCounter();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.textDisp}>Saved Counter Value: {counter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textDisp: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});




						
	