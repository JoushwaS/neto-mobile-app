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
import DailyDeal from '~/components/EarnRewardsComponents/DailyDeal';

const dailyDealsList = [
  {
    dealProvider: 'Expedia',
    dealLogo: expediaDealImg,
    validUntil: ' 9 Dec, 2023',
    voucherDiscountP: 12,
    route: 'RewardInfo',
  },
  {
    dealProvider: 'Sky',
    dealLogo: skyDealImg,
    validUntil: ' 9 Dec, 2023',
    voucherDiscountP: 12,
    route: 'RewardInfo',
  },
  {
    dealProvider: 'Very',
    dealLogo: very,
    validUntil: ' 9 Dec, 2023',
    voucherDiscountP: 12,
    route: 'RewardInfo',
  },
  {
    dealProvider: 'Shein',
    dealLogo: shein,
    validUntil: ' 9 Dec, 2023',
    voucherDiscountP: 12,
    route: 'RewardInfo',
  },
  {
    dealProvider: 'John& Lewis',
    dealLogo: johnLewis,
    validUntil: ' 9 Dec, 2023',
    voucherDiscountP: 12,
    route: 'RewardInfo',
  },
];
export const EarnRewards = ({ navigation }) => {
  const dispatch = useDispatch();
  const { t } = useTranslation('screens', { keyPrefix: 'redeem-points' });

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#FFF8E6" barStyle="dark-content" />
      <CustomHeaderWithIcons text={'Earn Rewards'} back={true} />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : null}
        style={styles.containerEarnReward}
      >
        <Card radius={18} style={styles.loyaltyPointsCard}>
          <View
            style={{
              flexDirection: 'column',

              justifyContent: 'center',
              width: '55%',
              // backgroundColor: 'red',
            }}
          >
            <Text
              style={[
                textVariants.h5,
                { color: Color.colorWhite, paddingBottom: 10 },
              ]}
            >
              {t('earned-points')}: 300
            </Text>
            <Text
              style={[textVariants.extraXSmall, { color: Color.colorWhite }]}
            >
              {t('minimum') + ' 1000 ' + t('required-redeem-coins')}
            </Text>
          </View>
          <View style={styles.earnedPointsLeft}>
            <Image
              source={icoCoin}
              style={{
                width: 56, // Adjust the width as needed
                height: 56, // Adjust the height as needed
              }}
            />
            <Text
              style={[
                textVariants.extraSmall,
                { color: Color.colorWhite, padding: 5 },
              ]}
            >
              1000 Powerpoints = 100rs
            </Text>
          </View>
        </Card>

        <HorizontalSlider
          data={dailyDealsList}
          card={(props) => <DailyDeal {...props} />}
          label="Daily Deals"
        />
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
    flexDirection: 'row',
    // justifyContent: 'space-between',
    paddingHorizontal: 15,
    width: '100%',

    backgroundColor: Color.colorPrimary,

    height: heightPercentageScale(15),
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

export default EarnRewards;
