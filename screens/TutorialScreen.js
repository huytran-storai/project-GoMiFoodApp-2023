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
            desc2:'We are sure you will be satisfied with our service'
        },
        intro2:{
            title:"About Our App",
            title2:'Create Account',
            desc:'First you must create an account',
            desc2:'to become our member'
        },
        intro3:{
            title:"About Our App",
            title2:'Choose Food',
            desc:'After create account, you can choose the food',
            desc2:'you want to your cart'
        },
        intro4:{
            title:"About Our App",
            title2:'Delivery',
            desc:'Finally we will deliver your order',
            desc2:'as fast as possible'
        }
        
    }
    return (
        <Swiper showsButtons loop={false}>
            <SafeAreaView style={{ width, height, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: '#000000', top: 73, left: 0, opacity: 0.6, position: 'absolute', width, height, fontSize: 18, fontWeight: 700, textAlign: 'center', lineHeight: 22 }}></Text>
                <Text style={{ color: '#000000', top: 101, left: 0, position: 'absolute', width, height, fontSize: 20, fontWeight: 600, textAlign: 'center', lineHeight: 24 }}>Introducing</Text>
                <Image source={require('../assets/images/logo.png')} style={{ width: 103, height: 89, position: 'absolute', left: 135, top: 125 }} />
                <Image source={require('../assets/images/intro1.png')} style={{ width: '100%', height: '60%', resizeMode: 'contain', top: 220, position: 'absolute', borderRadius: 10 }} />
                <Text style={{ color: '#000000', top: 690, left: 0, position: 'absolute', width, height, fontSize: 11, fontWeight: 500, textAlign: 'center', lineHeight: 13, display: 'flex', }}>We provide food delivery service</Text>
                <Text style={{ color: '#000000', top: 702, left: 0, position: 'absolute', width, height, fontSize: 11, fontWeight: 500, textAlign: 'center', lineHeight: 13, display: 'flex', }}>We are sure you will be satisfied with our service</Text>
                <Text style={{ color: '#000000', top: 714, left: 0, position: 'absolute', width, height, fontSize: 11, fontWeight: 500, textAlign: 'center', lineHeight: 13, display: 'flex', }}>You can order the food on our app</Text>
                <View style={{ position: 'absolute', bottom: 70, flexDirection: 'row', justifyContent: 'center', width, paddingHorizontal: 20 }}>
                    <TouchableOpacity onPress={goToLogIn} style={{ width: 120, height: 50, borderRadius: 30, backgroundColor: '#FFFFFF', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: '#429F9E', fontSize: 14, fontWeight: 700, textAlign: 'center' }}>{"Login Now!"}</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
            <SafeAreaView style={{ width, height, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: '#000000', top: 73, left: 0, opacity: 0.6, position: 'absolute', width, height, fontSize: 18, fontWeight: 700, textAlign: 'center', lineHeight: 22 }}>About Our App</Text>
                <Text style={{ color: '#000000', top: 101, left: 0, position: 'absolute', width, height, fontSize: 20, fontWeight: 600, textAlign: 'center', lineHeight: 24 }}>Create Account</Text>
                <Image source={require('../assets/images/logo.png')} style={{ width: 103, height: 89, position: 'absolute', left: 135, top: 125 }} />
                <Image source={require('../assets/images/intro2.1.png')} style={{ width: '100%', height: '55%', resizeMode: 'contain', top: 210, left: -70, position: 'absolute', borderRadius: 10, shadowColor: '#000', shadowOffset: { width: 0, height: 0 }, shadowOpacity: 0.8, shadowRadius: 3 }} />
                <Image source={require('../assets/images/intro2.png')} style={{ width: '100%', height: '55%', resizeMode: 'contain', top: 240, left: 80, position: 'absolute', borderRadius: 10, shadowColor: '#000', shadowOffset: { width: 0, height: 0 }, shadowOpacity: 0.8, shadowRadius: 3 }} />
                <Text style={{ color: '#000000', top: 690, left: 0, position: 'absolute', width, height, fontSize: 11, fontWeight: 500, textAlign: 'center', lineHeight: 13, display: 'flex', }}>First you must create an account</Text>
                <Text style={{ color: '#000000', top: 704, left: 0, position: 'absolute', width, height, fontSize: 11, fontWeight: 500, textAlign: 'center', lineHeight: 13, display: 'flex', }}>to become our member</Text>
                <View style={{ position: 'absolute', bottom: 70, flexDirection: 'row', justifyContent: 'center', width, paddingHorizontal: 20 }}>
                    <TouchableOpacity onPress={goToLogIn} style={{ width: 120, height: 50, borderRadius: 30, backgroundColor: '#FFFFFF', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: '#429F9E', fontSize: 14, fontWeight: 700, textAlign: 'center' }}>{"Login Now!"}</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
            <SafeAreaView style={{ width, height, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: '#000000', top: 73, left: 0, opacity: 0.6, position: 'absolute', width, height, fontSize: 18, fontWeight: 700, textAlign: 'center', lineHeight: 22 }}>About Our App</Text>
                <Text style={{ color: '#000000', top: 101, left: 0, position: 'absolute', width, height, fontSize: 20, fontWeight: 600, textAlign: 'center', lineHeight: 24 }}>Choose Food</Text>
                <Image source={require('../assets/images/logo.png')} style={{ width: 103, height: 89, position: 'absolute', left: 135, top: 125 }} />
                <Image source={require('../assets/images/intro3.png')} style={{ width: '100%', height: '55%', resizeMode: 'contain', top: 210, left: -70, position: 'absolute', borderRadius: 10, shadowColor: '#000', shadowOffset: { width: 0, height: 0 }, shadowOpacity: 0.8, shadowRadius: 3 }} />
                <Image source={require('../assets/images/intro3.1.png')} style={{ width: '100%', height: '55%', resizeMode: 'contain', top: 240, left: 80, position: 'absolute', borderRadius: 10, shadowColor: '#000', shadowOffset: { width: 0, height: 0 }, shadowOpacity: 0.8, shadowRadius: 3 }} />
                <Text style={{ color: '#000000', top: 690, left: 0, position: 'absolute', width, height, fontSize: 11, fontWeight: 500, textAlign: 'center', lineHeight: 13, display: 'flex', }}>After create account, you can choose the food</Text>
                <Text style={{ color: '#000000', top: 704, left: 0, position: 'absolute', width, height, fontSize: 11, fontWeight: 500, textAlign: 'center', lineHeight: 13, display: 'flex', }}>you want to your cart</Text>
                <View style={{ position: 'absolute', bottom: 70, flexDirection: 'row', justifyContent: 'center', width, paddingHorizontal: 20 }}>
                    <TouchableOpacity onPress={goToLogIn} style={{ width: 120, height: 50, borderRadius: 30, backgroundColor: '#FFFFFF', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: '#429F9E', fontSize: 14, fontWeight: 700, textAlign: 'center' }}>{"Login Now!"}</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
            <SafeAreaView style={{ width, height, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: '#000000', top: 73, left: 0, opacity: 0.6, position: 'absolute', width, height, fontSize: 18, fontWeight: 700, textAlign: 'center', lineHeight: 22 }}>About Our App</Text>
                <Text style={{ color: '#000000', top: 101, left: 0, position: 'absolute', width, height, fontSize: 20, fontWeight: 600, textAlign: 'center', lineHeight: 24 }}>Delivery</Text>
                <Image source={require('../assets/images/logo.png')} style={{ width: 103, height: 89, position: 'absolute', left: 135, top: 125 }} />
                <Image source={require('../assets/images/intro4.png')} style={{ width: '100%', height: '55%', resizeMode: 'contain', top: 220, left: 5, position: 'absolute', borderRadius: 10, shadowColor: '#000', shadowOffset: { width: 0, height: 0 }, shadowOpacity: 0.8, shadowRadius: 3 }} />
                <Text style={{ color: '#000000', top: 690, left: 0, position: 'absolute', width, height, fontSize: 11, fontWeight: 500, textAlign: 'center', lineHeight: 13, display: 'flex', }}>Finally we will deliver your order</Text>
                <Text style={{ color: '#000000', top: 704, left: 0, position: 'absolute', width, height, fontSize: 11, fontWeight: 500, textAlign: 'center', lineHeight: 13, display: 'flex', }}>as fast as possible</Text>
                <View style={{ position: 'absolute', bottom: 70, flexDirection: 'row', justifyContent: 'center', width, paddingHorizontal: 20 }}>
                    <TouchableOpacity onPress={goToLogIn} style={{ width: 120, height: 50, borderRadius: 30, backgroundColor: '#FFFFFF', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: '#429F9E', fontSize: 14, fontWeight: 700, textAlign: 'center' }}>{"Login Now!"}</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </Swiper>
    )
}
export default TutorialScreen;
