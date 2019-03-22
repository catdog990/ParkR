import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';




export default class HomeScreen extends React.Component {
  
  static navigationOptions = {
    title: 'Home Page',
  };

  render(){

      return(
          
        <View style={styles.container}>

          <View style={styles.searchContainer}>
          
           <TextInput 
              style={styles.userInput}
              placeholder='City or Town'
              underlineColorAndroid='rgba(0,0,0,0)'
            />


            <TouchableOpacity onPress={() => console.log("pressed that muhfuh")}><Text style={styles.buttonStyle}>Search</Text></TouchableOpacity>


          </View>

         
        </View>
      );
  
    };



};

const styles = StyleSheet.create({
  container : {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  userInput : {
    width:230,
    fontSize: 16,
    marginVertical: 10,
    marginHorizontal: 10,
    borderBottomWidth: 0.5,
    borderColor: '#d6d7da',

  },
  searchContainer : {
    flexDirection: 'row',
  },
  buttonStyle :{
    backgroundColor: '#00bfff',
    color: 'white',
    fontSize: 17,
    padding: 8,
    borderRadius: 10,
  },

  
});
