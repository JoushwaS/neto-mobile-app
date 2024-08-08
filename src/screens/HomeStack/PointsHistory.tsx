import React from 'react';
import { useTranslation } from 'react-i18next';
import { Image, StyleSheet, View } from 'react-native';
import { Text } from 'react-native';
import { Color } from '~/Global/GlobalStyles';
import { Card } from '~/components/kit';
import rewards_logos from '../../../assets/images/rewards_logos.png';
import coinIco from '../../../assets/images/coin-ico.png';
import bronzeico from '../../../assets/images/bronzeico.png';
import silverico from '../../../assets/images/silverico.png';
import goldico from '../../../assets/images/goldico.png';
import AntDesign from 'react-native-vector-icons/AntDesign';

import PageContainer from '~/components/shared/PageContainer';
import {
  heightPercentageScale,
  widthPercentageScale,
} from '~/theme/dimensions';
import { textVariants } from '~/theme/textVariants';
import InfoCard from '~/components/shared/InfoCard';
import MultiColorProgressBar from '~/components/shared/MultiColorProgressBar';

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
function PointsHistory() {
  const { t } = useTranslation('screens', { keyPrefix: 'points-history' });
  // Get the day, month, and year
  const today = new Date();

  const day = String(today.getDate()).padStart(2, '0');
  const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are zero-based
  const year = today.getFullYear();

  // Format the date as dd/mm/yyyy
  const formattedDate = `${day}/${month}/${year}`;

  const levelsList = [
    { icon: bronzeico, title: 'bronze' },
    { icon: silverico, title: 'silver' },
    { icon: goldico, title: 'gold' },
  ];
  const transactions = [
    {
      description: 'Every 2 AED Spend',
      points: 39,
      date: '22/12/2024',
    },
    {
      description: '5% off for whole order',
      points: -40,
      date: '02/01/2024',
    },
    {
      description: 'U.S. POLO ASSN. store',
      points: 150,
      date: '10/02/2024',
    },
    {
      description: 'Every 2 AED Spend',
      points: 68,
      date: '17/02/2024',
    },
  ];

  return (
    <PageContainer style={{ marginTop: 60 }}>
      <Card radius={18} style={styles.loyaltyPointsCard}>
        <View style={{ flexDirection: 'column', paddingHorizontal: 20 }}>
          <Text style={[textVariants.h1, { color: Color.colorWhite }]}>0</Text>

          <Text style={[textVariants.titleBar, { color: Color.colorWhite }]}>
            {t('earned-points')}
          </Text>
          <Text style={[textVariants.Xsmall, { color: Color.colorWhite }]}>
            200{t('points-expiring-on') + formattedDate}
          </Text>
        </View>
        <Image
          source={coinIco}
          style={{
            // Add styles to make sure the image stays within the card
            width: 110, // Adjust the width as needed
            height: 110, // Adjust the height as needed
            // resizeMode: 'contain', // Ensure the image scales properly
            // alignSelf: 'center', // Center the image horizontally
          }}
        />
      </Card>

      <InfoCard
        title="Levels"
        style={{
          marginTop: 20,
          height: heightPercentageScale(20),
          padding: 25,
        }}
        header={<LevelsListRender data={levelsList} />}
      >
        <MultiColorProgressBar points={800} />
        <Text style={[textVariants.smallBold, { paddingTop: 10 }]}>
          <Text style={{ fontWeight: 'bold' }}>Get 300</Text> more points to
          become a Bronze member
        </Text>
      </InfoCard>
      <InfoCard
        title={`${t('points-history')} (${transactions.length})`}
        style={{ marginTop: 20, height: heightPercentageScale(32.5) }}
        titleStyle={{ paddingHorizontal: 20, paddingVertical: 15 }}
      >
        {transactions?.map((transItem, index) => (
          <PointHistoryItem key={index} item={transItem} />
        ))}
      </InfoCard>
    </PageContainer>
  );
}
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
    flexDirection: 'row',
    // justifyContent: 'space-between',

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
    paddingHorizontal: 3,
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
export default PointsHistory;
