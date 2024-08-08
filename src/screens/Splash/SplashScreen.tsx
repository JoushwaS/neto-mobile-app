import React, { useEffect } from 'react';
import { View, StyleSheet, Dimensions, StatusBar } from 'react-native';
import Video from 'react-native-video';
import * as RootNavigation from '../../navigation/RootNavigation';
import { RootState } from '~/redux/store';

const { width, height } = Dimensions.get('window');
import { useSelector } from 'react-redux';

const SplashScreen = ({ navigation, route }) => {
  const { skipOnboarding, data } = useSelector(
    (state: RootState) => state?.auth
  );

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigateToNextScreen();
    }, 8000); // Adjust the duration according to your video length

    return () => clearTimeout(timeout);
  }, []);

  const navigateToNextScreen = () => {
    // RootNavigation.navigate('Onboarding', {});
    if (!skipOnboarding) {
      navigation.navigate('Onboarding');
    } else {
      navigation.navigate('Login');
    }
    // if (isFirstLaunch) {
    //   navigation.replace('Onboarding');
    // } else {
    //   navigation.replace('Login');
    // }
  };

  return (
    <View style={styles.container}>
      {/* <StatusBar hidden /> */}
      <Video
        source={require('../../../assets/videos/splash.mp4')} // Replace with your video path
        style={styles.backgroundVideo}
        resizeMode="cover"
        onEnd={navigateToNextScreen}
        repeat={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3535b0',
  },
  backgroundVideo: {
    width: width,
    height: height,
    position: 'absolute',
  },
});

export default SplashScreen;
