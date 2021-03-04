import { Button, View, Text, StyleSheet, TextInput } from 'react-native';
import React, { useState } from 'react';
import { Picker } from '@react-native-picker/picker';

//import React from 'react';


const FlexDirectionBasics = () => {
  const [name, setName] = useState('');
  const [selectedValue, setSelectedValue] = useState("java");
  return (
    // Try setting `flexDirection` to `column`.
    <View style={{
      flex: 1, flexDirection: 'column', justifyContent: 'center',
      alignItems: 'stretch',
    }}>
      <View style={{ flex: 1, backgroundColor: 'powderblue' }}>
        <Text style={styles.bigBlue}>Name</Text>
        <TextInput
          style={{ height: 40 }}
          placeholder="Type here to input"
          onSubmitEditing={() => console.log('Submited')}
        />
      </View>
      <View style={{ flex: 1, backgroundColor: 'skyblue' }}>
        <Text style={styles.bigBlue}>Telephone Number</Text>
        <TextInput
          style={{ height: 40 }}
          placeholder="Type here to input"
        // onChangeText={text => setText(text)}
        // defaultValue={text}
        />
      </View>
      <View style={{ flex: 1, backgroundColor: 'steelblue' }}>
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
      <View style={{ flex: 1, backgroundColor: 'powderblue' }}>
        <Text style={styles.bigBlue}>Price of metirial for one qube</Text>
        <TextInput
          style={{ height: 40 }}
          placeholder="Type here to input"
        //onChangeText={text => setText(text)}
        //defaultValue={text}
        />
      </View>
      <View style={{ flex: 1, backgroundColor: 'skyblue' }}>
        <Text style={styles.bigBlue}>location</Text>
        <TextInput
          style={{ height: 40 }}
          placeholder="Type here to input"
        //onChangeText={text => setText(text)}
        //defaultValue={text}
        />
      </View>
      <View style={{ flex: 1, backgroundColor: 'steelblue' }}>
        <Text style={styles.bigBlue}>Vehicle No</Text>
        <TextInput
          style={{ height: 40 }}
          placeholder="Type here to input"
        //onChangeText={text => setText(text)}
        //defaultValue={text}
        />
      </View>
      <View style={{ flex: 1, backgroundColor: 'powderblue' }}>
        <Text style={styles.bigBlue}>Vehicle type</Text>
        <TextInput
          style={{ height: 40 }}
          placeholder="Type here to input"
        //onChangeText={text => setText(text)}
        //defaultValue={text}
        />
      </View>
      <View style={{ flex: 1, backgroundColor: 'skyblue' }}>
        <Text style={styles.bigBlue}>Rate for 1km</Text>
        <TextInput
          style={{ height: 40 }}
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


export default FlexDirectionBasics;