import { View, Text, TouchableOpacity, Image, TextInput, TouchableWithoutFeedback, Keyboard, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import { signInWithEmailAndPassword } from '@firebase/auth';
import { EyeIcon, EyeSlashIcon } from 'react-native-heroicons/solid';
import { auth } from '../config/firebase';
import useAuth from '../hooks/useAuth';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
export default function LoginScreen() {
	const { isEmailVerified } = useAuth();
	const navigation = useNavigation();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [emailErrorLogin, setEmailErrorLogin] = useState('');
	const [passwordErrorLogin, setPasswordErrorLogin] = useState('');
	const [errorLogin, setErrorLogin] = useState('');
	const [isLoading, setIsLoading] = useState(true);
	const [isSecure, setIsSecure] = useState(true)
	const toggleSecureTextEntry = () => {
		setIsSecure(prevState => !prevState);
	};
	const handleSubmit = async () => {
		if (validateFields()) {
			if (email && password) {
				try {
					setIsLoading(false);
					await signInWithEmailAndPassword(auth, email, password);
				} catch (err) {
					setIsLoading(true);
					setErrorLogin('Sai mật khẩu hoặc email chưa chính xác!')
				}
			}
			if (!isEmailVerified) {
				setIsLoading(true);
				setErrorLogin('Tài khoản chưa được xác thực!')
			}
		} 
		setIsLoading(true);

	}
	const validateFields = () => {
		let isValid = true;
		if (email.trim() === '') {
			setEmailErrorLogin('Vui lòng nhập email');
			isValid = false;
		} else {
			setEmailErrorLogin('');
		}
		if (password.trim() === '') {
			setPasswordErrorLogin('Vui lòng nhập mật khẩu');
			isValid = false;
		} else {
			setPasswordErrorLogin('');
		}
		return isValid
	}
	return (
		<KeyboardAwareScrollView scrollEnabled={false}>
			<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
				<View className="flex-1 bg-white h-screen" style={{ backgroundColor: '#429F9E' }}>
					<SafeAreaView className="flex">
						<View className="flex-row justify-center">
							<Image source={require("../assets/images/logo2.png")} style={{ width: 220, height: 200 }} />
						</View>
					</SafeAreaView>
					<View style={{ borderTopLeftRadius: 50, borderTopRightRadius: 50 }} className="flex-1 bg-white px-8 pt-8">
						{!isLoading ? <View style={{
							justifyContent: 'center',
							flexDirection: 'column',
							width: '100%',
							height: '100%',
							position: 'absolute',
							bottom: 120,
							left: 30,
							zIndex: 1
						}}>
							<ActivityIndicator size="large" color="#00ff00" />
						</View> : ""}
						<View className="form space-y-2">
							<Text className="text-gray-700 ml-4">Email</Text>
							<TextInput
								className={`p-4 bg-gray-100 text-gray-700 rounded-2xl ${emailErrorLogin !== '' && 'border border-red-500'}`}
								placeholder="Email"
								value={email}
								onChangeText={value => setEmail(value)}
							/>
							{emailErrorLogin !== '' && <Text className="text-red-500 ml-4">{emailErrorLogin}</Text>}
							<View>
								<Text className="text-gray-700 ml-4">Mật khẩu</Text>
								<TextInput
									className={`relative p-4 bg-gray-100 text-gray-700 rounded-2xl ${passwordErrorLogin !== '' && 'border border-red-500'}`}
									secureTextEntry={isSecure}
									placeholder="Mật Khẩu"
									value={password}
									onChangeText={value => setPassword(value)}
								/>
								<TouchableOpacity className='absolute right-[10px] top-[30px]' onPress={toggleSecureTextEntry}>
									{isSecure ? <EyeIcon style={{ color: 'gray' }} /> : <EyeSlashIcon style={{ color: 'gray' }} />}
								</TouchableOpacity>
								{passwordErrorLogin !== '' && <Text className="text-red-500 ml-4">{passwordErrorLogin}</Text>}
							</View>
							{errorLogin !== '' && <Text className="text-red-500 ml-4">{errorLogin}</Text>}
							<TouchableOpacity className="flex items-end">
								<Text className="text-gray-700 mb-5">Quên mật khẩu?</Text>
							</TouchableOpacity>
							<TouchableOpacity onPress={handleSubmit}
								style={{ backgroundColor: '#429F9E' }}
								className="py-3 rounded-xl">
								<Text
									className="text-xl font-bold text-center text-white"
								>
									Đăng nhập
								</Text>
							</TouchableOpacity>
						</View>
						<View className="flex-row justify-center space-x-12 mt-4">
							<TouchableOpacity className="p-2 bg-gray-100 rounded-2xl">
								<Image source={require('../assets/google.png')} className="w-10 h-10" />
							</TouchableOpacity>
						</View>
						<View className="flex-row justify-center mt-7">
							<Text className="text-gray-500 font-semibold">Bạn chưa có tài khoản?</Text>
							<TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
								<Text className="font-semibold text-green-800">Đăng kí</Text>
							</TouchableOpacity>
						</View>
					</View>
				</View>
			</TouchableWithoutFeedback>
		</KeyboardAwareScrollView>
	)

}

