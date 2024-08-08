import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import StyledText from './StyledText';
import { Color } from '~/Global/GlobalStyles';

interface Tab {
  title: string;
  content: JSX.Element;
}

interface TabComponentProps {
  tabs: Tab[];
}

const TabComponent: React.FC<TabComponentProps> = ({ tabs }) => {
  const [selectedTab, setSelectedTab] = useState(tabs[0].title);

  return (
    <View style={styles.container}>
      <View style={styles.tabHeader}>
        {tabs.map((tab, index) => (
          <TouchableOpacity
            key={tab.title}
            style={[
              styles.tabButton,
              index === 0 && styles.leftTab,
              index === tabs.length - 1 && styles.rightTab,
              selectedTab === tab.title && styles.activeTab,
            ]}
            onPress={() => setSelectedTab(tab.title)}
          >
            <StyledText
              variant="Figtree"
              fontFamily={selectedTab === tab.title ? 'semiBold' : 'regular'}
            >
              {tab.title}
            </StyledText>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.tabContent}>
        {tabs.map(
          (tab) =>
            selectedTab === tab.title && (
              <View key={tab.title} style={styles.content}>
                <StyledText
                  variant="Xsmall"
                  style={{ color: Color.colorBlack }}
                >
                  {tab.content}
                </StyledText>
              </View>
            )
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 15,
  },
  tabHeader: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  tabButton: {
    padding: 10,
    height: 65,
    width: '50%',
    backgroundColor: Color.colorWhite,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: 'transparent',
  },
  leftTab: {
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
  },
  rightTab: {
    borderTopRightRadius: 12,
    borderBottomRightRadius: 12,
  },
  activeTab: {
    backgroundColor: Color.colorGray_100,
  },
  tabText: {
    // fontSize: 16,
    fontWeight: '500',
  },
  tabContent: {
    marginTop: 80,
    height: 200,
    width: '100%',
  },
  content: {
    alignItems: 'center',
  },
});

export default TabComponent;
