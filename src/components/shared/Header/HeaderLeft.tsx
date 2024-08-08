import { DrawerActions, useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import menuBarIcon from '../../../../assets/images/menuBarIcon.png';
import Ionicons from 'react-native-vector-icons/Ionicons';

function HeaderLeft({ showNotification = true, showMenu = true }) {
  const navigation = useNavigation();
  return (
    <View style={styles.rightContainer}>
      {showNotification && (
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {
            navigation.navigate('NotificationsScreen');
          }}
        >
          <MaterialCommunityIcons
            name="bell-outline"
            color="black"
            style={styles.bellIcon}
          />
        </TouchableOpacity>
      )}
      {showMenu && (
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {
            navigation.dispatch(DrawerActions.openDrawer());
          }}
        >
          <Ionicons name={'menu'} size={30} />
        </TouchableOpacity>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  rightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  bellIcon: {
    fontSize: 26,
    marginRight: 10,
  },
  menuIcon: {
    width: 25, // Adjust the size as needed
    height: 25, // Adjust the size as needed
  },
});
export default HeaderLeft;
