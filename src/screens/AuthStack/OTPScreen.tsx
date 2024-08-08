import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Platform,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import CustomButton from '../../components/shared/CustomButton';
import PageContainer from '~/components/shared/PageContainer';
import { fontFamilies, textVariants } from '~/theme/textVariants';
import { Color } from '~/Global/GlobalStyles';
import Metrix from '~/Global/Metrix';

const OTPScreen = ({ navigation, route }) => {
  const [timer, setTimer] = useState(90); // 90 seconds
  const data = { name: '', email: '', phoneNumber: '' };
  const from = route?.params?.from;

  
  

  useEffect(() => {
    if (timer > 0) {
      const intervalId = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);

      return () => clearInterval(intervalId); // Clear interval on component unmount
    }
  }, [timer]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  const handleResend = () => {
    setTimer(90);
  };

  return (
    <PageContainer>
      <View style={styles.header}>
        <Text style={{fontFamily: fontFamilies.bold, fontSize: Metrix.customFontSize(28)}}>OTP Verification</Text>
        <Image
          style={{ marginVertical: Metrix.VerticalSize(20) }}
          source={require('../../../assets/images/icoOtp.png')}
        />
      </View>
      <Animatable.View animation="fadeInUpBig" style={styles.footer}>
        <KeyboardAvoidingView
          behavior={Platform.OS == 'ios' ? 'padding' : ''}
          style={{
            height: '100%',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <View style={{ alignItems: 'center' }}>
            <Text style={{fontFamily: fontFamilies.semiBold, fontSize: Metrix.customFontSize(16)}}>We’ve sent you a code</Text>
            <Text style={[textVariants.subHeading, { fontFamily: fontFamilies.regular }]}>
              Enter 6 digits code received on your phone
            </Text>
            <Text style={[textVariants.subHeading, { fontFamily: fontFamilies.regular }]}>
              +92 32******90
            </Text>

            <View style={{ flex: 1, alignItems: 'center' }}>
              <OTPInputView
                style={{ width: '100%', paddingTop: Metrix.VerticalSize(25) }}
                pinCount={6}
                autoFocusOnLoad
                codeInputFieldStyle={{
                  height: Metrix.VerticalSize(50),
                  width: Metrix.HorizontalSize(50),
                  color: Color.colorBlack,
                  borderRadius: 12,
                  backgroundColor: Color.colorPrimary3,
                  textAlign: 'center',
                }}
                codeInputHighlightStyle={{
                  backgroundColor: Color.colorPrimary,
                  color: Color.colorWhite,
                }}
                onCodeFilled={(code) => {
                  console.log(`Code is ${code}`);
                }}
              />

              <View style={{ width: '100%', flexDirection: 'row', marginTop: 5 }}>
                <Text style={[textVariants.Xsmall, { fontFamily: fontFamilies.medium }]}>
                  Time Remaining {formatTime(timer)}
                </Text>
              </View>

              <View style={{ width: '100%', flexDirection: 'row', marginTop: 5 }}>
                <Text style={[textVariants.Xsmall, { color: Color.colorGray_300, fontFamily: fontFamilies.medium }]}>
                  Didn’t get the code?{' '}
                </Text>
                <TouchableOpacity onPress={handleResend}>
                  <Text style={[textVariants.Xsmall, { textDecorationLine: 'underline', fontFamily: fontFamilies.semiBold }]}>
                    Resend it
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={styles.buttonContainer}>
            <CustomButton
              text="Verify"
              onPress={() => {
                console.log('click');
                navigation.navigate(from  ? 'SetupPassword' : 'CongratulationsScreen', { data, from });
              }}
            />
          
            <CustomButton  style={{marginVertical: Metrix.VerticalSize(10), backgroundColor: Color.colorBlack}} text="Back" onPress={() => navigation.goBack()} />
          </View>
        </KeyboardAvoidingView>
      </Animatable.View>
    </PageContainer>
  );
};

export default OTPScreen;

const styles = StyleSheet.create({
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  footer: {
    flex: 1,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: Metrix.HorizontalSize(20),
  },
  buttonContainer: {
    marginTop: 30,
    width: '100%',
    alignItems: 'center',
  },
});
