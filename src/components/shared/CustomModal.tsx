import React, { ReactNode } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';

interface CustomModalProps {
  isVisible: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
  style?: object;
}

const CustomModal: React.FC<CustomModalProps> = ({
  isVisible,
  onClose,
  title,
  children,
  style,
}) => {
  return (
    <Modal
      // backdropColor="black"

      isVisible={isVisible}
      onBackdropPress={onClose}
    >
      <View style={[styles.modalContainer, style]}>{children}</View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    marginBottom: 10,
  },
  closeButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#2196F3',
    borderRadius: 5,
  },
  closeButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default CustomModal;
