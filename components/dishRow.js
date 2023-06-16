import { View, Text } from "react-native";
import React from 'react'
import { Image, TouchableOpacity } from "react-native";
import { themeColors } from "../theme";
import * as Icon from "react-native-feather";
<<<<<<< HEAD
=======
<<<<<<< HEAD
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart, selectCartItemsById } from "../slices/cartSlice";
=======
>>>>>>> parent of 220b0ad5 (no message)
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart, selectCartById } from "../slice/cartSlice";
export default function DishRow({ item }) {
    const dispatch = useDispatch()
<<<<<<< HEAD
=======
>>>>>>> OurSrouce/GoMiFoodApp-2023
>>>>>>> parent of 220b0ad5 (no message)

    const handleDecrease = () => {
        dispatch(removeFromCart({ id: item.id }))
    }
    const handleIncrease = () => {
        dispatch(addToCart({ ...item }))
    }

    const totalItems = useSelector(state => selectCartById(state, item.id))

<<<<<<< HEAD
=======
<<<<<<< HEAD
export default function DishRow({ item }) {
    const dispatch = useDispatch();
    const totalItems = useSelector(state=> selectCartItemsById(state, item.id));

    const handleIncrease = () => {
        dispatch(addToCart({ ...item }))
    }
    const handleDecrease = () => {
        dispatch(removeFromCart({ id: item.id }))
    }
=======
>>>>>>> OurSrouce/GoMiFoodApp-2023
>>>>>>> parent of 220b0ad5 (no message)
    return (
        <View className="flex-row items-center bg-white p-3 rounded-3xl shadow-2xl mb-3 mx-2">
            <Image className="rounded-3xl" style={{ height: 100, width: 100 }}
                source={item.image} />

            <View className="flex flex-1 space-y-3">
                <View className="pl-3">
                    <Text className="text-xl">{item.name}</Text>
                    <Text className="text-gray-700">{item.description}</Text>
                </View>
                <View className="flex-row justify-between pl-3 items-center">
                    <Text className="text-gray-700 text-lg font-bold">
                        $ {item.price}
                    </Text>
                    <View className="flex-row items-center">
                        <TouchableOpacity
                            onPress={handleDecrease}
<<<<<<< HEAD
                            className="p-1 rounded-full"
                            style={{
                                backgroundColor: totalItems.length ? themeColors.bgColor(1) : themeColors.bgColor(0)
                            }}
=======
<<<<<<< HEAD
                            disabled={!totalItems.length}
                            className="p-1 rounded-full"
                            style={{ backgroundColor: themeColors.bgColor(1) }}
=======
                            className="p-1 rounded-full"
                            style={{
                                backgroundColor: totalItems.length ? themeColors.bgColor(1) : themeColors.bgColor(0)
                            }}
>>>>>>> OurSrouce/GoMiFoodApp-2023
>>>>>>> parent of 220b0ad5 (no message)
                        >
                            <Icon.Minus strokeWidth={2} height={20} width={20} stroke={'white'} />
                        </TouchableOpacity>
                        <Text className="px-3">
                            {totalItems.length}
                        </Text>
                        <TouchableOpacity
                            onPress={handleIncrease}
                            className="p-1 rounded-full"
                            style={{ backgroundColor: themeColors.bgColor(1) }}
                        >
                            <Icon.Plus strokeWidth={2} height={20} width={20} stroke={'white'} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}


