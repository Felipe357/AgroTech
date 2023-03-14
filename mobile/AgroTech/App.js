import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
// import { MaterialCommunityIcons, AntDesign, Octicons, FontAwesome } from '@expo/vector-icons';
// import 'react-native-gesture-handler';

import login from './pages/login'
import gerencial from './pages/gerencial'

const Stack = createNativeStackNavigator();

// const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={login} options={{ headerShown: false }} />
        <Stack.Screen name="Gerencial" component={gerencial} options={{ headerShown: false }} />
      {/* <Stack.Screen name="Comentarios" component={Comentarios} />
      <Stack.Screen name="Cadastro" component={CadastraComment} />
      <Stack.Screen name="Answer" component={CadastraAnswer} />  */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
