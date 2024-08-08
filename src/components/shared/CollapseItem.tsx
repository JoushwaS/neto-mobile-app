import React, { FC, useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import { Color, FontFamily } from '../../Global/GlobalStyles';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';

interface CollapseItemProps {
  title: string;
  content: string;
  containerStyle?: ViewStyle;
}

export const CollapseItem: FC<CollapseItemProps> = ({
  title,
  content,
  containerStyle,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <View style={[styles.container, containerStyle]}>
      <View
        style={[
          styles.infoCard,
          {
            backgroundColor: isExpanded ? Color.colorWhite : Color.colorBlack,
          },
        ]}
      >
        <TouchableOpacity style={styles.profileItem} onPress={toggleExpand}>
          <Text
            style={[
              styles.infoText,
              styles.title,
              { color: isExpanded ? Color.colorBlack : Color.colorWhite },
            ]}
          >
            {title}
          </Text>
          <FontAwesome6
            name={isExpanded ? 'chevron-down' : 'chevron-up'}
            style={[
              styles.icon,
              { color: isExpanded ? Color.colorBlack : Color.colorWhite },
            ]}
            size={16}
          />
        </TouchableOpacity>
        {isExpanded && <Text style={styles.content}>{content}</Text>}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  profileItem: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
  },
  container: {
    backgroundColor: Color.colorWhitesmoke,
    marginTop: 20,
  },
  infoCard: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginHorizontal: 20,
    borderRadius: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5,
  },
  title: {
    fontFamily: FontFamily.poppinsBold,
  },
  content: {
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsRegular,
    marginTop: 10,
  },
  icon: {},
});

export default CollapseItem;
