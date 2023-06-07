import React, {useState, useEffect } from 'react';
import { Text, Button, Image, Dimensions, View, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'
import moment from 'moment';

const { width, height } = Dimensions.get('window');

const Intro = ({ navigation }) => {
  const goToHomeScreen = () => {
    navigation.navigate('Home');
  };
  // const [countdown, setCountdown] = useState('05:00');

  // useEffect(() => {
  //   let remainingTime = moment.duration(countdown, 'mm:ss');
    
  //   const timer = setInterval(() => {
  //     remainingTime = remainingTime.subtract(1, 'seconds');
  //     const formattedTime = moment.utc(remainingTime.asMilliseconds()).format('mm:ss');

  //     setCountdown(formattedTime);
  //   }, 1000);

  //   setTimeout(() => {
  //     clearInterval(timer);
  //     navigation.navigate('Home');
  //   }, 5000);

  //   return () => {
  //     clearInterval(timer);
  //   };
  // }, [countdown, navigation]);


  return (
    <SafeAreaView style={{ width, height, backgroundColor:'#429F9E', justifyContent: 'center', alignItems: 'center' }}>
       <Image source={require('../assets/images/logo2.png')} style={{ width: width * 0.7, height: height * 0.3, resizeMode: 'contain', marginLeft: -15 }} />
       {/* <Button title="Continue" onPress={goToHomeScreen} /> */}
       <View style={{ borderWidth: 2, borderColor: '#FFFFFF', padding: 10, borderRadius: 5 }}>
      <TouchableOpacity onPress={goToHomeScreen}>
        <Text style={{ color: '#FFFFFF', fontSize: 16, fontWeight: 'bold', textAlign: 'center' }}>Continue</Text>
      </TouchableOpacity>
    </View>
    </SafeAreaView>
  );
};

export default Intro;
