import React, { useState, useCallback } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  StatusBar,
  Image,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  FlatList,
  ScrollView,
} from 'react-native';
import { launchImageLibrary, launchCamera } from 'react-native-image-picker';
import { Color, FontFamily, FontSize } from '../../Global/GlobalStyles';
import CustomHeaderWithIcons from '~/components/shared/CustomHeader';
import CustomButton from '~/components/shared/CustomButton';
import { Card } from '~/components/kit';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { userLogout } from '~/redux/slices/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '~/redux/store';
import { textVariants } from '~/theme/textVariants';
import { heightPercentageScale } from '~/theme/dimensions';
import PageContainer from '~/components/shared/PageContainer';
export const NotificationsScreen = ({ navigation }) => {
  //   const dispatch = useDispatch();

  const notificationData = [
    {
      date: '16 May',
      data: [
        {
          title: 'U.S. POLO ASSN.',
          description:
            'You have purchased from U.S. POLO ASSN. store for +4.40 bonus points.',
        },
        {
          title: 'U.S. POLO ASSN.',
          description:
            'You have purchased from U.S. POLO ASSN. store for +4.40 bonus points.',
        },
        {
          title: 'U.S. POLO ASSN.',
          description:
            'You have purchased from U.S. POLO ASSN. store for +4.40 bonus points.',
        },
      ],
    },
    {
      date: '06 April',
      data: [
        {
          title: 'U.S. POLO ASSN.',
          description:
            'You have purchased from U.S. POLO ASSN. store for +4.40 bonus points.',
        },
        {
          title: 'U.S. POLO ASSN.',
          description:
            'You have purchased from U.S. POLO ASSN. store for +4.40 bonus points.',
        },
        {
          title: 'U.S. POLO ASSN.',
          description:
            'You have purchased from U.S. POLO ASSN. store for +4.40 bonus points.',
        },
      ],
    },
    {
      date: '02 April',
      data: [
        {
          title: 'U.S. POLO ASSN.',
          description:
            'You have purchased from U.S. POLO ASSN. store for +4.40 bonus points.',
        },
      ],
    },
  ];
  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => {
        console.log('navigate to notification');
      }}
    >
      <Card radius={22} style={styles.loyaltyPointsCard}>
        <View
          style={{
            flexDirection: 'column',
            paddingHorizontal: 10,
            paddingVertical: 5,
          }}
        >
          <Text
            style={[
              textVariants.h5,
              { color: Color.colorWhite, marginBottom: 8 },
            ]}
          >
            {item?.title}
          </Text>
          <Text style={[textVariants.Xsmall, { color: Color.colorWhite }]}>
            {item?.description}
          </Text>
        </View>
      </Card>
    </TouchableOpacity>
  );
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#FFF8E6" barStyle="dark-content" />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : null}
        style={styles.container}
      >
        <CustomHeaderWithIcons
          text={'Notification'}
          back={true}
          showNotification={false}
        />
        {/* Cards List */}
        <ScrollView contentContainerStyle={[styles.scrollView]}>
          {notificationData?.map((notList, index) => {
            return (
              <View>
                <Text
                  style={[
                    textVariants.mediumBold,
                    {
                      textAlign: 'center',
                      color: Color.colorGray_300,
                      marginBottom: 20,
                    },
                  ]}
                >
                  {notList.date}
                </Text>
                <FlatList
                  data={notList.data}
                  renderItem={renderItem}
                  keyExtractor={(item) => index.toString()}
                />
              </View>
            );
          })}
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  loyaltyPointsCard: {
    flexDirection: 'row',
    // justifyContent: 'space-between',

    width: '100%',

    backgroundColor: Color.colorPrimary,
    // width: widthPercentageScale(45),
    // height: heightPercentageScale(12),
    // // marginHorizontal: 10,
    // justifyContent: 'space-between',

    padding: 10,
    marginBottom: 10,
  },

  profileItem: {
    width: '100%',
    flexDirection: 'row',
    paddingVertical: 10,

    //    justifyContent: 'spa',
  },
  container: {
    flex: 1,
    backgroundColor: Color.colorWhitesmoke,
    marginTop: 20,
  },
  profileSection: {
    alignItems: 'center',
    marginVertical: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: Color.colorPrimary,
  },
  icon: { margin: 7, color: Color.colorGray_300 },
  profileName: {
    // fontSize: FontSize.size20,
    fontFamily: FontFamily.poppinsBold,
    color: Color.colorBlack,
    // marginTop: 10,
  },
  profileJoinDate: {
    // fontSize: FontSize.size14,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.colorGray_300,
  },
  infoCard: {
    backgroundColor: Color.colorWhite,
    padding: 25,
    marginHorizontal: 20,
    borderRadius: 15,
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5,
  },
  infoText: {
    // fontSize: FontSize.size16,

    marginVertical: 5,
    marginHorizontal: 20,
    color: Color.colorGray_300,
  },
  scrollView: {
    flexGrow: 1,
    paddingHorizontal: 10,
  },
  logoutButton: {
    backgroundColor: Color.colorPrimary,
    padding: 15,
    marginHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  logoutButtonText: {
    color: Color.colorWhite,
    // fontSize: FontSize.size16,
    fontFamily: FontFamily.poppinsBold,
  },
});

export default NotificationsScreen;
