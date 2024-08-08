import React, { useEffect, useState } from 'react';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { useApplicationConfiguration } from '~/hooks/use-application-configuration';
import HomeScreen from '../screens/HomeStack/HomeScreen';
import { Color } from '~/Global/GlobalStyles';
import PointsHistory from '~/screens/HomeStack/PointsHistory';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { widthPercentageScale } from '~/theme/dimensions';
import { textVariants } from '~/theme/textVariants';
import HeaderTitle from '~/components/shared/Header/HeaderTitle';
import HeaderLeft from '~/components/shared/Header/HeaderLeft';
import RedeemPoints from '~/screens/RewardStack/RedeemPoints';
import CardsList from '~/screens/CardsStack/CardsList';
import AddPaymentCardScreen from '~/screens/CardsStack/AddPaymentCard';
import CardCongratulationScreen from '~/screens/CardsStack/CardCongratulationScreen';
import TransactionHistory from '~/screens/HomeStack/TransactionHistory';
import ProfileScreen from '~/screens/SettingStack/ProfleScreen';
import NotificationsScreen from '~/screens/HomeStack/NotificationsScreen';
import SettingsScreen from '~/screens/SettingStack/SettingsScreen';
import AboutUsScreen from '~/screens/SettingStack/AboutUs';
import ContentPage from '~/screens/SettingStack/ContentPage';
import EarnRewards from '~/screens/RewardStack/EarnRewards';
import RewardInfo from '~/screens/RewardStack/RewardInfo';
import HelpSupportScreen from '~/screens/SettingStack/HelpSupportScreen';
import FaqsScreen from '~/screens/SettingStack/FaqsScreen';
import HowItWorksScreen from '~/screens/SettingStack/HowItWorksScreen';
import ReportIssueScreen from '~/screens/SettingStack/ReportIssueScreen';

export const HomeStack = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{ headerShown: true }}
      initialRouteName="Home"
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          headerTitle: () => <HeaderTitle text={'Welcome'} />,
          headerStyle: {
            backgroundColor: 'transparent',
          },

          headerTransparent: true,
          headerRight: () => <HeaderLeft />,
        }}
      />
      <Stack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          headerShown: false,
          headerTitle: () => <HeaderTitle text={'My Profile'} />,
          headerStyle: {
            backgroundColor: 'transparent',
          },

          headerTransparent: true,
          headerRight: () => <HeaderLeft />,
        }}
      />
      <Stack.Screen
        name="pointHistory"
        component={PointsHistory}
        options={{
          headerTitle: () => <HeaderTitle text={'Points History'} />,

          headerStyle: {
            backgroundColor: 'transparent',
          },
          headerTransparent: true,
          headerRight: () => <HeaderLeft />,
          // This disables the default back button
        }}
      />
      <Stack.Screen
        name="NotificationsScreen"
        component={NotificationsScreen}
        options={{
          headerShown: false,

          headerTitle: () => <HeaderTitle text={'Points History'} />,

          headerStyle: {
            backgroundColor: 'transparent',
          },
          headerTransparent: true,
          headerRight: () => <HeaderLeft />,
          // This disables the default back button
        }}
      />
    </Stack.Navigator>
  );
};
export const RewardStack = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{ headerShown: true }}
      initialRouteName="RedeemPoints"
    >
      <Stack.Screen
        name="RedeemPoints"
        component={RedeemPoints}
        options={{
          headerShown: false,

          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="EarnRewards"
        component={EarnRewards}
        options={{
          headerShown: false,

          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="RewardInfo"
        component={RewardInfo}
        options={{
          headerShown: false,

          headerTransparent: true,
        }}
      />
    </Stack.Navigator>
  );
};
export const SettingsStack = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{ headerShown: true }}
      initialRouteName="SettingsScreen"
    >
      <Stack.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={{
          headerShown: false,
          headerStyle: {
            backgroundColor: 'transparent',
          },
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="AboutUsScreen"
        component={AboutUsScreen}
        options={{
          headerShown: false,
          headerStyle: {
            backgroundColor: 'transparent',
          },
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="HelpSupportScreen"
        component={HelpSupportScreen}
        options={{
          headerShown: false,
          headerStyle: {
            backgroundColor: 'transparent',
          },
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="FaqsScreen"
        component={FaqsScreen}
        options={{
          headerShown: false,
          headerStyle: {
            backgroundColor: 'transparent',
          },
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="HowItWorksScreen"
        component={HowItWorksScreen}
        options={{
          headerShown: false,
          headerStyle: {
            backgroundColor: 'transparent',
          },
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="ReportIssueScreen"
        component={ReportIssueScreen}
        options={{
          headerShown: false,
          headerStyle: {
            backgroundColor: 'transparent',
          },
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="ContentPage"
        component={ContentPage}
        options={{
          headerShown: false,
          headerStyle: {
            backgroundColor: 'transparent',
          },
          headerTransparent: true,
        }}
      />
    </Stack.Navigator>
  );
};
export const CardStack = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{ headerShown: true }}
      initialRouteName="CardsList"
    >
      <Stack.Screen
        name="CardsList"
        component={CardsList}
        options={{
          headerTitle: () => <HeaderTitle text={'My Cards'} />,
          headerStyle: {
            backgroundColor: 'transparent',
          },
          headerTransparent: true,
          headerRight: () => <HeaderLeft />,
        }}
      />
      <Stack.Screen
        name="AddPaymentCard"
        component={AddPaymentCardScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="CardCongratulationScreen"
        component={CardCongratulationScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};
