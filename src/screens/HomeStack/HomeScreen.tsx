import React, { useCallback, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  StatusBar,
  Image,
  Text,
  TouchableOpacity,
  FlatList,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';

import { Color, FontFamily, FontSize } from '../../Global/GlobalStyles';
import { Card, DateTime, Fonts } from '~/components/kit';
import {
  heightPercentageScale,
  widthPercentageScale,
} from '~/theme/dimensions';
import expedia from '../../../assets/images/expedia.png';
import icoEarnreward from '../../../assets/images/reward.png';
import very from '../../../assets/images/very.png';
import sky from '../../../assets/images/sky.png';
import icoRedeem from '../../../assets/images/cash.png';
import icoMycards from '../../../assets/images/credit-card.png';
import { useTranslation } from 'react-i18next';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import { fontFamilies, textVariants } from '~/theme/textVariants';
import CustomButton from '~/components/shared/CustomButton';
import { moderateScale } from 'react-native-size-matters';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import CustomHeaderWithIcons from '~/components/shared/CustomHeader';
import TransactionalCard from '~/components/shared/TransactionalCard';
import Metrix from '~/Global/Metrix';

export const HEADER_HEIGHT = 70;

export const HomeScreen = ({ navigation }) => {
  const [transactionalData, settransactionalData] = useState([
    {
      id: '1',
      points: '0.78',
      minus: true,
      date: '07-02-2024',
      amount: '26.60',
      title: 'U.S. POLO ASSN.',
    },
    {
      id: '2',
      points: '105',
      date: '07-02-2024',
      amount: '14.40',
      title: 'Techmart',
    },
    {
      id: '3',
      points: '0.78',
      date: '07-02-2024',
      amount: '26.60',
      title: 'U.S. POLO ASSN.',
    },
    {
      id: '4',
      points: '105',
      date: '07-02-2024',
      amount: '14.40',
      title: 'Techmart',
    },
    {
      id: '5',
      points: '0.78',
      minus: true,
      date: '07-02-2024',
      amount: '26.60',
      title: 'U.S. POLO ASSN.',
    },
  ]);
  const [showFilterModal, setShowFilterModal] = useState<boolean>(false);
  const [scrollTo, setScrollTo] = useState<boolean>(false);
  const { t } = useTranslation('screens', { keyPrefix: 'home-screen' });
  const today = new Date();
  const flatListRef = React.useRef<FlatList>(null);
  const rewardsList = [
    {
      id: '1',
      icon: icoEarnreward,
      title: t('earn-rewards'),
      route: 'EarnRewards',
      stack: 'RewardStack',
    },
    {
      id: '2',
      icon: icoRedeem,
      title: t('redeem-rewards'),
      route: '',
      stack: '',
    },
    {
      id: '3',
      icon: icoMycards,
      title: t('my-cards'),
      route: '',
      stack: '',
    },
  ];

  const offersList = [
    {
      id: '1',
      icon: expedia,
      title: 'Expedia',
      route: '/',
    },
    {
      id: '2',
      icon: sky,
      title: 'Sky',
      route: '/',
    },
    {
      id: '3',
      icon: very,
      title: 'Very',
      route: '/',
    },
  ];
  // Get the day, month, and year
  const day = String(today.getDate()).padStart(2, '0');
  const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are zero-based
  const year = today.getFullYear();

  // Format the date as dd/mm/yyyy
  const formattedDate = `${day}/${month}/${year}`;
  const keyExtractor = useCallback((_, index) => index.toString(), []);

  const renderItem = useCallback(
    ({ item }) => (
      <>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {
            if (item.route != '' && item.stack != '') {
              // Correct navigation path
              navigation.navigate(item.stack, { screen: item.route });
              // navigation.navigate(item.route);
            }
          }}
        >
          <Card radius={14} style={styles.rewardCardItem}>
            <Image
              source={item.icon}
              style={{
                width: 30,
                height: 30,
              }}
            />
            <Text style={[styles.TopCardTitle, { marginTop: 12 }]}>
              {item.title}
            </Text>
          </Card>
        </TouchableOpacity>
      </>
    ),
    []
  );

  const renderItemOffers = useCallback(
    ({ item }) => (
      <View style={{ paddingTop: 30 }}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => console.log('clicked')}
        >
          <Card radius={14} style={styles.offerCardItem}>
            <Image
              source={item.icon}
              style={{
                position: 'absolute',
                top: -15,
                zIndex: 10,
                width: 100,
                height: 60,
                borderRadius: 8,
              }}
            />
            <Text
              style={[
                styles.TopCardTitle,
                { textAlign: 'center', marginTop: 40, fontSize: 16 },
              ]}
            >
              {item.title}
            </Text>

            <Text
              style={{
                fontFamily: fontFamilies.light,
                fontSize: 12,
                color: Color.colorWhitesmoke,
              }}
            >
              Valid Until 9 Dec, 2023
            </Text>
            <View
              style={{
                height: 0.35,
                backgroundColor: Color.colorWhite,
                width: '100%',
                marginTop: 20,
              }}
            />
            <View
              style={{
                flexDirection: 'row',
                marginTop: 5,
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <Text
                style={[
                  {
                    fontSize: 16,
                    fontFamily: fontFamilies.bold,
                    color: Color.colorWhite,
                  },
                ]}
              >
                12%
              </Text>

              <Text
                style={[
                  {
                    fontSize: 10,
                    fontFamily: fontFamilies.medium,
                    color: Color.colorWhite,
                  },
                ]}
              >
                {'   '} Voucher Discount
              </Text>
            </View>
          </Card>
        </TouchableOpacity>
      </View>
    ),
    []
  );
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#FFF8E6" barStyle="dark-content" />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : null}
        style={styles.container}
      >
        <CustomHeaderWithIcons text={'Welcome'} />
        <TouchableOpacity activeOpacity={0.8} style={styles.needHelpBtn}>
          <Text style={styles.needHelpText}>
            <AntDesign name={'questioncircle'} /> Need Help
          </Text>
        </TouchableOpacity>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollView}
        >
          {/* Points Card Section */}
          <View style={styles.pointsCardContainer}>
            <Card
              style={styles.cardContainer}
              outlined={true}
              borderColor={'#0000001a'}
              radius={18}
            >
              <View style={styles.pointsInfo}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',

                    width: '100%',
                  }}
                >
                  <View
                    style={{
                      marginTop: 5,
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}
                  >
                    <Text
                      style={[
                        {
                          fontSize: 32,
                          fontFamily: fontFamilies.extraBold,
                          color: Color.colorBlack,
                        },
                      ]}
                    >
                      1.200{' '}
                    </Text>

                    <Text
                      style={[
                        {
                          color: Color.colorBlack,
                          marginTop: 5,
                          fontFamily: FontFamily.poppinsBold,
                          fontSize: 12,
                        },
                      ]}
                    >
                      {t('points')}
                    </Text>
                  </View>
                  <CustomButton
                    text={t('points-history-btn')}
                    postIcon={
                      <FontAwesome
                        name={'chevron-right'}
                        color={Color.colorWhite}
                        size={12}
                        style={{ marginLeft: 5 }}
                      />
                    }
                    style={styles.pointHistoryBtn}
                    onPress={() => navigation.navigate('pointHistory')}
                    textStyle={[
                      // { ...textVariants.title },
                      {
                        color: Color.colorWhite,
                        fontFamily: fontFamilies.medium,
                        fontSize: 13,
                      },
                    ]}
                  />
                </View>
              </View>
            </Card>
          </View>

          {/* Rewards Section */}
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',

              marginTop: 10,
              marginBottom: 20,
            }}
          >
            <FlatList
              ref={flatListRef}
              horizontal
              data={rewardsList}
              renderItem={renderItem}
              keyExtractor={keyExtractor}
              showsHorizontalScrollIndicator={false}
            />
          </View>

          <View
            style={{
              flexDirection: 'row',
              width: '100%',
              paddingHorizontal: Metrix.HorizontalSize(20),
              justifyContent: 'space-between',
              paddingVertical: 8,
            }}
          >
            <Text style={styles.transactionTitleStyle}>
              {t('transaction-detail-header')}
            </Text>
            <TouchableOpacity>
              <Text
                style={[
                  styles.transactionTitleStyle,
                  { fontSize: 12, fontFamily: fontFamilies.medium },
                ]}
              >
                View All{' '}
                <FontAwesome
                  name={'chevron-right'}
                  size={Metrix.customFontSize(12)}
                />
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
              width: '100%',
              paddingHorizontal: Metrix.HorizontalSize(30),
              justifyContent: 'space-between',
              marginTop: Metrix.VerticalSize(-5),
            }}
          >
            <Text
              style={[
                styles.transactionTitleStyle,
                { fontSize: 12, fontFamily: fontFamilies.regular },
              ]}
            >
              {'February, 2022'}
            </Text>

            {/* transactional records */}
          </View>

          {/* Transactional Details Section */}
          <View style={{ padding: 10 }}>
            <Card
              style={styles.transactionalCardContainer}
              outlined={true}
              borderColor={'#0000001a'}
              radius={20}
            >
              {/* Transactioal detail header */}

              <View
                style={{
                  flexDirection: 'column',
                  width: '100%',
                  justifyContent: 'space-between',
                }}
              >
                {transactionalData?.map((trItem, index) => (
                  <TransactionalCard
                    data={trItem}
                    showSaperator={index < transactionalData?.length - 1}
                  />
                ))}
              </View>
            </Card>
          </View>

          <View
            style={{
              flexDirection: 'row',
              width: '100%',
              paddingHorizontal: 10,
              marginVertical: 20,
              justifyContent: 'space-between',
            }}
          >
            <Text style={[styles.transactionTitleStyle, { fontSize: 18 }]}>
              {'Featured Offers'}
            </Text>
            <TouchableOpacity>
              <Text
                style={[
                  styles.transactionTitleStyle,
                  { fontSize: 14, fontFamily: fontFamilies.medium },
                ]}
              >
                View All <FontAwesome name={'chevron-right'} />
              </Text>
            </TouchableOpacity>
            {/* transactional records */}
          </View>

          <View style={{ marginBottom: 50 }}>
            <FlatList
              horizontal
              data={offersList}
              renderItem={renderItemOffers}
              keyExtractor={keyExtractor}
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  rewardCardItem: {
    backgroundColor: Color.colorPrimary,
    width: widthPercentageScale(30),
    height: heightPercentageScale(15.5),
    marginHorizontal: 6,
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  offerCardItem: {
    position: 'relative',
    backgroundColor: Color.colorPrimary,
    width: widthPercentageScale(45),
    height: heightPercentageScale(20),
    marginHorizontal: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loyaltyPointsCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',

    width: '100%',

    backgroundColor: Color.colorPrimary,
    // width: widthPercentageScale(45),
    height: heightPercentageScale(15),
    // // marginHorizontal: 10,
    // justifyContent: 'space-between',
    padding: 10,
  },

  pointHistoryBtn: {
    width: widthPercentageScale(35),
    height: 38,
    paddingVertical: 2,
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
    paddingHorizontal: 5,
    // marginTop: 5,
  },
  container: {
    flex: 1,
    backgroundColor: Color.colorWhitesmoke,
  },
  innerContainer: {
    backgroundColor: Color.colorWhitesmoke,
  },
  pointsCardContainer: {
    // paddingVertical: 15,
    padding: 10,
    // paddingVertical: 5

    // height: 100,
  },
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    // height: heightPercentageScale(12),
    // margin: 0,
    // alignSelf: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
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

    width: '100%',
    padding: 15,
    backgroundColor: Color.colorWhite,
    borderWidth: 0.3,
  },
  transactionalCardRecordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
    // alignItems: 'center',
    width: '100%',
    // height: heightPercentageScale(12),
    // marginTop: 10,
    // alignSelf: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: Color.colorWhite,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5,
  },
  TopCardTitle: {
    fontFamily: FontFamily.poppinsBold,
    width: '70%',
    fontSize: 14,
    color: Color.colorWhite,
  },
  transactionTitleStyle: {
    fontFamily: fontFamilies.semiBold,
    color: Color.colorBlack,
    fontSize: 14,
  },
  needHelpBtn: {
    elevation: 5,
    alignSelf: 'flex-end',
    position: 'absolute',
    bottom: 20,
    right: 10,
    zIndex: 10,
    height: 40,
    width: 'auto',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: Color.colorWhite,
    borderRadius: 19,
  },
  needHelpText: {
    color: Color.colorPrimary,
    fontSize: 12,
    fontFamily: FontFamily.poppinsBold,
  },
});

export default HomeScreen;
