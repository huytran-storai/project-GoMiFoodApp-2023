import {SafeAreaView,Dimensions, TouchableOpacity, View, Text, TextInput, Image, ScrollView } from 'react-native'
import React, { useEffect, useState, useState2 } from 'react' 
import { useNavigation } from '@react-navigation/native'
import DropDownPicker from 'react-native-dropdown-picker';

const { width, height } = Dimensions.get('window');

export default function MyWalletScreen(){
    const navigation = useNavigation();
    const goToTermOfService = () => {
        navigation.navigate('Login');
    }
    const goToProfileUserScreen = () => {
        navigation.navigate('HomeTabs');
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
<SafeAreaView className="w-[393px] h-[852px] relative bg-white">
    {/* <View className="w-[155px] h-[7px] left-[126px] top-[841px] absolute bg-black rounded-xl" /> */}
    <TouchableOpacity onPress={goToProfileUserScreen} className="w-[47px] h-[45px] left-[17px] top-[50px] absolute bg-teal-500 rounded-full justify-center items-center">
        <Text className="text-[33px] bottom-[5px] font-large absolute text-white font-bold rounded-full">{"<"}</Text>
    </TouchableOpacity>
    <Text className="left-[146px] top-[63px] absolute text-black text-[20px] font-extrabold">My Wallet</Text>
    <View className="w-[393px] h-[49px] left-0 top-[113px] absolute bg-white border border border border border-stone-300 justify-center">
        {/* <Text className="left-[36px] absolute text-black text-[14px] font-medium">GoMi Pay</Text> */}
        <DropDownPicker
                    placeholder="GoMiPay"
                    open={open}
                    value={value}
                    items={items}
                    setOpen={setOpen}
                    setValue={setValue}
                    setItems={setItems}
                    onChangeItem={handleItemSelect}
                    style={{borderWidth: 0}}
                    dropDownContainerStyle={{borderWidth: 0, left: 10}}
                    containerStyle={{width: '100%', height: '100%'}}
                    itemStyle={{
                        justifyContent: 'flex-start'
                    }}
                />
    </View>
    {/* <View className="w-[393px] h-[49px] left-0 top-[330px] absolute border border-zinc-300 justify-center"> */}
        {/* <Text className="left-[36px] absolute text-black text-[14px] font-medium">Card</Text> */}
        {/* <DropDownPicker
                    placeholder="Card"
                    open={open2}
                    value={value2}
                    items={items2}
                    setOpen={setOpen2}
                    setValue={setValue2}
                    setItems={setItems2}
                    onChangeItem={handleItemSelect2}
                    style={{borderWidth: 0}}
                    dropDownContainerStyle={{borderWidth: 0}}
                    containerStyle={{width: '100%', height: '100%'}}
                    itemStyle={{
                        justifyContent: 'flex-start'
                    }}
                /> */}
    {/* </View> */}
    {/* <Text className="left-[36px] top-[131px] absolute text-black text-[14px] font-medium">GoMi Pay</Text> */}
    {/* <Text className="left-[36px] top-[180px] absolute text-black text-[14px] font-medium">Card</Text> */}
    {/* <Image className="w-5 h-5 left-[363px] top-[128px] absolute" src="https://via.placeholder.com/20x20" />
    <Image className="w-5 h-5 left-[363px] top-[173px] absolute" src="https://via.placeholder.com/20x20" />
    <Image className="w-[15px] h-[15px] left-[11px] top-[146px] absolute" src="https://via.placeholder.com/15x15" />
    <Image className="w-[15px] h-[15px] left-[11px] top-[180px] absolute" src="https://via.placeholder.com/15x15" /> */}
</SafeAreaView>
)
}