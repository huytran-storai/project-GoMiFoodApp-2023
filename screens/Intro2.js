import React, {useState, useEffect } from 'react';
import { Text, Button, Image, Dimensions, View, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'
// import Swiper from 'react-native-swiper';

const { width, height } = Dimensions.get('window');

const Intro2 = ({ navigation }) => {
    const goToHomeScreen = () => {
      navigation.navigate('Home');
    };
      const goToIntro3 = () => {
        // swiperRef.scrollBy(1);
         navigation.navigate('Intro3');
         setCurrentPage(currentPage + 1);
    };

    const [currentPage, setCurrentPage] = useState(null);
    // const swiperRef = React.useRef(null);
    return (
        <SafeAreaView style={{ width, height, justifyContent: 'center', alignItems: 'center' }}>
          {/* <Swiper 
          ref={swiperRef}
          loop={false}
          shownPagination={false}
          onIndexChanged={(index) => setCurrentPage(index)}
          >
            <View style={{ flex: 1}}> */}
          <Text style={{ color: '#000000',top: 73, left: 0, opacity: 0.6,position: 'absolute', width, height, fontSize: 18, fontWeight: 700, textAlign: 'center', lineHeight: 22 }}>About Our App</Text>
          <Text style={{ color: '#000000',top: 101, left: 0,position: 'absolute', width, height, fontSize: 20, fontWeight: 600, textAlign: 'center', lineHeight: 24 }}>Introducing</Text>
          <Image source={require('../assets/images/logo.png')} style={{ width: 103, height: 89, position: 'absolute', left: 135, top: 125}}/>
           <Image source={require('../assets/images/intro1.png')} style={{ width: '100%', height: '60%', resizeMode: 'contain',top: 220, position: 'absolute', borderRadius: 10 }} />
           <Text style={{ color: '#000000',top: 690, left: 0,position: 'absolute', width, height, fontSize: 11, fontWeight: 500, textAlign: 'center', lineHeight: 13, display: 'flex', }}>We provide food delivery service</Text>
           <Text style={{ color: '#000000',top: 702, left: 0,position: 'absolute', width, height, fontSize: 11, fontWeight: 500, textAlign: 'center', lineHeight: 13, display: 'flex', }}> We are sure you will be satisfied with our service</Text>
           <Text style={{ color: '#000000',top: 714, left: 0,position: 'absolute', width, height, fontSize: 11, fontWeight: 500, textAlign: 'center', lineHeight: 13, display: 'flex', }}>You can order the food on our app</Text>
           <View style={{ position: 'absolute', bottom: 70, flexDirection: 'row', justifyContent: 'space-between', width, paddingHorizontal: 20 }}>
        <TouchableOpacity onPress={goToHomeScreen} style={{ width: 70, height: 50, borderRadius: 30, backgroundColor: '#FFFFFF', justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ color: '#3F3D56', fontSize: 14, fontWeight: 700, textAlign: 'center' }}>{"Skip"}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={goToIntro3} style={{ width: 60, height: 50, borderRadius: 30, backgroundColor: '#FFFFFF', justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ color: '#429F9E', fontSize: 14, fontWeight: 700, textAlign: 'center' }}>{"Next"}</Text>
        </TouchableOpacity>
            </View>
           {/* </View> */}
        {/* //    <View style={{ flex: 1 }}>
        // <TouchableOpacity onPress={() => swiperRef.scrollBy(-1)} style={{ width: 50, height: 50, borderRadius: 25, backgroundColor: '#007AFF', justifyContent: 'center', alignItems: 'center' }}>
        //     <Text style={{ color: '#FFFFFF', fontSize: 16, fontWeight: 'bold', textAlign: 'center' }}>{"Back"}</Text>
        // </TouchableOpacity>
        // <TouchableOpacity onPress={() => swiperRef.scrollBy(1)} style={{ width: 50, height: 50, borderRadius: 25, backgroundColor: '#007AFF', justifyContent: 'center', alignItems: 'center' }}>
        //     <Text style={{ color: '#FFFFFF', fontSize: 16, fontWeight: 'bold', textAlign: 'center' }}>{"Next"}</Text>
        // </TouchableOpacity>
        // </View>
        //    <View style={{ flex: 1 }}>
        // <TouchableOpacity onPress={goToHomeScreen} style={{ width: 50, height: 50, borderRadius: 25, backgroundColor: '#FFFFFF', justifyContent: 'center', alignItems: 'center' }}>
        //   <Text style={{ color: '#429F9E', fontSize: 14, fontWeight: 700, textAlign: 'center' }}>{"Skip"}</Text>
        // </TouchableOpacity>
        // <TouchableOpacity onPress={() => swiperRef.scrollBy(-1)} style={{ width: 50, height: 50, borderRadius: 25, backgroundColor: '#007AFF', justifyContent: 'center', alignItems: 'center' }}>
        //     <Text style={{ color: '#FFFFFF', fontSize: 16, fontWeight: 'bold', textAlign: 'center' }}>{"Back"}</Text>
        // </TouchableOpacity>
        // </View> */}
        {/* // </Swiper> */}
           {/* <View style={{ flex: 1, position: 'absolute', bottom: 70, flexDirection: 'row', justifyContent: 'space-between', width, paddingHorizontal: 20 }}> */}
       
       {/* {currentPage == 1 && (
        <View style={{ flex: 1, position: 'absolute', bottom: 70, flexDirection: 'row', justifyContent: 'space-between', width, paddingHorizontal: 20 }}>
        <TouchableOpacity onPress={() => swiperRef.scrollBy(-1)} style={{ width: 50, height: 50, borderRadius: 25, backgroundColor: '#007AFF', justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ color: '#FFFFFF', fontSize: 16, fontWeight: 'bold', textAlign: 'center' }}>{"Back"}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => swiperRef.scrollBy(1)} style={{ width: 50, height: 50, borderRadius: 25, backgroundColor: '#007AFF', justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ color: '#FFFFFF', fontSize: 16, fontWeight: 'bold', textAlign: 'center' }}>{"Next"}</Text>
        </TouchableOpacity>
        </View>
       )}
        {currentPage == 2 && (
         <View style={{ flex: 1, position: 'absolute', bottom: 70, flexDirection: 'row', justifyContent: 'space-between', width, paddingHorizontal: 20 }}>
        <TouchableOpacity onPress={goToHomeScreen} style={{ width: 50, height: 50, borderRadius: 25, backgroundColor: '#FFFFFF', justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ color: '#429F9E', fontSize: 14, fontWeight: 700, textAlign: 'center' }}>{"Skip"}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => swiperRef.scrollBy(-1)} style={{ width: 50, height: 50, borderRadius: 25, backgroundColor: '#007AFF', justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ color: '#FFFFFF', fontSize: 16, fontWeight: 'bold', textAlign: 'center' }}>{"Next"}</Text>
        </TouchableOpacity>
        </View>
        )} */}
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