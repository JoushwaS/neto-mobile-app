import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import CustomTextInput from '../../components/shared/CustomTextInput';
import CustomButton from '../../components/shared/CustomButton';
import CustomButtonBlack from '../../components/shared/CustomButtonBlack';
import { textVariants } from '~/theme/textVariants';
import PageContainer from '~/components/shared/PageContainer';
import { widthPercentageScale } from '~/theme/dimensions';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import CustomDropdown from '~/components/shared/CustomDropDown';
import mcbLogo from '../../../assets/images/mcbBankLogo.png';
import alliedBankLogo from '../../../assets/images/alliedBankLogo.png';
import hblBankLogo from '../../../assets/images/hblBankLogo.png';
import nbpBankLogo from '../../../assets/images/nbpBankLogo.png';
import meezanBankLogo from '../../../assets/images/meezanBankLogo.png';
import bankIcon from '../../../assets/images/bankIcon.png';
interface AddPaymentCardScreenProps {
  navigation: {
    navigate: (screen: string, params?: object) => void;
  };
}

interface FormValues {
  name: string;
  cardNumber: string;
  expiration: string;
  cvv: string;
  zipCode: string;
  cardNickName: string;
  bank: string;
}

const AddPaymentCardScreen: React.FC<AddPaymentCardScreenProps> = ({
  navigation,
}) => {
  const AddCardSchema = Yup.object().shape({
    bank: Yup.string().required('Bank is required'),

    name: Yup.string().required('Name is required'),
    cardNickName: Yup.string().required('Card Nick Name is required'),
    cardNumber: Yup.string().required('Card number is required'),
    expiration: Yup.string().required('Expiration date is required'),
    cvv: Yup.string().required('CVV is required'),
    zipCode: Yup.string().required('Zip code is required'),
  });
  const [selectedBank, setSelectedBank] = useState<{
    key: string;
    label: string;
    logo: any;
  } | null>(null);

  const banks = [
    { key: 'mcb', label: 'Muslim Commercial Bank', logo: mcbLogo },
    { key: 'hbl', label: 'Habib Bank Limited', logo: hblBankLogo },
    { key: 'nbp', label: 'National Bank Pakistan', logo: nbpBankLogo },
    { key: 'allied', label: 'Allied Bank', logo: alliedBankLogo },
    { key: 'meezan', label: 'Meezan Bank', logo: meezanBankLogo },
  ];

  return (
    <PageContainer style={{ marginTop: 20 }}>
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          style={{
            flexDirection: 'column',

            justifyContent: 'center',

            // backgroundColor: 'red',
          }}
        >
          <FontAwesome6
            name="arrow-left"
            color="black"
            style={styles.bellIcon}
          />
        </TouchableOpacity>
        <View style={styles.header}>
          <Text style={[textVariants.h3, { textAlign: 'center' }]}>
            Add Payment Card
          </Text>
          <Text
            style={[
              textVariants.mediumBold,
              { marginTop: 15, textAlign: 'center' },
            ]}
          >
            Scan your card or Manually enter your card details.
          </Text>
        </View>
      </View>
      <Formik
        initialValues={{
          name: '',
          cardNumber: '',
          expiration: '',
          cvv: '',
          zipCode: '',
          cardNickName: '',
          bank: '',
        }}
        validationSchema={AddCardSchema}
        onSubmit={(values: FormValues) => {
          // Handle card addition
          console.log('values>>', values);
          navigation.navigate('CardCongratulationScreen');
        }}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
          setFieldValue,
        }) => (
          <View style={styles.formContainer}>
            <View>
              <View style={styles.action}>
                <CustomTextInput
                  icon="user"
                  placeholder="Name"
                  autoCapitalize="none"
                  onChangeText={handleChange('name')}
                  onBlur={handleBlur('name')}
                  value={values.name}
                  error={touched.name && errors.name ? errors.name : ''}
                />
              </View>
              <View style={styles.action}>
                <CustomDropdown
                  placeholder="Select Bank"
                  data={banks}
                  defaultLogo={bankIcon}
                  onSelect={(item) => {
                    setSelectedBank(item);
                    setFieldValue('bank', item.label);
                  }}
                  error={errors.bank}
                  touched={touched.bank}
                />
              </View>
              <View style={styles.action}>
                <CustomTextInput
                  icon="credit-card"
                  placeholder="Card Number"
                  keyboardType="numeric"
                  maxLength={18}
                  autoCapitalize="none"
                  onChangeText={handleChange('cardNumber')}
                  onBlur={handleBlur('cardNumber')}
                  value={values.cardNumber}
                  error={
                    touched.cardNumber && errors.cardNumber
                      ? errors.cardNumber
                      : ''
                  }
                />
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 15,
                  //   width: '100%',
                }}
              >
                <CustomTextInput
                  icon="calendar"
                  placeholder="Expiration"
                  autoCapitalize="none"
                  style={{ width: widthPercentageScale(45) }}
                  onChangeText={handleChange('expiration')}
                  onBlur={handleBlur('expiration')}
                  value={values.expiration}
                  error={
                    touched.expiration && errors.expiration
                      ? errors.expiration
                      : ''
                  }
                />
                <CustomTextInput
                  icon="lock"
                  placeholder="CVV"
                  maxLength={3}
                  keyboardType="numeric"
                  autoCapitalize="none"
                  style={{ width: widthPercentageScale(45) }}
                  onChangeText={handleChange('cvv')}
                  onBlur={handleBlur('cvv')}
                  value={values.cvv}
                  error={touched.cvv && errors.cvv ? errors.cvv : ''}
                />
              </View>
              <View style={styles.action}>
                <CustomTextInput
                  icon="map-pin"
                  keyboardType="numeric"
                  maxLength={5}
                  placeholder="Zip Code"
                  autoCapitalize="none"
                  onChangeText={handleChange('zipCode')}
                  onBlur={handleBlur('zipCode')}
                  value={values.zipCode}
                  error={
                    touched.zipCode && errors.zipCode ? errors.zipCode : ''
                  }
                />
              </View>
              <View style={styles.action}>
                <CustomTextInput
                  icon="credit-card"
                  placeholder="Card Nick Name"
                  autoCapitalize="none"
                  onChangeText={handleChange('cardNickName')}
                  onBlur={handleBlur('cardNickName')}
                  value={values.cardNickName}
                  error={
                    touched.cardNickName && errors.cardNickName
                      ? errors.cardNickName
                      : ''
                  }
                />
              </View>
            </View>
            <View style={styles.buttonContainer}>
              <CustomButton text="Confirm" onPress={handleSubmit} />
              <CustomButtonBlack
                text="Add Card Later"
                onPress={() => navigation.navigate('Home')}
              />
            </View>
          </View>
        )}
      </Formik>
    </PageContainer>
  );
};

const styles = StyleSheet.create({
  formInputsContainer: {},
  bellIcon: {
    fontSize: 22,
    // marginRight: 10,
  },
  header: {
    // marginBottom: 20,
    marginHorizontal: 15,
    width: widthPercentageScale(80),
  },
  formContainer: {
    // flex: 1,
    justifyContent: 'space-between',
    height: '90%',
    // paddingVertical: 10,
  },
  action: {
    flexDirection: 'row',
    marginTop: 20,
    width: '100%',
  },
  actionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
    width: '100%',
  },
  buttonContainer: {
    // marginTop: 30,
    // backgroundColor: 'red',
    width: '100%',
    alignItems: 'center',
  },
});

export default AddPaymentCardScreen;
