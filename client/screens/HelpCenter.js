import {SafeAreaView,Dimensions, TouchableOpacity, View, Text, TextInput, Image, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react' 
import { useNavigation } from '@react-navigation/native'
import DropDownPicker from 'react-native-dropdown-picker';
const { width, height } = Dimensions.get('window');
export default function HelpCenter(){
    const navigation = useNavigation();
    const [text, setText] = useState('');
    const handleChangeText = (inputText) => {
        setText(inputText);
      };
    const goToProfileUser = () => {
        navigation.navigate('Tôi');
    }
    const goToHomeScreen = () => {
        navigation.navigate('HomeTabs');
    }
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        {label: 'Bạn cần gì ?', value: 'option1'},
        {label: 'Vấn đề của bạn là gì ?', value: 'option2'},
        {label: 'Bạn có góp ý gì cho chúng tôi ?', value: 'option3'},
    ]);
return(
<View className="w-[393px] h-[852px] bg-teal-500">
    <TouchableOpacity onPress={goToHomeScreen} className="w-[38px] h-[39px] left-[17px] text-center top-[45px] absolute bg-white rounded-full justify-center items-center">
            <Text className="text-[28px] bottom-[5px] font-large absolute text-teal-500 font-bold rounded-full">{"<"}</Text>
    </TouchableOpacity>
    <View className="w-[393px] h-[777px] mt-[170px] bg-white rounded-3xl">
        <Text className=" mt-[20px] text-black text-[40px] text-center">Help Center</Text>
    <View className="w-[330px] h-[49px] mt-[50px] ml-[32px] rounded-2xl border border border border border-stone-300 justify-center">
        <DropDownPicker
                    placeholder="Vấn đề của bạn là gì ?"
                    open={open}
                    value={value}
                    items={items}
                    setOpen={setOpen}
                    setValue={setValue}
                    setItems={setItems}
                    style={{borderWidth: 0, backgroundColor: 'gray'}}
                    dropDownContainerStyle={{borderWidth: 0, backgroundColor: 'gray'}}
                    containerStyle={{width: '100%', height: '100%'}}
                    itemStyle={{
                        justifyContent: 'flex-start' 
                    }}
                />
    </View>
    <View className="items-center justify-center">
        <TextInput
            onChangeText={handleChangeText}
            placeholder="Nhập vấn đề của bạn vào"
            className="w-[380px] h-[200px] mt-[130px] ml-[6px] text-black rounded-2xl mb-3 border border border border border-stone-500"
            value={text}
        />
    </View>
    <TouchableOpacity onPress={goToProfileUser} className="w-[135px] h-[48px] mt-[60px] ml-[128px] bg-teal-500 rounded-2xl justify-center items-center">
        <Text className=" absolute text-white text-[16px] font-bold">{"Submit"}</Text>
    </TouchableOpacity> 
    </View>

    {/* <Image className="w-[68px] h-[68px] left-[162px] top-[160px] absolute rounded-full" source={require('../assets/images/Avatar.png')} /> 
    <Text className="left-[132px] top-[232px] absolute text-stone-900 text-[21px] font-bold">John Walker</Text>
    <TouchableOpacity onPress={goToMyWallet} className="w-[393px] h-[46px] left-0 top-[361px] absolute bg-white border border border border border-stone-300 justify-center items-left">
        <Image className="w-5 h-5 left-[35px] absolute" source={require('../assets/images/Wallet.png')}/>
        <Text className=" left-[60px] absolute text-black text-[13px] font-medium">{"My wallet"}</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={goToSetting} className="w-[393px] h-[43px] left-0 top-[402px] absolute bg-white border border border border border-stone-300 justify-center items-left">
        <Image className="w-5 h-5 left-[35px] absolute" source={require('../assets/images/Settings.png')}/>
        <Text className=" left-[60px] absolute text-black text-[13px] font-medium">{"Setting"}</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={goToHelpCenter} className="w-[393px] h-[43px] left-0 top-[443px] absolute bg-white border border border border border-stone-300 justify-center items-left">
        <Image className="w-5 h-5 left-[35px] absolute" source={require('../assets/images/Help.png')}/>
        <Text className=" left-[60px] absolute text-black text-[13px] font-medium">{"Help Center"}</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={goToTermOfService} className="w-[393px] h-[43px] left-0 top-[485px] absolute border border-neutral-300 justify-center items-left">
        <Image className="w-5 h-5 left-[35px] absolute" source={require('../assets/images/Document.png')}/>
        <Text className=" left-[60px] absolute text-black text-[13px] font-medium">{"Term of Service"}</Text>
    </TouchableOpacity>
    
    <TouchableOpacity onPress={goToLogIn} className="w-[154px] h-[38px] left-[119px] top-[706px] absolute bg-teal-500 rounded-2xl justify-center items-center">
        <Text className=" absolute text-white text-[16px] font-bold">{"Sign Out"}</Text>
    </TouchableOpacity>    */}
    {/* <Text className="left-[65px] top-[499px] absolute text-center text-black text-[13px] font-medium">Term of service</Text>
    <Image className="w-5 h-5 left-[35px] top-[496px] absolute" source={require('../assets/images/Document.png')} /> */}
    {/* <View className="w-[393px] h-[0px] left-0 top-[528px] absolute border border-neutral-300"></View> */}
</View>
)
}