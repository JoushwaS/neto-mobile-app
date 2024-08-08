import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Color } from '~/Global/GlobalStyles';
import { Card } from '~/components/kit';
import {
  heightPercentageScale,
  widthPercentageScale,
} from '~/theme/dimensions';
import { textVariants } from '~/theme/textVariants';
import Modal from 'react-native-modal';
import CustomModal from '~/components/shared/CustomModal';
import CustomButton from '~/components/shared/CustomButton';
import mamaearthLogo from '../../../../assets/images/mamaearth-logo.png';
import LineHeading from '~/components/shared/LineHeading';
import { Linking } from 'react-native';

const offerDetailsInfo = [
  'Minimum price order should be 1000 rs.',
  'Coupon will be available for more recovered section',
  'Coupon can be applied at mama earth website and mama earth app for android and IOS.',
  'Coupon can be applied at mama earth website and mama earth app for android and IOS.',
];
function DealCard({ discount, type, validUntil, dealName }) {
  const { t } = useTranslation('screens', { keyPrefix: 'redeem-points' });
  const [isVisible, setisVisible] = useState(false);

  const renderPillText = (type) => {
    if (type === 'silver') {
      return t('silver-member');
    } else if (type === 'gold') {
      return t('gold-member');
    } else if (type === 'platinum') {
      return t('platinum-member');
    }
  };
  const backgroundColorType = () => {
    if (type === 'silver') {
      return Color.colorLPurple;
    } else if (type === 'gold') {
      return Color.colorLGold;
    } else if (type === 'platinum') {
      return Color.colorLBlue;
    }
  };
  const pillBgColorType = () => {
    if (type === 'silver') {
      return Color.colorPurple;
    } else if (type === 'gold') {
      return Color.colorGold;
    } else if (type === 'platinum') {
      return Color.colorBlue;
    }
  };
  return (
    <TouchableOpacity
      //   style={styles.countryButton}
      onPress={() => setisVisible(true)}
    >
      <Card radius={18} style={styles.rewardCardItem}>
        <View
          style={[
            styles.headerContainer,
            { backgroundColor: backgroundColorType() },
          ]}
        >
          <View
            style={[
              {
                width: '90%',
                justifyContent: 'space-between',
                //   backgroundColor: 'red',
                height: '100%',
              },
            ]}
          >
            <Text style={[textVariants.h4Light, { color: Color.colorWhite }]}>
              {discount + '% ' + t('discount-voucher')}
            </Text>
            <View style={[styles.pill, { backgroundColor: pillBgColorType() }]}>
              <Text
                style={[
                  textVariants.extraSmall,
                  { color: Color.colorWhite, textAlign: 'center' },
                ]}
              >
                {renderPillText(type)}
              </Text>
            </View>
          </View>
        </View>

        <View style={{ padding: 10, height: '35%' }}>
          <Text style={[textVariants.buttonText, { paddingVertical: 2 }]}>
            {dealName}
          </Text>
          <Text
            style={[textVariants.extraSmall, { color: Color.colorGray_200 }]}
          >
            {t('valid-until') + ' ' + validUntil}
          </Text>
        </View>

        <CustomModal
          isVisible={isVisible}
          onClose={() => {
            setisVisible(false);
          }}
          title="My Custom Modal"
        >
          <View style={styles.modalContainer}>
            <View style={styles.headerRedeemModalContaienr}>
              <Image source={mamaearthLogo} style={{ marginVertical: 10 }} />
              <View style={styles.redeemTitleSection}>
                <View style={{ flexDirection: 'row' }}>
                  <Text style={[textVariants.title]}>Coupon: </Text>
                  <Text
                    style={[
                      textVariants.Xsmall,
                      { color: Color.colorGray_300 },
                    ]}
                  >
                    2500 powsserpoints
                  </Text>
                </View>
                <View style={{ flexDirection: 'row', paddingVertical: 6 }}>
                  <Text style={[textVariants.title]}>Reward: </Text>
                  <Text
                    style={[
                      textVariants.Xsmall,
                      { color: Color.colorGray_300 },
                    ]}
                  >
                    300 AED OFF
                  </Text>
                </View>
              </View>
            </View>
            {/* Horizontal Heading Line componet */}
            <LineHeading title={t('offer-details')} />
            {/* Offer Details Points */}
            <View style={styles.offerDetailsPoint}>
              {offerDetailsInfo?.map((offDItem, index) => (
                <Text
                  key={index}
                  style={[
                    textVariants.Xsmall,
                    { paddingVertical: 4, color: Color.colorGray_300 },
                  ]}
                >
                  {index + 1 + '. ' + offDItem}
                </Text>
              ))}
            </View>
            {/* Visit link  */}
            <View style={{ padding: 8 }}>
              <Text style={[textVariants.smallBold]}>
                {t('visit')}:{' '}
                <Text
                  onPress={() => Linking.openURL('https://www.mamaearth.com')}
                  style={[textVariants.small, { color: Color.colorPrimary2 }]}
                >
                  www.mamaearth.com
                </Text>
                <Text style={[textVariants.small]}> {t('for-redeem')}</Text>
              </Text>
            </View>

            {/* redeem button  */}
            <View
              style={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <CustomButton
                onPress={() => {
                  setisVisible(false);
                }}
                text={t('redeem')}
                textStyle={[
                  textVariants.buttonText,
                  { color: Color.colorWhite },
                ]}
                style={styles.redeemBtn}
              ></CustomButton>
            </View>
          </View>
        </CustomModal>
      </Card>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  offerDetailsPoint: { paddingVertical: 10 },
  redeemTitleSection: { flexDirection: 'column' },
  headerRedeemModalContaienr: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  redeemBtn: {
    width: widthPercentageScale(45),
    height: heightPercentageScale(6),
  },
  modalContainer: {
    width: '100%',
    // padding: 2,
    // zIndex: 1000,
  },
  headerContainer: {
    borderTopRightRadius: 18,
    borderTopLeftRadius: 18,
    height: '65%',
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  pill: {
    paddingVertical: 2,
    paddingHorizontal: 6,
    borderRadius: 15,
    //
  },
  headerSection: {
    paddingHorizontal: 10,
    paddingVertical: 15,
    justifyContent: 'space-between',
  },
  rewardCardItem: {
    backgroundColor: Color.colorWhite,
    width: widthPercentageScale(43),
    height: heightPercentageScale(25),
    marginHorizontal: 10,
    justifyContent: 'space-between',
    borderColor: '#0000001a',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    // shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5,
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
    paddingHorizontal: 5,
    // marginTop: 5,
  },
  container: {
    flex: 1,
    backgroundColor: Color.colorWhitesmoke,
    marginTop: 50,
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
export default DealCard;
