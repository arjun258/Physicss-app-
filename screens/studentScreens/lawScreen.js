import React, { Component } from "react";
import { Text, StyleSheet, View, ImageBackground,TouchableOpacity, SafeAreaView, Platform, StatusBar } from "react-native";


import { RFValue } from "react-native-responsive-fontsize";
import StackNavigator from "../../navigation/stackNavigator";

import * as Font from "expo-font";
import AppLoading from "expo-app-loading";

let customFonts = {
    "Bubblegum-Sans": require("../fonts/BubblegumSans-Regular.ttf")
  };




export default class LawScreens extends Component {
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
    } else {
    return (
      <View style={styles.container}>
 <SafeAreaView style={styles.droidSafeArea} />
<ImageBackground source={require('./background.jpg')}  style={styles.image}>     
    


        <Text style={styles.headingText}>Laws</Text>

        <TouchableOpacity style={[styles.law2, {marginTop:RFValue(40)}]}
           onPress={() => (this.props.navigation.navigate('ohmsLaw'))}>
          <Text style={styles.googleText}>Ohms Law</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.law2}
           onPress={() => (this.props.navigation.navigate('colulombsLaw'))}>
          <Text style={styles.googleText}>Coulombs Law</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.law2}
           onPress={() => (this.props.navigation.navigate('hubblesLaw'))}>
          <Text style={styles.googleText}>Hubbles Law</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.law2}
           onPress={() => (this.props.navigation.navigate('gaussLaw'))}>
          <Text style={styles.googleText}>Gauss Law</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.law2}
           onPress={() => (this.props.navigation.navigate('braggsLaw'))}>
          <Text style={styles.googleText}>Braggs Law</Text>
        </TouchableOpacity>
      </ImageBackground>

    
      </View>
    );
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
  headingText: {
   
    fontSize: RFValue(40),
    alignItems: "center",
    alignSelf: "center",
    fontFamily: "Bubblegum-Sans",
    color:"black",
    textDecorationLine: 'underline'
    
  },
    container: {
    flex: 1,
  },
  image: {
    flex: 1,
    
    resizeMode:"cover",            
  },
   droidSafeArea: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
  },


  
});
