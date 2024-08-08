import React, { useState, useCallback } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  StatusBar,
  Image,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { launchImageLibrary, launchCamera } from 'react-native-image-picker';
import { Color, FontFamily, FontSize } from '../../Global/GlobalStyles';
import CustomHeaderWithIcons from '~/components/shared/CustomHeader';
import CustomButton from '~/components/shared/CustomButton';
import { Card } from '~/components/kit';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import icoCoin from '../../../assets/images/icoCoin.png';
import expediaDealImg from '../../../assets/images/expediaDealImg.png';
import skyDealImg from '../../../assets/images/skyDealImg.jpg';
import very from '../../../assets/images/very.png';
import shein from '../../../assets/images/shein.png';
import johnLewis from '../../../assets/images/johnLewis.png';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '~/redux/store';
import { textVariants } from '~/theme/textVariants';
import { useTranslation } from 'react-i18next';
import { heightPercentageScale } from '~/theme/dimensions';
import HorizontalSlider from '~/components/HorizontalSlider/HorizontalSlider';
import StyledText from '~/components/shared/StyledText';
import TabComponent from '~/components/shared/TabComponent';
const tabsList = [
  {
    title: 'Details',
    content:
      " Sure thing! Your 25% discount voucher 17.00 points is a fabulous offer that allows you to enjoy a quarter off the regular price on selected items or services. This voucher is your ticket to some sweet savings whether you're treating yourself or snagging a great deal for someone special. Happy shopping!",
  },
  { title: 'Terms & Conditions', content: <Text>Terms & Conditions</Text> },
];
export const RewardInfo = ({ route, navigation }) => {
  const { dealLogo, dealProvider, validUntil, voucherDiscountP } =
    route?.params;
  const { t } = useTranslation('screens', { keyPrefix: 'redeem-points' });
  console.log(
    'dealLogo, dealProvider, validUntil, voucherDiscountP',
    dealLogo,
    dealProvider,
    validUntil,
    voucherDiscountP
  );
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#FFF8E6" barStyle="dark-content" />
      <CustomHeaderWithIcons text={'Earn Rewards'} back={true} />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : null}
        style={styles.containerEarnReward}
      >
        <Card radius={18} style={styles.loyaltyPointsCard}>
          <Image
            source={dealLogo}
            style={{
              borderRadius: 15,
              width: '100%', // Adjust the width as needed
              height: '65%', // Adjust the height as needed
            }}
          />

          <View
            style={{
              flexDirection: 'column',
            }}
          >
            <StyledText
              variant="h4"
              fontFamily="regular"
              style={{ color: Color.colorWhite, paddingBottom: 8 }}
            >
              {voucherDiscountP + ' %discount voucher'}
            </StyledText>
            <StyledText
              variant="body"
              fontFamily="regular"
              style={{ color: Color.colorWhite }}
            >
              17.00 points
            </StyledText>
          </View>
        </Card>
        <View style={{ flex: 1 }}>
          <TabComponent tabs={tabsList} />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  containerEarnReward: { paddingHorizontal: 8 },
  earnedPointsLeft: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    // paddingTop: 15,
    // width: '40%',
  },
  loyaltyPointsCard: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: 20,
    width: '100%',

    backgroundColor: Color.colorPrimary,

    height: heightPercentageScale(40),
  },
  profileItem: {
    width: '100%',
    flexDirection: 'column',
    // paddingVertical: 10,

    //    justifyContent: 'spa',
  },
  subMenuItem: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 15,

    //    justifyContent: 'spa',
  },
  container: {
    flex: 1,
    backgroundColor: Color.colorWhitesmoke,
    // marginTop: 20,
  },
  profileSection: {
    alignItems: 'center',
    marginVertical: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: Color.colorPrimary,
  },
  icon: { marginTop: 4, color: Color.colorGray_300 },
  profileName: {
    // fontSize: FontSize.size20,
    fontFamily: FontFamily.poppinsBold,
    color: Color.colorBlack,
    // marginTop: 10,
  },
  profileJoinDate: {
    // fontSize: FontSize.size14,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.colorGray_300,
  },
  infoCard: {
    backgroundColor: Color.colorWhite,
    padding: 20,
    marginHorizontal: 20,
    borderRadius: 15,
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5,
  },
  infoText: {
    // fontSize: FontSize.size16,

    marginBottom: 10,
    // marginHorizontal: 20,
    color: Color.colorGray_300,
  },
  logoutButton: {
    backgroundColor: Color.colorPrimary,
    padding: 15,
    marginHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  logoutButtonText: {
    color: Color.colorWhite,
    // fontSize: FontSize.size16,
    fontFamily: FontFamily.poppinsBold,
  },
});

export default RewardInfo;
