import React, { useState } from 'react';
import { Button, View, Text, StyleSheet, TextInput, ActivityIndicator } from 'react-native';
import database from '@react-native-firebase/database';

const Temp = () => {

    //firebase.initializeApp();
    const [count, setCount] = useState(0);

    const [name, setName] = useState(null);
    // const [mobile, setMobile] = useState(null);

    const [readState, setReadState] = useState({ loading: false, data: [], error: false });

    //write data
    const writeData = () => {
        const reference = database().ref('/users' + userId);
        reference.set({
            id: count,
            name: name
            // mobile: mobile
        })
            .then(() => console.log('Data set.'));
    };

    //read data

    const readData = () => {
        setReadState({ ...readState, loading: true })
        database()
            .ref('/users')
            .once('value')
            .then(snapshot => {
                //console.log('User data: ', Object.values(snapshot.val()));
                let Data = Object.values(snapshot.val());
                setReadState({ ...readState, loading: false, data: Data })
            })
            .catch(error => {
                setReadState({ ...readState, loading: false, error: true })
            })
    };

    //push data
    const pushdata = () => {
        const newReference = database()
            .ref('/users')
            .push();

        console.log('Auto generated key: ', newReference.key);

        newReference
            .set({
                name: name,
            })
            .then(() => console.log('Data updated.'));
    };

    //update data
    const updatedata = () => {
        const newupdate = database()
            .ref('/users/-MTn_rDvbw3etKgoqTSR')
            .update({
                name: name,
            })
            .then(() => console.log('Data updated.'));
    };


    return (

        <View>

            {
                (readState.loading === true) ? // if
                    <ActivityIndicator />
                    : (readState.error === true) ? // : else
                        <Text> Error  </Text>
                        : readState.data.map((item, index) => <Text key={index.toString()}>{item.name}</Text>)
            }
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={(text) => setName(text)}
            />


            <Button
                title=' Push data '
                color="green"
                onPress={pushdata}

            />
            <Button
                onPress={readData}
                title="Read data"
                color="red"
                accessibilityLabel="Click this button to get result"
            />

            <Button
                title='update'
                onPress={updatedata}

            />

        </View>)

};


export default Temp;


        //<Button
        //  title='Press Me'
        //onPress={writeData}

        ///>


/*<Text>You clicked {count} times.</Text>
<Button
    onPress={() => setCount(count + 1)}
    title="Click me"
    color="red"
    accessibilityLabel="Click this button to increase count"
/>*/