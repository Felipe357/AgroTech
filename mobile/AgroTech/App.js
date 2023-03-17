import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';
import 'react-native-gesture-handler';

import login from './pages/login'
import manutencao from './pages/manutencao'
import operacao from './pages/operacao'

const Stack = createNativeStackNavigator();

const Tab = createMaterialBottomTabNavigator();

function TelaGerencial() {
  return (
    <Tab.Navigator screenOptions={{headerStyle: {backgroundColor: '#002647', borderBottomColor: '#002647'}, tabBarStyle:{backgroundColor: '#002647'}, tabBarActiveTintColor:'white', tabBarInactiveTintColor:'rgba(255,255,255,.5)', tabBarLabel:""}}
      initialRouteName="Feed"
    >
      <Tab.Screen
        name="Feed"
        component={manutencao}
        options={{
          tabBarLabel: 'Manutenções',
          tabBarIcon: () => (
            <MaterialCommunityIcons name="tools" color={"#000"} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Publicar"
        component={operacao}
        options={{
          tabBarLabel: "Operações",
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="hard-hat" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}


export default function App() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={login} options={{ headerShown: false }} />
        <Stack.Screen options={{headerTitleStyle: {color: '#ffffff'}, headerShown: false}} name="Home" component={TelaGerencial}  />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
