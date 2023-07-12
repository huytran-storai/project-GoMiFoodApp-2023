import React, { useEffect } from 'react';
import { Image, Dimensions, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'
import { themeColors } from "../theme";
const { width, height } = Dimensions.get('window');

const Intro = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Tutorial');
    }, 3000);
    return () => clearTimeout(timer); 
  }, [navigation]);
  return (
    <SafeAreaView style={{ width, height, backgroundColor:themeColors.bg, justifyContent: 'center', alignItems: 'center' }}>
       <Image source={require('../assets/images/logo2.png')} style={{ width: width * 0.7, height: height * 0.3, resizeMode: 'contain', marginLeft: -15 }} />
    </SafeAreaView>
  );
};

export default Intro;
