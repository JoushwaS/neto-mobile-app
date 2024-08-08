import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import { Text } from 'react-native';
import { Color } from '~/Global/GlobalStyles';
import { Card } from '~/components/kit';
import rewards_logos from '../../../assets/images/rewards_logos.png';
import coinIco from '../../../assets/images/coin-ico.png';
import bronzeico from '../../../assets/images/bronzeico.png';
import silverico from '../../../assets/images/silverico.png';
import goldico from '../../../assets/images/goldico.png';
import AntDesign from 'react-native-vector-icons/AntDesign';
import icoCoin from '../../../assets/images/icoCoin.png';

import PageContainer from '~/components/shared/PageContainer';
import {
  heightPercentageScale,
  widthPercentageScale,
} from '~/theme/dimensions';
import { textVariants } from '~/theme/textVariants';
import InfoCard from '~/components/shared/InfoCard';
import MultiColorProgressBar from '~/components/shared/MultiColorProgressBar';
import CustomButton from '~/components/shared/CustomButton';
import VerticalSlider from '~/components/VerticalSlider/VerticalSlider';
import DealCard from '~/components/RedeemComponents/DealCard/DealCard';
import CustomHeaderWithIcons from '~/components/shared/CustomHeader';

// Render Level List
const LevelsListRender = ({ data }) => {
  const { t } = useTranslation('screens', { keyPrefix: 'points-history' });

  return (
    <View style={{ flexDirection: 'row', width: '100%' }}>
      {data.map((levList) => (
        <View
          style={{ flexDirection: 'row', marginTop: 5, paddingHorizontal: 5 }}
        >
          <Image
            source={levList.icon}
            style={{
              width: 20, // Adjust the width as needed
              height: 20, // Adjust the height as needed
            }}
          />
          <Text style={{ paddingHorizontal: 10 }}>{t(levList.title)}</Text>
        </View>
      ))}
    </View>
  );
};
// Render Points History Item
const PointHistoryItem = ({ item }) => {
  return (
    <View style={styles.pointHistoryItem}>
      <View style={{ flexDirection: 'row', width: 180 }}>
        <AntDesign
          name={item.points > 0 ? 'arrowup' : 'arrowdown'}
          color={Color.colorBlack}
          style={styles.icon}
        />
        <Text style={[textVariants.mediumBold]}>{item.description}</Text>
      </View>
      <Text style={[textVariants.mediumBold]}>
        {item.points > 0 ? `+${item.points}` : item.points} points
      </Text>
      <Text style={[textVariants.mediumBold]}>{item.date}</Text>
    </View>
  );
};
function RedeemPoints() {
  const { t } = useTranslation('screens', { keyPrefix: 'redeem-points' });

  const dailyDealsList = [
    {
      discount: 15,
      type: 'silver',
      validUntil: '9 Dec, 2023',
      dealName: 'Daily Deal 1',
    },
    {
      discount: 15,
      type: 'gold',
      validUntil: '9 Dec, 2023',
      dealName: 'Daily Deal 2',
    },
    {
      discount: 15,
      type: 'platinum',
      validUntil: '9 Dec, 2023',
      dealName: 'Daily Deal 3',
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#FFF8E6" barStyle="dark-content" />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : null}
        style={styles.container}
      >
        <CustomHeaderWithIcons text={'Redeem Points'} back={true} />
        {/* Earned Points Card */}
        <Card radius={18} style={styles.loyaltyPointsCard}>
          <View
            style={{
              flexDirection: 'column',

              justifyContent: 'center',
              width: '67%',
              // backgroundColor: 'red',
            }}
          >
            <Text
              style={[
                textVariants.titleBar,
                { color: Color.colorWhite, paddingBottom: 10 },
              ]}
            >
              {t('earned-points')}: 300
            </Text>
            <Text
              style={[textVariants.subHeading, { color: Color.colorWhite }]}
            >
              {t('minimum') + ' 1000 ' + t('required-redeem-coins')}
            </Text>
          </View>
          <View style={styles.earnedPointsLeft}>
            <Image
              source={icoCoin}
              style={{
                width: 65, // Adjust the width as needed
                height: 65, // Adjust the height as needed
              }}
            />
            <Text
              style={[
                textVariants.title,
                { color: Color.colorWhite, padding: 5 },
              ]}
            >
              1000 XY = 100rs
            </Text>
          </View>
        </Card>
        {/* Mid Buttons */}
        <View
          style={{
            flexDirection: 'row',
            paddingVertical: 20,
            justifyContent: 'space-between',
          }}
        >
          <CustomButton
            textStyle={[textVariants.buttonText, { color: Color.colorWhite }]}
            style={styles.midBtn}
            text={t('redemption-rule')}
          />
          <CustomButton
            textStyle={[textVariants.buttonText, { color: Color.colorWhite }]}
            style={styles.midBtn}
            text={t('redeem-history')}
          />
        </View>
        {/* Daily Deals */}
        <VerticalSlider
          label={t('daily-deals')}
          data={dailyDealsList}
          card={(props) => <DealCard {...props} />}
        />
        <VerticalSlider
          label={t('hot-deals')}
          data={dailyDealsList}
          card={(props) => <DealCard {...props} />}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  midBtn: {
    width: widthPercentageScale(47),
    backgroundColor: Color.colorGray_300,

    height: 55,
  },
  earnedPointsLeft: {
    flexDirection: 'column',
    alignItems: 'center',

    paddingTop: 15,
    // width: '40%',
  },
  rewardCardItem: {
    backgroundColor: Color.colorBlack,
    width: widthPercentageScale(45),
    height: heightPercentageScale(22),
    marginHorizontal: 10,
    justifyContent: 'space-between',
    padding: 30,
  },
  loyaltyPointsCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    width: '100%',

    backgroundColor: Color.colorPrimary,

    height: heightPercentageScale(15),
  },

  pointHistoryBtn: {
    width: widthPercentageScale(28),
    height: '100%',
    // padding: 10,
    color: Color.colorWhite,
  },
  pointsInfo: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    // width: 100,
    // backgroundColor: 'red',
  },
  pointsInfoPoints: {
    // fontSize: textVariants.h1,

    color: Color.colorBlack,
  },
  pointsInfoInfo: {
    color: Color.colorBlack,
  },
  scrollView: {
    flexGrow: 1,
    // marginTop: 20,
  },
  icon: {
    fontSize: 20,
    paddingHorizontal: 3,
    // marginTop: 5,
  },
  container: {
    flex: 1,
    backgroundColor: Color.colorWhitesmoke,
    // marginTop: 50,
    paddingHorizontal: 5,
  },
  innerContainer: {
    backgroundColor: Color.colorWhitesmoke,
  },
  pointsCardContainer: {
    // paddingVertical: 15,
    padding: 8,
    height: 100,
  },
  cardContainer: {
    flexDirection: 'row',
    // alignItems: 'center',
    width: '100%',
    // height: heightPercentageScale(12),
    // margin: 0,
    // alignSelf: 'center',
    padding: 15,
    backgroundColor: Color.colorWhite,
    borderWidth: 0.3,
    borderColor: '#0000001a',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5,
  },
  transactionalCardContainer: {
    flexDirection: 'column',
    // alignItems: 'center',
    width: '100%',
    // height: heightPercentageScale(12),
    // margin: 0,
    // alignSelf: 'center',
    padding: 15,
    backgroundColor: Color.colorWhite,
    borderWidth: 0.3,
    borderColor: '#0000001a',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5,
  },
  pointHistoryItem: {
    flexDirection: 'row',
    borderTopWidth: 0.8,
    borderColor: Color.colorBlack,
    padding: 15,
    justifyContent: 'space-between',
  },
  transactionalCardRecordContainer: {
    flexDirection: 'column',
    marginVertical: 8,
    // alignItems: 'center',
    width: '100%',
    // height: heightPercentageScale(12),
    // marginTop: 10,
    // alignSelf: 'center',
    padding: 15,
    backgroundColor: Color.colorWhitesmoke,
    borderWidth: 0.8,
    borderColor: Color.colorBlack,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5,
  },
});
export default RedeemPoints;
