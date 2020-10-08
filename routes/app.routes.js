import 'react-native-gesture-handler';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Tarefas from '../tarefas';
import Usuario from '../usuario';
import Empresa from '../empresa';
import Login from '../login';


const Tab = createBottomTabNavigator();

const AppRoutes = () => {
  return (
    <Tab.Navigator
      initialRouteName="Usuario"
      tabBarOptions={
        {
          activeTintColor: 'tomato',
          inactiveTintColor: '#ccc'
        }
      }>
      <Tab.Screen
        name="Tarefas"
        component={Tarefas}
        options={
          {
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="playlist-check"
                color={color}
                size={32} />
            )
          }
        } />
      <Tab.Screen
        name="Usuario"
        component={Usuario}
        options={
          {
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="view-usuario"
                color={color}
                size={32} />
            )
          }
        } />

<Tab.Screen
        name="Empresa"
        component={Empresa}
        options={
          {
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="view-usuario"
                color={color}
                size={32} />
            )
          }
        } />

<Tab.Screen
        name="Login"
        component={Login}
        options={
          {
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="view-usuario"
                color={color}
                size={32} />
            )
          }
        } />
    </Tab.Navigator>
  )
}

export default AppRoutes;