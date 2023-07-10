import { SafeAreaView,TouchableOpacity, View, Text, } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import DropDownPicker from 'react-native-dropdown-picker';

export default function MyWalletScreen() {
    const navigation = useNavigation();
    const goToProfileUserScreen = () => {
        navigation.navigate('HomeTabs');
    }

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: 'Thêm thẻ tín dụng vào GoMiWallet', value: 'option1' },
        { label: 'Visa', value: 'option2' },
        { label: 'Master', svalue: 'option3' },
        { label: 'JCB', value: 'option4' }
    ]);

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

    return (
        <SafeAreaView className="w-[393px] h-[852px] relative bg-white">
            <TouchableOpacity onPress={goToProfileUserScreen} className="w-[47px] h-[45px] left-[17px] top-[50px] absolute bg-teal-500 rounded-full justify-center items-center">
                <Text className="text-[33px] bottom-[5px] font-large absolute text-white font-bold rounded-full">{"<"}</Text>
            </TouchableOpacity>
            <Text className="left-[146px] top-[63px] absolute text-black text-[20px] font-extrabold">My Wallet</Text>
            <View className="w-[393px] h-[49px] left-0 top-[113px] absolute bg-white border border border border border-stone-300 justify-center">
                <DropDownPicker
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
                />
            </View>
        </SafeAreaView>
    )
}