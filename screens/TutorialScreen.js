import React from 'react'
import { Text, Image, Dimensions, View, TouchableOpacity } from 'react-native'
import Swiper from 'react-native-swiper'
import { SafeAreaView } from 'react-native-safe-area-context'
const { width, height } = Dimensions.get('window');

const TutorialScreen = ({ navigation }) => {
    const goToLogIn = () => {
        navigation.navigate('Login');
    }
    const tutorial = {
        intro1:{
            title:"About Our App",
            title2:'Introducing',
            desc:'We are sure you will be satisfied with our service',
            desc2:'We are sure you will be satisfied with our service',
            image1: "../assets/images/logo.png",
            image2: "../assets/images/intro1.png",
        },
        intro2:{
            title:"About Our App",
            title2:'Create Account',
            desc:'First you must create an account',
            desc2:'to become our member',
            image1: "../assets/images/logo.png",
            image2: "../assets/images/loginandsignup.png",
        },
        intro3:{
            title:"About Our App",
            title2:'Choose Food',
            desc:'After create account, you can choose the food',
            desc2:'you want to your cart',
            image1: "../assets/images/logo.png",
            image2: "../assets/images/intro3.png",
        },
        intro4:{
            title:"About Our App",
            title2:'Delivery',
            desc:'Finally we will deliver your order',
            desc2:'as fast as possible',
            image1: "../assets/images/logo.png",
            image2: "../assets/images/intro4.png",
        }
        
    }
    return (
        <Swiper showsButtons loop={false}>
            <SafeAreaView className="bg-white w-full h-full justify-center items-center">
                <View className="flex-1 items-center absolute w-full h-full">
                    <Text className="text-gray-500 mt-3 left-1 font-bold text-2xl text-center leading-6">About Our App</Text>
                    <Text className="text-black text-center left-0.5 font-semibold text-xl leading-6">Introducing</Text>
                </View>
                <View className="flex-1 mt-40 mr-32 mb-5 justify-center items-center ">
                    <Image source={require('../assets/images/logo.png')} className="mt-0" style={{width: '65%', height: '33%', position: 'absolute', top: '-43%', left: '-11.5%'}} />
                    <Image source={require('../assets/images/intro1.png')} className="mt-4" style={{width: '150%', height: '170%', position: 'absolute',top: '-16%', resizeMode: 'contain', left: '-50.5%', borderRadius: 10, shadowColor: '#000', shadowOffset: { width: 0, height: 0 }, shadowOpacity: 0.8, shadowRadius: 3 }}/>
                </View>
                <View className="flex-1 justify-center mt-9 top-0 mb-1">
                    <Text className=" text-black left-0 text-center text-sm font-medium leading-4" >We provide food delivery service.</Text>
                    <Text className=" text-black left-0 text-center text-sm font-medium leading-4" >We are sure you will be satisfied with our service</Text>
                    <Text className=" text-black left-0 text-center text-sm font-medium leading-4" >You can order the food on our app</Text>
                </View>
                <View className="mt-1" style={{ position: 'absolute', bottom: 42, flexDirection: 'row', justifyContent: 'center', width, paddingHorizontal: 20 }}>
                    <TouchableOpacity onPress={goToLogIn} style={{ width: 100, height: 40, borderRadius: 30, shadowColor: '#000',shadowOffset: { width: 0, height: 0 }, shadowOpacity: 0.3, shadowRadius: 3, backgroundColor: '#FFFFFF', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: '#429F9E', fontSize: 14, fontWeight: 700, textAlign: 'center' }}>{"Login Now!"}</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
            <SafeAreaView className="bg-white w-full h-full justify-center items-center">
                <View className="flex-1 items-center absolute w-full h-full">
                    <Text className="text-gray-500 mt-3 left-1 font-bold text-2xl text-center leading-6">About Our App</Text>
                    <Text className="text-black text-center left-0.5 font-semibold text-xl leading-6">Create Account</Text>
                </View>
                <View className="flex-1 mt-10 mr-36 left-10 justify-center ">
                    <Image source={require('../assets/images/logo.png')} style={{ width: '75%', height: '28%', position: 'absolute', left: '-28%', top: '7%' }} />
                    <Image source={require('../assets/images/loginandsignup.png')} className="mt-4" style={{ width: '130%', height: '125%', resizeMode: 'contain',justifyContent: 'center', top: '30%',left: '-52.5%', position: 'absolute'}} />
                {/* <Image source={require('../assets/images/intro2.png')} style={{ width: '100%', height: '55%', resizeMode: 'contain', top: 240, left: 80, position: 'absolute', borderRadius: 10, shadowColor: '#000', shadowOffset: { width: 0, height: 0 }, shadowOpacity: 0.8, shadowRadius: 3 }} /> */}
                </View>
                <View className="flex-1 justify-center mt-5 top-9">
                    <Text className=" text-black left-0 text-center text-sm font-medium leading-4" >First you must create an account</Text>
                    <Text className=" text-black left-0 text-center text-sm font-medium leading-4" >to become our member</Text>
                </View>
                <View style={{ position: 'absolute', bottom: 42, flexDirection: 'row', justifyContent: 'center', width, paddingHorizontal: 20 }}>
                    <TouchableOpacity onPress={goToLogIn} style={{ width: 100, height: 40, borderRadius: 30, shadowColor: '#000', shadowOffset: { width: 0, height: 0 }, shadowOpacity: 0.3, shadowRadius: 3,  backgroundColor: '#FFFFFF', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: '#429F9E', fontSize: 14, fontWeight: 700, textAlign: 'center' }}>{"Login Now!"}</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
            <SafeAreaView className="bg-white" style={{ width, height, justifyContent: 'center', alignItems: 'center' }}>
                <View className="flex-1 items-center absolute w-full h-full">
                    <Text className="text-gray-500 mt-3 left-1 font-bold text-2xl text-center leading-6">About Our App</Text>
                    <Text className="text-black text-center left-0.5 font-semibold text-xl leading-6">Choose Food</Text>
                </View>
                <View className="flex-1 mt-10 mr-36 left-10 justify-center ">
                    <Image source={require('../assets/images/logo.png')} style={{ width: '75%', height: '28%', position: 'absolute', left: '-28%', top: '7%' }} />
                    <Image source={require('../assets/images/intro3.png')} className="mt-4" style={{ width: '130%', height: '125%', resizeMode: 'contain', top: '30%', left: '-49.5%', position: 'absolute'}} />
                    {/* <Image source={require('../assets/images/intro3.1.png')} style={{ width: '100%', height: '55%', resizeMode: 'contain', top: 240, left: 80, position: 'absolute', borderRadius: 10, shadowColor: '#000', shadowOffset: { width: 0, height: 0 }, shadowOpacity: 0.8, shadowRadius: 3 }} /> */}
                </View>
                <View className="flex-1 justify-center mt-5 top-9">
                    <Text className=" text-black left-0 text-center text-sm font-medium leading-4" >After create an account, you can choose the food</Text>
                    <Text className=" text-black left-0 text-center text-sm font-medium leading-4" >you want to add to your cart</Text>
                </View>
                <View style={{ position: 'absolute', bottom: 42, flexDirection: 'row', justifyContent: 'center', width, paddingHorizontal: 20 }}>
                    <TouchableOpacity onPress={goToLogIn} style={{ width: 100, height: 40, borderRadius: 30,shadowColor: '#000', shadowOffset: { width: 0, height: 0 }, shadowOpacity: 0.3, shadowRadius: 3, backgroundColor: '#FFFFFF', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: '#429F9E', fontSize: 14, fontWeight: 700, textAlign: 'center' }}>{"Login Now!"}</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
            <SafeAreaView className="bg-white" style={{ width, height, justifyContent: 'center', alignItems: 'center' }}>
            <View className="flex-1 items-center absolute w-full h-full">
                    <Text className="text-gray-500 mt-3 left-1 font-bold text-2xl text-center leading-6">About Our App</Text>
                    <Text className="text-black text-center left-0.5 font-semibold text-xl leading-6">Delivery</Text>
                </View>
                <View className="flex-1 mt-10 mr-36 left-10 justify-center ">
                    <Image source={require('../assets/images/logo.png')} style={{ width: '75%', height: '28%', position: 'absolute', left: '-28%', top: '7%' }} />
                    <Image source={require('../assets/images/intro4.png')} className="mt-4" style={{ width: '130%', height: '125%', resizeMode: 'contain', top: '30%', left: '-52.5%', position: 'absolute'}} />
                </View>
                <View className="flex-1 justify-center mt-5 top-9">
                    <Text className=" text-black left-0 text-center text-sm font-medium leading-4" >After create an account, you can choose the food</Text>
                    <Text className=" text-black left-0 text-center text-sm font-medium leading-4" >you want to add to your cart</Text>
                </View>
                <View style={{ position: 'absolute', bottom: 43, flexDirection: 'row', justifyContent: 'center', width, paddingHorizontal: 20 }}>
                    <TouchableOpacity onPress={goToLogIn} style={{ width: 100, height: 40, borderRadius: 30,shadowColor: '#000', shadowOffset: { width: 0, height: 0 }, shadowOpacity: 0.3, shadowRadius: 3, backgroundColor: '#FFFFFF', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: '#429F9E', fontSize: 14, fontWeight: 700, textAlign: 'center' }}>{"Login Now!"}</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </Swiper>
    )
}
export default TutorialScreen;
