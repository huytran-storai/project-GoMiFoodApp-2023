import { SafeAreaView, TouchableWithoutFeedback,Keyboard, TouchableOpacity, View, Text, TextInput, StyleSheet, Image, ScrollView, Alert } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { CheckBox } from 'react-native-elements';
import { ChevronLeftIcon } from 'react-native-heroicons/solid';
import DatePicker from 'react-native-datepicker';
import { LogBox } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export default function AddWalletScreen() {
  useEffect(() => {
    LogBox.ignoreLogs(['Animated: `useNativeDriver`']);
  }, [])
  const handleSubmit = () => {
    validateFields()
    Alert.alert('Lưu mặc định thành công!', 'Cảm ơn bạn', [
      { text: 'OK', onPress: () => console.log('OK Pressed') },
    ]);
  }

  const [selectedIndex, setIndex] = React.useState(0);
  const [text, setText] = useState('');
  const [text2, setText2] = useState('');
  const [text3, setText3] = useState('');
  const [text5, setText5] = useState('');

  const [textError, setTextError] = useState('');
  const [text2Error, setText2Error] = useState('');
  const [text3Error, setText3Error] = useState('');

  const [date, setDate] = useState('01-01-2023');
  const [text5Error, setText5Error] = useState('');

  const handleChangeText = (inputText) => {
    setText(inputText);
  };
  const handleChangeText3 = (inputText) => {
    setText3(inputText);
  };
  const handleChangeText2 = (inputText) => {
    setText2(inputText);
  };
  const handleChangeText5 = (inputText) => {
    setText5(inputText);
  };
  const validateFields = () => {
    //xac thuc firstname
    const firstnameRegex = /^[a-zA-Z\u00C0-\u00FF\s]+$/;
    if (text.trim() === '') {
      setTextError('Vui lòng không để trống');
      isValid = false;
    } else if (!firstnameRegex.test(text.trim())) {
      setTextError('Tên chỉ được chứa chữ cái');
      isValid = false;
    } else {
      setTextError('');
    };
    const lastnameRegex = /^[a-zA-Z\u00C0-\u00FF\s]+$/;
    if (text2.trim() === '') {
      setText2Error('Vui lòng không để trống');
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
    <KeyboardAwareScrollView scrollEnabled={false}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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
                className={`${textError !== '' && 'border border-red-500'}`}
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
                className={`${text2Error !== '' && 'border border-red-500'}`}
                autoCapitalize="none"
                value={text2}
                onChangeText={handleChangeText2} />
              {text2Error !== '' && <Text className="text-red-500 text-[15px]">{text2Error}</Text>}
            </View>
            <View style={{ borderBottomColor: 'black', borderBottomWidth: '2' }} className="mx-5 mt-3">
              <Text className="font-semibold text-[15px] mb-2">Chọn thẻ thanh toán</Text>
            </View>
            <View className="flex-col ml-3 my-5">
              <View className="flex-row gap-20">
                <View className="flex-row items-center">
                  <CheckBox
                    checked={selectedIndex === 0}
                    onPress={() => setIndex(0)}
                    checkedIcon="dot-circle-o"
                    uncheckedIcon="circle-o"
                  />
                  <Image className="w-10 h-10" source={require('../assets/images/Mastercard.png')} />
                </View>
                <View className="flex-row items-center">
                  <CheckBox
                    checked={selectedIndex === 1}
                    onPress={() => setIndex(1)}
                    checkedIcon="dot-circle-o"
                    uncheckedIcon="circle-o"
                  />
                  <Image className="w-10 h-10" source={require('../assets/images/Visa.png')} />
                </View>
              </View>
              <View className="flex-row items-center">
                <CheckBox
                  checked={selectedIndex === 2}
                  onPress={() => setIndex(2)}
                  checkedIcon="dot-circle-o"
                  uncheckedIcon="circle-o"
                />
                <Image className="w-10 h-10" source={require('../assets/images/JCB.png')} />
              </View>
            </View>
            <View className="flex-col justify-center mx-5 ">
              <Text className="font-semibold">Nhập mã số thẻ</Text>
              <TextInput style={styles.input}
                underlineColorAndroid="transparent"
                placeholderTextColor="black"
                className={`${text3Error !== '' && 'border border-red-500'}`}
                autoCapitalize="none"
                keyboardType={'phone-pad'}
                value={text3}
                onChangeText={handleChangeText3} />
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
                format="MM/YYYY"
                minDate="01-1900"
                maxDate="01-2050"
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
                keyboardType={'phone-pad'}
                className={`w-[100px] h-[30px] bg-white text-black text-center rounded-2xl border border-stone-500 ${text5Error !== '' && 'border border-red-500'}`}
                value={text5}>
              </TextInput>
              {text5Error !== '' && <Text className="text-red-500 text-[15px]">{text5Error}</Text>}
            </View>
            <View className="justify-center items-center mt-[10px]">
              <TouchableOpacity onPress={handleSubmit} className="w-[135px] h-[48px] mb-[10px] bg-teal-500 rounded-2xl justify-center items-center">
                <Text className=" text-white text-[16px] font-bold">Hoàn Tất</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </KeyboardAwareScrollView>
  )
}
const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    marginTop: "3%",
    borderRadius: 10,
  }
})