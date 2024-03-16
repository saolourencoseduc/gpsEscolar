import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../pages/home/home'
import CadastroScreen from '../pages/cadastro/Cadastro'

function AppRoutes() {
  const AppStack = createStackNavigator()
  return (
    <AppStack.Navigator initialRouteName={"Home"}>
      <AppStack.Screen name="Home" component={Home}/>
      <AppStack.Screen name="Cadastro" component={CadastroScreen}/>
    </AppStack.Navigator>
  )
}

export default AppRoutes