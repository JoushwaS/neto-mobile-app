//CustomButtonBlack
import React from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';

const CustomButtonBlack = ({ onPress, text, subtitle, disabled }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <View style={styles.textWrapper}>
        <Text style={styles.textSpan}>{subtitle}</Text>
        {/* <Text style={styles.textSpacer}>&nbsp;</Text> */}
        <Text style={styles.textTitle}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 384,
    height: 60,
    backgroundColor: '#000',
    borderRadius: 40,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 2, // For Android (optional)
    margin: 20, // Adjust margin as needed
    alignSelf: 'center', // Center button horizontally
  },
  textWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textSpan: {
    // fontFamily: 'Poppins-SemiBold', // You might need to install the font
    fontWeight: '500',
    color: '#ffffff99',
    fontSize: 18,
  },
  textSpacer: {
    marginHorizontal: 5, // Adjust spacing as needed
  },
  textTitle: {
    // fontFamily: 'Poppins-SemiBold', // You might need to install the font
    fontWeight: '600',
    color: '#fff',
    fontSize: 18,
  },
});

export default CustomButtonBlack;
