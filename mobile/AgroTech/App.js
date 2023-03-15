import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons, AntDesign, Octicons, FontAwesome } from '@expo/vector-icons';
import 'react-native-gesture-handler';

import login from './pages/login'
import manutencao from './pages/manutencao'
import operacao from './pages/operacao'

const Stack = createNativeStackNavigator();

const Tab = createMaterialBottomTabNavigator();

function TelaGerencial() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      activeColor="#1798ff"
      labelStyle={{ color: "#fff" }}
      barStyle={{
        backgroundColor: '#f1f6fa'
      }}
    >
      <Tab.Screen
        name="Feed"
        component={manutencao}
        options={{
          tabBarLabel: 'Manutenções',
          tabBarIcon: () => (
            <Octicons name="feed-discussion" color={"#1798ff"} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Publicar"
        component={operacao}
        options={{
          tabBarLabel: "Operações",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="plus" color={color} size={24} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}


export default function App() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator
        screenOptions={{
          tabBarActiveBackgroundColor: '#00bfff', // defina aqui a cor desejada
        }}>
        {/* <Stack.Screen name="Login" component={login} options={{ headerShown: false }} /> */}
        <Stack.Screen name="Gerencial" component={TelaGerencial} options={{ headerShown: false }} />
        {/* <Stack.Screen name="Comentarios" component={Comentarios} />
      <Stack.Screen name="Cadastro" component={CadastraComment} />
      <Stack.Screen name="Answer" component={CadastraAnswer} />  */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
