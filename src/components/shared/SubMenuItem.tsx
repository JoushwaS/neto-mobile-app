import React, { FC } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  StatusBar,
  Image,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ViewStyle,
} from 'react-native';
import { Color, FontFamily, FontSize } from '../../Global/GlobalStyles';
import { Card } from '~/components/kit';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import { textVariants } from '~/theme/textVariants';

interface SubMenuItem {
  sbTitle: string;
  screenN: string;
  params?: object; // Add params to SubMenuItem
}

interface MenuItem {
  title?: string;
  subMenu: SubMenuItem[];
}

interface RenderSubMenuItemProps {
  navigation: any;
  subItemsList: MenuItem[];
  containerStyle?: ViewStyle;
}

export const RenderSubMenuItem: FC<RenderSubMenuItemProps> = ({
  navigation,
  subItemsList,
  containerStyle,
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      {subItemsList.map((setMItem, index) => (
        <Card key={index} style={styles.infoCard}>
          <View style={[styles.profileItem]}>
            {setMItem?.title && (
              <Text style={[textVariants.buttonText, styles.infoText]}>
                {setMItem?.title}
              </Text>
            )}

            {setMItem.subMenu.map((sbMenu, subIndex) => (
              <TouchableOpacity
                key={subIndex}
                onPress={() => {
                  if (sbMenu?.screenN !== '') {
                    navigation.navigate(sbMenu?.screenN, sbMenu?.params); // Pass params
                  }
                }}
                style={[styles.subMenuItem]}
              >
                <Text
                  style={[textVariants.smallBold, { color: Color.colorBlack }]}
                >
                  {sbMenu?.sbTitle}
                </Text>

                <FontAwesome6
                  name={'chevron-right'}
                  style={[styles.icon]}
                  size={16}
                />
              </TouchableOpacity>
            ))}
          </View>
        </Card>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  profileItem: {
    width: '100%',
    flexDirection: 'column',
  },
  subMenuItem: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 15,
  },
  container: {
    flex: 1,
    backgroundColor: Color.colorWhitesmoke,
    marginTop: 20,
  },
  profileSection: {
    alignItems: 'center',
    marginVertical: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: Color.colorPrimary,
  },
  icon: { marginTop: 4, marginRight: 4, color: Color.colorBlack },
  profileName: {
    fontFamily: FontFamily.poppinsBold,
    color: Color.colorBlack,
  },
  profileJoinDate: {
    fontFamily: FontFamily.poppinsRegular,
    color: Color.colorGray_300,
  },
  infoCard: {
    backgroundColor: Color.colorWhite,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginHorizontal: 20,
    borderRadius: 15,
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5,
  },
  infoText: {
    marginBottom: 10,
    marginTop: 10,
    color: Color.colorGray_300,
  },
  logoutButton: {
    backgroundColor: Color.colorPrimary,
    padding: 15,
    marginHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  logoutButtonText: {
    color: Color.colorWhite,
    fontFamily: FontFamily.poppinsBold,
  },
});

export default RenderSubMenuItem;
