import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { createDrawerNavigator } from 'react-navigation';

import HomeScreen from './HomeScreen';

const AppDrawerNavigator = createDrawerNavigator({
    HomeScreen: { screen: HomeScreen,
                    navigationOptions:{
                        header:null,
                    },
                },
});

export default AppDrawerNavigator;

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
});