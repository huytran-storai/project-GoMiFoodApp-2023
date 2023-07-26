import React, {useEffect,useState}  from 'react'
import { Text, View, Image, TouchableOpacity,TextInput,SafeAreaView, FlatList } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { themeColors } from '../theme';
import * as Icon from "react-native-feather";
import { getCategories } from '../api';
import { urlFor } from '../sanity'
import { ScrollView } from 'react-native';
export default function SearchScreen() {
    const navigation = useNavigation();
    const [Categories, setCategorie] = useState ([])
    useEffect(()=>{
        getCategories().then(data =>{
            setCategorie(data)
        })
    })
    const renderItem =({item,index}) =>{
        return(
            <View className="flex-row  border w-6/12 border-green-600 ">
            <View className="">
            <Image className="w-16 h-16  rounded-md m-3 ml-3 " source={{uri: urlFor(item.image).url()}} />
            </View>
            <View className="">
            <Text className="font-semibold text-sm mt-7 w-10 ">{item.name}</Text>
            </View>
            </View>
        )
    }
   
return (
<SafeAreaView className="">
        
        <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="absolute top-14 left-4 bg-gray-50 p-2 rounded-full shadow">
            <Icon.ArrowLeft strokeWidth={3} stroke={themeColors.bgColor(1)} />
        </TouchableOpacity>
        
        <View className="flex-row items-center space-x-2 px-4 pb-2 top-1 w-4/5 ml-12">
        <View className="flex-row flex-1 items-center p-3 rounded-full border border-gray-300 ">
            <Icon.Search height="25" width="25" stroke="gray" />
            <TextInput placeholder='tìm món ăn' className="ml-2 flex-1" keyboardType='default' />
        </View>
    </View>
    <Text className="ml-4 mt-2 font-bold text-base">Gần đây</Text>
    <View className="mt-6 ml-5  h-9 ">
    <Text className=" mt-2 mb-2 text-base">Bún</Text>
    <View className=" h-1 bg-gray-200 w-25 "></View>
    <Text className=" mt-2 mb-2 text-base">Bánh mì</Text>
    <View className=" h-1 bg-gray-200 w-25 "></View>
    <Text className=" mt-2 mb-2 text-base">Phở</Text>
    <View className=" h-1 bg-gray-200 w-25 "></View>
    </View>
    <Text className="ml-4 mt-24
     font-bold text-base">Phổ biến</Text>
   <FlatList
   className="mt-6 "
   data={Categories}
   renderItem={renderItem}
   numColumns={2}
  />
  
</SafeAreaView>

    )

}