import React, { useCallback } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { Color } from '~/Global/GlobalStyles';
import {
  heightPercentageScale,
  widthPercentageScale,
} from '~/theme/dimensions';
import { textVariants } from '~/theme/textVariants';

interface HorizontalSliderProps {
  label: string;
  data: any[];
  card: (item: any) => React.ReactElement;
}

const HorizontalSlider: React.FC<HorizontalSliderProps> = ({
  label,
  data,
  card,
}) => {
  const flatListRef = React.useRef<FlatList>(null);
  const keyExtractor = useCallback((_, index) => index.toString(), []);

  return (
    <View style={styles.container}>
      <Text style={[textVariants.h3, { padding: 10 }]}>{label}</Text>
      <FlatList
        ref={flatListRef}
        data={data}
        renderItem={({ item }) => card(item)}
        keyExtractor={keyExtractor}
        horizontal={false}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
        ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    // justifyContent: 'space-between',
    // flex: 1,
  },
  contentContainer: {
    paddingBottom: 10,
  },
  itemSeparator: {
    width: 10,
  },
  cardItem: {
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
    width: '100%',
    backgroundColor: Color.colorPrimary,
    height: heightPercentageScale(15),
    padding: 10,
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

export default HorizontalSlider;
