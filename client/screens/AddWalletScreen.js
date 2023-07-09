import { SafeAreaView, Dimensions, TouchableOpacity, View, Text, TextInput, Image, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import DropDownPicker from 'react-native-dropdown-picker';
import { CheckBox } from 'react-native-elements';

export default function AddWalletScreen() {
  const [isChecked1, setChecked1] = useState(false);
  const [isChecked2, setChecked2] = useState(false);
  const [isChecked3, setChecked3] = useState(false);

  const toggleCheck1 = () => {
    setChecked1(!isChecked1);
  };

  const toggleCheck2 = () => {
    setChecked2(!isChecked2);
  };

  const toggleCheck3 = () => {
    setChecked3(!isChecked3);
  };

  const [text, setText] = useState('');
  const [text2, setText2] = useState('');
  const [text3, setText3] = useState('');
  const [text4, setText4] = useState('');
  const [text5, setText5] = useState('');
  const handleChangeText = (inputText) => {
    setText(inputText);
  };
  const handleChangeText2 = (inputText) => {
    setText2(inputText);
  };
  const handleChangeText3 = (inputText) => {
    setText3(inputText);
  };
  const handleChangeText4 = (inputText) => {
    setText4(inputText);
  };
  const handleChangeText5 = (inputText) => {
    setText5(inputText);
  };
  const navigation = useNavigation();
  const goToLogIn = () => {
    navigation.navigate('Login');
  }
  const goToMyWalletScreen = () => {
    navigation.navigate('Wallet');
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

  return (
    <SafeAreaView className="w-[393px] h-[852px] bg-white">
      <Text className=" text-black text-center text-[14px] font-bold">Add Visa/Master/JCB Card</Text>
      <TouchableOpacity onPress={goToMyWalletScreen} className="w-[38px] h-[38px] left-[17px] text-center top-[45px] absolute bg-teal-500 rounded-full justify-center items-center">
        <Text className="text-[28px] bottom-[5px] font-large absolute text-white font-bold rounded-full">{"<"}</Text>
      </TouchableOpacity>
      <Text className="s text-black text-[12.5px] mt-3 ml-2 font-semibold">Billing Information</Text>
      <View className="w-[393px] h-[0px] mt-1 opacity-40 border border-black"></View>
      <Text className=" text-black text-[13px] font-semibold mt-10 ml-3">First Name</Text>
      <TextInput
        onChangeText={handleChangeText}
        className="w-[300px] h-[30px] mt-2 ml-1 bg-white text-black rounded-2xl mb-3 border border border border border-stone-500"
        value={text}
      />
      <Text className="text-black text-[13px] font-semibold mt-3 ml-3">Last Name</Text>
      <TextInput
        onChangeText={handleChangeText2}
        className="w-[300px] h-[30px] mt-2 ml-1 bg-white text-black rounded-2xl mb-3 border border border border border-stone-500"
        value={text2}
      />
      <Text className=" text-black mt-[45px] ml-2 text-[12.5px] font-semibold">Detail Payment</Text>
      <View className="w-[393px] h-[0px] mt-1 opacity-40 border border-black"></View>
      <View className="flex-row space-x-4">
        <View className="flex-row items-center">
          <CheckBox
            checked={isChecked1}
            onPress={toggleCheck1}
            containerStyle={{ backgroundColor: 'transparent' }}
          />

          <Image className="w-10 h-10" source={require('../assets/images/Visa.png')} />
        </View>
        <View className="flex-row items-center">
          <CheckBox
            checked={isChecked2}
            onPress={toggleCheck2}
          />
          <Image className="w-10 h-10" source={require('../assets/images/Mastercard.png')} />
        </View>
      </View>
      <View className="flex-row items-center">
        <CheckBox
          checked={isChecked3}
          onPress={toggleCheck3}
        />
        <Image className="w-10 h-10" source={require('../assets/images/JCB.png')} />
      </View>

      <Text className=" text-black text-[13px] ml-3 font-semibold">Card Number</Text>
      <TextInput
        onChangeText={handleChangeText3}
        className="w-[300px] h-[30px] mt-[7px] ml-[6px] bg-white text-black rounded-2xl mb-3 border border border border border-stone-500"
        value={text3}
      />

      <View className="flex-row mt-[15px] space-x-40 ml-8">
        <Text className=" text-black text-[12px] font-normal">Expires month</Text>
        <Text className=" text-black text-[12px] font-normal">Expires years</Text>
      </View>
      <View className="flex-row mt-[15px] space-x-32 ml-1 ">
        <View className=" w-[120px] h-[0px] ml-[10px] display-none rounded-2xl justify-center items-center border-stone-500">
          <DropDownPicker
            placeholder="Month"
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            style={{ backgroundColor: '#D1D3D4' }}
            dropDownContainerStyle={{ borderWidth: 0, left: 10 }}
            textStyle={{ fontsize: 10 }}
            dropDownStyle={{
              width: '20%',
              height: '10%',
            }}
          />
        </View>
        <View className="flex flex-col rounded-2xl justify-center items-center border-stone-500">
          <TextInput
            placeholder="Year"
            onChangeText={handleChangeText4}
            className="w-[110px] h-[40px] bg-white text-black text-center rounded-2xl border border border border border-stone-500"
            value={text4}>

          </TextInput>
        </View>
      </View>
      <Text className=" text-black text-[12px] mt-[50px] ml-[63px] font-normal">CVN</Text>
      <View className=" mt-[5px] ml-[25px] rounded-2xl border-stone-500">
        <TextInput
          onChangeText={handleChangeText5}
          className="w-[100px] h-[30px] bg-white text-black text-center rounded-2xl border border border border border-stone-500"
          value={text5}>

        </TextInput>
      </View>
      <TouchableOpacity onPress={goToLogIn} className="w-[135px] h-[48px] mt-[60px] ml-[128px] bg-teal-500 rounded-2xl justify-center items-center">
        <Text className=" absolute text-white text-[16px] font-bold">{"Submit"}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}