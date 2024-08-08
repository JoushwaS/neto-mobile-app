import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert, Image, ScrollView } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useTheme } from 'react-native-paper';
import Entypo from 'react-native-vector-icons/Entypo';
import CustomTextInput from '../../components/shared/CustomTextInput';
import CustomButton from '../../components/shared/CustomButton';
import { useDispatch } from 'react-redux';
import { handleLogin } from '~/redux/slices/authSlice';
import { fontFamilies } from '~/theme/textVariants';
import Metrix from '~/Global/Metrix';
import Logo from '../../../assets/images/logo.png';
import facebook from '../../../assets/images/facebook.png';
import google from '../../../assets/images/google.png';
import apple from '../../../assets/images/apple.png';
import { Color } from '~/Global/GlobalStyles';

const LoginScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const { colors } = useTheme();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };
  const validateForm = () => {
    const emailIsValid = validateEmail(email);
    const passwordIsValid = password.length >= 8;
  
    setEmailError(emailIsValid ? '' : 'Invalid email');
    setPasswordError(passwordIsValid ? '' : 'Password must be at least 8 characters');
  
    return emailIsValid && passwordIsValid;
  };
  

  const loginHandle = async () => {
    if (!validateForm()) return;

    try {
      const userToken = 'dummy-token';
      const userProfile = { name: 'John Doe', email };

      dispatch(handleLogin({ token: userToken, data: userProfile }));
      navigation.navigate('AppBottomStack');
    } catch (error) {
      Alert.alert(
        'Login Failed!',
        'An error occurred during login. Please try again.',
        [{ text: 'OK' }]
      );
    }
  };

  return (
    <ScrollView>
      <View style={styles.mainContainer}>
        <View style={{ height: Metrix.VerticalSize(150), width: Metrix.VerticalSize(150) }}>
          <Image source={Logo} style={{ width: '100%', height: '100%' }} />
        </View>

        <View style={{ marginTop: Metrix.VerticalSize(50), width: '100%', paddingHorizontal: Metrix.HorizontalSize(20) }}>
            <View style={{ marginVertical: Metrix.VerticalSize(10) }}>
              <CustomTextInput
                icon={<Entypo name={'user'} size={Metrix.customFontSize(16)} color={Color.colorGray_200} />}
                placeholder="Enter your email"
                autoCapitalize="none"
                onChangeText={(text) => setEmail(text)}
                value={email}
                error={emailError}
              />
            </View>
            <View style={{ marginVertical: Metrix.VerticalSize(5) }}>
              <CustomTextInput
                icon="lock"
                placeholder="Your Password"
                eye={true}
                autoCapitalize="none"
                onChangeText={(text) => setPassword(text)}
                value={password}
                error={passwordError}
              />
            </View>

            <TouchableOpacity onPress={() => navigation.navigate("ForgotPassword")} style={{ alignSelf: 'flex-end' }} activeOpacity={0.7}>
              <Text
                style={{ color: Color.colorPrimary, fontFamily: fontFamilies.semiBold, fontSize: Metrix.customFontSize(12) }}
              >
                Forgot password?
              </Text>
            </TouchableOpacity>

            <View style={{ marginTop: Metrix.VerticalSize(30) }}>
              <CustomButton text={'Login'} onPress={loginHandle} />
            </View>

          <View style={{ marginVertical: Metrix.VerticalSize(20) }}>
            <View style={styles.orContainer}>
              <View style={styles.line} />
              <Text style={styles.or}>Or sign in with</Text>
              <View style={styles.line} />
            </View>
          </View>

          <View style={styles.socialBtnContainer}>
            <TouchableOpacity activeOpacity={0.7} style={styles.socialBtn}>
              <Image source={facebook} style={styles.socialImage} />
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.7} style={styles.socialBtn}>
              <Image source={google} style={styles.socialImage} />
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.7} style={styles.socialBtn}>
              <Image source={apple} style={styles.socialImage} />
            </TouchableOpacity>
          </View>

          <View style={styles.loginTextContainer}>
            <Text style={styles.loginText}>Don't have an account?  </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
              <Text style={{ ...styles.loginText, color: Color.colorPrimary, fontFamily: fontFamilies.semiBold }}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  mainContainer: { flex: 1, marginTop: Metrix.VerticalSize(70), justifyContent: 'center', alignItems: 'center' },
  eyeIconStyle: {
    position: 'absolute',
    zIndex: 100,
    top: Metrix.VerticalSize(25),
    right: Metrix.HorizontalSize(15),
  },
  orContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  line: {
    backgroundColor: '#CFDFE2',
    height: Metrix.VerticalSize(1),
    width: '32%'
  },
  or: {
    fontFamily: fontFamilies.regular,
    fontSize: Metrix.customFontSize(12),
    marginHorizontal: Metrix.HorizontalSize(10)
  },
  socialBtnContainer: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  socialBtn: { width: '32%', backgroundColor: Color.colorWhite, justifyContent: 'center', alignItems: 'center', paddingVertical: Metrix.VerticalSize(10), borderRadius: 8 },
  socialImage: { height: Metrix.VerticalSize(25), width: Metrix.VerticalSize(25) },
  loginTextContainer: {
    marginVertical: Metrix.VerticalSize(20),
    marginBottom: Metrix.VerticalSize(50),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  loginText: {
    fontFamily: fontFamilies.regular,
    fontSize: Metrix.customFontSize(12),
  }
});
