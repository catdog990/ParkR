import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import { Card, ListItem, Button, Icon, Header } from 'react-native-elements'



export default class HomeScreen extends React.Component {
  
  static navigationOptions = {
    title: 'Home Page',
  };



  render(){

      return(
          
        <View  style={styles.container}>

          <Header 
            leftComponent={{ icon: 'menu', color: '#fff' }}
            centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
            rightComponent={{ icon: 'home', color: '#fff' }}
          />

          <View style={styles.searchContainer}>
          
           <TextInput 
              style={styles.userInput}
              placeholder='City or Town'
              underlineColorAndroid='rgba(0,0,0,0)'
            />


            <TouchableOpacity onPress={() => console.log("pressed that muhfuh")}><Text style={styles.buttonStyle}>Search</Text></TouchableOpacity>


          </View>

        <ScrollView>
          <Card
            
            title='HELLO WORLD'
            image={require('../assets/images/derp.png')}>
            <Text style={{marginBottom: 10}}>
              Derpaderpapderpaderpaderpaderpaderpaderpa.
            </Text>
            <Button
              icon={<Icon name='code' color='#ffffff' />}
              backgroundColor='#03A9F4'
              buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
              title='Info' />
          </Card>

          <Card
            
            title='HELLO WORLD'
            image={require('../assets/images/derp.png')}>
            <Text style={{marginBottom: 10}}>
              Derpaderpapderpaderpaderpaderpaderpaderpa.
            </Text>
            <Button
              icon={<Icon name='code' color='#ffffff' />}
              backgroundColor='#03A9F4'
              buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
              title='Info' />
          </Card>
          
          <Card
            
            title='HELLO WORLD'
            image={require('../assets/images/derp.png')}>
            <Text style={{marginBottom: 10}}>
              Derpaderpapderpaderpaderpaderpaderpaderpa.
            </Text>
            <Button
              icon={<Icon name='code' color='#ffffff' />}
              backgroundColor='#03A9F4'
              buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
              title='Info' />
          </Card>

        </ScrollView>

         
        </View>
      );
  
    };



};

const styles = StyleSheet.create({
  container : {
    flex: 1,
    alignItems: 'center',
   
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
    padding: 8,
  },
  buttonStyle :{
    backgroundColor: '#00bfff',
    color: 'white',
    fontSize: 17,
    padding: 8,
    borderRadius: 10,
  },

  
});
