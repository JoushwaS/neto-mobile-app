import React, { useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  Platform,
  StyleSheet,
  Image,
  PermissionsAndroid,
  PermissionStatus,
  StatusBar,
  View,
  Dimensions,
} from 'react-native';

import {
  getFocusedRouteNameFromRoute,
  useFocusEffect,
  useNavigation,
} from '@react-navigation/native';

import {
  CardStack,
  HomeStack,
  RewardStack,
  SettingsStack,
} from './RootNavigator';

import homeBottomIcon from '../../assets/images/homeBottomIcon.png';
import rewardsBottomIcon from '../../assets/images/rewardsBottomIcon.png';
import cardDetailsBottomIcon from '../../assets/images/cardDetailsBottomIcon.png';
import settingsBottomIcon from '../../assets/images/settingsBottomIcon.png';
import { Color, FontSize } from '../Global/GlobalStyles';
import { heightPercentageScale } from '~/theme/dimensions';
import Metrix from '~/Global/Metrix';
const { width, height } = Dimensions.get('window');

// import ForegroundHandler from './../services/ForegroundHandler';

export const AppNavigator: React.FC<AppStackScreenProps<'HomeNavigator'>> = ({
  route,
}) => {
  const Tab = createBottomTabNavigator<BottomTabsParamsList>();

  const navigation = useNavigation();

  return (
    <>
      {/* {Platform.OS === 'ios' ? <ForegroundHandler /> : null} */}
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            backgroundColor: Color.colorWhite,
            height: Metrix.VerticalSize(120),
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            // borderWidth: 0.3,

            borderColor: '#0000001a',
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 3 },
            shadowOpacity: 0.5,
            shadowRadius: 5,
            // elevation: 5,
          },

          tabBarActiveTintColor: Color.colorPrimary,
          tabBarInactiveTintColor: Color.colorGray_100,
          headerShown: false,
          tabBarHideOnKeyboard: Platform.OS === 'android',
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeStack}
          options={{
            headerShown: false,
            tabBarLabelStyle: styles.tabBarLableStyle,
            tabBarIcon: ({ color }) => {
              return (
                <Image
                  source={homeBottomIcon}
                  style={[styles.icon, { tintColor: color }]}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="Rewards"
          component={RewardStack}
          options={{
            headerShown: false,
            tabBarLabelStyle: styles.tabBarLableStyle,
            tabBarIcon: ({ color }) => {
              return (
                <Image
                  source={rewardsBottomIcon}
                  style={[styles.icon, { tintColor: color }]}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="Card Details"
          component={CardStack}
          options={{
            headerShown: false,
            tabBarLabelStyle: styles.tabBarLableStyle,
            tabBarIcon: ({ color }) => {
              return (
                <Image
                  source={cardDetailsBottomIcon}
                  style={[styles.icon, { tintColor: color }]}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsStack}
          options={{
            headerShown: false,
            tabBarLabelStyle: styles.tabBarLableStyle,
            tabBarIcon: ({ color }) => {
              return (
                <Image
                  source={settingsBottomIcon}
                  style={[styles.icon, { tintColor: color }]}
                />
              );
            },
          }}
        />
      </Tab.Navigator>
    </>
  );
};

const styles = StyleSheet.create({
  icon: {
    height: Metrix.VerticalSize(24),
    width: Metrix.VerticalSize(24),

    resizeMode: 'contain',
    marginTop: 10,
  },
  tabBarLableStyle: {
    fontSize: FontSize.size_sm,
    fontFamily: 'Manrope-Bold',
    fontWeight: 'bold',
    // height: 15,
    // marginTop: Platform.OS == 'ios' ? -17 : -10,
    marginBottom: Platform.OS == 'android' ? 10 : 0,
    // letterSpacing: -0.2,
  },
  dot: {
    zIndex: 1,
    height: height / 110,
    width: width / 50,
    backgroundColor: '#FF0000',
    borderRadius: 30,
    position: 'absolute',
    top: -1,
    left: 15,
  },
});
