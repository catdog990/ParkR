import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';


export default class OtherScreen extends React.Component {
 
  static navigationOptions = {
    title: 'Other',
  };

  render(){

      return(
          <View style={styles.container}>
            <Text style={styles.userInput}>Just a Test muhfucka!</Text>
          </View>
            
      );
  
    };



};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
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
  
});
