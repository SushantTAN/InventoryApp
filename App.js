/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';


import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import List from './App/components/templates/list';
import Create from './App/components/templates/create';
import Detail from './App/components/templates/details';

const Stack = createStackNavigator();


const App = () => {


  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="List" component={List} />
        <Stack.Screen name="Create" component={Create} />
        <Stack.Screen name="Detail" component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
