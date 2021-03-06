import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/screens/Login'
import StartScreen from './src/screens/StartScreen';
import Registration from './src/screens/Registration';
import HomeScreen from './src/screens/Home';
import { RootSiblingParent } from 'react-native-root-siblings';

const AppStack = createNativeStackNavigator();


function App() {
  return (
    <RootSiblingParent>  
    <NavigationContainer>
      <AppStack.Navigator 
      initialRouteName='StartScreen'
      screenOptions={{headerShown: false}}
      >
        <AppStack.Screen name="StartScreen" component={StartScreen} />
        <AppStack.Screen name="LoginScreen" component={Login}/>
        <AppStack.Screen name="HomeScreen" component={HomeScreen}/>
        <AppStack.Screen name="Registration" component={Registration}/>

      </AppStack.Navigator>
    </NavigationContainer>
    </RootSiblingParent>
  );
}

export default App;