import React from 'react';
import { View, Text, Button, StyleSheet, Linking } from 'react-native';

const WirelessScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>No devices found for Wireless Casting</Text>
      <Text style={styles.paragraph}>
        Before casting wirelessly, make sure:
        {'\n'}
        1. Your casting device and the receiver are connected to the same Wi-Fi network.
        {'\n'}
        2. Your device supports wireless casting.
      </Text>
      <Button title="REFRESH" onPress={() => {}} />
      <Text style={styles.link} onPress={() => Linking.openURL('https://castforfree.com')}>
        Learn more about Wireless Casting
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 8,
  },
  heading: {
    fontSize: 18,
    marginBottom: 10,
    color: '#333',
  },
  paragraph: {
    fontSize: 14,
    color: '#666',
    marginBottom: 20,
  },
  link: {
    color: '#ff7f00',
    textDecorationLine: 'underline',
    marginTop: 10,
  },
});

export default WirelessScreen;
