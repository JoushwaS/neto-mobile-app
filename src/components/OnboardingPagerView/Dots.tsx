import React from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';

import { Color } from '../../Global/GlobalStyles';

interface Styles {
  container: ViewStyle;
  indicator: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
  container: {
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  indicator: {
    width: 10,
    height: 10,
    borderRadius: 10,
    backgroundColor: Color.colorWhite,
  },
});

interface ContainerStyle {
  containerStyle?: StyleProp<ViewStyle> | undefined;
  activePage: number;
  pages: any[];
}

type Props = ContainerStyle;

export function Dots({ activePage, pages, containerStyle }: Props) {
  return (
    <View style={[styles.container, containerStyle, { width: 100 }]}>
      {pages?.map((page, index) => (
        <View
          key={index.toString()}
          style={[
            styles.indicator,
            {
              width: activePage === index ? 13 : 10,
              height: activePage === index ? 13 : 10,
            },
          ]}
        />
      ))}
    </View>
  );
}
