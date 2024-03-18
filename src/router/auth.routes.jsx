import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import FormCadastro from '../pages/formulario'
import Home from '../pages/home/home'

export function AuthRoutes() {
  const AppStack = createStackNavigator()
  return (
  <AppStack.Navigator>
    <AppStack.Screen name="fomulario" component={FormCadastro}/>
  </AppStack.Navigator>
  )
}

