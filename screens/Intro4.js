import React, {useState, useEffect } from 'react';
import { Text, Button, Image, Dimensions, View, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'

const { width, height } = Dimensions.get('window');

const Intro4 = ({ navigation }) => {
    const goToIntro5 = () => {
        navigation.navigate('Intro5');
        setCurrentPage(currentPage + 1);
      };
    const goToIntro3 = () => {
        navigation.navigate('Intro3')
        setCurrentPage(currentPage - 1);
    }

    const [currentPage, setCurrentPage] = useState(null);

    return (
        <SafeAreaView style={{ width, height, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ color: '#000000',top: 73, left: 0, opacity: 0.6,position: 'absolute', width, height, fontSize: 18, fontWeight: 700, textAlign: 'center', lineHeight: 22 }}>About Our App</Text>
          <Text style={{ color: '#000000',top: 101, left: 0,position: 'absolute', width, height, fontSize: 20, fontWeight: 600, textAlign: 'center', lineHeight: 24 }}>Choose Food</Text>
          <Image source={require('../assets/images/logo.png')} style={{ width: 103, height: 89, position: 'absolute', left: 135, top: 125}}/>
           <Image source={require('../assets/images/intro3.png')} style={{ width: '100%', height: '55%', resizeMode: 'contain',top: 210, left: -70, position: 'absolute', borderRadius: 10, shadowColor: '#000', shadowOffset: { width: 0, height: 0 }, shadowOpacity: 0.8, shadowRadius: 3  }} />
           <Image source={require('../assets/images/intro3.1.png')} style={{ width: '100%', height: '55%', resizeMode: 'contain',top: 240, left: 80, position: 'absolute', borderRadius: 10, shadowColor: '#000', shadowOffset: { width: 0, height: 0 }, shadowOpacity: 0.8, shadowRadius: 3  }} />
           <Text style={{ color: '#000000',top: 690, left: 0,position: 'absolute', width, height, fontSize: 11, fontWeight: 500, textAlign: 'center', lineHeight: 13, display: 'flex', }}>After create account, you can choose the food</Text>
           <Text style={{ color: '#000000',top: 704, left: 0,position: 'absolute', width, height, fontSize: 11, fontWeight: 500, textAlign: 'center', lineHeight: 13, display: 'flex', }}>you want to your cart</Text>
           <View style={{ position: 'absolute', bottom: 70, flexDirection: 'row', justifyContent: 'space-between', width, paddingHorizontal: 20 }}>
        <TouchableOpacity onPress={goToIntro3} style={{ width: 70, height: 50, borderRadius: 30, backgroundColor: '#FFFFFF', justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ color: '#3F3D56', fontSize: 14, fontWeight: 700, textAlign: 'center' }}>{"Previous"}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={goToIntro5} style={{ width: 60, height: 50, borderRadius: 30, backgroundColor: '#FFFFFF', justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ color: '#429F9E', fontSize: 14, fontWeight: 700, textAlign: 'center' }}>{"Next"}</Text>
        </TouchableOpacity>
            </View>
            <View style={{ position: 'absolute', bottom: 60, flexDirection: 'row', justifyContent: 'center', width: '100%' }}>
        <Text style={{ color: '#C4C4C4', fontSize: 24, fontWeight: 'bold', marginHorizontal: 5 }}>•</Text>
        <Text style={{ color: '#C4C4C4', fontSize: 24, fontWeight: 'bold', marginHorizontal: 5 }}>•</Text>
        <Text style={{ color: '#2F2E41', fontSize: 24, fontWeight: 'bold', marginHorizontal: 5 }}>•</Text>
        <Text style={{ color: '#C4C4C4', fontSize: 24, fontWeight: 'bold', marginHorizontal: 5 }}>•</Text>
             </View>
        </SafeAreaView>
      );
};

export default Intro4;