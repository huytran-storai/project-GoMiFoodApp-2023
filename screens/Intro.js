import React, {useState, useEffect } from 'react';
import { Text, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'
import moment from 'moment';

const Intro = ({ navigation }) => {
  const [countdown, setCountdown] = useState('02:00');

  useEffect(() => {
    let remainingTime = moment.duration(countdown, 'mm:ss');
    
    const timer = setInterval(() => {
      remainingTime = remainingTime.subtract(1, 'seconds');
      const formattedTime = moment.utc(remainingTime.asMilliseconds()).format('mm:ss');

      setCountdown(formattedTime);
    }, 1000);

    setTimeout(() => {
      clearInterval(timer);
      navigation.navigate('Home');
    }, 2000);

    return () => {
      clearInterval(timer);
    };
  }, [countdown, navigation]);


  return (
    <SafeAreaView>
      <Text>GOMIFOOD</Text>
    </SafeAreaView>
  );
};

export default Intro;
