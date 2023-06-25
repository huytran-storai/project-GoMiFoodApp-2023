import React from 'react'
import { Text, Image, Dimensions, View, TouchableOpacity } from 'react-native'
import Swiper from 'react-native-swiper'
import { SafeAreaView } from 'react-native-safe-area-context'
const { width, height } = Dimensions.get('window');

const TutorialScreen = ({ navigation }) => {
    const goToLogIn = () => {
        navigation.navigate('Login');
    }
    return (
        <Swiper showsButtons loop={false}>
            <SafeAreaView className="bg-white w-full h-full justify-center items-center">
                <View className="flex-1 mt-40 mr-32 mb-5 justify-center items-center ">
                    <Image source={require('../assets/images/logo.png')} className="mt-0" style={{width: '65%', height: '33%', position: 'absolute', top: '-43%', left: '-11.5%'}} />
                    <Image source={require('../assets/images/intro1.png')} className="mt-4" style={{width: '150%', height: '170%', position: 'absolute',top: '-16%', resizeMode: 'contain', left: '-50.5%', borderRadius: 10, shadowColor: '#000', shadowOffset: { width: 0, height: 0 }, shadowOpacity: 0.8, shadowRadius: 3 }}/>
                </View>
                <View className="flex-1 justify-center mt-9 top-0 mb-1">
                    <Text className=" text-black left-0 text-center text-sm font-medium leading-4" >Chúng tôi cung cấp dịch vụ giao đồ ăn/ thức uống.</Text>
                    <Text className=" text-black left-0 text-center text-sm font-medium leading-4" >Chúng tôi chắc chắn bạn sẽ hài lòng với dịch vụ của chúng tôi</Text>
                </View>
                <View className="mt-1" style={{ position: 'absolute', bottom: 42, flexDirection: 'row', justifyContent: 'center', width, paddingHorizontal: 20 }}>
                    <TouchableOpacity onPress={goToLogIn} style={{ width: 120, height: 40, borderRadius: 30, shadowColor: '#000',shadowOffset: { width: 0, height: 0 }, shadowOpacity: 0.3, shadowRadius: 3, backgroundColor: '#FFFFFF', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: '#429F9E', fontSize: 10, fontWeight: 700, textAlign: 'center' }}>{"Đăng nhập ngay!"}</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
            <SafeAreaView className="bg-white w-full h-full justify-center items-center">
                <View className="flex-1 mt-10 mr-36 left-10 justify-center ">
                    <Image source={require('../assets/images/logo.png')} style={{ width: '75%', height: '28%', position: 'absolute', left: '-28%', top: '7%' }} />
                    <Image source={require('../assets/images/loginandsignup.png')} className="mt-4" style={{ width: '130%', height: '125%', resizeMode: 'contain',justifyContent: 'center', top: '30%',left: '-52.5%', position: 'absolute'}} />
                </View>
                <View className="flex-1 justify-center mt-5 top-9">
                    <Text className=" text-black left-0 text-center text-sm font-medium leading-4" >Đầu tiên bạn phải tạo một tài khoản</Text>
                    <Text className=" text-black left-0 text-center text-sm font-medium leading-4" >
để trở thành thành viên của chúng tôi</Text>
                </View>
                <View style={{ position: 'absolute', bottom: 42, flexDirection: 'row', justifyContent: 'center', width, paddingHorizontal: 20 }}>
                    <TouchableOpacity onPress={goToLogIn} style={{ width: 120, height: 40, borderRadius: 30, shadowColor: '#000', shadowOffset: { width: 0, height: 0 }, shadowOpacity: 0.3, shadowRadius: 3,  backgroundColor: '#FFFFFF', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: '#429F9E', fontSize: 10, fontWeight: 700, textAlign: 'center' }}>{"Đăng nhập ngay!"}</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
            <SafeAreaView className="bg-white" style={{ width, height, justifyContent: 'center', alignItems: 'center' }}>
                <View className="flex-1 mt-10 mr-36 left-10 justify-center ">
                    <Image source={require('../assets/images/logo.png')} style={{ width: '75%', height: '28%', position: 'absolute', left: '-28%', top: '7%' }} />
                    <Image source={require('../assets/images/intro3.png')} className="mt-4" style={{ width: '130%', height: '125%', resizeMode: 'contain', top: '30%', left: '-49.5%', position: 'absolute'}} />
                </View>
                <View className="flex-1 justify-center mt-5 top-9">
                    <Text className=" text-black left-0 text-center text-sm font-medium leading-4" >Sau khi tạo tài khoản, bạn có thể chọn món ăn</Text>
                    <Text className=" text-black left-0 text-center text-sm font-medium leading-4" >bạn muốn thêm vào giỏ hàng của bạn</Text>
                    <Text className=" text-black left-0 text-center text-sm font-medium leading-4" >và tiến hành chấp nhận đặt món</Text>
                </View>
                <View style={{ position: 'absolute', bottom: 42, flexDirection: 'row', justifyContent: 'center', width, paddingHorizontal: 20 }}>
                    <TouchableOpacity onPress={goToLogIn} style={{ width: 120, height: 40, borderRadius: 30,shadowColor: '#000', shadowOffset: { width: 0, height: 0 }, shadowOpacity: 0.3, shadowRadius: 3, backgroundColor: '#FFFFFF', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: '#429F9E', fontSize: 10, fontWeight: 700, textAlign: 'center' }}>{"Đăng nhập ngay!"}</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
            <SafeAreaView className="bg-white" style={{ width, height, justifyContent: 'center', alignItems: 'center' }}>
                <View className="flex-1 mt-10 mr-36 left-10 justify-center ">
                    <Image source={require('../assets/images/logo.png')} style={{ width: '75%', height: '28%', position: 'absolute', left: '-28%', top: '7%' }} />
                    <Image source={require('../assets/images/intro4.png')} className="mt-4" style={{ width: '130%', height: '125%', resizeMode: 'contain', top: '30%', left: '-52.5%', position: 'absolute'}} />
                </View>
                <View className="flex-1 justify-center mt-5 top-9">
                    <Text className=" text-black left-0 text-center text-sm font-medium leading-4" >Sau khi đặt món thành công</Text>
                    <Text className=" text-black left-0 text-center text-sm font-medium leading-4" >món ăn sẽ đến với bạn trong thời gian dự kiến!</Text>
                </View>
                <View style={{ position: 'absolute', bottom: 43, flexDirection: 'row', justifyContent: 'center', width, paddingHorizontal: 20 }}>
                    <TouchableOpacity onPress={goToLogIn} style={{ width: 120, height: 40, borderRadius: 30,shadowColor: '#000', shadowOffset: { width: 0, height: 0 }, shadowOpacity: 0.3, shadowRadius: 3, backgroundColor: '#FFFFFF', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: '#429F9E', fontSize: 10, fontWeight: 700, textAlign: 'center' }}>{"Đăng nhập ngay!"}</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </Swiper>
    )
}
export default TutorialScreen;
