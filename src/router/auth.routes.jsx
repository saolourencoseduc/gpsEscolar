import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import FormCadastro from '../pages/formulario'
import CasaCadastro from '../pages/casa'
import EscolaCadastro from '../pages/escola'
import Home from '../pages/home/home'

export function AuthRoutes() {
  const AppStack = createStackNavigator()
  return (
  <AppStack.Navigator>
    <AppStack.Screen name="fomulario" component={FormCadastro}/>
    <AppStack.Screen name="CasaCadastro" component={CasaCadastro}/>
    <AppStack.Screen name="EscolaCadastro" component={EscolaCadastro}/>
  </AppStack.Navigator>
  )
}

