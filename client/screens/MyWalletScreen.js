import { SafeAreaView,TouchableOpacity, View, Text, } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import DropDownPicker from 'react-native-dropdown-picker';

export default function MyWalletScreen() {
    const navigation = useNavigation();
    const goToProfileUserScreen = () => {
        navigation.navigate('HomeTabs');
    }
    const goToAddWalletScreen = () => {
        navigation.navigate('AddWallet');
    }
    // const [open, setOpen] = useState(false);
    // const [value, setValue] = useState(null);
    // const [items, setItems] = useState([
    //     { label: 'Thêm thẻ tín dụng vào GoMiWallet', value: 'option1' },
    //     { label: 'Visa', value: 'option2' },
    //     { label: 'Master', svalue: 'option3' },
    //     { label: 'JCB', value: 'option4' }
    // ]);

    // useEffect(() => {
    //     if (value === 'option1') {
    //         navigation.navigate('AddWallet');
    //     } else if (value === 'option2') {
    //         navigation.navigate('Screen2');
    //     }
    // }, [value]);

    // const handleItemSelect = (item) => {
    //     setValue(item.value);
    // }

    return (
        <SafeAreaView className="w-[393px] h-[852px] bg-white">
            <View className="flex-row space-x-[90px]">
            <TouchableOpacity onPress={goToProfileUserScreen} className="w-[45px] h-[45px] ml-[13px] bg-teal-500 rounded-full justify-center items-center">
                <Text className="text-[30px] font-large text-white font-bold rounded-full">{"<"}</Text>
            </TouchableOpacity>
            <Text className=" text-black text-[20px] font-extrabold">My Wallet</Text>
            </View>
            
            <View className="w-[393px] h-[49px] mt-[10px] bg-white border border border border border-stone-300 justify-center">
                {/* <DropDownPicker
                    placeholder="GoMiPay"
                    open={open}
                    value={value}
                    items={items}
                    setOpen={setOpen}
                    setValue={setValue}
                    setItems={setItems}
                    onChangeItem={handleItemSelect}
                    style={{ borderWidth: 0 }}
                    dropDownContainerStyle={{ borderWidth: 0, left: 10 }}
                    containerStyle={{ width: '100%', height: '100%' }}
                    itemStyle={{
                        justifyContent: 'flex-start'
                    }}
                /> */}
            <TouchableOpacity onPress={goToAddWalletScreen} className=" flex-row space-x-[130px] ml-[10px] ">
                <Text className="text-[15px] mt-[5px] font-large text-black font-bold">{"Thêm thẻ tín vào ví GoMiWallet"}</Text>
                <Text className="text-[20px] font-large text-black font-bold">{">"}</Text>
            </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}