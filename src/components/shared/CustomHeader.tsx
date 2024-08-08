import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Fonts } from '../kit';
import { Color, FontFamily } from '~/Global/GlobalStyles';
import { fontFamilies } from '~/theme/textVariants';
import HeaderLeft from './Header/HeaderLeft';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import { useNavigation } from '@react-navigation/native';

const CustomHeaderWithIcons = ({
  showNotification = true,
  showMenu = true,
  back = false,
  text = '',
  textStyle = {},
  containerStyle = {},
}) => {
  const navigation = useNavigation();
  return (
    <View style={[styles.headerContainer, containerStyle]}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        {back && (
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            activeOpacity={0.7}
          >
            <FontAwesome6 name={'arrow-left'} size={18} />
          </TouchableOpacity>
        )}
        <Text style={[styles.greetingsText, textStyle]}>{text}</Text>
      </View>
      <HeaderLeft showNotification={showNotification} showMenu={showMenu} />
    </View>
  );
};

export default CustomHeaderWithIcons;

const styles = StyleSheet.create({
  headerContainer: {
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
  },
  greetingsText: {
    fontFamily: fontFamilies.extraBold,
    marginHorizontal: 15,
    marginTop: 5,
    fontSize: 22,
  },
});
