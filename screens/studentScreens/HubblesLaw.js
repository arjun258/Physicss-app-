import { Text, StyleSheet, View, Image, ScrollView, SafeAreaView, Platform, StatusBar, TouchableOpacity, Linking} from 'react-native'
import React, { Component } from 'react'

import { RFValue } from "react-native-responsive-fontsize";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import Ionicons from 'react-native-vector-icons/Ionicons';

let customFonts = {
    "Bubblegum-Sans": require("../fonts/BubblegumSans-Regular.ttf")
  };
export default class OhmsLaw extends Component {
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
      <ScrollView style={styles.scrollView}>
       <SafeAreaView style={styles.droidSafeArea} />
 <View style={{marginLeft:30,flexDirection:"row"}}>
  <TouchableOpacity onPress={() => (this.props.navigation.navigate('lawScreen'))}>
                      <Ionicons
                     style={{  marginLeft:-30 ,marginBottom:40}}
                    name={'caret-back-outline'}
                    size={RFValue(40)}/>
</TouchableOpacity>
  <Image style={{width:100,height:100,borderRadius:50}}source={require("./images/Studio_portrait_photograph_of_Edwin_Powell_Hubble_(cropped).jpg")}/>
        <Text style={styles.ohmsLawText}>Hubbles Law</Text>
        </View>
        <View>
        
       
        <Text style={styles.normalText}> Hubble's law, also known as the Hubble–Lemaître law or Lemaître's law, is the observation in physical cosmology that galaxies are moving away from Earth at speeds proportional to their distance. In other words, the farther they are the faster they are moving away from Earth.  
        </Text>
        <Image style={styles.ohmsImage} source={require("./images/hubbles image.png")}/>

 <Text style={styles.ohmsLawText}>Limitations Of Hubbles Law</Text>

     <Text style={styles.normalText}> 
By determining the shift in observed light into redshift in the spectrum, one can determine the distance of the galaxy from us using Hubble’s equation after measuring the recession velocity. Following are the limitations of Hubble’s law which makes the measurement challenges:

1) Because of the intrinsic motion of galaxies, observed velocity gets influenced...

2) Galaxy orbiting due to gravitational movements. 
        </Text>

       

        </View>

        <View style={{justifyContent:"center",flex:0.5}}>
        <TouchableOpacity style={{backgroundColor:"red",marginTop:20,width:RFValue(80),height:RFValue(40),borderRadius:30,alignSelf:"center",alignItems:"center"}}
             onPress={ ()=> Linking.openURL('https://izfhdu.csb.app/') }>
          <Text style={styles.googleText}>Quiz</Text>

        </TouchableOpacity>
</View>
      </ScrollView>

      

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
    fontSize: RFValue(25),
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
   
    fontSize: RFValue(30),
    alignItems: "center",
    marginTop:30,
    fontFamily: "Bubblegum-Sans",
    color:"black"
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
    }

  }
  


  
);
