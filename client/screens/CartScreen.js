import React, { useState } from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { featured } from '../constants'
import * as Icon from "react-native-feather";
import { themeColors } from '../theme';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { selectRestaurant } from '../slice/restaurantSlice';
import { removeFromCart, selectCart, selectCartTotal, emptyCart } from '../slice/cartSlice';
import { useEffect } from 'react';

export default function CartScreen() {
    const restaurant = useSelector(selectRestaurant)
    const navigation = useNavigation();
    const cartItems = useSelector(selectCart);
    const cartTotal = useSelector(selectCartTotal);
    const [groupedItems, setGroupedItems] = useState({});
    const deliveryFee = 15000;
    const dispatch = useDispatch();

    useEffect(() => {
        const items = cartItems.reduce((group, item) => {
            if (group[item.id]) {
                group[item.id].push(item);
            } else {
                group[item.id] = [item];
            }
            return group;
        }, {})
        if (cartItems.length === 0) {
            navigation.goBack();
        }
        setGroupedItems(items);
    }, [cartItems, navigation])
    return (
        <View className="bg-white flex-1">
            {/* back button */}
            <View className="relative py-4 shadow-sm">
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={{ backgroundColor: themeColors.bgColor(1) }}
                    className="absolute z-10 rounded-full p-1 shadow top-5 left-2">
                    <Icon.ArrowLeft strokeWidth={3} stroke="white" />
                </TouchableOpacity>
                <View>
                    <Text className="text-center font-bold text-xl">Your cart</Text>
                    <Text className="text-center text-gray-500">{restaurant.name}</Text>
                </View>
            </View>
            {/* delivery time */}
            <View style={{ backgroundColor: themeColors.bgColor(0.2) }}
                className="flex-row px-4 items-center mb-5">
                <Image source={require('../assets/images/Rectangle.jpg')} className="w-20 h-49 m-1 rounded-full" />
                <Text className="flex-1 pl-4">**4393</Text>
                <TouchableOpacity>
                    <Text className="font-bold" style={{ color: themeColors.text }}>
                        Change
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={{ backgroundColor: themeColors.bgColor(0.2) }}
                className="flex-row px-4 items-center">
                <Image source={require('../assets/images/bikeGuy.png')} className="w-20 h-20 rounded-full" />
                <Text className="flex-1 pl-4">Địa chỉ của bạn: 109/23 Quang Trung, phường 12, Gò Vấp, Tphcm</Text>
                <TouchableOpacity>
                    <Text className="font-bold" style={{ color: themeColors.text }}>
                        Change
                    </Text>
                </TouchableOpacity>
                
            </View>
            {/* dishes */}
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingBottom: 50
                }}
                className="bg-white pt-5">
                {
                    Object.entries(groupedItems).map(([key, items]) => {
                        let dish = items[0];
                        return (
                            <View key={key}
                                className="flex-row items-center space-x-3 py-2 px-4 bg-slate-50 rounded-2xl mx-2 mb-3 shadow-lg shadow-black">
                                <Text className="font-bold" style={{ color: themeColors.text }}>
                                    {items.length} x
                                </Text>
                                <Image className="h-14 w-14 rounded-full" source={dish.image} />
                                <Text className="flex-1 font-bold text-gray-700">{dish.name}</Text>
                                <Text className="font-semibold text-base">${dish.price}</Text>
                                <TouchableOpacity className="p-1 rounded-full"
                                    onPress={() => dispatch(removeFromCart({ id: dish.id }))}
                                    style={{ backgroundColor: themeColors.bgColor(1) }}>
                                    <Icon.Minus strokeWidth={2} height={20}
                                        width={20} stroke="white" />
                                </TouchableOpacity>
                            </View>
                        )
                    })
                }
            </ScrollView>
            {/* totals */}
            <View style={{ backgroundColor: themeColors.bgColor(0.2) }} className="p-6 px-8 rounded-t-3xl space-y-4">
                <View className="flex-row justify-between">
                    <Text className="text-gray-700 text-base">Subtotal</Text>
                    <Text className="text-gray-700 text-base">${cartTotal}</Text>
                </View>
                <View className="flex-row justify-between">
                    <Text className="text-gray-700 text-base">Delivery Fee</Text>
                    <Text className="text-gray-700 text-base">${deliveryFee}</Text>
                </View>
                <View className="border-b"></View>
                <View className="flex-row justify-between">
                    <Text className="text-gray-900 font-extrabold text-base">Order Total</Text>
                    <Text className="text-gray-900 font-extrabold text-base">${deliveryFee + cartTotal}</Text>
                </View>
                <View>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('OrderPrepairing')}
                        style={{ backgroundColor: themeColors.bgColor(1) }}
                        className="p-3 rounded-full">
                        <Text className="text-white text-center font-bold text-2xl">
                            Order Now
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}