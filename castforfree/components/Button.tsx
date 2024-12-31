import React from 'react';
import { TouchableOpacity, Text, StyleSheet, GestureResponderEvent, ViewStyle, TextStyle } from 'react-native';

// Define types for props
type ButtonProps = {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
  style?: ViewStyle; // Optional custom styles for the button
  textStyle?: TextStyle; // Optional custom styles for the button text
  disabled?: boolean; // Optional prop to disable the button
};

// Functional component without React.FC
const Button = ({ title, onPress, style = {}, textStyle = {}, disabled = false }: ButtonProps) => {
  return (
    <TouchableOpacity
      style={[styles.button, disabled && styles.disabledButton, style]} 
      onPress={disabled ? undefined : onPress} // Disable the press action if disabled is true
      disabled={disabled}
    >
      <Text style={[styles.text, textStyle]}>{title}</Text> 
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#4E54C8',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  disabledButton: {
    backgroundColor: '#A0A0A0', // Disabled button color
    opacity: 0.6, // Make the button semi-transparent when disabled
  },
  text: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Button;
