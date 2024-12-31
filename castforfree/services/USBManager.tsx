import { UsbSerialManager } from 'react-native-usb-serialport-for-android';
import { ScrollView, Alert } from 'react-native';
import React from 'react';
import Button from '../components/Button';

const SerialPortComponent = () => {
  async function requestUSBPermission() {
    try {
      // List available devices
      const devices = await UsbSerialManager.list();
      // Request permission for the first available device
      const granted = await UsbSerialManager.tryRequestPermission(devices[0].deviceId);
      
      if (granted) {
        Alert.alert('USB permission granted');
        // Continue with connecting to the USB device
      } else {
        Alert.alert('USB permission denied');
      }
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <ScrollView>
      <Button onPress={requestUSBPermission} title="Request USB Permission" />
    </ScrollView>
  );
};

export default SerialPortComponent;
