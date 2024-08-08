import React from 'react';
import {
  SafeAreaView,
  Image,
  StyleSheet,
  FlatList,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

import { Color, FontSize, FontFamily, Border } from '../../Global/GlobalStyles';
import {
  heightPercentageScale,
  widthPercentageScale,
} from '~/theme/dimensions';
import { OnboardingPagerView } from '~/components/OnboardingPagerView';
import { pagerContents } from '~/components/OnboardingPagerView/pagerContents';
import { useDispatch } from 'react-redux';
import { skipOnBoardingStep } from '~/redux/slices/authSlice';
import { useSelector } from 'react-redux';
import { RootState } from '~/redux/store';

const { width, height } = Dimensions.get('window');

const COLORS = { primary: '#ccc', white: '#fff' };

const slides = [
  {
    id: '1',
    image: require('../../../assets/images/onboarding-img1.png'),
    title: 'More Rewards Everywhere',
    subtitle:
      'Earn rewards easily from all your credit cards, no matter where you shop.',
  },
  {
    id: '2',
    image: require('../../../assets/images/onboarding-img2.png'),
    title: 'Keep Track Easily',
    subtitle:
      'Use our mobile app to earn and see your points grow right in your pocket.',
  },
  {
    id: '3',
    image: require('../../../assets/images/onboarding-img3.png'),
    title: 'Redeem Anywhere',
    subtitle:
      'Use the Power Point Mastercard to turn your points into rewards almost anywhere you go.',
  },
];

const Footer = ({ slides, onSkip, onNext, currentSlideIndex }) => {
  return (
    <View
      style={{
        height: heightPercentageScale(20),
        gap: heightPercentageScale(5),
        paddingHorizontal: 20,
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: widthPercentageScale(5),
        }}
      >
        <TouchableOpacity activeOpacity={0.8} onPress={onSkip}>
          <Text style={styles.skipBtn}>SKIP</Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.8}
          onPress={onNext}
          style={styles.nextBtn}
        >
          <Text style={{ color: Color.colorPrimary, fontWeight: 'bold' }}>
            Next
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const OnboardingScreen = ({ navigation }) => {
  const { skipOnboarding, data, isLogin } = useSelector(
    (state: RootState) => state?.auth
  );

  console.log('skipOnboarding>>>', { data, skipOnboarding, isLogin });
  console.log('height', height * 0.25);
  const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);
  const dispatch = useDispatch();
  const goToNextSlide = () => {
    const nextSlideIndex = currentSlideIndex + 1;
    if (nextSlideIndex < slides.length) {
      setCurrentSlideIndex(nextSlideIndex);
    } else {
      dispatch(skipOnBoardingStep({ skipOnboarding: true }));

      navigation.navigate('Signup');
    }
  };

  const onSkipHandler = () => {
    // const lastSlideIndex = Math.min(
    //   slides.length - 1,
    //   pagerContents.length - 1
    // );
    dispatch(skipOnBoardingStep({ skipOnboarding: true }));
    navigation.navigate('Signup');
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={styles.containBox} />
      <StatusBar
        backgroundColor={COLORS.primary}
        translucent
        barStyle="dark-content"
      />
      <OnboardingPagerView renderItemIndex={currentSlideIndex} />
      <Footer
        slides={slides}
        onNext={goToNextSlide}
        onSkip={onSkipHandler}
        currentSlideIndex={currentSlideIndex}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  slideItemContainer: { alignItems: 'center' },
  skipBtn: {
    color: Color.colorWhite,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    width: widthPercentageScale(20),
    height: heightPercentageScale(5),
    padding: 10,
  },
  nextBtn: {
    width: widthPercentageScale(20),
    height: heightPercentageScale(5),
    padding: 10,
    backgroundColor: Color.colorYellow,
    borderRadius: Border.br_31xl,
    color: Color.colorPrimary,
    alignItems: 'center',
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 23,
    color: Color.colorWhite,
    fontFamily: FontFamily.poppinsSemiBold,
    paddingHorizontal: 50,
    paddingVertical: 20,
  },
  title: {
    fontWeight: 'bold',
    marginTop: '20%',
    textAlign: 'center',
    fontSize: 26,
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    color: Color.colorWhite,
    paddingHorizontal: 10,
    fontFamily: FontFamily.poppinsSemiBold,
  },
  image: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
  },
  indicator: {
    height: 10,
    width: 10,
    // borderRadius: '50%',
    backgroundColor: 'grey',
    marginHorizontal: 3,
    borderRadius: 2,
  },
  btn: {
    flex: 1,
    height: 50,
    borderRadius: 5,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containBox: {
    position: 'absolute',
    width: '100%',
    height: heightPercentageScale(45),
    bottom: 0,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    backgroundColor: '#3535b0',
  },
});

export default OnboardingScreen;
