import React, { useState } from 'react';
import {
  View,
  Text,
  Platform,
  StyleSheet,
  ScrollView,
  StatusBar,
  KeyboardAvoidingView,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import Feather from 'react-native-vector-icons/Feather';
import { Formik } from 'formik';
import * as Yup from 'yup';

import CustomTextInput from '../../components/shared/CustomTextInput';
import CustomButton from '../../components/shared/CustomButton';
import CustomButtonBlack from '../../components/shared/CustomButtonBlack';
import { widthPercentageScale } from '~/theme/dimensions';
import { Border } from '~/Global/GlobalStyles';
import CustomPhoneNumberInput from '~/components/shared/CustomPhoneNumberInput';
import { fontFamilies, textVariants } from '~/theme/textVariants';
import PageContainer from '~/components/shared/PageContainer';
import { useTranslation } from 'react-i18next';

interface SignupScreenProps {
  navigation: {
    navigate: (screen: string, params?: object) => void;
  };
}

interface FormValues {
  name: string;
  email: string;
  phoneNumber: string;
}

const SignupScreen: React.FC<SignupScreenProps> = ({ navigation }) => {
  const { t } = useTranslation('screens', { keyPrefix: 'sign-up' });

  const SignupSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    phoneNumber: Yup.string().required('Phone number is required'),
  });
  const [countryCode, setCountryCode] = useState('US'); // Default country code

  return (
    <PageContainer>
      <View style={styles.header}>
        <Text style={[textVariants.h2, { textAlign: 'center', fontFamily: fontFamilies.bold }]}>
          Create An Account
        </Text>
        <Text style={[textVariants.mediumBold, { textAlign: 'center',fontFamily: fontFamilies.regular }]}>
          Please provide your name, mobile number {'\n'} and dob to sign up for
          this app
        </Text>
      </View>
      <Animatable.View animation="fadeInUpBig" style={styles.animatedContainer}>
        <Formik
          initialValues={{ name: '', email: '', phoneNumber: '' }}
          validationSchema={SignupSchema}
          onSubmit={(values: FormValues) => {
            navigation.navigate('OTPVerification', { data: values });
          }}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
          }) => (
            <View style={styles.formContainer}>
              <View style={styles.formInputsContainer}>
                <View style={styles.action}>
                  <CustomTextInput
                    icon="user"
                    placeholder="Full Name"
                    autoCapitalize="none"
                    onChangeText={handleChange('name')}
                    onBlur={handleBlur('name')}
                    value={values.name}
                    error={touched.name && errors.name ? errors.name : ''}
                  />
                  {/* {touched.name && errors.name && (
                        <Text style={styles.errorMsg}>{errors.name}</Text>
                      )} */}
                </View>

                <View style={styles.action}>
                  <CustomTextInput
                    icon="envelope"
                    placeholder="Enter Email"
                    autoCapitalize="none"
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={values.email}
                    error={touched.email && errors.email ? errors.email : ''}
                  />
                  {/* {touched.email && errors.email && (
                        <Text style={styles.errorMsg}>{errors.email}</Text>
                      )} */}
                </View>

                <View style={styles.action}>
                  <CustomPhoneNumberInput
                    countryCode={countryCode}
                    setCountryCode={setCountryCode}
                    error={
                      touched.phoneNumber && errors.phoneNumber
                        ? errors.phoneNumber
                        : ''
                    }
                    value={values.phoneNumber}
                    onChangeText={handleChange('phoneNumber')}
                    onBlur={handleBlur('phoneNumber')}
                  />
                </View>
              </View>
              <View style={styles.buttonContainer}>
                <CustomButton text="Sign Up" onPress={handleSubmit} />
                <CustomButtonBlack
                  text="Sign In"
                  subtitle="Already have an account?"
                  onPress={() => navigation.navigate('Login')}
                />
              </View>
            </View>
          )}
        </Formik>
      </Animatable.View>
    </PageContainer>
  );
};

const styles = StyleSheet.create({
  formInputsContainer: {},
  container: {
    flex: 1,
    backgroundColor: '#F4F4F4',
  },
  scrollView: {
    flexGrow: 1,
  },
  header: {
    // flex: 1,
    // justifyContent: 'flex-end',
    // marginVertical: 80,
    // alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  subtitle: {
    fontSize: 14,
    color: '#888',
    textAlign: 'center',
    marginVertical: 10,
  },
  animatedContainer: {
    // backgroundColor: 'red',
    paddingHorizontal: 20,
    // paddingVertical: 30,
    flex: 1,
    // height: '100%',
    justifyContent: 'space-between',

    // justifyContent: 'center',
  },
  formContainer: {
    // width: '100%',
    // backgroundColor: 'blue',
    flex: 1,
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  action: {
    flexDirection: 'row',
    marginTop: 15,
    width: '100%',
  },
  buttonContainer: {
    marginVertical: 40,
    width: '100%',
    alignItems: 'center',
  },
  // errorMsg: {
  //   color: '#FF0000',
  //   fontSize: 14,
  //   marginTop: 5,
  // },
});

export default SignupScreen;
