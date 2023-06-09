import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import { View, Text } from 'react-native';
import React from 'react';
import HomeScreen from './screens/HomeScreen';
import RestaurantScreen from './screens/RestaurantScreen';
import Intro from './screens/Intro'
import Intro2 from './screens/Intro2';
import Intro3 from './screens/Intro3';
import Intro4 from './screens/Intro4';
import Intro5 from './screens/Intro5';

export default function Navigation(){
    return (
        <NavigationContainer >
            <Stack.Navigator initialRouteName="Intro" screenOptions={{
                headerShown: false
            }}>
            <Stack.Screen name="Intro" component={Intro} />
            <Stack.Screen name="Intro2" component={Intro2} />
            <Stack.Screen name="Intro3" component={Intro3} />
            <Stack.Screen name="Intro4" component={Intro4} />
            <Stack.Screen name="Intro5" component={Intro5} />
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Restaurant" component={RestaurantScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}