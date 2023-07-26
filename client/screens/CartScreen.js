import React, { useState } from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View, TextInput, Alert } from 'react-native'
import * as Icon from "react-native-feather";
import { themeColors } from '../theme';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { selectRestaurant } from '../slice/restaurantSlice';
import { removeFromCart, selectCart, selectCartTotal, emptyCart, lengthCartTotal } from '../slice/cartSlice';
import { useMemo } from 'react';
import { urlFor } from "../sanity";

export default function CartScreen() {
    const dispatch = useDispatch();
    const restaurant = useSelector(selectRestaurant)
    const navigation = useNavigation();
    const cartItems = useSelector(selectCart);
    const cartTotal = useSelector(selectCartTotal);
    const [groupedItems, setGroupedItems] = useState({});

    const deliveryFee = {
        price: 15000
    };
    const formattedFeePrice = deliveryFee.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
    const formattedTotalPrice = cartTotal.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
    const feePriceNumber = parseInt(formattedFeePrice.replaceAll('.', '').replace('đ', ''));
    const totalPriceNumber = parseInt(formattedTotalPrice.replaceAll('.', '').replace('đ', ''));
    const totalNumber = feePriceNumber + totalPriceNumber;
    const total = totalNumber.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });

    const changePayment = () => {
        navigation.navigate('ChangePayment')
    }
    const changeNote = () =>{
        Alert.alert('Ghi chú thành công!', 'Cảm ơn bạn', [
            { text: 'OK', onPress: () => console.log('OK Pressed') },
        ]);
    }

    useMemo(() => {
        const items = cartItems.reduce((group, item) => {
            if (group[item._id]) {
                group[item._id].push(item);
            } else {
                group[item._id] = [item];
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
                    <Text className="text-center font-bold text-xl">Giỏ hàng</Text>
                    <Text className="text-center text-gray-500">{restaurant.name}</Text>
                </View>
            </View>
            {/* delivery time */}
            <View style={{ backgroundColor: themeColors.bgColor(0.2) }}
                className="flex-row px-4 items-center mb-5">
                <Image source={require('../assets/images/Rectangle.jpg')} className="w-20 h-49 m-1 rounded-full" />
                <Text className="flex-1 pl-4">**4393</Text>
                <TouchableOpacity onPress={changePayment}>
                    <Text className="font-bold" style={{ color: themeColors.text }}>
                        Thay đổi
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={{ backgroundColor: themeColors.bgColor(0.2) }}
                className="flex-row px-4 items-center">
                <Image source={require('../assets/images/bikeGuy.png')} className="w-20 h-20 rounded-full" />
                <Text className="flex-1 pl-4">Địa chỉ của bạn: 109/23 Quang Trung, phường 12, Gò Vấp, Tphcm</Text>
                <TouchableOpacity>
                    <Text className="font-bold" style={{ color: themeColors.text }}>
                        Thay đổi
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={{ backgroundColor: themeColors.bgColor(0.2) }}
                className="flex-row px-4 items-center mb-5 mt-5">
                <TextInput
                    className={`flex-1 p-8 bg-gray-100 text-gray-900 rounded-2xl pl-8`}
                    placeholder='Ghi chú của bạn.....'
                />
                <TouchableOpacity onPress={changeNote}>
                    <Text className="font-semibold ml-6" style={{ color: themeColors.text }}>
                        Ghi chú
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
                        return (
                            <View key={key}
                                className="flex-row items-center space-x-3 py-2 px-4 bg-slate-50 rounded-2xl mx-2 mb-3 shadow-lg shadow-black">
                                <Text className="font-bold" style={{ color: themeColors.text }}>
                                    {items.length} x
                                </Text>
                                <Image className="h-14 w-14 rounded-full" source={{ uri: urlFor(items[0]?.image).url() }} />
                                <Text className="flex-1 font-bold text-gray-700">{items[0]?.name}</Text>
                                <Text className="font-semibold text-base">{items[0]?.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</Text>
                                <TouchableOpacity className="p-1 rounded-full"
                                    onPress={() => dispatch(removeFromCart({ id: items[0]?._id }))}
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
                    <Text className="text-gray-700 text-base">Tổng cộng ({cartItems.length} Món)</Text>
                    <Text className="text-gray-700 text-base">{formattedTotalPrice}</Text>
                </View>
                <View className="flex-row justify-between">
                    <Text className="text-gray-700 text-base">Phí giao hàng</Text>
                    <Text className="text-gray-700 text-base">{formattedFeePrice}</Text>
                </View>
                <View className="border-b"></View>
                <View className="flex-row justify-between">
                    <Text className="text-gray-900 font-extrabold text-base">Tổng đơn hàng</Text>
                    <Text className="text-gray-900 font-extrabold text-base">{total}</Text>
                </View>
                <View>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('OrderPrepairing')}
                        style={{ backgroundColor: themeColors.bgColor(1) }}
                        className="p-3 rounded-full">
                        <Text className="text-white text-center font-bold text-2xl">
                            Đặt ngay
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
