import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import CustomTextInput from '../../components/shared/CustomTextInput';
import CustomButton from '../../components/shared/CustomButton';
import { fontFamilies } from '~/theme/textVariants';
import Metrix from '~/Global/Metrix';
import { Color } from '~/Global/GlobalStyles';
import Logo from '../../../assets/images/logo.png';
import { handleLogin } from '~/redux/slices/authSlice';
import { useDispatch } from 'react-redux';

const ForgotPasswordScreen = ({ navigation, route }) => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const dispatch = useDispatch()

  const from = route?.params?.from;
  // Function to calculate password strength
  const calculatePasswordStrength = (password) => {
    // Define your password strength criteria here
    if (password.length < 8) {
      return 'Weak';
    }
    if (!/[0-9!@#$%^&*()_+\-=\[\]{};':\\|,.<>/?]/.test(password)) {
      return 'Weak';
    }
    if (/\s/.test(password)) {
      return 'Weak';
    }
    // Add more criteria as needed
    return 'Strong';
  };

  // Check if passwords match
  const passwordsMatch = password === confirmPassword && password !== '';

  const handleReset = ()=> {

    if(from){
      navigation.navigate('PasswordResetSuccess');
    }
    else{
        const userToken = 'dummy-token';
        const userProfile = { name: 'John Doe', email: 'hello@gmail.com' };
  
        dispatch(handleLogin({ token: userToken, data: userProfile }));
        navigation.navigate('AppBottomStack');
    
  }
}

  return (
    <ScrollView>
      <View style={styles.mainContainer}>
        <View style={{ height: Metrix.VerticalSize(150), width: Metrix.VerticalSize(150) }}>
          <Image source={Logo} style={{ width: '100%', height: '100%' }} />
        </View>

        <View style={{ marginTop: Metrix.VerticalSize(20), width: '100%', paddingHorizontal: Metrix.HorizontalSize(20) }}>
          <Text style={styles.forgotPasswordText}>Reset Password</Text>
          <Text style={styles.forgotPasswordDetailText}>Create a password that is unique</Text>

          <View style={{ marginTop: Metrix.VerticalSize(20) }}>
            <CustomTextInput
              icon="lock"
              placeholder="Password"
              eye={true}
              onChangeText={(text) => setPassword(text)}
              value={password}
            />
          </View>

          <View style={{ marginTop: Metrix.VerticalSize(20) }}>
            <CustomTextInput
              icon="lock"
              placeholder="Confirm Password"
              eye={true}
              onChangeText={(text) => setConfirmPassword(text)}
              value={confirmPassword}
            />
          </View>

          {/* Password Strength Criteria */}
          <View style={styles.passwordValidatorContainer}>
            <View style={styles.passwordStrengthContainer}>
              {calculatePasswordStrength(password) === 'Weak' && (
                <FontAwesome
                  name="exclamation-circle"
                  color="red"
                  size={17}
                  style={styles.icon}
                />
              )}
              <Text style={[styles.passwordStrengthText, { paddingHorizontal: 10 }]}>
                Password Strength: {calculatePasswordStrength(password)}
              </Text>
            </View>

            <View style={styles.criterionContainer}>
              <FontAwesome
                name={password.length >= 8 ? 'check-circle' : 'times-circle'}
                color={password.length >= 8 ? 'green' : 'red'}
                size={16}
              />
              <Text style={password.length >= 8 ? styles.successMsg : styles.errorMsg}>
                Must be at least 8 characters
              </Text>
            </View>

            <View style={styles.criterionContainer}>
              <FontAwesome
                name={
                  /[0-9!@#$%^&*()_+\-=\[\]{};':\\|,.<>/?]/.test(password)
                    ? 'check-circle'
                    : 'times-circle'
                }
                color={
                  /[0-9!@#$%^&*()_+\-=\[\]{};':\\|,.<>/?]/.test(password)
                    ? 'green'
                    : 'red'
                }
                size={16}
              />
              <Text style={
                /[0-9!@#$%^&*()_+\-=\[\]{};':\\|,.<>/?]/.test(password)
                  ? styles.successMsg
                  : styles.errorMsg
              }>
                Must have at least one symbol or number
              </Text>
            </View>

            <View style={styles.criterionContainer}>
              <FontAwesome
                name={
                  !password || !confirmPassword || !/\s/.test(password)
                    ? 'check-circle'
                    : 'times-circle'
                }
                color={
                  !password || !confirmPassword || !/\s/.test(password)
                    ? 'green'
                    : 'red'
                }
                size={16}
              />
              <Text style={
                !password || !confirmPassword || !/\s/.test(password)
                  ? styles.successMsg
                  : styles.errorMsg
              }>
                Cannot contain spaces
              </Text>
            </View>

            <View style={styles.criterionContainer}>
              <FontAwesome
                name={
                  passwordsMatch
                    ? 'check-circle'
                    : 'times-circle'
                }
                color={
                  passwordsMatch
                    ? 'green'
                    : 'red'
                }
                size={16}
              />
              <Text style={
                passwordsMatch
                  ? styles.successMsg
                  : styles.errorMsg
              }>
                Passwords match
              </Text>
            </View>
          </View>

          <View style={{ marginTop: Metrix.VerticalSize(20) }}>
            <CustomButton text={'Reset Password'} onPress={handleReset} />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default ForgotPasswordScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    marginTop: Metrix.VerticalSize(70),
    justifyContent: 'center',
    alignItems: 'center',
  },
  forgotPasswordText: {
    color: Color.colorPrimary,
    fontFamily: fontFamilies.bold,
    fontSize: Metrix.customFontSize(28),
    textAlign: 'center',
  },
  forgotPasswordDetailText: {
    fontFamily: fontFamilies.regular,
    fontSize: Metrix.customFontSize(16),
    textAlign: 'center',
  },
  passwordValidatorContainer: {
    marginTop: Metrix.VerticalSize(20),
  },
  passwordStrengthContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Metrix.VerticalSize(10),
  },
  passwordStrengthText: {
    fontSize: Metrix.customFontSize(16),
  },
  criterionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Metrix.VerticalSize(5),
  },
  successMsg: {
    marginLeft: 5,
    color: 'green',
  },
  errorMsg: {
    marginLeft: 5,
    color: 'red',
  },
});
