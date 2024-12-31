import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function Header({ selectedTab, setSelectedTab, version }:any) {
  return (
    <View style={styles.header}>
      <TouchableOpacity
        style={[styles.tab, selectedTab === 'Wired' && styles.selectedTab]}
        onPress={() => setSelectedTab('Wired')}
      >
        <Text
          style={[
            styles.tabText,
            selectedTab === 'Wired' && styles.selectedTabText,
          ]}
        >
          Wired
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.tab, selectedTab === 'Wireless' && styles.selectedTab]}
        onPress={() => setSelectedTab('Wireless')}
      >
        <Text
          style={[
            styles.tabText,
            selectedTab === 'Wireless' && styles.selectedTabText,
          ]}
        >
          Wireless
        </Text>
      </TouchableOpacity>
      <Text style={styles.versionText}>Version: {version}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'orange',
    padding: 10,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
  },
  selectedTab: {
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  tabText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  selectedTabText: {
    color: 'orange',
  },
  versionText: {
    color: '#fff',
    paddingHorizontal: 10,
  },
});
