import React, { ReactNode } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Platform,
  KeyboardAvoidingView,
  ScrollView,
  ViewStyle,
} from 'react-native';

import { Color } from '../../Global/GlobalStyles';

interface PageContainerProps {
  children: ReactNode;
  style?: ViewStyle;
  containerStyle?: ViewStyle;
}

export const PageContainer: React.FC<PageContainerProps> = ({
  children,
  style,
  containerStyle,
}) => {
  return (
    <SafeAreaView style={[styles.container, style]}>
      <StatusBar backgroundColor="#FFF8E6" barStyle="dark-content" />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={styles.container}
      >
        <ScrollView contentContainerStyle={[styles.scrollView, containerStyle]}>
          {children}
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
  },

  container: {
    flex: 1,
    backgroundColor: Color.colorWhitesmoke,
    marginTop: 15,
    paddingHorizontal: 5,
  },
});

export default PageContainer;
