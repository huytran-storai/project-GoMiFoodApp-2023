import {TouchableOpacity, View, Text,Image } from 'react-native';
import React,{useState,useEffect} from 'react';
import { useNavigation } from '@react-navigation/native';
import { signOut } from '@firebase/auth';
import { auth } from '../config/firebase';
export default function ProfileUserScreen(){
    const navigation = useNavigation();
    const [displayName, setDisplayName] = useState('');
    useEffect(() => {
        const user = auth.currentUser;      
        if (user) {
          const userDisplayName = user.displayName;       
          if (userDisplayName) {
            setDisplayName(userDisplayName);
          }
        }
      }, []);
    const goToMyWallet = () => {
        navigation.navigate('Wallet');
    }
    const goToSetting = () => {
        navigation.navigate('Setting');
    }
    const goToHelpCenter = () => {
        navigation.navigate('Help');
    }
    // const goToTermOfService = () => {
    //     navigation.navigate('Login');
    // }
    const handleLogout = async () => {
        await signOut(auth);
    }
return(
<View className="w-[393px] h-[852px] relative bg-teal-500">
    <View className="w-[393px] h-[777px] left-0 top-[145px] absolute bg-white rounded-3xl" />
    <Image className="w-[68px] h-[68px] left-[162px] top-[160px] absolute rounded-full" source={require('../assets/images/Avatar.png')} /> 
    <Text className="text-center top-[232px] text-stone-900 text-[21px] font-bold">{displayName}</Text>
    <TouchableOpacity onPress={goToMyWallet} className="w-[393px] h-[46px] left-0 top-[361px] absolute bg-white border border-stone-300 justify-center items-left">
        <Image className="w-5 h-5 left-[35px] absolute" source={require('../assets/images/Wallet.png')}/>
        <Text className=" left-[60px] absolute text-black text-[13px] font-medium">{"Ví của tôi"}</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={goToSetting} className="w-[393px] h-[43px] left-0 top-[402px] absolute bg-white border border-stone-300 justify-center items-left">
        <Image className="w-5 h-5 left-[35px] absolute" source={require('../assets/images/Settings.png')}/>
        <Text className=" left-[60px] absolute text-black text-[13px] font-medium">{"Cài đặt"}</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={goToHelpCenter} className="w-[393px] h-[43px] left-0 top-[443px] absolute bg-white border border-stone-300 justify-center items-left">
        <Image className="w-5 h-5 left-[35px] absolute" source={require('../assets/images/Help.png')}/>
        <Text className=" left-[60px] absolute text-black text-[13px] font-medium">{"Trung tâm hỗ trợ"}</Text>
    </TouchableOpacity>
    <TouchableOpacity className="w-[393px] h-[43px] left-0 top-[485px] absolute border border-neutral-300 justify-center items-left">
        <Image className="w-5 h-5 left-[35px] absolute" source={require('../assets/images/Document.png')}/>
        <Text className=" left-[60px] absolute text-black text-[13px] font-medium">{"Điều khoản dịch vụ"}</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={handleLogout} className="w-[154px] h-[38px] left-[110px] top-[600px] absolute bg-teal-500 rounded-2xl justify-center items-center">
        <Text className=" absolute text-white text-[16px] font-bold">{"Đăng Xuất"}</Text> 
    </TouchableOpacity>   
</View>
)
}