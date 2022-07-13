import React, {useState,useEffect} from 'react';
import { Text, View, Button, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Src/Home';
import Menu from './Src/Menu';
import Agua from './Src/Agua';
import Calorias from './Src/Calorias';
import Imc from './Src/Imc';
import Calculo1 from './Src/Telas_Carbo/Calculo1'
import Calculo2 from './Src/Telas_Carbo/Calculo2'

export default function App() {

  const Stack = createStackNavigator();

  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home}
           options={{title:'Bem-Vindo', 
           headerTitleAlign:'center', 
           headerTintColor:'#111', 
           headerStyle:{backgroundColor:'#fdfffc'}}}
           />

          <Stack.Screen name="Menu" component={Menu}
           options={{title:'Menu', 
           headerTitleAlign:'center', 
           headerTintColor:'#111', 
           headerStyle:{backgroundColor:'#fbfbff'}}}
           />

          <Stack.Screen name="Agua" component={Agua}
           options={{title:'Calculo de Água', 
           headerTitleAlign:'center', 
           headerTintColor:'#111', 
           headerStyle:{backgroundColor:'#fff'}}}
           />

          <Stack.Screen name="Imc" component={Imc}
           options={{title:'Índice de massa corporal', 
           headerTitleAlign:'center', 
           headerTintColor:'#111', 
           headerStyle:{backgroundColor:'#fff'}}}
           />

          <Stack.Screen name="Calorias" component={Calorias}
           options={{title:'Carbidrato', 
           headerTitleAlign:'center', 
           headerTintColor:'#111', 
           headerStyle:{backgroundColor:'#f5dfbb'}}}
           />

          <Stack.Screen name="Calculo1" component={Calculo1}
           options={{title:'Carbidrato', 
           headerTitleAlign:'center', 
           headerTintColor:'#111', 
           headerStyle:{backgroundColor:'#f5dfbb'}}}
           />

          <Stack.Screen name="Calculo2" component={Calculo2}
           options={{title:'Carbidrato', 
           headerTitleAlign:'center', 
           headerTintColor:'#111', 
           headerStyle:{backgroundColor:'#f5dfbb'}}}
           />
        </Stack.Navigator>
      </NavigationContainer>
  );
}