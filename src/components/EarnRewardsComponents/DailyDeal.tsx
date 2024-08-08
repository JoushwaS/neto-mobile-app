import React from 'react';
import { useTranslation } from 'react-i18next';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation
import { Color } from '~/Global/GlobalStyles';
import { Card } from '~/components/kit';
import {
  heightPercentageScale,
  widthPercentageScale,
} from '~/theme/dimensions';
import StyledText from '../shared/StyledText';
import { moderateScale } from 'react-native-size-matters';

interface DailyDealProps {
  dealLogo: any;
  dealProvider: string;
  validUntil: string;
  voucherDiscountP: number;
  route: string; // Route prop to navigate to
}

const DailyDeal: React.FC<DailyDealProps> = ({
  dealLogo,
  dealProvider,
  validUntil,
  voucherDiscountP,
  route,
}) => {
  const { t } = useTranslation('screens', { keyPrefix: 'redeem-points' });
  const navigation = useNavigation(); // Initialize useNavigation

  return (
    <TouchableOpacity
      onPress={() => {
        // Navigate to the passed route
        navigation.navigate(route, {
          dealLogo,
          dealProvider,
          validUntil,
          voucherDiscountP,
        });
      }}
    >
      <Card radius={12} style={styles.rewardCardItem}>
        <View style={{ flexDirection: 'row' }}>
          <Image source={dealLogo} style={styles.logo} />
          <View style={styles.detailsContainer}>
            <StyledText
              variant="mediumBold"
              style={{ fontSize: moderateScale(15.1) }}
            >
              {dealProvider}
            </StyledText>
            <StyledText
              variant="extraSmall"
              fontFamily="medium"
              style={{
                color: Color.colorGray_300,
                fontSize: moderateScale(11.1),
              }}
            >
              {'Valid Until ' + validUntil}
            </StyledText>
          </View>
        </View>
        <Card
          radius={10}
          style={{
            width: 70,
            height: 60,
            backgroundColor: Color.colorPrimary4,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <StyledText
            variant="h3"
            fontFamily="semiBold"
            style={{ color: Color.colorPrimary }}
          >
            {voucherDiscountP + '%'}
          </StyledText>
          <StyledText variant="small" style={{ fontSize: moderateScale(6) }}>
            Voucher Discount
          </StyledText>
        </Card>
      </Card>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  rewardCardItem: {
    backgroundColor: Color.colorWhite,
    flexDirection: 'row',
    height: heightPercentageScale(10),
    marginHorizontal: 10,
    paddingHorizontal: 10,
    paddingVertical: 6,
    justifyContent: 'space-between',
    borderColor: '#0000001a',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 5,
    elevation: 5,
    marginTop: 10,
  },
  logo: {
    width: 75,
    height: 75,
    resizeMode: 'contain',
    borderRadius: 20,
  },
  detailsContainer: {
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
});

export default DailyDeal;
