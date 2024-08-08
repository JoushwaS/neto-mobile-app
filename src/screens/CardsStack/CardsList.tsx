import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import { Card } from '~/components/kit';
import PageContainer from '~/components/shared/PageContainer';
import { Color } from '~/Global/GlobalStyles';
import {
  heightPercentageScale,
  widthPercentageScale,
} from '~/theme/dimensions';
import { textVariants } from '~/theme/textVariants';
import CardpaymentBannerImg from '../../../assets/images/CardpaymentBannerImg.png';
import CustomButton from '~/components/shared/CustomButton';
import { scale } from 'react-native-size-matters';
import { useSelector } from 'react-redux';
import { RootState } from '~/redux/store';
import mcbLogo from '../../../assets/images/mcbBankLogo.png';
import alliedBankLogo from '../../../assets/images/alliedBankLogo.png';
import hblBankLogo from '../../../assets/images/hblBankLogo.png';
import nbpBankLogo from '../../../assets/images/nbpBankLogo.png';
import meezanBankLogo from '../../../assets/images/meezanBankLogo.png';
import Ionicons from 'react-native-vector-icons/Ionicons';

function CardsList({ navigation }) {
  const { data } = useSelector((state: RootState) => state?.auth);

  const { t } = useTranslation('screens', { keyPrefix: 'cards' });
  const cardsList = [
    {
      id: 1,
      logo: mcbLogo,
      cardHolderName: data?.name,
      bankName: 'MCB',
      cardNickName: 'Test Card',
      cardNumber: '5555 5555 5555 5555',
    },
    {
      id: 2,
      logo: alliedBankLogo,
      cardHolderName: data?.name,
      bankName: 'Allied',
      cardNickName: 'Test Card',
      cardNumber: '5555 5555 5555 5555',
    },
    {
      id: 3,
      logo: hblBankLogo,
      cardHolderName: data?.name,
      bankName: 'HBL',
      cardNickName: 'Test Card',
      cardNumber: '5555 5555 5555 5555',
    },
    {
      id: 4,
      logo: nbpBankLogo,
      cardHolderName: data?.name,
      bankName: 'NBP',
      cardNickName: 'Test Card',
      cardNumber: '5555 5555 5555 5555',
    },
    {
      id: 5,
      logo: meezanBankLogo,
      cardHolderName: data?.name,
      bankName: 'MEEZAN',
      cardNickName: 'Test Card',
      cardNumber: '5555 5555 5555 5555',
    },
  ];
  function formatCardNumber(cardNumber: string): string {
    // Remove all spaces from the card number
    const cleanedCardNumber = cardNumber.replace(/\s+/g, '');

    if (cleanedCardNumber.length !== 16) {
    }

    const firstFour = cleanedCardNumber.slice(0, 4);
    const lastFour = cleanedCardNumber.slice(-4);
    return `${firstFour} ***** ***** ${lastFour}`;
  }

  const renderItem = ({ item }) => (
    <Card radius={18} style={styles.cardContainer}>
      <View style={styles.cardContent}>
        <View style={styles.itemImgContainer}>
          <Image source={item.logo} style={styles.logo} />
        </View>
        <View style={styles.cardDetails}>
          <Text style={[textVariants.mediumBold, { fontWeight: '800' }]}>
            {item.cardHolderName}
          </Text>
          <Text
            style={
              (textVariants.extraSmall,
              { color: Color.colorGray_300, paddingVertical: 2 })
            }
          >
            <Text style={{ fontWeight: '700' }}>{item.bankName}</Text> -{' '}
            {item.cardNickName}
          </Text>

          <Card
            // text={t('add-new-card')}
            style={styles.userCardItemCardNumberPill}
            // onPress={() => navigation.navigate('AddPaymentCard')}
          >
            <Ionicons
              name={'card'}
              color={Color.colorPrimary}
              style={styles.icon}
            />

            <Text
              style={[
                textVariants.Xsmall,
                {
                  color: Color.colorPrimary,
                  fontWeight: '900',
                  paddingHorizontal: 5,
                },
              ]}
            >
              {formatCardNumber(item.cardNumber)}
            </Text>
          </Card>
        </View>
      </View>
    </Card>
  );

  return (
    <PageContainer>
      <View
        style={{
          height: heightPercentageScale(20),
          flexDirection: 'column',
          justifyContent: 'flex-end',
          marginBottom: 10,
        }}
      >
        <Card radius={18} style={styles.loyaltyPointsCard}>
          <View
            style={{ flexDirection: 'column', justifyContent: 'space-between' }}
          >
            <Text
              style={[
                textVariants.h3,
                { paddingVertical: 12, color: Color.colorWhite },
              ]}
            >
              {t('payment-cards')}
            </Text>
            <CustomButton
              text={t('add-new-card')}
              style={styles.pointHistoryBtn}
              onPress={() => navigation.navigate('AddPaymentCard')}
              textStyle={[
                { ...textVariants.title },
                { color: Color.colorPrimary, fontSize: scale(12) },
              ]}
            />
          </View>
          <Image
            source={CardpaymentBannerImg}
            style={{
              width: 65,
              height: 65,
              resizeMode: 'contain',
              alignSelf: 'center',
            }}
          />
        </Card>
      </View>
      {/* Cards List */}
      <FlatList
        data={cardsList}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </PageContainer>
  );
}

const styles = StyleSheet.create({
  icon: {
    fontSize: 20,
    // marginRight: 10,
  },
  itemImgContainer: {
    padding: 5,
    borderWidth: 1,
    borderColor: Color.colorGray_100,
    borderRadius: 8,
    marginVertical: 8,
    alignItems: 'center',

    // backgroundColor: 'red',
    width: widthPercentageScale(22),
    height: heightPercentageScale(9),
    flexDirection: 'row',
    justifyContent: 'center',
  },
  loyaltyPointsCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    width: '100%',
    backgroundColor: Color.colorPrimary,
    height: heightPercentageScale(15),
    padding: 10,
  },
  pointHistoryBtn: {
    width: widthPercentageScale(30),
    marginVertical: 10,
    backgroundColor: Color.colorWhite,
    borderRadius: 7,
    height: 25,
  },
  userCardItemCardNumberPill: {
    // width: widthPercentageScale(30),
    padding: 4,
    backgroundColor: Color.colorPrimary4,
    borderRadius: 10,
    // height: 25,
    flexDirection: 'row',
    // fontSize: scale(12),
  },
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginVertical: 8,
    backgroundColor: Color.colorWhite,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    // height: heightPercentageScale(13),
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
    // marginRight: 15,
    // alignSelf: 'center',
  },
  cardDetails: {
    flexDirection: 'column',
    marginHorizontal: 10,
  },
  cardHolderName: {
    ...textVariants.title,
    color: Color.colorBlack,
  },
  cardNickName: {
    ...textVariants.body,
    color: Color.colorGrey,
    // marginVertical: 5,
  },
  cardNumberContainer: {
    flexDirection: 'row',
  },
  cardNumber: {
    ...textVariants.body,
    color: Color.colorBlack,
    marginRight: 5,
  },
});

export default CardsList;
