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
import { ListBulletIcon } from 'react-native-heroicons/solid';

import useAuth from './hooks/useAuth';

import ProfileUserScreen from './screens/ProfileUserScreen';
import MyWalletScreen from './screens/MyWalletScreen';
import AddWalletScreen from './screens/AddWalletScreen';
import HelpCenterScreen from './screens/HelpCenter'
import SettingScreen from './screens/SettingScreen'
import NotificationSetting from './screens/NotificationSetting'
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
                name="Danh mục"
                component={TutorialScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <ListBulletIcon name="favorite" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Tôi"
                component={ProfileUserScreen}
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
            <NavigationContainer >
                <Stack.Navigator initialRouteName="HomeTabs" screenOptions={{
                    headerShown: false
                }}>
                    <Stack.Screen name="HomeTabs" component={MyTabs} />
                    <Stack.Screen name="Restaurant" component={RestaurantScreen} />
                    <Stack.Screen name="Cart" options={{ presentation: 'modal' }} component={CartScreen} />
                    <Stack.Screen name="OrderPrepairing" options={{ presentation: 'fullScreenModal' }} component={OrderPrepairing} />
                    <Stack.Screen name="Delivery" options={{ presentation: 'fullScreenModal' }} component={DeliveryScreen} />
                    <Stack.Screen name="Notification" component={NotificationSetting}/>
                    <Stack.Screen name="Setting" component={SettingScreen}/>
                    <Stack.Screen name="Help" component={HelpCenterScreen}/>
                    <Stack.Screen name="AddWallet" component={AddWalletScreen}/>
                    <Stack.Screen name="Wallet" component={MyWalletScreen}/>
                </Stack.Navigator>
            </NavigationContainer>
        )
    } else {
        return (
            <NavigationContainer >
                <Stack.Navigator initialRouteName="Intro" screenOptions={{
                    headerShown: false
                }}>
                    <Stack.Screen name="Login" component={LoginScreen} />
                    <Stack.Screen name='SignUp' component={SignUpScreen} />
                    <Stack.Screen name="Tutorial" component={TutorialScreen} />
                    <Stack.Screen name="Intro" component={Intro} />
                </Stack.Navigator>
            </NavigationContainer>
        )
    }

    

}