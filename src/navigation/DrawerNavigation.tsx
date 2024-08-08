import React, { FC, useEffect, useLayoutEffect, useState } from 'react';
import {
  View,
  Image,
  StyleSheet,
  Text,
  Platform,
  StatusBar,
  ScrollView,
} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {
  useNavigation,
  useIsFocused,
  getFocusedRouteNameFromRoute,
  DrawerActions,
} from '@react-navigation/native';

import genericProfileImage from '../../assets/images/genericProfileImage.png';
import icodashboard from '../../assets/images/icodashboard.png';
import closeIcon from '../../assets/images/closeIcon.png';
import icoSetting from '../../assets/images/icoSetting.png';
import icoLogout from '../../assets/images/icoLogout.png';

import icoUserr from '../../assets/images/icoUserr.png';
import icorewards from '../../assets/images/icorewards.png';
import icoCards from '../../assets/images/icoCards.png';
import icoPoints from '../../assets/images/icoPoints.png';

import VersionCheck from 'react-native-version-check';
import { Color, FontSize } from '~/Global/GlobalStyles';
import HomeScreen from '~/screens/HomeStack/HomeScreen';
import { AppNavigator } from './TabNavigator';
import {
  heightPercentageScale,
  widthPercentageScale,
} from '~/theme/dimensions';
import { useTranslation } from 'react-i18next';
import DrawerViewItem from '~/components/DrawerViewItem/DrawerViewItem';
import { userLogout } from '~/redux/slices/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '~/redux/store';
import TransactionHistory from '~/screens/HomeStack/TransactionHistory';
import { RewardStack, SettingsStack } from './RootNavigator';

const drawerRoutesList = [
  {
    route: 'dashboard',
    icon: icodashboard,
    title: 'Dashboard',
  },
  {
    route: 'ProfileScreen',
    icon: icoUserr,
    title: 'My Profile',
  },
  {
    route: 'dashboard',
    icon: icorewards,
    title: 'Rewards',
    subDrawerList: [
      {
        route: 'dashboard',
        title: 'My Rewards',
      },
      {
        route: 'dashboard',
        title: 'Unlock More Rewards',
      },
      {
        route: 'dashboard',
        title: 'Promotions',
      },
    ],
  },
  {
    route: 'dashboard',
    icon: icoCards,
    title: 'Cards',
    subDrawerList: [
      {
        route: 'dashboard',
        title: 'My Cards',
      },
      {
        route: 'dashboard',
        title: 'Add New Card',
      },
    ],
  },
  {
    route: 'dashboard',
    icon: icoPoints,
    title: 'Points',
    subDrawerList: [
      {
        route: 'dashboard',
        title: 'My Points',
      },
      {
        route: 'dashboard',
        title: 'Add More Points',
      },
      {
        route: 'dashboard',
        title: 'Points History',
      },
    ],
  },
];

function DrawerView(): JSX.Element {
  const insets = useSafeAreaInsets();
  const statusBarHeight = insets.top;
  const { t } = useTranslation('screens', { keyPrefix: 'home-screen' });
  const dispatch = useDispatch();
  const navigation = useNavigation<any>();
  const { data } = useSelector((state: RootState) => state?.auth);
  const [userProfile, setUserProfile] = useState<any>('');

  console.log('email', data);
  const handleLogout = () => {
    dispatch(userLogout());
    navigation.dispatch(DrawerActions.closeDrawer());
  };
  return (
    <View
      style={{
        flex: 1,
        marginTop: statusBarHeight,
        // paddingVertical: 20,
        justifyContent: 'space-between',
        backgroundColor: Color.colorPrimary,
        color: Color.colorWhite,
      }}
    >
      <ScrollView contentContainerStyle={styles.scrollView}>
        {/* close drawer */}
        <View style={styles.closeDrawerButtonContainer}>
          <TouchableOpacity
            onPress={() => navigation.dispatch(DrawerActions.closeDrawer())}
            style={styles.drawerItem}
          >
            <Image source={closeIcon} style={styles.closeIcon} />
          </TouchableOpacity>
        </View>
        <View style={styles.profileInfoContainer}>
          <Image
            source={userProfile ? { uri: userProfile } : genericProfileImage}
            style={styles.image}
          />
          <View
            style={{
              display: 'flex',
              alignContent: 'center',
              flexDirection: 'column',
              // backgroundColor: 'red',
              padding: 20,
            }}
          >
            <Text
              style={[
                {
                  fontSize: FontSize.size_lg,
                  fontWeight: 'bold',
                  color: Color.colorWhite,
                },
              ]}
            >
              {data.name ? data.name : ' helena@gmail.com'}
            </Text>
            <Text
              style={[{ fontSize: FontSize.size_mid, color: Color.colorWhite }]}
            >
              {data.email ? data.email : ' helena@gmail.com'}
            </Text>
          </View>
        </View>

        <View style={styles.breakLine} />
        <View style={styles.drawerItemsListContainer}>
          <View>
            {drawerRoutesList?.map((dRItem) => (
              <DrawerViewItem navigation={navigation} viewItem={dRItem} />
            ))}
          </View>

          <View>
            <TouchableOpacity
              // onPress={() => navigation.navigate(viewItem.route)}
              style={styles.drawerItem}
            >
              <Image source={icoSetting} style={styles.drawerItemIcon} />
              <Text style={[styles.drawerItemText]}>{t('settings')}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleLogout} style={styles.drawerItem}>
              <Image source={icoLogout} style={styles.drawerItemIcon} />
              <Text style={[styles.drawerItemText]}>{t('logout')}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const AppNavigatorStack: FC<DrawerNavigatorScreenProps<'AppBottomStack'>> = ({
  route,
  navigation,
}) => {
  const Stack = createNativeStackNavigator<AppNavigatorParamList>();

  // useLayoutEffect(() => {
  //   const name = getFocusedRouteNameFromRoute(route);

  //   if (!name) return;

  //   if (name === 'chat') {
  //     StatusBar.setBarStyle('dark-content');
  //   }
  // }, [route]);

  // const fetchLatestVersion = async (): Promise<void> => {
  //   try {
  //     const provider: provider =
  //       Platform.OS === 'ios' ? 'appStore' : 'playStore';

  //     const latestVersion: string = await VersionCheck.getLatestVersion({
  //       provider,
  //       packageName: VersionCheck.getPackageName(),
  //     });

  //     const needsUpdate: IAppUpdate = await VersionCheck.needUpdate({
  //       currentVersion: VersionCheck.getCurrentVersion(),
  //       latestVersion,
  //     });

  //     if (needsUpdate.isNeeded) {
  //       navigation.navigate('update');
  //     }
  //   } catch (error) {
  //     console.error('Error fetching latest version:', error);
  //     // Handle error if unable to fetch latest version
  //   }
  // };

  // useEffect(() => {
  //   fetchLatestVersion();
  // }, []);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="HomeNavigator" component={AppNavigator} />
      <Stack.Screen name="TransactionHistory" component={TransactionHistory} />
    </Stack.Navigator>
  );
};

export default function DrawerNavigation() {
  const Drawer = createDrawerNavigator<DrawerNavigatorParamList>();

  return (
    <Drawer.Navigator
      drawerContent={() => <DrawerView />}
      screenOptions={{
        headerShown: false,
        drawerPosition: 'left',
        drawerStyle: {
          width: widthPercentageScale(75),
          // borderTopEndRadius: 50,
          borderTopRightRadius: 35,
          borderBottomRightRadius: 55,
        },
      }}
    >
      <Drawer.Screen name="AppBottomStack" component={AppNavigatorStack} />
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="SettingsStack" component={SettingsStack} />
      <Drawer.Screen name="RewardStack" component={RewardStack} />
      {/* <Drawer.Screen name="ChangeCredentials" component={ChangeCredentials} />
      <Drawer.Screen name="SuccessfullMessage" component={SuccessfullMessage} />
      <Drawer.Screen name="update" component={UpdateScreen} /> */}
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  drawerItemsListContainer: {
    // paddingHorizontal: 10,
    padding: 15,
    // paddingBottom: 50,
    justifyContent: 'space-between',
    // backgroundColor: 'red',
    height: heightPercentageScale(80),
  },
  profileInfoContainer: {
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  closeDrawerButtonContainer: {
    display: 'flex',
    // justifyContent: 'flex-end',
    alignItems: 'flex-end',
    // width: widthPercentageScale(100),
    paddingHorizontal: 15,
    // backgroundColor: 'red',
  },
  drawerItem: {
    display: 'flex',
    flexDirection: 'row',
    padding: 10,
    // backgroundColor: 'red',
  },
  drawerItemIcon: {
    marginTop: 2,
    height: Platform.OS === 'ios' ? 20 : 20,
    width: Platform.OS === 'ios' ? 20 : 20,
    // borderRadius: Platform.OS === 'ios' ? 30 : 25,
  },
  closeIcon: {
    marginTop: 5,
    height: Platform.OS === 'ios' ? 20 : 20,
    width: Platform.OS === 'ios' ? 20 : 20,
    // borderRadius: Platform.OS === 'ios' ? 30 : 25,
  },
  image: {
    marginTop: 8,
    height: Platform.OS === 'ios' ? 60 : 75,
    width: Platform.OS === 'ios' ? 60 : 75,
    borderRadius: Platform.OS === 'ios' ? 30 : 25,
  },
  drawerItemText: {
    fontSize: FontSize.size_lg,
    fontFamily: 'Inter-SemiBold',
    // marginTop: 20,
    color: Color.colorWhite,
    includeFontPadding: false,
    paddingHorizontal: 10,
  },
  userName: {
    fontSize: 22,
    fontFamily: 'Inter-SemiBold',
    // marginTop: 20,
    color: Color.colorWhite,
    includeFontPadding: false,
  },
  scrollView: {
    flexGrow: 1,
  },
  view: {
    fontSize: 15,
    fontFamily: 'Inter-SemiBold',
    marginTop: 7,
    color: Color.colorWhite,
    includeFontPadding: false,
  },
  breakLine: {
    height: 0.98,
    backgroundColor: Color.colorWhite,
    marginTop: 20,
    // marginRight: 20,
  },
});
