


import React, { Component } from "react";

import  styles from "./quizCode/styles.css"
import Header from "./quizCode/Header";
import Quiz from "./quizCode/Quiz";
import StackNavigator from './navigation/stackNavigator';
import { NavigationContainer } from  '@react-navigation/native';





export default class App extends Component {
  render() {
    return (
        <NavigationContainer>
      <StackNavigator/>
    </NavigationContainer>


    
      
    )
  }
}
