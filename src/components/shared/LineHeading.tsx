// LineHeading.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Color } from '~/Global/GlobalStyles';

interface LineHeadingProps {
  title: string;
}

const LineHeading: React.FC<LineHeadingProps> = ({ title }) => {
  return (
    <View style={styles.container}>
      <View style={styles.line} />
      <Text style={styles.text}>{title}</Text>
      <View style={styles.line} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#000',
  },
  text: {
    marginHorizontal: 10,
    fontSize: 15,
    color: Color.colorBlack,
    fontWeight: 'bold',
  },
});

export default LineHeading;
