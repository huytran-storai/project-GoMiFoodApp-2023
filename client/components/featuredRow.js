import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import * as Icon from "react-native-feather";
import { themeColors } from '../theme'
import RestaurantCard from './restaurantCard'

export default function FeaturedRow({id,title, description, restaurants}) {
  return (
    <View>
      <View className="flex-row justify-between items-center px-4">
        <View>
            <Text className="font-bold text-lg">{title}</Text>
            <Text className="text-gray-500 text-xs">
                 {description}
            </Text>
        </View>
        <TouchableOpacity>
            <Text style={{color: themeColors.text}} className="font-semibold">See All</Text>
        </TouchableOpacity>
    </View>
    <ScrollView
        horizontal
        showHorizontalScrollIndicator={false}
        contentContainerStyle={{
            paddingHorizontal: 15
        }}
        className="overflow-visible py-5"
        >
            {
                restaurants.map((restaurant,index)=>{
                    return (
                        <RestaurantCard
                        item={restaurant}
                        key={index}
                        />
                    )
                })
            }
        </ScrollView>
    </View>
  )
}6