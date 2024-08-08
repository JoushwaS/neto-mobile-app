import React, { useState } from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Color } from '~/Global/GlobalStyles';
import { textVariants } from '~/theme/textVariants';
import Metrix from '~/Global/Metrix';

interface CustomTextInputProps {
  placeholder: string;
  onChangeText: (text: string) => void;
  value: string;
  icon?: string;
  secureTextEntry?: boolean;
  style?: object;
  keyboardType?: string;
  error?: string;
  eye?: boolean;
  maxLength?: number;
}

const CustomTextInput: React.FC<CustomTextInputProps> = ({
  placeholder,
  onChangeText,
  value,
  icon=null,
  secureTextEntry = false,
  style,
  keyboardType,
  error,
  maxLength,
  eye = false,
}) => {
  const [isSecure, setIsSecure] = useState(secureTextEntry);

  const toggleSecureEntry = () => {
    setIsSecure(!isSecure);
  };

  return (
    <View style={[styles.container, style]}>
      <View style={styles.inputContainer}>
        {(icon && typeof icon == 'string') ? (
          <FontAwesome
            name={icon}
            color={Color.colorGray_200}
            style={styles.icon}
          />
        ) : icon}
        <TextInput
          maxLength={maxLength}
          keyboardType={keyboardType ? keyboardType : 'default'}
          style={styles.input}
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
    height: Metrix.VerticalSize(52),
    paddingHorizontal: Metrix.HorizontalSize(20),
    backgroundColor: Color.colorWhite,
    borderRadius: 50,
    borderWidth: 0.7,
    borderColor: '#acacac',
  
  },
  input: {
    fontSize: Metrix.customFontSize(14),
    padding: Metrix.VerticalSize(5),
    paddingLeft: Metrix.HorizontalSize(10),
    width: '100%',
    height: '100%',
    color: '#191919',
  },
  icon: {
    fontSize: Metrix.customFontSize(20),
    marginRight: Metrix.HorizontalSize(10),
  },
  eyeIcon:
    {
      position: 'absolute',
      zIndex: 100,
      top: -10,
      right: 15,
    },
  errorMsg: {
    color: '#FF0000',
    marginTop: Metrix.VerticalSize(5),
    marginLeft: Metrix.HorizontalSize(20),
  },
});

export default CustomTextInput;
