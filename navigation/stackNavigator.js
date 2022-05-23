import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import lawScreen from "../screens/studentScreens/lawScreen";
import braggsLaw from "../screens/studentScreens/braggsLaw";
import coulombsLaw from "../screens/studentScreens/coulombsLaw";
import HubblesLaw from "../screens/studentScreens/HubblesLaw"
import gaussLaw from "../screens/studentScreens/gaussLaw";
import ohmsLaw from "../screens/studentScreens/ohmsLaw";
import ohmsQuiz from "../quizScreens/ohmsQuiz";
import braggsQuiz from "../quizScreens/braggsQuiz";
import gaussQuiz from "../quizScreens/gaussQuiz";
import hubblesQuiz from "../quizScreens/hubblesQuiz";
import coulombsQuiz from "../quizScreens/coulomsQuiz";


const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="lawScreen"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="lawScreen" component={lawScreen} />
<Stack.Screen name="braggsLaw" component={braggsLaw}/>
      <Stack.Screen name="hubblesLaw" component={HubblesLaw}/>
      <Stack.Screen name="colulombsLaw" component={coulombsLaw}/>
        <Stack.Screen name="gaussLaw" component={gaussLaw}/>
          <Stack.Screen name="ohmsLaw" component={ohmsLaw}/>
          <Stack.Screen name="ohmsQuiz" component={ohmsQuiz}/>
            <Stack.Screen name="gaussQuiz" component={gaussQuiz}/>
              <Stack.Screen name="coulombsQuiz" component={coulombsQuiz}/>
               <Stack.Screen name="braggsQuiz" component={braggsQuiz}/>
                 <Stack.Screen name="hubblesQuiz" component={hubblesQuiz}/>
 

    </Stack.Navigator>
  );
};  

export default StackNavigator;
