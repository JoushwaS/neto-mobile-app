import React from 'react';
import { Text } from 'react-native';
import { FontFamily } from '~/Global/GlobalStyles';
import { textVariants } from '~/theme/textVariants';

function HeaderTitle({ text }) {
  return <Text style={[{ fontFamily: FontFamily.poppinsBold, fontSize: 22 }]}>{text}</Text>;
}

export default HeaderTitle;
