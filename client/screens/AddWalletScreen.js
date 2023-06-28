import {SafeAreaView,Dimensions, TouchableOpacity, View, Text, TextInput, Image, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react' 
import { useNavigation } from '@react-navigation/native'
import DropDownPicker from 'react-native-dropdown-picker';
const { width, height } = Dimensions.get('window');
export default function AddWalletScreen(){
    const navigation = useNavigation();
    const goToTermOfService = () => {
        navigation.navigate('Login');
    }
    const goToProfileUserScreen = () => {
        navigation.navigate('HomeTabs');
    }
return(
    <SafeAreaView className="bg-teal-500s">

    </SafeAreaView>
)
}