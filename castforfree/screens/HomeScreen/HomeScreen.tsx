import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import WiredScreen from './Wired';
import WirelessScreen from './Wireless';
import { useSelectionMode } from '@/hooks/SelectionModeContext'; // Adjust the import path as necessary

const HomeScreen = () => {
  const { selectionMode } = useSelectionMode(); // Destructure selectionMode from the context

  return (
    <View style={styles.container}>
      {selectionMode === 1 ? (
        <WirelessScreen />
      ) : (
        <WiredScreen />
      )}
      {/* Example of rendering text */}
      <Text style={styles.switchText}>
        Current Mode: {selectionMode === 1
         ? 'Wireless' : 'Wired'}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  switchText: {
    fontSize: 14,
    color: '#000', // Change to your desired color
  },
});

export default HomeScreen;