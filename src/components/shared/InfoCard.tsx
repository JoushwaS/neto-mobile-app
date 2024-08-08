import React from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native';
import { Color } from '~/Global/GlobalStyles';
import { Card } from '~/components/kit';
import PropTypes from 'prop-types';

import {
  heightPercentageScale,
  widthPercentageScale,
} from '~/theme/dimensions';
import { textVariants } from '~/theme/textVariants';

function InfoCard({ children, title, style, header, titleStyle }) {
  const { t } = useTranslation('screens', { keyPrefix: 'points-history' });

  return (
    <Card radius={18} style={[styles.loyaltyPointsCard, style]}>
      <View style={{ flexDirection: 'row', gap: 15 }}>
        <Text
          style={[textVariants.h4, { color: Color.colorBlack }, titleStyle]}
        >
          {title}
        </Text>
        {header}
      </View>
      {children}
    </Card>
  );
}

InfoCard.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  style: PropTypes.object,
};

InfoCard.defaultProps = {
  children: null,
  title: '',
  style: {},
};

const styles = StyleSheet.create({
  rewardCardItem: {
    backgroundColor: Color.colorBlack,
    width: widthPercentageScale(45),
    height: heightPercentageScale(22),
    marginHorizontal: 10,
    justifyContent: 'space-between',
    padding: 30,
  },
  loyaltyPointsCard: {
    flexDirection: 'column',
    width: '100%',
    backgroundColor: Color.colorWhite,
    height: heightPercentageScale(15),

    borderWidth: 0.3,
    borderColor: '#0000001a',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5,
    transition: '.3s ease',
  },
  pointHistoryBtn: {
    width: widthPercentageScale(28),
    height: '100%',
    color: Color.colorWhite,
  },
  pointsInfo: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  pointsInfoPoints: {
    color: Color.colorBlack,
  },
  pointsInfoInfo: {
    color: Color.colorBlack,
  },
  scrollView: {
    flexGrow: 1,
  },
  icon: {
    fontSize: 20,
    paddingHorizontal: 5,
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
    padding: 8,
    height: 100,
  },
  cardContainer: {
    flexDirection: 'row',
    width: '100%',
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
    width: '100%',
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
    width: '100%',
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

export default InfoCard;
