import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';
import { UsbSerialManager } from 'react-native-usb-serialport-for-android';

const WiredScreen = () => {
  const [devices, setDevices] = useState([]);

  // Function to check connected USB devices
  const checkUSBDevices = async () => {
    try {
      const deviceList = await UsbSerialManager.list();
      setDevices(deviceList);

      if (deviceList.length > 0) {
        const granted = await UsbSerialManager.tryRequestPermission(deviceList[0].deviceId);

        if (granted) {
          Alert.alert('USB Permission granted');
        } else {
          Alert.alert('USB Permission denied');
        }
      } else {
        Alert.alert('No USB devices found');
      }
    } catch (err) {
      console.error('Error checking USB devices:', err);
      Alert.alert('Error', 'Failed to request USB permission');
    }
  };

  // Automatically request permission when the screen loads
  useEffect(() => {
    checkUSBDevices();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Wired Casting</Text>
      <Text style={styles.paragraph}>
        Please make sure your device is connected via USB or HDMI cable for wired casting.
      </Text>
      {devices.length === 0 ? (
        <Text style={styles.noDevices}>No devices found.</Text>
      ) : (
        <Text style={styles.devices}>Found {devices.length} device(s).</Text>
      )}
      <Button title="REFRESH" onPress={checkUSBDevices} />
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
    fontWeight: 'bold',
  },
  paragraph: {
    fontSize: 14,
    color: '#666',
    marginBottom: 20,
  },
  noDevices: {
    fontSize: 14,
    color: 'red',
    marginBottom: 10,
  },
  devices: {
    fontSize: 14,
    color: 'green',
    marginBottom: 10,
  },
});

export default WiredScreen;
