import {SafeAreaView,Dimensions, TouchableOpacity, View, Text, TextInput, Image, ScrollView } from 'react-native'
import React, { useEffect, useState, useState2 } from 'react' 
import { useNavigation } from '@react-navigation/native'
import DropDownPicker from 'react-native-dropdown-picker';

const { width, height } = Dimensions.get('window');

export default function SettingScreen(){
    const navigation = useNavigation();
    const goToTermOfService = () => {
        navigation.navigate('Login');
    }
    const goToProfileUserScreen = () => {
        navigation.navigate('HomeTabs');
    }
    const goToNotiSetting = () => {
        navigation.navigate('Notification');
    }
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        {label: 'Thêm thẻ tín dụng vào GoMiWallet', value: 'option1'},
        {label: 'Visa', value: 'option2'},
        {label: 'Master', svalue: 'option3'},
        {label: 'JCB', value: 'option4'}
    ]);

    const [open2, setOpen2] = useState(false);
    const [value2, setValue2] = useState(null);
    const [items2, setItems2] = useState([
        {label: 'ATM', value: 'option1'},
        // {label: 'Option 2', value: 'option2'},
        // {label: 'Option 3', value: 'option3'},
    ]);

const handleItemSelect2 = (item) => {
    setValue2(item.value);
}
    useEffect(() => {
        if (value === 'option1') {
            navigation.navigate('AddWallet');
        } else if (value === 'option2') {
            navigation.navigate('Screen2');
        }
    }, [value]);

    const handleItemSelect = (item) => {
        setValue(item.value);
    }

return(
<SafeAreaView className="w-[393px] h-[852px] bg-white">
    <View className="flex-row">
        <TouchableOpacity onPress={goToProfileUserScreen} className="w-[47px] h-[45px] ml-[10px] bg-teal-500 rounded-full justify-center items-center">
            <Text className="text-[33px] bottom-[5px] font-large absolute text-white font-bold rounded-full">{"<"}</Text>
        </TouchableOpacity>
        <Text className=" ml-[92px] mt-[6px] text-black text-[27px] font-extrabold">Cài Đặt</Text>
    </View>
    <View className="w-[393px] h-[0px] mt-[9px] opacity-40 border border-black"></View>
    <View className="w-[393px] h-[49px] bg-white border border-stone-300">
    <TouchableOpacity onPress={goToNotiSetting} className="w-[150px] h-[40px] justify-center">
        <Text className="text-black mt-[10px] ml-[10px] text-[15.5px]">{"Thông tin cá nhân"}</Text>
    </TouchableOpacity>
    </View>
    <View className="w-[393px] h-[49px] bg-white border border-stone-300">
    <TouchableOpacity onPress={goToNotiSetting} className="w-[150px] h-[40px] justify-center">
        <Text className="text-black mt-[10px] ml-[10px] text-[15px]">{"Mật Khẩu"}</Text>
    </TouchableOpacity>
    </View>
    <View className="w-[393px] h-[49px] mt-[50px] bg-white border border-stone-300">
    <TouchableOpacity onPress={goToNotiSetting} className="w-[150px] h-[40px] justify-center">
        <Text className="text-black mt-[10px] ml-[10px] text-[15px]">{"Cài đặt thông báo"}</Text>
    </TouchableOpacity>
    </View>
    <View className="w-[393px] h-[49px] bg-white border border-stone-300">
    <TouchableOpacity onPress={goToNotiSetting} className="w-[150px] h-[40px] justify-center">
        <Text className="text-black mt-[10px] ml-[10px] text-[15px]">{"Xoá tài khoản"}</Text>
    </TouchableOpacity>
    </View>
</SafeAreaView>
)
}