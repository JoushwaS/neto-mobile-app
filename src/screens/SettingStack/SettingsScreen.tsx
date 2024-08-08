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
} from 'react-native';
import { launchImageLibrary, launchCamera } from 'react-native-image-picker';
import { Color, FontFamily, FontSize } from '../../Global/GlobalStyles';
import CustomHeaderWithIcons from '~/components/shared/CustomHeader';
import CustomButton from '~/components/shared/CustomButton';
import { Card } from '~/components/kit';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '~/redux/store';
import { textVariants } from '~/theme/textVariants';

const SettingMenuList = [
  {
    title: 'Account Settings',
    subMenu: [
      { sbTitle: 'Edit Account', screenN: '' },
      { sbTitle: 'Change Password', screenN: '' },
    ],
  },
  {
    title: 'Preferences',
    subMenu: [
      { sbTitle: 'Notifications', screenN: 'NotificationsScreen' },
      { sbTitle: 'Terms & Conditions', screenN: '' },
    ],
  },
  {
    title: 'Support',
    subMenu: [
      { sbTitle: 'About Us', screenN: 'AboutUsScreen' },
      { sbTitle: 'FAQs', screenN: '' },
    ],
  },
];
export const SettingsScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#FFF8E6" barStyle="dark-content" />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : null}
        style={styles.container}
      >
        <CustomHeaderWithIcons text={'Settings'} back={true} />
        {SettingMenuList.map((setMItem) => {
          return (
            <Card style={styles.infoCard}>
              <View style={[styles.profileItem]}>
                <Text style={[textVariants.buttonText, styles.infoText]}>
                  {setMItem?.title}
                </Text>

                {setMItem.subMenu.map((sbMenu) => {
                  return (
                    <TouchableOpacity
                      onPress={() => {
                        if (sbMenu?.screenN !== '') {
                          navigation.navigate(sbMenu?.screenN);
                        }
                      }}
                      style={[styles.subMenuItem]}
                    >
                      <Text
                        style={[
                          textVariants.smallBold,
                          { color: Color.colorBlack },
                        ]}
                      >
                        {sbMenu?.sbTitle}
                      </Text>

                      <FontAwesome6
                        name={'chevron-right'}
                        style={[styles.icon]}
                        size={15}
                      />
                    </TouchableOpacity>
                  );
                })}
              </View>
            </Card>
          );
        })}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  profileItem: {
    width: '100%',
    flexDirection: 'column',
    // paddingVertical: 10,

    //    justifyContent: 'spa',
  },
  subMenuItem: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 15,

    //    justifyContent: 'spa',
  },
  container: {
    flex: 1,
    backgroundColor: Color.colorWhitesmoke,
    // marginTop: 20,
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
  icon: { marginTop: 4, color: Color.colorGray_300 },
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
    padding: 20,
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

    marginBottom: 10,
    // marginHorizontal: 20,
    color: Color.colorGray_300,
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

export default SettingsScreen;
