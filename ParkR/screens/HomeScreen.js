import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';


export default class HomeScreen extends React.Component {
  
  static navigationOptions = {
    title: 'Home Page',
  };

  render(){

      return(
          <View style={styles.container}>
            <Text style={styles.text}>Just a Test good sir!</Text>
          </View>
            
      );
  
    };



};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    flex: 1, 
    fontSize: 20,
    paddingVertical: 30,
  }

  
});
