import React, { Component } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import stackNavigator from "./stackNavigator"
import Leaderboard from "../screens/studentScreens/leaderboard"




const Drawer = createDrawerNavigator();

export default class drawerNavigator extends Component {
 


  render() {
    let props = this.props;
    return (
      <Drawer.Navigator
        drawerContentOptions={{
          activeTintColor: "#e91e63",
          inactiveTintColor: this.state.light_theme ? "white" : "#1e4ae9",
          itemStyle: { marginVertical: 5 }
        }}
     
      >
        <Drawer.Screen
          name="Leaderboard"
          component={Leaderboard}
          options={{ unmountOnBlur: true }}
        />
       
      </Drawer.Navigator>
    );
  }
}
