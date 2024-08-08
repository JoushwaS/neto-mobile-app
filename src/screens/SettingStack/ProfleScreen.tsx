import React, { useState, useCallback } from 'react';
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
} from 'react-native';
import { launchImageLibrary, launchCamera } from 'react-native-image-picker';
import { Color, FontFamily, FontSize } from '../../Global/GlobalStyles';
import CustomHeaderWithIcons from '~/components/shared/CustomHeader';
import CustomButton from '~/components/shared/CustomButton';
import { Card } from '~/components/kit';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { userLogout } from '~/redux/slices/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '~/redux/store';
import { textVariants } from '~/theme/textVariants';
export const ProfileScreen = ({ navigation }) => {
  const [profileImage, setProfileImage] = useState(null);
  const dispatch = useDispatch();
  const { data } = useSelector((state: RootState) => state?.auth);

  const handleProfileImagePress = () => {
    const options = {
      mediaType: 'photo',
      maxWidth: 300,
      maxHeight: 300,
      includeBase64: true,
    };

    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorCode) {
        console.log('ImagePicker Error: ', response.errorMessage);
      } else {
        const source = { uri: response.assets[0].uri };
        setProfileImage(source);
      }
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#FFF8E6" barStyle="dark-content" />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : null}
        style={styles.container}
      >
        <CustomHeaderWithIcons text={'My Profile'} back={true} />
        {/* Profile Image Section */}
        <View style={styles.profileSection}>
          <TouchableOpacity onPress={handleProfileImagePress}>
            <Image
              source={
                profileImage ||
                require('../../../assets/images/default-profile.png')
              }
              style={styles.profileImage}
            />
          </TouchableOpacity>
          <Text
            style={[textVariants.mediumBold, { color: Color.colorGray_300 }]}
          >
            {data?.name}
          </Text>
          <Text style={styles.profileJoinDate}>Joined June 20, 2024</Text>
        </View>
        <Card style={styles.infoCard}>
          <View
            style={[
              styles.profileItem,
              {
                borderBottomColor: Color.colorGray_200,
                borderBottomWidth: 0.2,
              },
            ]}
          >
            <FontAwesome6 name={'user-large'} style={[styles.icon]} size={16} />

            <Text style={[textVariants.mediumBold, styles.infoText]}>
              {data?.name}
            </Text>
          </View>
          <View
            style={[
              styles.profileItem,
              {
                borderBottomColor: Color.colorGray_200,
                borderBottomWidth: 0.2,
              },
            ]}
          >
            <MaterialCommunityIcons
              name={'email'}
              style={styles.icon}
              size={18}
            />

            <Text style={[textVariants.mediumBold, styles.infoText]}>
              {data?.email}
            </Text>
          </View>
          <View style={[styles.profileItem]}>
            <Entypo name={'mobile'} style={styles.icon} size={18} />

            <Text style={[textVariants.mediumBold, styles.infoText]}>
              (628) 267-9041
            </Text>
          </View>
        </Card>

        <CustomButton
          onPress={() => dispatch(userLogout())}
          text={'Logout'}
          style={styles.logoutButton}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  profileItem: {
    width: '100%',
    flexDirection: 'row',
    paddingVertical: 10,

    //    justifyContent: 'spa',
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
  icon: { margin: 7, color: Color.colorGray_300 },
  profileName: {
    // fontSize: FontSize.size20,
    fontFamily: FontFamily.poppinsBold,
    color: Color.colorBlack,
    // marginTop: 10,
  },
  profileJoinDate: {
    // fontSize: FontSize.size14,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.colorGray_300,
  },
  infoCard: {
    backgroundColor: Color.colorWhite,
    padding: 25,
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
    // fontSize: FontSize.size16,

    marginVertical: 5,
    marginHorizontal: 20,
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
    // fontSize: FontSize.size16,
    fontFamily: FontFamily.poppinsBold,
  },
});

export default ProfileScreen;
