import React, { useCallback } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { Color } from '~/Global/GlobalStyles';
import {
  heightPercentageScale,
  widthPercentageScale,
} from '~/theme/dimensions';
import { textVariants } from '~/theme/textVariants';

function VerticalSlider({ label, data, card }) {
  const flatListRef = React.useRef<FlatList>(null);
  const keyExtractor = useCallback((_, index) => index.toString(), []);

  return (
    <View
      style={{
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
        }}
      >
        <Text style={[textVariants.h3, { padding: 10 }]}>{label}</Text>
        <FlatList
          style={{ height: 220 }}
          ref={flatListRef}
          //   style={{ flexGrow: 0 }}
          horizontal
          //   pagingEnabled
          data={data}
          contentContainerStyle={{}}
          renderItem={({ item }) => card(item)}
          keyExtractor={keyExtractor}
          showsHorizontalScrollIndicator={false}
          //   ItemSeparatorComponent={<View style={{ width: 10 }} />}
        />
      </View>
    </View>
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
export default VerticalSlider;
