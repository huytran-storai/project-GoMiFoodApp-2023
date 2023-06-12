import React, { useState, useEffect } from 'react';
import { Text, Button, Image, Dimensions, View, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'
const { width, height } = Dimensions.get('window');

const Intro2 = ({ navigation }) => {
  const goToLogIn = () => {
    navigation.navigate('Welcome');
  };
  const goToIntro3 = () => {
    navigation.navigate('Intro3');
    setCurrentPage(currentPage + 1);
  };

  const [currentPage, setCurrentPage] = useState(null);
  return (
    <SafeAreaView style={{ width, height, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ color: '#000000', top: 73, left: 0, opacity: 0.6, position: 'absolute', width, height, fontSize: 18, fontWeight: 700, textAlign: 'center', lineHeight: 22 }}>About Our App</Text>
      <Text style={{ color: '#000000', top: 101, left: 0, position: 'absolute', width, height, fontSize: 20, fontWeight: 600, textAlign: 'center', lineHeight: 24 }}>Introducing</Text>
      <Image source={require('../assets/images/logo.png')} style={{ width: 103, height: 89, position: 'absolute', left: 135, top: 125 }} />
      <Image source={require('../assets/images/intro1.png')} style={{ width: '100%', height: '60%', resizeMode: 'contain', top: 220, position: 'absolute', borderRadius: 10 }} />
      <Text style={{ color: '#000000', top: 690, left: 0, position: 'absolute', width, height, fontSize: 11, fontWeight: 500, textAlign: 'center', lineHeight: 13, display: 'flex', }}>We provide food delivery service</Text>
      <Text style={{ color: '#000000', top: 702, left: 0, position: 'absolute', width, height, fontSize: 11, fontWeight: 500, textAlign: 'center', lineHeight: 13, display: 'flex', }}> We are sure you will be satisfied with our service</Text>
      <Text style={{ color: '#000000', top: 714, left: 0, position: 'absolute', width, height, fontSize: 11, fontWeight: 500, textAlign: 'center', lineHeight: 13, display: 'flex', }}>You can order the food on our app</Text>
      <View style={{ position: 'absolute', bottom: 70, flexDirection: 'row', justifyContent: 'space-between', width, paddingHorizontal: 20 }}>
        <TouchableOpacity onPress={goToLogIn} style={{ width: 70, height: 50, borderRadius: 30, backgroundColor: '#FFFFFF', justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ color: '#3F3D56', fontSize: 14, fontWeight: 700, textAlign: 'center' }}>{"Skip"}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={goToIntro3} style={{ width: 60, height: 50, borderRadius: 30, backgroundColor: '#FFFFFF', justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ color: '#429F9E', fontSize: 14, fontWeight: 700, textAlign: 'center' }}>{"Next"}</Text>
        </TouchableOpacity>
      </View>
      <View style={{ position: 'absolute', bottom: 60, flexDirection: 'row', justifyContent: 'center', width: '100%' }}>
        <Text style={{ color: '#2F2E41', fontSize: 24, fontWeight: 'bold', marginHorizontal: 5 }}>•</Text>
        <Text style={{ color: '#C4C4C4', fontSize: 24, fontWeight: 'bold', marginHorizontal: 5 }}>•</Text>
        <Text style={{ color: '#C4C4C4', fontSize: 24, fontWeight: 'bold', marginHorizontal: 5 }}>•</Text>
        <Text style={{ color: '#C4C4C4', fontSize: 24, fontWeight: 'bold', marginHorizontal: 5 }}>•</Text>
      </View>
    </SafeAreaView>
  );
};

export default Intro2;