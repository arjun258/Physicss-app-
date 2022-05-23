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
  <Image style={{width:100,height:100,borderRadius:50}}source={require("./images/gauss law inventor.jpg")}/>
        <Text style={styles.ohmsLawText}>Gauss Law</Text>
        </View>
        
        
       
        <Text style={styles.normalText}> In physics and electromagnetism, Gauss's law, also known as Gauss's flux theorem, is a law relating the distribution of electric charge to the resulting electric field.  
        </Text>
        <Image style={styles.ohmsImage} source={require("./images/gauss law.jpg")}/>

        <Text style={styles.headingText}> Gauss Law Formula </Text>
<Text style={styles.normalText}> 
As per the Gauss theorem, the total charge enclosed in a closed surface is proportional to the total flux enclosed by the surface. Therefore, if ϕ is total flux and ϵ0 is electric constant, the total electric charge Q enclosed by the surface is;

Q = ϕ ϵ0

The Gauss law formula is expressed by;

ϕ = Q/ϵ0

Where,

Q = total charge within the given surface,

ε0 = the electric constant.
 </Text>

 
        <Text style={styles.headingText}>The Gauss Theorem </Text>
<Text style={styles.normalText}> 
The net flux through a closed surface is directly proportional to the net charge in the volume enclosed by the closed surface.

Φ = → E.d → A = qnet/ε0

In simple words, the Gauss theorem relates the ‘flow’ of electric field lines (flux) to the charges within the enclosed surface. If there are no charges enclosed by a surface, then the net electric flux remains zero.

This means that the number of electric field lines entering the surface is equal to the field lines leaving the surface.

The Gauss theorem statement also gives an important corollary:

The electric flux from any closed surface is only due to the sources (positive charges) and sinks (negative charges) of electric fields enclosed by the surface. Any charges outside the surface do not contribute to the electric flux. Also, only electric charges can act as sources or sinks of electric fields. Changing magnetic fields, for example, cannot act as sources or sinks of electric fields.


 </Text>
<Image style={styles.electricImage} source={require("./images/gaus law theorem.png")}/>

<View style={{justifyContent:"center",flex:0.5}}>
        <TouchableOpacity style={{backgroundColor:"red",marginTop:-400,width:RFValue(80),height:RFValue(40),borderRadius:30,alignSelf:"center",alignItems:"center"}}
         onPress={ ()=> Linking.openURL('https://h41yyu.csb.app/') }>
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
    backgroundColor:"red",
  
    borderRadius: RFValue(20),
 
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
     width:300,
    height:300,
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

  }
  


  
);
