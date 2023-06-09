import React, {useState, useEffect } from 'react';
import { Text, Button, Image, Dimensions, View, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'

const { width, height } = Dimensions.get('window');

const Intro3 = ({ navigation }) => {
    const goToIntro4 = () => {
        navigation.navigate('Intro4');
        setCurrentPage(currentPage + 1);
      };
    const goToIntro2 = () => {
        navigation.navigate('Intro2');
        setCurrentPage(currentPage - 1);
    }

    const [currentPage, setCurrentPage] = useState(1);

    return (
        <SafeAreaView style={{ width, height, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ color: '#000000',top: 73, left: 0, opacity: 0.6,position: 'absolute', width, height, fontSize: 18, fontWeight: 700, textAlign: 'center', lineHeight: 22 }}>About Our App</Text>
          <Text style={{ color: '#000000',top: 101, left: 0,position: 'absolute', width, height, fontSize: 20, fontWeight: 600, textAlign: 'center', lineHeight: 24 }}>Create Account</Text>
          <Image source={require('../assets/images/logo.png')} style={{ width: 103, height: 89, position: 'absolute', left: 135, top: 125}}/>
           <Image source={require('../assets/images/intro2.1.png')} style={{ width: '100%', height: '55%', resizeMode: 'contain',top: 210, left: -70, position: 'absolute', borderRadius: 10, shadowColor: '#000', shadowOffset: { width: 0, height: 0 }, shadowOpacity: 0.8, shadowRadius: 3  }} />
           <Image source={require('../assets/images/intro2.png')} style={{ width: '100%', height: '55%', resizeMode: 'contain',top: 240, left: 80, position: 'absolute', borderRadius: 10, shadowColor: '#000', shadowOffset: { width: 0, height: 0 }, shadowOpacity: 0.8, shadowRadius: 3  }} />
           <Text style={{ color: '#000000',top: 690, left: 0,position: 'absolute', width, height, fontSize: 11, fontWeight: 500, textAlign: 'center', lineHeight: 13, display: 'flex', }}>First you must create an account</Text>
           <Text style={{ color: '#000000',top: 704, left: 0,position: 'absolute', width, height, fontSize: 11, fontWeight: 500, textAlign: 'center', lineHeight: 13, display: 'flex', }}>to become our member</Text>
           <View style={{ position: 'absolute', bottom: 70, flexDirection: 'row', justifyContent: 'space-between', width, paddingHorizontal: 20 }}>
        <TouchableOpacity onPress={goToIntro2} style={{ width: 70, height: 50, borderRadius: 30, backgroundColor: '#FFFFFF', justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ color: '#3F3D56', fontSize: 14, fontWeight: 700, textAlign: 'center' }}>{"Previous"}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={goToIntro4} style={{ width: 60, height: 50, borderRadius: 30, backgroundColor: '#FFFFFF', justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ color: '#429F9E', fontSize: 14, fontWeight: 700, textAlign: 'center' }}>{"Next"}</Text>
        </TouchableOpacity>
            </View>
            <View style={{ position: 'absolute', bottom: 60, flexDirection: 'row', justifyContent: 'center', width: '100%' }}>
        <Text style={{ color: currentPage === 1 ? '#000000' : '#C4C4C4', fontSize: 24, fontWeight: 'bold', marginHorizontal: 5 }}>•</Text>
        <Text style={{ color: currentPage === 2 ? '#000000' : '#C4C4C4', fontSize: 24, fontWeight: 'bold', marginHorizontal: 5 }}>•</Text>
        <Text style={{ color: currentPage === 3 ? '#000000' : '#C4C4C4', fontSize: 24, fontWeight: 'bold', marginHorizontal: 5 }}>•</Text>
        <Text style={{ color: currentPage === 3 ? '#000000' : '#C4C4C4', fontSize: 24, fontWeight: 'bold', marginHorizontal: 5 }}>•</Text>
             </View>
        </SafeAreaView>
      );
};

export default Intro3;