import * as React from 'react';
import {View, Text, TextInput, Button,StyleSheet} from 'react-native';
import { color } from 'react-native-reanimated';
import {useNavigation} from '@react-navigation/native';//facilatate navigation


function Home ( ) {

  const navigation = useNavigation();//naviation constant

    return (
        <View style={{flex : 1, alignItems : 'center', justifyContent : 'center',backgroundColor: 'powderblue'}}>
             <Text style={styles.bigBlue}>If you are a Seller press this</Text>
                <Button
                    title='SELLER'
                    onPress={()=> navigation.navigate('SellerLogIn')}
                />


             <Text style={styles.bigBlue}>If you are a Buyer press this</Text>
             <Button
                    title='BUYER'
                    onPress={()=> navigation.navigate('UserlogIn')}
              />
        </View>
        
    );
}


const styles = StyleSheet.create({
    container: {
      marginTop: 50,
    },
    bigBlue: {
      color: 'red',
      fontWeight: 'bold',
      fontSize: 20,
    },
    red: {
      color: 'red',
    },
  });

export default Home;