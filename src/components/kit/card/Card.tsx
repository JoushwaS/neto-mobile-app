import React, { ForwardedRef, forwardRef } from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';

export type CardProps = {
  outlined?: boolean;
  color?: string;
  style?: StyleProp<ViewStyle>;
  radius?: number;
  children?: React.ReactNode;
};

export const Card = forwardRef(
  (
    {
      outlined = false,
      color = '#fff',
      style,
      radius = 32,
      children,
    }: CardProps,
    ref?: ForwardedRef<View>
  ) => {
    return (
      <View
        ref={ref}
        style={[
          {
            borderRadius: radius,
            backgroundColor: outlined ? 'transparent' : color,
            borderColor: outlined ? '#E8E3E0' : 'transparent',
            borderWidth: outlined ? 1 : 0,
          },
          style,
        ]}
      >
        {children}
      </View>
    );
  }
);
