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
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
import TutorialScreen from './screens/TutorialScreen';
export default function Navigation() {
    return (
        <NavigationContainer >
            <Stack.Navigator initialRouteName="Intro" screenOptions={{
                headerShown: false
            }}>
                <Stack.Screen name="Login" component={LoginScreen}/>
                <Stack.Screen name='SignUp' component={SignUpScreen}/>
                <Stack.Screen name="Intro" component={Intro} />
                <Stack.Screen name="Tutorial" component={TutorialScreen}/>
                {/* <Stack.Screen name="Intro2" component={Intro2} />
                <Stack.Screen name="Intro3" component={Intro3} />
                <Stack.Screen name="Intro4" component={Intro4} />
                <Stack.Screen name="Intro5" component={Intro5} /> */}
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Restaurant" component={RestaurantScreen} />
                <Stack.Screen name="Cart" options={{ presentation: 'modal' }} component={CartScreen} />
                <Stack.Screen name="OrderPrepairing" options={{ presentation: 'fullScreenModal' }} component={OrderPrepairing} />
                <Stack.Screen name="Delivery" options={{ presentation: 'fullScreenModal' }} component={DeliveryScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}