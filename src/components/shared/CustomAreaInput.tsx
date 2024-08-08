import React, { useState } from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Color } from '~/Global/GlobalStyles';
import { textVariants } from '~/theme/textVariants';
import Metrix from '~/Global/Metrix';

interface CustomAreaInputProps {
  placeholder: string;
  onChangeText: (text: string) => void;
  value: string;
  secureTextEntry?: boolean;
  style?: object;
  inputStyle?: object;
  error?: string;
  eye?: boolean;
  maxLength?: number;
}

const CustomAreaInput: React.FC<CustomAreaInputProps> = ({
  placeholder,
  onChangeText,
  value,
  secureTextEntry = false,
  style,
  error,
  maxLength,
  inputStyle,
  eye = false,
}) => {
  const [isSecure, setIsSecure] = useState(secureTextEntry);

  const toggleSecureEntry = () => {
    setIsSecure(!isSecure);
  };

  return (
    <View style={[styles.container, style]}>
      <View style={styles.inputContainer}>
        <TextInput
          multiline
          numberOfLines={4}
          maxLength={maxLength}
          style={[styles.input, inputStyle]}
          placeholder={placeholder}
          onChangeText={onChangeText}
          placeholderTextColor={Color.colorGray_200}
          value={value}
          secureTextEntry={isSecure}
        />
        {eye && (
          <TouchableOpacity onPress={toggleSecureEntry}>
            <Ionicons
              name={isSecure ? 'eye-off-sharp' : 'eye-sharp'}
              color={Color.colorGray_200}
              size={Metrix.customFontSize(20)}
              style={styles.eyeIcon}
            />
          </TouchableOpacity>
        )}
      </View>
      {error && (
        <Text style={[textVariants.Xsmall, styles.errorMsg]}>{error}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: Metrix.HorizontalSize(20),
    backgroundColor: Color.colorWhite,
    borderRadius: 20,
    // borderWidth: 0.7,
    borderColor: '#acacac',
    paddingVertical: Metrix.VerticalSize(10),
  },
  input: {
    fontSize: Metrix.customFontSize(14),
    padding: Metrix.VerticalSize(5),
    width: '100%',
    color: '#191919',
    textAlignVertical: 'top',
  },
  eyeIcon: {
    position: 'absolute',
    right: 15,
  },
  errorMsg: {
    color: '#FF0000',
    marginTop: Metrix.VerticalSize(5),
    marginLeft: Metrix.HorizontalSize(20),
  },
});

export default CustomAreaInput;
