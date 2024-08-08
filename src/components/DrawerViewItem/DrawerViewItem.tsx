import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Platform,
} from 'react-native';
import { Color, FontSize } from '~/Global/GlobalStyles';

function DrawerViewItem({ navigation, viewItem }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handlePress = () => {
    if (viewItem.subDrawerList) {
      setIsExpanded(!isExpanded);
    } else {
      navigation.navigate(viewItem.route);
    }
  };

  return (
    <View style={styles.drawerViewItemContainer}>
      <TouchableOpacity onPress={handlePress} style={styles.drawerItem}>
        <Image source={viewItem.icon} style={styles.drawerItemIcon} />
        <Text style={styles.drawerItemText}>{viewItem.title}</Text>
      </TouchableOpacity>
      {isExpanded && viewItem.subDrawerList && (
        <View style={styles.subListContainer}>
          {viewItem.subDrawerList.map((subItem, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => navigation.navigate(subItem.route)}
              style={styles.subDrawerItem}
            >
              <Text style={styles.subDrawerItemText}>{subItem.title}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  drawerViewItemContainer: {
    padding: 4,
  },
  subListContainer: {
    paddingHorizontal: 50,
    // paddingTop: 10,
    fontSize: FontSize.size_sm,
  },
  subDrawerItem: {
    paddingVertical: 10,
  },
  subDrawerItemText: {
    fontSize: FontSize.size_mid,
    color: Color.colorWhite,
  },
  drawerItem: {
    display: 'flex',
    flexDirection: 'row',
    padding: 10,
  },
  drawerItemIcon: {
    marginTop: 2,
    height: Platform.OS === 'ios' ? 20 : 18,
    width: Platform.OS === 'ios' ? 20 : 18,
  },
  drawerItemText: {
    fontSize: FontSize.size_lg,
    fontFamily: 'Inter-SemiBold',
    color: Color.colorWhite,
    includeFontPadding: false,
    paddingHorizontal: 10,
    margin: 0,
  },
});

export default DrawerViewItem;
