import React from 'react';
import { Header } from 'react-native-elements'
import { StyleSheet } from 'react-native'



export default class Header extends React.Component{

    render(){

        return(
            
            <Header
            leftComponent={{ icon: 'menu', color: '#fff' }}
            centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
            rightComponent={{ icon: 'home', color: '#fff' }}
            />
        );
    };


};