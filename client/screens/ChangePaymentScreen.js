import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React from 'react'
import { themeColors } from '../theme';
import { useNavigation } from '@react-navigation/native';
import * as Icon from "react-native-feather";

export default function ChangePaymentScreen() {

  const navigation = useNavigation();

  return (
    <View className="bg-white flex-1">
      {/* back button */}
      <View className="relative py-4 shadow-sm mt-10">
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          className="absolute z-10 rounded-full p-1 shadow top-5 left-2">
          <Icon.ArrowLeft strokeWidth={3} stroke={themeColors.bgColor(1)} />
        </TouchableOpacity>
        <View>
          <Text className="text-center font-bold text-2xl">Chọn thanh toán</Text>
        </View>
      </View>

      {/* Address */}
      <View style={styles.mainView}>
        <Text style={styles.mainText}>Địa chỉ</Text>
        <View className="h-14 bg-slate-50 rounded-xl mx-2 mb-3 shadow-lg shadow-black" style={styles.boxAddress}>
          <Text style={styles.textBoxAddress}>109/23 Quang Trung, P.12, Gò Vấp, Tphcm</Text>
          <TouchableOpacity>
            <Text style={styles.textChangeAddress}>
              Thay đổi
            </Text>
          </TouchableOpacity>
        </View>

        {/* Payment method */}
        <View style={styles.viewPayment}>
          <Text style={styles.mainText}>Phương thức thanh toán</Text>
          <View className="flex-row px-4 items-center mb-5 h-20 bg-slate-50 rounded-xl mx-2 shadow-lg shadow-black">
            <Image source={require('../assets/images/Rectangle.jpg')} className="w-20 h-49 m-1 rounded-full" />
            <Text className="flex-1 pl-4 font-bold">**4393</Text>
            <TouchableOpacity>
              <View style={styles.checkBoxClick}>
              </View>
            </TouchableOpacity>
          </View>

          <View className="flex-row px-4 items-center justify-between mb-5 h-20 bg-slate-50 rounded-xl mx-2 shadow-lg shadow-black">
            <View style={styles.gmWallet}>
              <Text style={styles.textWallet}>GM wallet</Text>
            </View>
            <Text style={styles.priceWallet}>0đ</Text>
            <TouchableOpacity>
              <View style={styles.checkBoxhide}>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.line}></View>
          {/* Cash */}
          <View className="flex-row px-4 items-center mt-10 mb-5 h-20 bg-slate-50 rounded-xl mx-2 shadow-lg shadow-black">
            <Image source={require('../assets/images/Cash.png')} className="w-20 h-20 m-1 rounded-full" />
            <Text className="flex-1 pl-4 font-bold">Tiền mặt</Text>
            <TouchableOpacity>
              <View style={styles.checkBoxnoClick}>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View className="flex justify-center items-center mb-5">
        <TouchableOpacity
          style={{ backgroundColor: themeColors.bgColor(1) }}
          className="p-3 rounded-xl w-56">
          <Text className="text-white text-center font-bold text-2xl">
            Lưu
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    // padding: 10,
  },
  mainText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
    marginVertical: 20,
  },
  boxAddress: {
    // marginTop: 15,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  textBoxAddress: {
    lineHeight: 56,
    fontSize: 15,
    fontWeight: '500',
  },
  textChangeAddress: {
    fontWeight: 'bold',
    lineHeight: 56,
    color: themeColors.text,
  },
  gmWallet: {
    backgroundColor: '#229ADF',
    width: 87,
    height: 72,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#229ADF',
    opacity: 0.5,
    // marginLeft: -50,
  },
  checkBoxClick: {
    backgroundColor: '#429F9E',
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#429F9E',
  },
  checkBoxnoClick: {
    backgroundColor: '#fff',
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#429F9E',
  },
  checkBoxhide: {
    backgroundColor: '#fff',
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#429F9E',
    opacity: 0.3,
  },
  textWallet: {
    fontSize: 15,
    lineHeight: 72,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
  priceWallet: {
    fontSize: 16,
    fontWeight: 'bold',
    opacity: 0.3,
    left: 80,
  },
  line: {
    height: 1,
    backgroundColor: 'black',
    marginHorizontal: 10,
    marginTop: 20,
  },
})