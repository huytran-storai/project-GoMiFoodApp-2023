import { SafeAreaView, Dimensions, TouchableOpacity, View, Text, TextInput, StyleSheet, Image, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { CheckBox } from 'react-native-elements';
import { ChevronLeftIcon } from 'react-native-heroicons/solid';
const { width, height } = Dimensions.get('window');
import DatePicker from 'react-native-datepicker';
import { LogBox } from 'react-native';
export default function AddWalletScreen() {
  useEffect(() => {
    LogBox.ignoreLogs(['Animated: `useNativeDriver`']);
  }, [])
  const handleSubmit = () => {
    validateFields()

  }


  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [isChecked3, setIsChecked3] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked1(!isChecked1);
    setIsChecked2(!isChecked2);
    setIsChecked3(!isChecked3);
  };
  const toggleCheck1 = () => {
    setIsChecked1(!isChecked1);
  };

  const toggleCheck2 = () => {
    setIsChecked2(!isChecked2);
  };

  const toggleCheck3 = () => {
    setIsChecked3(!isChecked3);
  };

  const [text, setText] = useState('');
  const [text2, setText2] = useState('');
  const [text3, setText3] = useState('');
  const [text4, setText4] = useState('');
  const [text5, setText5] = useState('');

  const [textError, setTextError] = useState('');
  const [text2Error, setText2Error] = useState('');
  const [text3Error, setText3Error] = useState('');
  const [text4Error, setText4Error] = useState('');
  const [date, setDate] = useState('01-01-2023');
  const [text5Error, setText5Error] = useState('');

  const handleChangeText = (inputText) => {
    setText(inputText);
  };
  const handleChangeText2 = (inputText) => {
    setText2(inputText);
  };
  const handleChangeText5 = (inputText) => {
    setText5(inputText);
  };
  const validateFields = () => {
    let isValid = true;
    if (!isChecked1) {
      isValid = false;
    }
    if (!isChecked2) {
      isValid = false;
    }
    if (!isChecked3) {
      isValid = false;
    }
    // Xác thực nam
    const yearRegex = /^\d{4}$/;
    if (text4.trim() === '') {
      setText4Error('Vui lòng không để trống');
      isValid = false;
    } else if (!yearRegex.test(text4.trim())) {
      setText4Error('Số năm không hợp lệ');
      isValid = false;
    } else {
      setText4Error('');
    };
    //xac thuc firstname
    const firstnameRegex = /^[a-zA-Z\s]+$/;
    if (text.trim() === '') {
      setTextError('Vui lòng nhập tên');
      isValid = false;
    } else if (!firstnameRegex.test(text.trim())) {
      setTextError('Tên chỉ được chứa chữ cái');
      isValid = false;
    } else {
      setTextError('');
    };
    const lastnameRegex = /^[a-zA-Z\s]+$/;
    if (text2.trim() === '') {
      setText2Error('Vui lòng nhập họ');
      isValid = false;
    } else if (!lastnameRegex.test(text2.trim())) {
      setText2Error('Họ chỉ được chứa chữ');
      isValid = false;
    } else {
      setText2Error('');
    };
    const numberRegex = /^\d{4}$/;
    if (text3.trim() === '') {
      setText3Error('Vui lòng nhập số thẻ vào');
      isValid = false;
    } else if (!numberRegex.test(text3.trim())) {
      setText3Error('Số thẻ không hợp lệ');
      isValid = false;
    } else {
      setText3Error('');
    };
    const cvnRegex = /^\d{3}$/;
    if (text5.trim() === '') {
      setText5Error('Vui lòng không để trống');
      isValid = false;
    } else if (!cvnRegex.test(text5.trim())) {
      setText5Error('CVN chỉ chứa 3 chữ số');
      isValid = false;
    } else {
      setText5Error('');
    };
  }
  const navigation = useNavigation();

  const goToMyWalletScreen = () => {
    navigation.goBack();
  }

  return (
    <SafeAreaView className="w-full h-full bg-white">
      <Text className="text-black text-[14px] font-bold text-center">Thêm Thẻ Tín Dụng</Text>
      <View className="bottom-6">
        <TouchableOpacity onPress={goToMyWalletScreen} className="w-[35px] h-[35px] ml-[10px] text-center bg-teal-500 rounded-full justify-center items-center">
          <ChevronLeftIcon style={{ color: 'white' }}></ChevronLeftIcon>
        </TouchableOpacity>
        <Text className=" text-black text-[12.5px] mt-3 ml-8 font-semibold">*Vui lòng điền thông tin</Text>
      </View>
      <View className="w-[393px] h-[0px] mt-1 opacity-40 border border-black"></View>
      <ScrollView className="p-2 mb-[10px]">
        <View className="flex-col justify-center mx-5 ">
          <Text className="font-semibold">Tên của bạn</Text>
          <TextInput style={styles.input}
            underlineColorAndroid="transparent"
            placeholderTextColor="black"
            autoCapitalize="none"
            value={text}
            onChangeText={handleChangeText} />
          {textError !== '' && <Text className="text-red-500 text-[15px]">{textError}</Text>}
        </View>

        <View className="flex-col justify-center mx-5 mt-2">
          <Text className="font-semibold">Họ của bạn</Text>
          <TextInput style={styles.input}
            underlineColorAndroid="transparent"
            placeholderTextColor="black"
            autoCapitalize="none"
            value={text2}
            onChangeText={handleChangeText2} />
          {text2Error !== '' && <Text className="text-red-500 text-[15px]">{text2Error}</Text>}
        </View>
        <Text className=" text-black mt-[25px] ml-2 text-[12.5px] font-semibold">Chọn thẻ tín dụng</Text>
        <View className="w-[393px] h-[0px] mt-1 opacity-40 border border-black"></View>
        <View className="flex-row space-x-4 mt-[10px]">
          <View className="flex-row items-center">
            <CheckBox
              checked={isChecked1}
              onPress={toggleCheck1}
              onValueChange={handleCheckboxChange}
              containerStyle={{ backgroundColor: 'transparent' }}
            />

            <Image className="w-10 h-10" source={require('../assets/images/Visa.png')} />
          </View>
          <View className="flex-row items-center">
            <CheckBox
              checked={isChecked2}
              onPress={toggleCheck2}
              onValueChange={handleCheckboxChange}
              containerStyle={{ backgroundColor: 'transparent' }}
            />
            <Image className="w-10 h-10" source={require('../assets/images/Mastercard.png')} />
          </View>
        </View>
        <View className="flex-row items-center">
          <CheckBox
            checked={isChecked3}
            onPress={toggleCheck3}
            onValueChange={handleCheckboxChange}
            containerStyle={{ backgroundColor: 'transparent' }}
          />
          <Image className="w-10 h-10" source={require('../assets/images/JCB.png')} />
        </View>

        <View className="flex-col justify-center mx-5 ">
          <Text className="font-semibold">Nhập mã số thẻ</Text>
          <TextInput style={styles.input}
            underlineColorAndroid="transparent"
            placeholderTextColor="black"
            autoCapitalize="none"
            value={text}
            onChangeText={handleChangeText} />
          {text3Error !== '' && <Text className="text-red-500 text-[15px]">{text3Error}</Text>}
        </View>
        <View className="flex-col justify-center mx-5 mt-5">
          <View style={{ borderBottomColor: 'black', borderBottomWidth: '2' }}>
            <Text className="font-semibold text-[15px] mb-2">Chọn thời hạn thẻ</Text>
          </View>
          <DatePicker
            style={styles.datePickerStyle}
            date={date}
            mode="date"
            placeholder="select date"
            format="DD/MM/YYYY"
            minDate="01-01-1900"
            maxDate="01-01-2050"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            customStyles={{
              dateIcon: {
                position: 'absolute',
                right: -5,
                top: 4,
                marginLeft: 0,
              },
              dateInput: {
                borderColor: "gray",
                alignItems: "flex-start",
                borderWidth: 0,
                borderBottomWidth: 1,
              },
              placeholderText: {
                fontSize: 17,
                color: "gray"
              },
              dateText: {
                fontSize: 17,
              }
            }}
            onDateChange={(date) => {
              setDate(date);
            }}
          />
        </View>

        <Text className=" text-black text-[12px] mt-[30px] ml-[55px] font-normal">CVN</Text>
        <View className=" mt-[5px] ml-[20px] rounded-2xl border-stone-500">
          <TextInput
            onChangeText={handleChangeText5}
            className="w-[100px] h-[30px] bg-white text-black text-center rounded-2xl border border-stone-500"
            value={text5}>
          </TextInput>
          {text5Error !== '' && <Text className="text-red-500 text-[15px]">{text5Error}</Text>}
        </View>
        <View className="justify-center items-center mt-[10px]">
          <TouchableOpacity onPress={handleSubmit} className="w-[135px] h-[48px] mb-[10px] bg-teal-500 rounded-2xl justify-center items-center">
            <Text className=" text-white text-[16px] font-bold">{"Submit"}</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    marginTop: "3%",
    borderRadius: 10
  }
})