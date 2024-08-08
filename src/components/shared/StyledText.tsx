import React from 'react';
import { Text, TextProps, StyleSheet } from 'react-native';
import { textVariants, fontFamilies } from '~/theme/textVariants';

interface StyledTextProps extends TextProps {
  variant?: keyof typeof textVariants;
  fontFamily?: keyof typeof fontFamilies;
  children: React.ReactNode;
}

const StyledText: React.FC<StyledTextProps> = ({
  variant = 'body',
  fontFamily,
  style,
  children,
  ...props
}) => {
  const variantStyle = textVariants[variant];
  const fontFamilyStyle = fontFamily
    ? { fontFamily: fontFamilies[fontFamily] }
    : {};

  return (
    <Text style={[variantStyle, fontFamilyStyle, style]} {...props}>
      {children}
    </Text>
  );
};

export default StyledText;
