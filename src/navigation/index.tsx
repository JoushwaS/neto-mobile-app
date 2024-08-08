import React, { useEffect, useState } from 'react';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
// import RootNavigator from './RootNavigator';
import { withBoundary } from '~/components/boundary';
import { useColorSchemeValue } from '~/hooks/use-color-scheme-value';
import { useKillswitch } from '~/hooks/use-killswitch';
import { useSetQueryFocusManager } from '~/hooks/use-set-query-focus-manager';
import { useSetQueryOnlineManager } from '~/hooks/use-set-query-online-manager';
import { useInvalidateQueriesOnLanguageChange } from '~/hooks/use-invalidate-queries-on-language-change';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SplashScreen } from '~/screens/Splash';
import OnboardingScreen from '~/screens/AuthStack/OnboardingScreen';
import SignupScreen from '~/screens/AuthStack/SignupScreen';
import LoginScreen from '~/screens/AuthStack/LoginScreen';
import OTPScreen from '~/screens/AuthStack/OTPScreen';
import SetupPassword from '~/screens/AuthStack/SetupPasswordScreen';
import CongratulationScreen from '~/screens/AuthStack/CongratulationScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DrawerNavigation from './DrawerNavigation';
import { useSelector } from 'react-redux';
import { RootState } from '~/redux/store';
import ForgotPasswordScreen from '~/screens/AuthStack/ForgotPassword';
import PasswordResetSuccessScreen from '~/screens/AuthStack/PasswordResetSuccessScreen';

function Navigation() {
  const theme = useColorSchemeValue([DefaultTheme, DarkTheme]);
  const isLogin = useSelector((state: RootState) => state.auth.isLogin);
  console.log('isLogin', isLogin);
  const [isLoggedIn, setisLoggedIn] = useState(false);
  const getLoginStatus = async () => {
    const login = await AsyncStorage.getItem('LOGIN');
    // console.log('login>>', login);
    if (login == 'YES') {
      setisLoggedIn(true);
    }
  };
  useKillswitch();

  useSetQueryFocusManager();
  useSetQueryOnlineManager();

  useInvalidateQueriesOnLanguageChange();
  useEffect(() => {
    getLoginStatus();
  }, []);

  return (
    <NavigationContainer
      theme={theme}
      
      // linking={LinkingConfiguration}
      // onReady={() => SplashScreen.hide()}
    >
      {isLogin ? <DrawerNavigation /> : <AuthStack />}
    </NavigationContainer>
  );
}

function AuthStack() {
  const Stack = createNativeStackNavigator();

  // const secretPanelEnabled = useApplicationConfiguration(
  //   'SECRET_PANEL_ENABLED'
  // );
  // const [isFirstLaunch, setIsFirstLaunch] = useState(null);
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   const checkFirstLaunch = async () => {
  //     try {
  //       const value = await AsyncStorage.getItem('alreadyLaunched');
  //       if (value === null) {
  //         await AsyncStorage.setItem('alreadyLaunched', 'true');
  //         setIsFirstLaunch(true);
  //       } else {
  //         setIsFirstLaunch(false);
  //       }
  //     } catch (error) {
  //       console.error('Error checking first launch status:', error);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };

  //   checkFirstLaunch();
  // }, []);

  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Splash"
    >
      <Stack.Screen name="Splash" component={SplashScreen} />

      <Stack.Screen
        name="Onboarding"
        component={OnboardingScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Signup"
        component={SignupScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
       <Stack.Screen
        name="ForgotPassword"
        component={ForgotPasswordScreen}
        options={{ headerShown: false }}
      />
       <Stack.Screen
        name="PasswordResetSuccess"
        component={PasswordResetSuccessScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="OTPVerification"
        component={OTPScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SetupPassword"
        component={SetupPassword}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CongratulationsScreen"
        component={CongratulationScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default withBoundary(Navigation);
