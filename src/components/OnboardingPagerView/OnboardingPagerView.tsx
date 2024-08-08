import React, { useCallback, useMemo, useState } from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  ImageStyle,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import { scale, verticalScale } from 'react-native-size-matters';
import { Color, FontSize, FontFamily, Border } from '../../Global/GlobalStyles';

import { Dots } from './Dots';
import { pagerContents } from './pagerContents';
import {
  heightPercentageScale,
  widthPercentageScale,
} from '~/theme/dimensions';
import { TouchableOpacity } from 'react-native-gesture-handler';

const { width, height } = Dimensions.get('window');

interface Styles {
  container: ViewStyle;
  pagerContentView: ViewStyle;
  pagerContainer: ViewStyle;
  onboardingImage: ImageStyle;
  title: TextStyle;
  description: TextStyle;
}

const styles = StyleSheet.create<Styles>({
  container: { flex: 1, justifyContent: 'center' },
  pagerContentView: {
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: widthPercentageScale(5),
    marginTop: heightPercentageScale(10),
  },
  onboardingImage: {
    width: '100%',
    height: undefined,
    aspectRatio: 423 / 254,
    alignSelf: 'center',
  },

  description: {
    alignSelf: 'center',
    textAlign: 'center',
    color: Color.colorWhite,
    width: '90%',
    marginTop: scale(7),
  },
  pagerContainer: {
    marginBottom: verticalScale(20),
  },
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
    padding: 20,
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
    borderRadius: '50%',
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
    height: height - width,
    bottom: 0,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    backgroundColor: '#3535b0',
  },
});
const Footer = ({ onSkip, onNext, currentSlideIndex }) => {
  return (
    <View
      style={{
        height: heightPercentageScale(25),
        gap: heightPercentageScale(5),
        paddingHorizontal: 20,
      }}
    >
      {/* Render buttons */}
      <View>
        {/* {currentSlideIndex == slides.length - 1 ? (
          <View style={{ height: 50 }}>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => navigation.replace('Login')}
            >
              <Text style={{ fontWeight: 'bold', fontSize: 15 }}>
                GET STARTED
              </Text>
            </TouchableOpacity>
          </View>
        ) : ( */}
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
        {/* )} */}
      </View>
    </View>
  );
};

const PagerItem = ({ item }) =>
  useMemo(() => {
    const { id, image, title, subtitle } = item;
    return (
      <View key={`${id}`} style={styles.pagerContentView}>
        <Image source={image} style={{ resizeMode: 'contain' }} />
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
      </View>
    );
  }, [item]);

export default function OnboardingPagerView({ renderItemIndex = 0 }) {
  const flatListRef = React.useRef<FlatList>(null);

  const renderItem = useCallback(
    ({ item }) => (
      <View style={styles.pagerContentView}>
        <Image
          source={item.image}
          // style={styles.onboardingImage}
          resizeMode="contain"
        />
        <Text style={[styles.title]}>{item.title}</Text>
        <Text style={[styles.subtitle, { fontSize: FontSize.size_xl }]}>
          {item.subtitle}
        </Text>
      </View>
    ),
    []
  );

  React.useEffect(() => {
    flatListRef.current?.scrollToIndex({
      index: renderItemIndex,
      animated: true,
    });
  }, [renderItemIndex]);

  const keyExtractor = useCallback((_, index) => index.toString(), []);

  const renderPagination = useMemo(() => {
    return (
      <View style={{}}>
        <Dots activePage={renderItemIndex} pages={pagerContents} />
      </View>
    );
  }, [renderItemIndex]);

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        horizontal
        pagingEnabled
        data={pagerContents}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        showsHorizontalScrollIndicator={false}
      />
      {renderPagination}
    </View>
  );
}
