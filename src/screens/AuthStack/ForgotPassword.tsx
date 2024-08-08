import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useTheme } from 'react-native-paper';
import * as Yup from 'yup';
import CustomTextInput from '../../components/shared/CustomTextInput';
import CustomButton from '../../components/shared/CustomButton';
import { useDispatch } from 'react-redux';
import { fontFamilies } from '~/theme/textVariants';
import Metrix from '~/Global/Metrix';
import { Color } from '~/Global/GlobalStyles';
import Logo from '../../../assets/images/logo.png';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const ForgotPasswordScreen = ({ navigation }) => {
    const [email,setEmail] = useState('');
    const dispatch = useDispatch();
    const { colors } = useTheme();

  return (
  <ScrollView>
    <View style={styles.mainContainer}>
        <View style={{height: Metrix.VerticalSize(150), width: Metrix.VerticalSize(150)}}>
          <Image source={Logo} style={{width: '100%', height: '100%'}} />
        </View>

        <View style={{marginTop: Metrix.VerticalSize(20), width: '100%', paddingHorizontal: Metrix.HorizontalSize(20)}}>
            <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
            <Text style={styles.forgotPasswordDetailText}>No worries, provide us your details and reset your credentials instantly</Text>
        
            <View style={{marginTop: Metrix.VerticalSize(40)}}>
                  <CustomTextInput
                    icon={<FontAwesome name={'envelope'} size={Metrix.customFontSize(16)} color={Color.colorGray_200} />}
                    placeholder="Enter your email"
                    autoCapitalize="none"
                    onChangeText={(text)=>setEmail(text)}
                    value={email}
                  />
            </View>
           
                <View style={{marginTop: Metrix.VerticalSize(20)}}>
                    <CustomButton text={'Continue'} onPress={()=>navigation.navigate("OTPVerification", {from: 'forgotPassword'})} />
                </View>
        </View> 
    </View>
  </ScrollView>
  );
};

export default ForgotPasswordScreen;

const styles = StyleSheet.create({
mainContainer: {flex: 1, marginTop: Metrix.VerticalSize(70), justifyContent: 'center', alignItems: 'center'},
  eyeIconStyle: {
    position: 'absolute',
    zIndex: 100,
    top: Metrix.VerticalSize(25),
    right: Metrix.HorizontalSize(15),
  },
  
  forgotPasswordText: {
    color: Color.colorPrimary,
    fontFamily: fontFamilies.bold,
    fontSize: Metrix.customFontSize(28),
    textAlign: 'center'
  },
  forgotPasswordDetailText: {
    
    fontFamily: fontFamilies.regular,
    fontSize: Metrix.customFontSize(16),
    textAlign: 'center'
  }
});
