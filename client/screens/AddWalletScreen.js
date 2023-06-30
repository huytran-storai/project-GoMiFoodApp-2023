import {SafeAreaView,Dimensions, TouchableOpacity, View, Text, TextInput, Image, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react' 
import { useNavigation } from '@react-navigation/native'
import DropDownPicker from 'react-native-dropdown-picker';
import tailwind from 'tailwind-rn';
const { width, height } = Dimensions.get('window');
export default function AddWalletScreen(){
    const [text, setText] = useState('');
    const [text2, setText2] = useState('');
    const handleChangeText = (inputText) => {
        setText(inputText);
      };
    const handleChangeText2 = (inputText) => {
        setText2(inputText);
      };
    const navigation = useNavigation();
    const goToLogIn = () => {
        navigation.navigate('Login');
    }
    const goToProfileUserScreen = () => {
        navigation.navigate('HomeTabs');
    }
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
      { label: 'January', value: 'item1' },
      { label: 'February', value: 'item2' },
      { label: 'March', value: 'item3' },
      { label: 'April', value: 'item4' },
      { label: 'May', value: 'item5' },
      { label: 'June', value: 'item6' },
      { label: 'July', value: 'item7' },
      { label: 'August', value: 'item8' },
      { label: 'September', value: 'item9' },
      { label: 'October', value: 'item10' },
      { label: 'November', value: 'item11' },
      { label: 'December', value: 'item12' },
    ]);

return(
    <SafeAreaView className="w-[393px] h-[852px] bg-white">
        {/* <View className="w-[155px] h-[7px] bg-black rounded-xl" /> */}
        <Text className=" text-black text-center text-[14px] font-bold">Add Visa/Master/JCB Card</Text>
        <Text className="s text-black text-[12.5px] mt-3 ml-2 font-semibold">Billing Information</Text>
        {/* <Image className="w-5 h-5 left-[15px] top-[49px]" src="https://via.placeholder.com/20x20" /> */}
        <View className="w-[393px] h-[0px] mt-1 opacity-40 border border-black"></View>
        <Text className=" text-black text-[13px] font-semibold mt-10 ml-3">First Name</Text>
        <TextInput
            className="w-[300px] h-[30px] mt-2 ml-1 bg-white text-black rounded-2xl mb-3 border border border border border-stone-500"
            value=""
          />
        {/* <div className="w-[353px] h-[30px] left-[9px] top-[190px] opacity-60 bg-white rounded-lg border border border border border-stone-300" /> */}
        <Text className="text-black text-[13px] font-semibold mt-3 ml-3">Last Name</Text>
        <TextInput
            className="w-[300px] h-[30px] mt-2 ml-1 bg-white text-black rounded-2xl mb-3 border border border border border-stone-500"
            value=""
          />
        <Text className=" text-black mt-[45px] ml-2 text-[12.5px] font-semibold">Detail Payment</Text>
        <View className="w-[393px] h-[0px] mt-1 opacity-40 border border-black"></View>
        <Text className=" text-black text-[13px] font-semibold">Card Number</Text>
        <TextInput
            className="w-[300px] h-[30px] bg-white text-black rounded-2xl mb-3 border border border border border-stone-500"
            value=""
          />
        {/* <div className="w-[353px] h-[30px] left-[9px] top-[260px] opacity-60 bg-white rounded-lg border border border border border-stone-300" />
        <div className="w-[353px] h-[30px] left-[9px] top-[528px] opacity-60 bg-white rounded-lg border border border border border-stone-300" />
        <div className="w-[131px] h-[15px] left-[9px] top-[594px] opacity-60 bg-stone-300 rounded border border border border border-stone-300" />
        <div className="w-[131px] h-[15px] left-[9px] top-[594px] opacity-60 bg-stone-300 rounded border border border border border-stone-300" />
        <div className="w-[42px] h-[15px] left-[9px] top-[654px] opacity-60 bg-stone-300 rounded border border border border border-stone-300" />
        <div className="w-[131px] h-[15px] left-[219px] top-[594px] opacity-60 bg-stone-300 rounded border border border border border-stone-300" /> */}
        {/* <Image className="w-[57px] h-[23px] left-[32px] top-[397px] rounded-lg" src="https://via.placeholder.com/57x23" />
        <Image className="w-[57px] h-[23px] left-[32px] top-[457px] rounded-lg" src="https://via.placeholder.com/57x23" />
        <Image className="w-[57px] h-[23px] left-[230px] top-[397px] rounded-lg" src="https://via.placeholder.com/57x23" /> */}
        {/* <div className="w-2.5 h-2.5 left-[11px] top-[404px] bg-white rounded-full border border-neutral-300" />
        <div className="w-2.5 h-2.5 left-[211px] top-[404px] bg-white rounded-full border border-neutral-300" />
        <div className="w-2.5 h-2.5 left-[11px] top-[464px] bg-white rounded-full border border-neutral-300" /> */}
        <View className="flex-row mt-[15px] space-x-40 ml-8">
        <Text className=" text-black text-[12px] font-normal">Expires month</Text>
        <Text className=" text-black text-[12px] font-normal">Expires years</Text>
        </View>
    <View className="flex-row mt-[15px] space-x-32 ml-1 ">
        <View className=" w-[120px] h-[0px] ml-[10px] rounded-2xl justify-center items-center border-stone-500">
            <DropDownPicker
                    placeholder="Month"
                    open={open}
                    value={value}
                    items={items}
                    setOpen={setOpen}
                    setValue={setValue}
                    setItems={setItems}
                    style={{ backgroundColor: '#D1D3D4'}}
                    dropDownContainerStyle={{borderWidth: 0, left: 10}}
                    textStyle={{fontsize: 10}}
                    dropDownStyle={{
                        width: '20%', // Thiết lập chiều rộng
                        height: '10%', // Thiết lập chiều cao
                    }}
                />
        </View>
        <View className="flex flex-col rounded-2xl justify-center items-center border-stone-500">
            <TextInput 
                placeholder="Year"
                onChangeText={handleChangeText}
                className="w-[110px] h-[40px] bg-white text-black text-center rounded-2xl border border border border border-stone-500"
                value={text}>

            </TextInput>
        </View>
    </View>
    <Text className=" text-black text-[12px] mt-[50px] ml-[63px] font-normal">CVN</Text>
    <View className=" mt-[5px] ml-[25px] rounded-2xl border-stone-500">
        <TextInput
            onChangeText={handleChangeText2}
            className="w-[100px] h-[30px] bg-white text-black text-center rounded-2xl border border border border border-stone-500"
            value={text2}>

        </TextInput>
    </View>
    <TouchableOpacity onPress={goToLogIn} className="w-[135px] h-[40px] mt-[175px] ml-[128px] bg-teal-500 rounded-2xl justify-center items-center">
        <Text className=" absolute text-white text-[16px] font-bold">{"Submit"}</Text>
    </TouchableOpacity>   
        {/* <Image className="w-5 h-5 left-[62px] top-[652px]" src="https://via.placeholder.com/20x20" /> */}
    </SafeAreaView>
)
}