


import React, { Component } from "react";
import { Text, StyleSheet, View, ImageBackground,TouchableOpacity, SafeAreaView, Platform, StatusBar } from "react-native";

import { RFValue } from "react-native-responsive-fontsize";

import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import Ionicons from 'react-native-vector-icons/Ionicons';
let customFonts = {
    "Bubblegum-Sans": require("../screens/fonts/BubblegumSans-Regular.ttf")
  };




export default class ohmsQuiz extends Component {
   constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false,
     
    };
  }

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
    
  }
  render() {
    if (!this.state.fontsLoaded) {
      return <AppLoading />;
    } 
   else{
     return(
       
       <View> 
       <SafeAreaView style={styles.droidSafeArea} />
               <TouchableOpacity onPress={() => (this.props.navigation.navigate('braggsLaw'))}>
                      <Ionicons
                      style={{marginLeft:10, marginTop:10}}
                    name={'caret-back-outline'}
                    size={RFValue(30)}/>
                    
</TouchableOpacity>
<ImageBackground style={styles. image} source={require('../screens/studentScreens/background.jpg')}   />
       <Text style={styles.headingText}>Hubbles Quiz </Text> 

       </View>
     )
   }
  
    
    }
}




  const styles = StyleSheet.create({
  studentButton: {
    width: RFValue(250),
    height: RFValue(50),
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    alignSelf: "left",
    borderRadius: RFValue(30),
    backgroundColor: "",
    marginTop:100,
    

    
  },
  googleText: {
    color: "black",
    fontSize: RFValue(25),
    alignItems: "center",
    fontFamily: "Bubblegum-Sans",
  },
  law2:{
    width: RFValue(250),
    height: RFValue(50),
    backgroundColor:"red",
  
    borderRadius: RFValue(20),
 
  },
  headingText: {
   
    fontSize: RFValue(30),
    alignItems: "center",
    marginTop:-50,
    fontFamily: "Bubblegum-Sans",
    color:"black",
    marginLeft:90,
    
  },
    container: {
    flex: 1,
  },
  image: {
    flex: 1,
    
    resizeMode:"cover",            
  },
  scrollView:{
     backgroundColor: 'pink',
    fontFamily: "Bubblegum-Sans",
    color:"black",
    marginHorizontal: 20,
    fontSize:30,
    marginTop:30,
    flex:1,
  },
  ohmsImage:{
    width:280,
    height:280,
    resizeMode:"contain"
  },
  normalText:{
    color: "black",
    fontSize: RFValue(20),
    alignItems: "center",
    fontFamily: "Bubblegum-Sans",
  },
  electricImage:{
     width:380,
    height:250,
    resizeMode:"contain",
    marginBottom:200,
    marginTop:0,
  },
    ohmsLawText:{
           fontSize: RFValue(30),
    alignItems: "center",
    marginTop:30,
    fontFamily: "Bubblegum-Sans",
    color:"black",
    marginBottom:30
    },
    droidSafeArea:{
       marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
    },
    googleText: {
    color: "black",
    fontSize: RFValue(30),
    alignItems: "center",
    fontFamily: "Bubblegum-Sans",
  },
  law2:{
    width: RFValue(250),
    height: RFValue(50),
    flexDirection: "row",
    alignItems: "center",
    borderRadius: RFValue(20),
  
    alignSelf: "center",
  
  },
   image: {
    flex: 1,
    
    resizeMode:"cover",            
  },
   droidSafeArea: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
  },

  
})