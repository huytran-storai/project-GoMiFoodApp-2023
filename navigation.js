import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import { View, Text } from 'react-native';
import React from 'react';
import HomeScreen from './screens/HomeScreen';
import RestaurantScreen from './screens/RestaurantScreen';
import CartScreen from './screens/CartScreen';
import OrderPrepairing from './screens/OrderPrepairingScreen';
import DeliveryScreen from './screens/DeliveryScreen';
import Intro from './screens/Intro'

export default function Navigation(){
    return (
        <NavigationContainer >
            <Stack.Navigator initialRouteName="Intro" screenOptions={{
                headerShown: false
            }}>
            <Stack.Screen name="Intro" component={Intro} />
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Restaurant" component={RestaurantScreen} />
            <Stack.Screen name="Cart" options={{presentation: 'modal'}} component={CartScreen} />
            <Stack.Screen name="OrderPrepairing" options={{presentation: 'fullScreenModal'}} component={OrderPrepairing} />
            <Stack.Screen name="Delivery" options={{presentation: 'fullScreenModal'}} component={DeliveryScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}