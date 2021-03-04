import { Button, View, Text,StyleSheet ,TextInput} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useState } from 'react';
import {Picker} from '@react-native-picker/picker';

//import React from 'react';



const Userlogin = () => {
  const [text, setText] = useState('');
  const [selectedValue, setSelectedValue] = useState("java");
  const Stack = createStackNavigator();


    return (
      // Try setting `flexDirection` to `column`.
      <View style={{flex: 1, flexDirection: 'column',justifyContent: 'center',
      alignItems: 'stretch',}}>
        <View style={{flex:1, backgroundColor: 'powderblue'}}>
            <Text style={styles.bigBlue}>Name</Text>
            <TextInput
                style={{height: 40}}
                placeholder="Type here to input"
               // onChangeText={text => setText(text)}
               // defaultValue={text}
             />
        </View>
        <View style={{flex:1, backgroundColor: 'skyblue'}}>
            <Text style={styles.bigBlue}>Telephone Number</Text>
            <TextInput
                style={{height: 40}}
                placeholder="Type here to input"
               // onChangeText={text => setText(text)}
               // defaultValue={text}
             />
        </View>
        <View style={{flex:1, backgroundColor: 'steelblue'}}>
            <Text style={styles.bigBlue}>metirial</Text>
                  <Picker
                    selectedValue={selectedValue}
                    style={{ height: 50, width: 150 }}
                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                  >
                    <Picker.Item label="Sand" value="Sand" />
                    <Picker.Item label="Gravel" value="Gravel" />
                  </Picker>
        </View>
        <View style={{flex:1, backgroundColor: 'skyblue'}}>
            <Text style={styles.bigBlue}>location</Text>
            <TextInput
                style={{height: 40}}
                placeholder="Type here to input"
                //onChangeText={text => setText(text)}
                //defaultValue={text}
             />
        </View>
        <View style={{flex:1, backgroundColor: 'powderblue'}}>
            <Text style={styles.bigBlue}>Vehicle type</Text>
            <TextInput
                style={{height: 40}}
                placeholder="Type here to input"
                //onChangeText={text => setText(text)}
                //defaultValue={text}
             />
        </View>
        <View style={{flex:1, backgroundColor: 'skyblue'}}>
            <Text style={styles.bigBlue}>Quantity(in qubes)</Text>
            <TextInput
                style={{height: 40}}
                placeholder="Type here to input"
                //onChangeText={text => setText(text)}
                //defaultValue={text}
             />
        </View>
      </View>
    );
};


const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 20,
  },
  red: {
    color: 'red',
  },
  piker: {
    flex: 1,
    paddingTop: 40,
    alignItems: "center"
  }
});


export default Userlogin;