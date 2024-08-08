import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Modal,
  FlatList,
} from 'react-native';
import { getCountries, getCountryCallingCode } from 'react-phone-number-input';
import CustomTextInput from './CustomTextInput';
import { Color } from '~/Global/GlobalStyles';
import {
  heightPercentageScale,
  widthPercentageScale,
} from '~/theme/dimensions';

import { Image } from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/EvilIcons';
import { textVariants } from '~/theme/textVariants';

interface CustomPhoneNumberInputProps {
  value: string;
  onChangeText: (text: string) => void;
  onBlur: () => void;
  error?: string;
  countryCode: string;
  setCountryCode: (code: string) => void; // Updated definition
}

const CustomPhoneNumberInput: React.FC<CustomPhoneNumberInputProps> = ({
  value,
  onChangeText,
  onBlur,
  error,
  countryCode,
  setCountryCode,
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const countries = getCountries();
  const renderCountryItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.countryItem}
        onPress={() => {
          setCountryCode(item);
          setModalVisible(false);
        }}
      >
        <View style={{ display: 'flex', flexDirection: 'row' }}>
          <Image
            source={{
              uri: `https://flagsapi.com/${item}/flat/64.png`,
            }}
            style={{ width: 25, height: 25 }}
          />
          <Text style={styles.countryListText}>{item}</Text>
        </View>
        <Text style={styles.countryListText}>
          +{getCountryCallingCode(item)}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', gap: 4 }}>
        <TouchableOpacity
          style={styles.countryButton}
          onPress={() => setModalVisible(true)}
        >
          <Image
            source={{
              uri: `https://flagsapi.com/${countryCode}/flat/64.png`,
            }}
            style={{ width: 20, height: 20 }}
          />
          <Text style={styles.countryListText}>
            +{getCountryCallingCode(countryCode)}
          </Text>

          <FontAwesome
            name={'chevron-down'}
            color={'rgba(25, 25, 25, 0.4)'}
            style={styles.icon}
          />
        </TouchableOpacity>
        <CustomTextInput
          style={{ width: widthPercentageScale(60) }}
          placeholder="Phone Number"
          autoCapitalize="none"
          onChangeText={onChangeText}
          onBlur={onBlur}
          value={value}
          keyboardType="numeric"
        />
      </View>
      <Text style={[textVariants.Xsmall, styles.errorMsg]}>{error}</Text>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <FlatList
            data={countries}
            keyExtractor={(item) => item}
            renderItem={renderCountryItem}
          />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  countryListText: {
    color: Color.colorBlack,
    paddingLeft: 5,
  },
  container: {
    flexDirection: 'column',
    gap: widthPercentageScale(2),
    width: widthPercentageScale(100),
  },
  icon: {
    fontSize: 27,
    // backgroundColor: 'red',
    margin: 0,
    padding: 0,
    paddingBottom: 5,
  },
  countryButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: widthPercentageScale(25),
    height: 55,
    // gap: 8,
    paddingHorizontal: 10,
    backgroundColor: Color.colorWhite,
    borderRadius: 50,
    borderWidth: 0.3,
    borderColor: '#0000001a',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  countryItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    width: '100%',
  },
  errorMsg: {
    color: '#FF0000',
    paddingHorizontal: 20,
    // fontSize: 12,
    // marginTop: 5,
  },
});

export default CustomPhoneNumberInput;
