import React from 'react'
import { Text, View, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { themeColors } from '../theme';
import { TouchableOpacity } from 'react-native';
import * as Icon from "react-native-feather";
import { useDispatch, useSelector } from 'react-redux';
import { selectRestaurant } from '../slice/restaurantSlice';
import { emptyCart } from '../slice/cartSlice';


export default function DeliveryScreen() {
    const restaurant = useSelector(selectRestaurant)
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const cancelOrder = () => {
        navigation.navigate('HomeTabs');
        dispatch(emptyCart());
    }
    return (
        <View className="flex-1">
            <Image className="flex-1" source={require('../assets/images/mapDeliveryFood.jpg')} />
            <View className="rounded-t-3xl -mt-12 bg-white relative">
                <View className="flex-row justify-between px-5 pt-10">
                    <View>
                        <Text className="text-lg text-gray-700 font-semibold">
                            Estimated Arrival
                        </Text>
                        <Text className="text-3xl font-extrabold text-gray-700">
                            20-30 Minutes
                        </Text>
                        <Text className="mt-2 text-gray-700 font-semibold">
                            Your order is own its way!
                        </Text>
                    </View>
                    <Image className="w-24 h-24" source={require('../assets/images/bikeGuy2.gif')} />
                </View>
                <View style={{ backgroundColor: themeColors.bgColor(0.8) }} className="p-2 flex-row justify-between items-center rounded-full my-5 mx-2">
                    <View className="p-1 rounded-full" style={{ backgroundColor: 'rgba(255,255,255,0.4)' }}>
                        <Image className="h-16 w-16 rounded-full" source={require('../assets/images/deliveryGuy.png')} />
                    </View>
                    <View className="flex-1 ml-3">
                        <Text className="text-lg font-bold text-white">
                            Hao Phan
                        </Text>
                        <Text className="font-semibold text-white">
                            Your Rider
                        </Text>
                    </View>
                    <View className="flex-row items-center space-x-3 mr-3">
                        <TouchableOpacity className="bg-white p-2 rounded-full">
                            <Icon.Phone fill={themeColors.bgColor(1)} stroke={themeColors.bgColor(1)} strokeWidth={1} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={cancelOrder} className="bg-white p-2 rounded-full">
                            <Icon.X stroke={'red'} strokeWidth={4} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}