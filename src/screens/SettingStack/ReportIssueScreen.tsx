import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
  Image,
} from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Color, FontFamily, FontSize } from '../../Global/GlobalStyles';
import CustomHeaderWithIcons from '~/components/shared/CustomHeader';
import CustomButton from '~/components/shared/CustomButton';
import CustomAreaInput from '~/components/shared/CustomAreaInput';
import { heightPercentageScale } from '~/theme/dimensions';
import CustomModal from '~/components/shared/CustomModal';
import { backgroundColor, color } from '@shopify/restyle';
import correctBadge from '../../../assets/images/correctBadge.png';
import StyledText from '~/components/shared/StyledText';
import { moderateScale } from 'react-native-size-matters';
const validationSchema = Yup.object().shape({
  issue: Yup.string()
    .required('Issue description is required')
    .min(10, 'Issue description must be at least 10 characters'),
});

const ReportIssueScreen = ({ navigation }) => {
  const [isVisible, setisVisible] = useState(false);

  const handleSubmit = (values) => {
    console.log('Form values:', values);
    setisVisible(true);
    // You can dispatch an action or call an API here
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#FFF8E6" barStyle="dark-content" />
      <CustomHeaderWithIcons
        showNotification={false}
        text={'Report an Issue'}
        back={true}
      />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.contentContainer}
      >
        <Formik
          initialValues={{ issue: '' }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
          }) => (
            <View style={styles.form}>
              <CustomAreaInput
                placeholder="Report your issue here ......"
                autoCapitalize="none"
                inputStyle={{ height: heightPercentageScale(60) }}
                onChangeText={handleChange('issue')}
                onBlur={handleBlur('issue')}
                value={values.issue}
                error={touched.issue && errors.issue ? errors.issue : ''}
              />
              <CustomButton text={'Submit'} onPress={handleSubmit} />
            </View>
          )}
        </Formik>

        <CustomModal
          style={{
            // height: heightPercentageScale(30),
            backgroundColor: Color.colorPrimary,
          }}
          isVisible={isVisible}
          onClose={() => {
            setisVisible(false);
          }}
          title="My Custom Modal"
        >
          <View style={styles.modalContainer}>
            <Image source={correctBadge} style={{ marginTop: 10 }} />

            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <StyledText variant="body" style={{ color: Color.colorWhite }}>
                Your report has been filed!
              </StyledText>
              <StyledText variant="title" style={{ color: Color.colorWhite }}>
                An associate will contact you within 48 hours.
              </StyledText>
            </View>

            <CustomButton
              onPress={() => setisVisible(false)}
              style={{
                width: '50%',
                marginTop: 10,
                backgroundColor: Color.colorWhite,
              }}
              textStyle={{
                color: Color.colorPrimary,
                fontSize: moderateScale(15),
              }}
              text={'Okay'}
            ></CustomButton>
          </View>
        </CustomModal>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',

    // padding: 2,
    // zIndex: 1000,
  },
  container: {
    flex: 1,
    backgroundColor: Color.colorWhitesmoke,
    paddingHorizontal: 15,
  },
  contentContainer: {
    flex: 1,
    backgroundColor: Color.colorWhitesmoke,
    justifyContent: 'center',
  },
  form: {
    flex: 1,
    justifyContent: 'space-around',
  },
});

export default ReportIssueScreen;
