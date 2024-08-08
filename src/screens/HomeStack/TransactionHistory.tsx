import {
  FlatList,
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, { useState } from 'react';
import CustomHeaderWithIcons from '~/components/shared/CustomHeader';
import { Color } from '~/Global/GlobalStyles';
import { fontFamilies } from '~/theme/textVariants';
import { Card } from '~/components/kit';
import { ScrollView } from 'react-native';
import icoEarnreward from '../../../assets/images/reward.png';
import icoRedeem from '../../../assets/images/gift.png';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import TransactionalCard from '~/components/shared/TransactionalCard';
import ListEmpty from '~/components/shared/ListEmpty';
import DropDownPicker from 'react-native-dropdown-picker';


const monthsOfYear = [
  { label: 'January', key: '1' },
  { label: 'February', key: '2' },
  { label: 'March', key: '3' },
  { label: 'April', key: '4' },
  { label: 'May', key: '5' },
  { label: 'June', key: '6' },
  { label: 'July', key: '7' },
  { label: 'August', key: '8' },
  { label: 'September', key: '9' },
  { label: 'October', key: '10' },
  { label: 'November', key: '11' },
  { label: 'December', key: '12' }
];

const data = [
  { id: '1', title: 'Earned', points: '832', icon: icoEarnreward },
  { id: '2', title: 'Redeemed', points: '912', icon: icoRedeem },
];

const transactionalData = [
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
  {
    id: '6',
    points: '105',
    date: '07-02-2024',
    amount: '14.40',
    title: 'Techmart',
  },
  {
    id: '7',
    points: '0.78',
    date: '07-02-2024',
    amount: '26.60',
    title: 'U.S. POLO ASSN.',
  },
  {
    id: '8',
    points: '105',
    minus: true,
    date: '07-02-2024',
    amount: '14.40',
    title: 'Techmart',
  },
];


const renderItem = ({ item, index }) => <TransactionalCard data={item} />;

const TransactionHistory = ():any => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
      { label: 'January', value: 'january' },
      { label: 'February', value: 'february' },
      { label: 'March', value: 'march' },
      { label: 'April', value: 'april' },
      { label: 'May', value: 'may' },
      { label: 'June', value: 'june' },
      { label: 'July', value: 'july' },
      { label: 'August', value: 'august' },
      { label: 'September', value: 'september' },
      { label: 'October', value: 'october' },
      { label: 'November', value: 'november' },
      { label: 'December', value: 'december' },
    ]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#FFF8E6" barStyle="dark-content" />
      <CustomHeaderWithIcons
        containerStyle={{ backgroundColor: Color.colorWhite }}
        showNotification={false}
        back={true}
        textStyle={{
          fontSize: 18,
          marginLeft: 30,
          fontFamily: fontFamilies.semiBold,
        }}
        text={'Transaction Details'}
      />

      <ScrollView
       nestedScrollEnabled={true}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 20 }}
      >
        <View style={styles.cardsContainer}>
          {data?.map((val) => (
            <Card radius={16} style={styles.rewardCardItem}>
              <View>
                <Text
                  style={{
                    fontFamily: fontFamilies.semiBold,
                    fontSize: 14,
                    color: Color.colorLightGray,
                  }}
                >
                  Points
                </Text>
                <Text style={styles.cardTitleText}>{val?.title}</Text>
              </View>
              <View style={{ marginTop: 10, flexDirection: 'row' }}>
                <Text
                  style={{
                    fontFamily: fontFamilies.bold,
                    color: Color.colorWhite,
                    fontSize: 24,
                  }}
                >
                  {val?.points}{' '}
                  <Text
                    style={{
                      fontFamily: fontFamilies.semiBold,
                      fontSize: 10,
                      color: Color.colorLightGray,
                    }}
                  >
                    PTS
                  </Text>
                </Text>

                <Image
                  source={val?.icon}
                  style={{ height: 35, width: 35, marginLeft: 20 }}
                />
              </View>
            </Card>
          ))}
        </View>
        
        <View style={{marginVertical: 10}}>
        <DropDownPicker
        placeholder='Select Month'
        listMode="SCROLLVIEW"
        scrollViewProps={{
                  nestedScrollEnabled: true,
          }}
          style={{
            borderWidth: 0,
          }}
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
        />
        </View>
         
        <FlatList
          showsVerticalScrollIndicator={false}
          data={transactionalData}
          renderItem={renderItem}
          nestedScrollEnabled={true}
          contentContainerStyle={{paddingBottom: 80}}
          // keyExtractor={(item)=>item?.id}
          showsHorizontalScrollIndicator={false}
          ListEmptyComponent={<ListEmpty message={'No Transaction Found'} />}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default TransactionHistory;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.colorWhitesmoke,
    marginTop: 25,
  },
  cardsContainer: {
    marginVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardTitleText: {
    lineHeight: 20,
    fontFamily: fontFamilies.bold,
    color: Color.colorWhite,
    fontSize: 18,
  },
  rewardCardItem: {
    backgroundColor: Color.colorPrimary,
    width: '45%',
    marginHorizontal: 6,
    padding: 15,
  },
});
