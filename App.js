import * as React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PrincipalTela from './telas/PrincipalTela';
import HistoricoTela from './telas/HistoricoTela';

export default function App() {
  const Tab = createBottomTabNavigator()
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Principal" component={PrincipalTela} />
        <Tab.Screen name="Historico" component={HistoricoTela} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}


