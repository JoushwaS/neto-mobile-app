import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

interface CustomDropdownProps {
  error?: string;
  touched?: boolean;
  placeholder: string;
  defaultLogo: string;
  data: Array<{ key: string; label: string; logo: any }>;
  onSelect: (item: { key: string; label: string; logo: any }) => void;
}

const CustomDropdown: React.FC<CustomDropdownProps> = ({
  placeholder,
  data,
  onSelect,
  defaultLogo,
  error,
  touched,
}) => {
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState<{
    key: string;
    label: string;
    logo: any;
  } | null>(null);

  const toggleDropdown = () => {
    setVisible(!visible);
  };

  const handleSelect = (item: { key: string; label: string; logo: any }) => {
    setSelected(item);
    onSelect(item);
    setVisible(false);
  };

  const renderItem = ({
    item,
  }: {
    item: { key: string; label: string; logo: any };
  }) => (
    <TouchableOpacity style={styles.item} onPress={() => handleSelect(item)}>
      <Image source={item.logo} style={styles.logo} />
      <Text style={styles.itemText}>{item.label}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={[styles.dropdownClose, { borderRadius: visible ? 20 : 50 }]}>
        <TouchableOpacity
          style={[
            {
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: 15,
            },
          ]}
          onPress={toggleDropdown}
        >
          <View style={{ flexDirection: 'row' }}>
            <Image
              source={selected ? selected.logo : defaultLogo}
              style={[
                styles.logo,
                {
                  // width: !selected && 20,
                  // height: !selected && 20,
                  // marginLeft: !selected && 5,
                },
              ]}
            />
            <Text style={styles.placeholder}>
              {selected ? selected.label : placeholder}
            </Text>
          </View>
          <FontAwesome
            name={visible ? 'chevron-up' : 'chevron-down'}
            size={18}
            color="#000"
          />
        </TouchableOpacity>
        {visible && (
          <View style={styles.dropdownListContainer}>
            <FlatList
              data={data}
              renderItem={renderItem}
              keyExtractor={(item) => item.key}
            />
          </View>
        )}
      </View>
      {error && touched && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    // Ensure the dropdown appears above other elements
  },
  errorText: {
    color: 'red',
    marginTop: 5,
  },
  dropdownClose: {
    flexDirection: 'column',
    // alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    // height: 55,
    // paddingHorizontal: 20,
    backgroundColor: '#fff',
    borderRadius: 50,
    borderWidth: 0.3,
    borderColor: '#0000001a',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5,
  },
  placeholder: {
    fontSize: 16,
    color: '#191919',
    marginHorizontal: 20,
  },
  dropdownContainer: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 10,
    marginTop: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderTopWidth: 0.5,
    borderTopColor: '#ccc',
    // backgroundColor: 'red',
  },
  itemText: {
    fontSize: 16,
    color: '#191919',
    marginLeft: 10,
  },
  logo: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
});

export default CustomDropdown;
