//CustomButton

import React from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import Metrix from '~/Global/Metrix';

const CustomButton = ({ onPress, preIcon=null, postIcon=null, text, disabled, style, textStyle }) => {
  return (
    <TouchableOpacity
    activeOpacity={0.7}
      onPress={onPress}
      disabled={disabled}
      style={[{ ...styles.button }, { ...style }]}
    >
      <View style={styles.textWrapper}>
        {preIcon}<Text style={[{ ...styles.buttonText }, textStyle]}>{text}</Text>{postIcon}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '100%',
    height: Metrix.VerticalSize(55),
    backgroundColor: '#23239d',
    borderRadius: 40,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    // elevation: 2, // For Android (optional)
  },
  textWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    // fontFamily: 'Poppins-SemiBold', // You might need to install a custom font or use a system font
    fontWeight: '600',
    color: '#ffffff',
    fontSize: Metrix.customFontSize(16),
    letterSpacing: 0,
    // lineHeight: 44,
  },
});

export default CustomButton;
