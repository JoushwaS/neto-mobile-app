import { Platform } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { Color, FontFamily } from '~/Global/GlobalStyles';

export const fontFamilies = {
  light: 'Poppins-Light',
  lightItalic: 'Poppins-LightItalic',
  medium: 'Poppins-Medium',
  mediumItalic: 'Poppins-MediumItalic',
  regular: 'Poppins-Regular',
  italic: 'Poppins-Italic',
  semiBold: 'Poppins-SemiBold',
  semiBoldItalic: 'Poppins-SemiBoldItalic',
  bold: 'Poppins-Bold',
  boldItalic: 'Poppins-BoldItalic',
  extraBold: 'Poppins-ExtraBold',
  extraBoldItalic: 'Poppins-ExtraBoldItalic',
  black: 'Poppins-Black',
  blackItalic: 'Poppins-BlackItalic',
} as const;

export const textVariants = {
  // Extra Small Sizes
  extraXSmall: {
    fontFamily: fontFamilies.light,
    fontWeight: '500',
    fontSize: moderateScale(11.1), // 10
    lineHeight: 0 || null,
    letterSpacing: -0.1,
    color: 'black',
  },
  extraSmall: {
    fontFamily: fontFamilies.medium,
    fontWeight: '500',
    fontSize: moderateScale(12.1), // 10
    lineHeight: 0 || null,
    letterSpacing: -0.1,
    color: 'black',
  },
  Xsmall: {
    fontFamily: fontFamilies.light,
    fontWeight: '500',
    fontSize: moderateScale(13.1), // 10
    lineHeight: 0 || null,
    letterSpacing: -0.1,
    color: 'black',
  },
  small: {
    fontFamily: fontFamilies.regular,
    fontWeight: '500',
    fontSize: moderateScale(14.1), // 15
    lineHeight: 0 || null,
    letterSpacing: -0.1,
    color: 'black',
  },
  smallBold: {
    fontFamily: fontFamilies.medium,
    fontWeight: '700',
    fontSize: moderateScale(13.5), // 15
    lineHeight: 0 || null,
    letterSpacing: -0.1,
    color: 'black',
  },
  mediumBold: {
    fontFamily: fontFamilies.semiBold,
    fontWeight: '500',
    fontSize: moderateScale(14.1), // 15
    lineHeight: 0 || null,
    letterSpacing: -0.1,
    color: 'black',
  },
  title: {
    // fontWeight: '700',
    FontFamily: fontFamilies.medium,
    fontSize: moderateScale(14.1), // 15
    lineHeight: 0 || null,
    letterSpacing: 0,
    color: 'black',
  },
  titleBlack: {
    fontFamily: fontFamilies.regular,
    // fontWeight: '700',
    fontSize: moderateScale(14.1), // 15
    lineHeight: 0 || null,
    letterSpacing: 0,
    color: 'black',
  },
  body: {
    fontFamily: fontFamilies.regular,
    fontWeight: '500',
    fontSize: moderateScale(15.09), // 16
    lineHeight: 0 || null,
    letterSpacing: 0,
    color: 'black',
  },
  label: {
    fontFamily: fontFamilies.medium,
    fontWeight: '600',
    fontSize: moderateScale(15.09), // 16
    lineHeight: 0 || null,
    letterSpacing: 0,
    color: 'black',
  },
  text: {
    fontFamily: fontFamilies.semiBold,
    fontWeight: '500',
    fontSize: moderateScale(15.09), // 16
    lineHeight: 0 || null,
    letterSpacing: 0,
    color: 'black',
  },
  link: {
    fontWeight: '500',
    fontSize: moderateScale(15.09), // 16
    lineHeight: 0 || null,
    letterSpacing: 1.5,
    color: 'black',
  },
  buttonText: {
    fontFamily: fontFamilies.medium,
    fontSize: moderateScale(16.08), // 17
    lineHeight: 0 || null,
    letterSpacing: 0,
    color: 'black',
  },
  Figtree: {
    fontFamily: fontFamilies.regular,

    // fontWeight: '700',
    fontSize: moderateScale(15.9), // 16
    lineHeight: 0 || null,
    letterSpacing: 0,
    color: 'black',
  },

  // Large Sizes
  h5: {
    fontFamily: fontFamilies.semiBold,
    fontWeight: '700',
    fontSize: moderateScale(17), // 18
    lineHeight: 0 || null,
    letterSpacing: 0,
    color: 'black',
  },
  h4Light: {
    FontFamily: fontFamilies.light,
    // fontWeight: '700',
    fontSize: moderateScale(18.8), // 20
    lineHeight: 0 || null,
    letterSpacing: 0,
    color: 'black',
  },
  h4: {
    FontFamily: fontFamilies.regular,

    // fontWeight: '800',
    fontSize: moderateScale(18.8), // 20
    lineHeight: 0 || null,
    letterSpacing: 0,
    color: 'black',
  },
  h3: {
    fontFamily: fontFamilies.bold,
    // fontWeight: '800',
    fontSize: moderateScale(24.5), // 26
    lineHeight: 0 || null,
    letterSpacing: 0,
    color: 'black',
  },
  h3Sm: {
    fontWeight: '800',
    fontSize: moderateScale(21.5), // 26
    lineHeight: 0 || null,
    letterSpacing: 0,
    color: 'black',
  },
  h2: {
    fontWeight: '800',
    fontSize: moderateScale(27.3), // 29
    lineHeight: 0 || null,
    letterSpacing: 0,
    color: 'black',
  },
  h1: {
    fontSize: moderateScale(32.2), // 32
    lineHeight: 0 || null,
    letterSpacing: -1,
    color: 'black',
  },
  bgTitle: {
    fontWeight: '900',
    fontSize: moderateScale(50), // 32
    letterSpacing: -1,
    color: Color.colorWhite,
  },
} as const;
