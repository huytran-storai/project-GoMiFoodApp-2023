import React, { useEffect, useState } from 'react';
import { Image, View, Text, StyleSheet, FlatList, TouchableOpacity, Modal,Pressable } from 'react-native';
import { themeColors } from "../theme";

const CartHistoryScreen = ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const foodCart = [
        { id: '1', name: "Dì Bảy", total: '50000', status: 'Đang đến' },
        { id: '7', name: "Dì Bảy", total: '50000', status: 'Đang tìm tài xế' },
        { id: '2', name: "Chú Ba", total: '90000', status: 'Đã hủy' },
        { id: '3', name: "Chú Năm", total: '70000', status: 'Đang đến' },
        { id: '4', name: "Cậu Ba", total: '50000', status: 'Đơn nháp' },
        { id: '5', name: "Chị Hai", total: '40000', status: 'Đã hoàn tất' },
        { id: '6', name: "Miko Lan Trinh", total: '40000', status: 'Đã hoàn tất' },
    ];

    const goToDetail = () => {
        navigation.navigate('CartDetailHistory')
    }
    return (
        <>
            <View style={styles.centeredView}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        Alert.alert('');
                        setModalVisible(!modalVisible);
                    }}>
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text style={styles.modalText}>Bạn có muốn hủy đơn hàng này không?</Text>
                            <View className="flex-row gap-4">
                            <Pressable
                                style={[styles.button, styles.buttonOpen]}
                                onPress={() => setModalVisible(!modalVisible)}>
                                <Text style={styles.textStyle}>Có</Text>
                            </Pressable>
                            <Pressable
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => setModalVisible(!modalVisible)}>
                                <Text style={styles.textStyle}>Không</Text>
                            </Pressable>
                            </View>
                            
                        </View>
                    </View>
                </Modal>
            </View>
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
                        <Text className="font-medium text-[10px]">{item.total}VND (2 món)</Text>
                    </View>
                    <View>
                        <Text>12/08/2023 || 14:30</Text>
                        <View style={styles.btn}>
                            <View style={styles.btnDe}>
                                <Text className="text-[10px]" style={styles.btnDetail}>{item.status}</Text>
                            </View>
                            {item.status === 'Đang đến' &&
                                <TouchableOpacity style={styles.btnRe} onPress={() => setModalVisible(true)}>
                                    <Text className="text-[10px]" style={styles.btnReorder}>Trò chuyện</Text>
                                </TouchableOpacity>}
                                {item.status === 'Đang tìm tài xế' &&
                                <TouchableOpacity style={styles.btnRe} onPress={() => setModalVisible(true)}>
                                    <Text className="text-[10px]" style={styles.btnReorder}>Hủy</Text>
                                </TouchableOpacity>}
                                {item.status === 'Đã hủy' &&
                                <TouchableOpacity style={styles.btnRe} onPress={goToDetail}>
                                    <Text className="text-[10px]" style={styles.btnReorder}>Đặt lại</Text>
                                </TouchableOpacity>}
                                {item.status === 'Đơn nháp' &&
                                <TouchableOpacity style={styles.btnRe} onPress={goToDetail}>
                                    <Text className="text-[10px]" style={styles.btnReorder}>Tiếp tục</Text>
                                </TouchableOpacity>}
                                {item.status === 'Đã hoàn tất' &&
                                <TouchableOpacity style={styles.btnRe} onPress={goToDetail}>
                                    <Text className="text-[10px]" style={styles.btnReorder}>Đặt lại</Text>
                                </TouchableOpacity>}
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
        right: 1,
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
    },
    btnRe: {
        paddingVertical: 6,
        borderRadius: 10,
        padding: 10,
        backgroundColor: themeColors.bg,
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
      },
      modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      },
      button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
      },
      buttonOpen: {
        backgroundColor: 'green',
        width:'30%'
      },
      buttonClose: {
        backgroundColor: 'red',
        width:'30%'
      },
      textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
      },
      modalText: {
        marginBottom: 15,
        textAlign: 'center',
      },
})

export default CartHistoryScreen;
