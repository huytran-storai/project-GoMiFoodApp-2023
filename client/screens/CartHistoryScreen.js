import React, { useEffect, useState } from 'react';
import { Image, View, Text, StyleSheet, FlatList, TouchableOpacity, } from 'react-native';
import { themeColors } from "../theme";

const CartHistoryScreen = ({ navigation }) => {

    const foodCart = [
        { id: '1', name: "Dì Bảy", total: '50000' },
        { id: '2', name: "Chú Ba", total: '90000' },
    ];
    const goToDetail = () =>{
        navigation.navigate('CartDetailHistory')
    }
    return (
        <>
            <View style={styles.topHeader}>
                <Text style={styles.textHeader}>Tất Cả</Text>
            </View>
            <View style={styles.topTitle}>
                <Text style={styles.textTitle}>Đơn Hàng Gần Đây</Text>
            </View>
            <FlatList data={foodCart}
                renderItem={({ item }) => <View style={styles.listCart}>
                    <View>
                        <Image source={require('../assets/hutieu.jpeg')}
                            className="w-[100px] h-[90px]" />
                    </View>
                    <View style={styles.titleDetail}>
                        <Text className="font-semibold">{item.name}</Text>
                        <Text className="font-medium text-[10px]">Tổng: {item.total}VND</Text>
                    </View>
                    <View>
                        <Text>12/08/2023 || 14:30</Text>
                        <View style={styles.btn}>
                            <View style={styles.btnDe}>
                                <Text className="text-[10px]" style={styles.btnDetail}>Đã Hoàn tất</Text>
                            </View>
                            <TouchableOpacity style={styles.btnRe} onPress={goToDetail}>
                                <Text className="text-[10px]" style={styles.btnReorder}>Đặt Lại</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>}
                keyExtractor={item => item.id}>
            </FlatList>

        </>

    );
};
const styles = StyleSheet.create({
    topHeader: {
        paddingVertical: 10,
    },
    textHeader: {
        fontWeight: 'bold',
        fontSize: 18,
        marginLeft: 10,
    },
    titleDetail: {
        flexDirection: 'column',
        gap: 20
    },
    topTitle: {
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        marginHorizontal: 10
    },
    textTitle: {
        fontWeight: 'bold',
        fontSize: 12,
        marginLeft: 10,
    },
    listCart: {
        paddingVertical: 10,
        paddingHorizontal: 10,
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
        flexDirection: 'row',
        gap: 20
    },
    btn: {
        flexDirection: 'row',
        gap: 10,
        position: 'absolute',
        bottom: 10,
        left: -2,
    },
    btnDetail: {
        textAlign: 'center',
        color: 'green',
        fontWeight: 'bold',
    },
    btnReorder: {
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
    },
    btnDe: {
        paddingVertical: 5,
        borderRadius: 10,
        padding: 10,
        borderColor:'green',
        borderWidth:1
    },
    btnRe: {
        paddingVertical: 6,
        borderRadius: 10,
        padding: 10,
        backgroundColor: '#d65845',
    }
})

export default CartHistoryScreen;
