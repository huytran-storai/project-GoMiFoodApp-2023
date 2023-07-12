import React, { useEffect, useState } from 'react';
import { Image, Modal, Alert, View, Text, StyleSheet, FlatList, TouchableOpacity, ScrollView, } from 'react-native';
import { themeColors } from "../theme";
import { ArrowLongLeftIcon } from 'react-native-heroicons/solid';
import { MapPinIcon } from 'react-native-heroicons/solid';
import { HomeIcon } from 'react-native-heroicons/solid';
import { InformationCircleIcon } from 'react-native-heroicons/solid';
import { BanknotesIcon } from 'react-native-heroicons/solid';
import { TruckIcon } from 'react-native-heroicons/solid';
import { CurrencyDollarIcon } from 'react-native-heroicons/solid';

const CartDetailHistory = ({ navigation }) => {
    const goToDeLiVeRy = () => { 
        navigation.navigate('OrderPrepairing');
    }
    const goBack = () =>{
        navigation.goBack();
    }
    return (
        <>
            <View style={styles.topHeader}>
                <TouchableOpacity onPress={goBack} style={styles.back}>
                    <ArrowLongLeftIcon style={styles.icon} />
                </TouchableOpacity>
                <Text style={styles.title}>Tiến hành đặt lại</Text>
            </View>
            <ScrollView>
                <View style={styles.bookDesc}>
                    <Text>Mã đơn hàng:</Text>
                    <Text>234356BE277</Text>
                </View>
                <View style={styles.bookRes}>
                    <View>
                        <Image source={require('../assets/hutieu.jpeg')}
                            className="w-[100px] h-[90px]" />
                    </View>
                    <View>
                        <Text style={styles.titleRes}>Dì Bảy</Text>
                    </View>
                    <TouchableOpacity>
                        <Text style={styles.rate}>Đánh giá </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.bookAddress}>
                    <View style={styles.textAddress}>
                        <View style={styles.textAddressChild}>
                            <InformationCircleIcon style={{ color: 'gray' }}></InformationCircleIcon>
                            <Text style={{ fontWeight: 'bold' }}>
                                Thông tin giao hàng:
                            </Text>
                        </View>
                        <View style={styles.textAddressChild}>
                            <HomeIcon></HomeIcon>
                            <Text>
                                01 Lê Quang Định, phường 7...
                            </Text>
                        </View>
                        <View style={styles.textAddressChild}>
                            <MapPinIcon style={{ color: 'red' }}></MapPinIcon>
                            <Text>
                                03 Phan Văn Trị,...
                            </Text>
                        </View>
                    </View>
                    <TouchableOpacity style={styles.change}>
                        <Text style={styles.rate}>Thay đổi</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.bookListFood}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View className="flex-col">
                            <Text>
                                Hủ Tiếu Sườn
                            </Text>
                            <Text className='font-light text-teal-700'>
                                15.000 VND
                            </Text>
                        </View>
                        <View className='flex-row gap-3' style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <TouchableOpacity className='bg-teal-600 px-3 py-2' style={{ borderRadius: '10' }}>
                                <Text className='font-bold text-white'>
                                    -
                                </Text>
                            </TouchableOpacity>
                            <Text>
                                1
                            </Text>
                            <TouchableOpacity className='bg-teal-600 px-3 py-2' style={{ borderRadius: '10' }}>
                                <Text className='font-bold text-white'>
                                    +
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View className="flex-col">
                            <Text>
                                Hủ Tiếu Chay
                            </Text>
                            <Text className='font-light text-teal-700'>
                                15.000 VND
                            </Text>
                        </View>
                        <View className='flex-row gap-3' style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <TouchableOpacity className='bg-teal-600 px-3 py-2' style={{ borderRadius: '10' }}>
                                <Text className='font-bold text-white'>
                                    -
                                </Text>
                            </TouchableOpacity>
                            <Text>
                                1
                            </Text>
                            <TouchableOpacity className='bg-teal-600 px-3 py-2' style={{ borderRadius: '10' }}>
                                <Text className='font-bold text-white'>
                                    +
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={styles.bookPay}>
                    <View style={styles.textAddressChild}>
                        <InformationCircleIcon style={{ color: 'gray' }}></InformationCircleIcon>
                        <Text style={{ fontWeight: 'bold' }}>
                            Thông tin thẻ tín dụng:
                        </Text>
                    </View>
                    <View style={styles.bookPayChild}>
                        <View>
                            <Image source={require('../assets/images/Rectangle.jpg')}
                                className="w-[50px] h-[30px]" />
                        </View>
                        <View>
                            <Text style={styles.titleRes}>*7282</Text>
                        </View>
                        <TouchableOpacity>
                            <Text style={styles.rate}>Thay đổi</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.bookAddress}>
                    <View style={styles.textAddress}>
                        <View style={styles.textAddressChild}>
                            <InformationCircleIcon style={{ color: 'gray' }}></InformationCircleIcon>
                            <Text style={{ fontWeight: 'bold' }}>
                                Thông tin thanh toán:
                            </Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', gap: '140' }}>
                            <View style={styles.textAddressChild}>
                                <CurrencyDollarIcon style={{ color: 'green' }}></CurrencyDollarIcon>
                                <Text>
                                    Tổng đơn:
                                </Text>
                            </View>
                            <View>
                                <Text>30.000 VND</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', gap: '140' }}>
                            <View style={styles.textAddressChild}>
                                <TruckIcon style={{ color: 'green' }}></TruckIcon>
                                <Text>
                                    Phí giao hàng:
                                </Text>
                            </View>
                            <View>
                                <Text>20.000 VND</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', gap: '140' }}>
                            <View style={styles.textAddressChild}>
                                <BanknotesIcon style={{ color: 'red' }}></BanknotesIcon>
                                <Text>
                                    Tổng cộng:
                                </Text>
                            </View>
                            <View>
                                <Text>50.000 VND</Text>
                            </View>
                        </View>

                    </View>
                </View>
                <View style={styles.btnOutside}>
                    <TouchableOpacity style={styles.reorderBtn} onPress={goToDeLiVeRy}>
                        <Text style={styles.reorder}>Hoàn Tất</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </>
    )
}
const styles = StyleSheet.create({
    topHeader: {
        backgroundColor: themeColors.bg,
        paddingVertical: 40,
        borderBottomColor: '#bab5b8',
        borderBottomWidth: 1
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
        marginTop: 10,
        top: 20,
    },
    back: {
        flexDirection: 'row',
        alignItems: 'center',
        position: 'absolute',
        top: 65,
        left: 10,
        zIndex: 1000,
        padding: 5,
        backgroundColor: 'white',
        borderRadius: 10
    },
    icon: {
        color: 'black',
    },
    rate: {
        color: themeColors.bg,
        fontWeight: '500'
    },
    bookDesc: {
        flexDirection: 'row',
        paddingHorizontal: 20,
        justifyContent: 'space-between',
        borderTopWidth: 1,
        borderColor: '#bab5b8',
        marginTop: 20,
        paddingVertical: 20,
        elevation: 1,
        backgroundColor: '#FFFFFF',
        borderRadius: 3,
    },
    bookRes: {
        flexDirection: 'row',
        paddingHorizontal: 20,
        justifyContent: 'space-between',
        alignItems: 'center',
        borderTopWidth: 1,
        borderColor: '#bab5b8',
        marginTop: 20,
        paddingVertical: 10,
        elevation: 1,
        backgroundColor: '#FFFFFF',
        borderRadius: 3,
    },
    titleRes: {
        fontWeight: 'bold',
        marginRight: 90
    },
    bookAddress: {
        flexDirection: 'row',
        paddingHorizontal: 20,
        justifyContent: 'space-between',
        alignItems: 'center',
        borderTopWidth: 1,
        borderColor: '#bab5b8',
        marginTop: 20,
        paddingVertical: 10,
        elevation: 1,
        backgroundColor: '#FFFFFF',
        borderRadius: 3,
    },
    bookListFood: {
        flexDirection: 'column',
        gap:'20',
        paddingHorizontal: 20,
        borderTopWidth: 1,
        borderColor: '#bab5b8',
        marginTop: 20,
        paddingVertical: 10,
        elevation: 1,
        backgroundColor: '#FFFFFF',
        borderRadius: 3,
    },
    bookPay: {
        flexDirection: 'column',
        paddingHorizontal: 20,
        borderTopWidth: 1,
        borderColor: '#bab5b8',
        marginTop: 20,
        paddingVertical: 10,
        elevation: 1,
        backgroundColor: '#FFFFFF',
        borderRadius: 3,
    },
    bookPayChild: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10
    },
    textAddress: {
        flexDirection: 'column',
        gap: 10,
    },
    textAddressChild: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5

    },
    reorderBtn: {
        padding: 10,
        backgroundColor: themeColors.bg,
        marginTop: 10,
        width: '50%',
        borderRadius: 10
    },
    reorder: {
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'white'
    },
    btnOutside: {
        flexDirection: 'row',
        justifyContent: "center",
        marginBottom: 30
    }
})
export default CartDetailHistory;