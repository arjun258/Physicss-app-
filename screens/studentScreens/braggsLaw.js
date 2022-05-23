import { Text, StyleSheet, View, Image, ScrollView, SafeAreaView, Platform, StatusBar, TouchableOpacity, Linking} from 'react-native'
import React, { Component } from 'react'

import { RFValue } from "react-native-responsive-fontsize";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import Ionicons from 'react-native-vector-icons/Ionicons';

let customFonts = {
    "Bubblegum-Sans": require("../fonts/BubblegumSans-Regular.ttf")
  };

export default class BraggsLaw extends Component {
   constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false,
       speakerIcon: 'volume-high-outline',
     
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
                  
  <Image style={{width:100,height:100,borderRadius:50}}source={require("./images/220px-Wl-bragg.jpg")}/>
        <Text style={styles.ohmsLawText}>Braggs Law</Text>
        </View>
        
        
       
        <Text style={styles.normalText}> Bragg’s law is a special case of Laue diffraction, which determines the angles of coherent and incoherent scattering from a crystal lattice. When X-rays are incident on a particular atom, they make an electronic cloud move like an electromagnetic wave. The movement of these charges radiates waves again with similar frequency, slightly blurred due to different effects, and this phenomenon is known as Rayleigh scattering. Basically, the law explains the relationship between an x-ray light shooting and its reflection off from a crystal surface. 
        </Text>
  

        <Text style={styles.headingText}> Bragg Equation</Text>
<Text style={styles.normalText}> 
According to Bragg Equation:

nλ = 2d sinΘ

Therefore, according to the derivation of Bragg’s Law:

The equation explains why the faces of crystals reflect X-ray beams at particular angles of incidence (Θ, λ).
The variable d indicates the distance between the atomic layers, and the variable Lambda specifies the wavelength of the incident X-ray beam.
n as an integer.</Text>

<Image style={styles.electricImage} source={require("./images/Braggs-Law.png")}/>

 <Text style={styles.normalText}> This observation illustrates the X-ray wave interface, called X-ray diffraction (XRD) and proof for the atomic structure of crystals.

Bragg was also awarded the Nobel Prize in Physics for identifying crystal structures starting with NaCl, ZnS, and diamond. In addition, to understand the structure of every state of matter by any beam, e.g., ions, protons, electrons, neutrons, with a wavelength similar to the length between the molecular structures, diffraction was developed.
        </Text>
  



<View style={{justifyContent:"center",flex:0.5}}>
        <TouchableOpacity style={{backgroundColor:"red",marginTop:10,width:RFValue(80),height:RFValue(40),borderRadius:30,alignSelf:"center",alignItems:"center"}}
            onPress={ ()=> Linking.openURL('https://pmeuih.csb.app/') }>
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
    height:200,
    resizeMode:"contain",
    marginBottom:0,
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
    appIcon: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
  },

  }
  


  
);
