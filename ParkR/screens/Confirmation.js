import React, { Component } from 'react';
import {  Text, View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';


export default class Confirmation extends React.Component {

    static navigationOptions = {
        title: 'Confirmation',
      };
  render(){

    return(
        <View style={styles.container}>
        
                   

        <TextInput 
              onChangeText={value => this.onChangeText('confirmationNumber', value)}
              style={styles.userInput}
              placeholder='Confirmation Number'
              placeholderTextColor="white"
              underlineColorAndroid='rgba(0,0,0,0)'
              keyboardType='numeric'
            />

            <TouchableOpacity 
            
              style={styles.button}>
 
                <Text style={styles.buttonText}>Confirm</Text>

            </TouchableOpacity>

             
          
              

        </View>
          
    );

  };
};

const styles = StyleSheet.create ({
    container : {
      backgroundColor: '#263238',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    
    userInput : {
      width:300,
      backgroundColor: 'rgba(255, 255, 255, 0.3)',
      borderRadius: 25,
      paddingHorizontal: 16,
      fontSize: 16,
      color: 'white',
      marginVertical: 10
  
    },
    button : {
      width: 150,
      backgroundColor: 'rgba(255, 255, 255, 0.3)',
      marginVertical: 10,
      borderRadius: 25,
    },
    buttonText: {
      fontSize: 16,
      color: 'white',
      textAlign: 'center'
    },
    question : {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row'
    },
    textQ: {
      color: 'rgba(255, 255, 255, 0.5)'
    },
    textS: {
      color: 'white',
      paddingHorizontal: 10
    },
 
  });