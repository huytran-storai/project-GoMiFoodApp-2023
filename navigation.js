import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
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
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeIcon } from 'react-native-heroicons/solid';
import { ShoppingCartIcon } from 'react-native-heroicons/solid';
import { UserIcon } from 'react-native-heroicons/solid';
import { HeartIcon } from 'react-native-heroicons/solid';
import useAuth from './hooks/useAuth';
const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: {
                    backgroundColor: '#FFFFFF',
                    borderTopColor: '#E5E5E5',
                    borderTopWidth: 1,
                },
                tabBarShowLabel: true,
                tabBarActiveTintColor: '#429f9e',
                tabBarInactiveTintColor: 'gray',
            }}
        >
            <Tab.Screen
                name="Trang chủ"
                component={HomeScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <HomeIcon name="home" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Giỏ hàng"
                component={TutorialScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <ShoppingCartIcon name="cart" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Thích"
                component={TutorialScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <HeartIcon name="favorite" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Tôi"
                component={TutorialScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <UserIcon name="profile" color={color} size={size} />
                    ),
                }}
            />

        </Tab.Navigator>
    );
}
export default function Navigation() {
    const { user } = useAuth();

    if (user) {
        return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home" screenOptions={{
                    headerShown: false
                }}>
                    <Stack.Screen name="HomeTabs" component={MyTabs} />
                    <Stack.Screen name="Restaurant" component={RestaurantScreen} />
                    <Stack.Screen name="Cart" options={{ presentation: 'modal' }} component={CartScreen} />
                    <Stack.Screen name="OrderPrepairing" options={{ presentation: 'fullScreenModal' }} component={OrderPrepairing} />
                    <Stack.Screen name="Delivery" options={{ presentation: 'fullScreenModal' }} component={DeliveryScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        )
    } else {
        return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Welcome" screenOptions={{
                    headerShown: false
                }}>
                    <Stack.Screen name="Intro" component={Intro} />
                    <Stack.Screen name="Tutorial" component={TutorialScreen} />
                    <Stack.Screen name='SignUp' component={SignUpScreen} />
                    <Stack.Screen name="Login" component={LoginScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}