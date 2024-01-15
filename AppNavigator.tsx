import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Cart, Categories, Favourite, Home, More, ProductDetails } from './src/screens';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const BottomTabNavigator = ()=>{
    return (
        <Tab.Navigator initialRouteName='Home'>
            <Tab.Screen name='Home' component={Home} options={{headerShown:false}}/>
            <Tab.Screen name='Category' component={Categories}/>
            <Tab.Screen name='Favourite' component={Favourite}/>
            <Tab.Screen name='More' component={More}/>
        </Tab.Navigator>
    )
}
const AppNavigator = () => {
  return (
    <NavigationContainer >
        <Stack.Navigator initialRouteName='BottomTab'>
            <Stack.Screen name='BottomTab'component={BottomTabNavigator} options={{headerShown:false}}/>
            <Stack.Screen name='ProductDetails' component={ProductDetails} />
            <Stack.Screen name='Cart' component={Cart}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator