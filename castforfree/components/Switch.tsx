import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Animated } from 'react-native';

const CustomSwitch = ({
  selectionMode,
  roundCorner = true, 
  option1 = 'Wired', 
  option2 = 'Wireless', 
  onSelectSwitch,
  selectionColor = '#4E54C8',
  backgroundColor = 'tomato',
}: any) => {
  const [getSelectionMode, setSelectionMode] = useState(selectionMode);
  const [animatedValue, setAnimatedValue] = useState(new Animated.Value(selectionMode)); // Track selection mode for animation

  useEffect(() => {
    setSelectionMode(selectionMode);
    Animated.spring(animatedValue, {
      toValue: selectionMode,
      friction: 15, // More friction for a smoother animation
      tension: 100, // Adjust tension to control speed
      useNativeDriver: false, // We are animating layout properties, so useNativeDriver is false
    }).start();
  }, [selectionMode]);

  const updatedSwitchData = (val: number) => {
    setSelectionMode(val);
    if (onSelectSwitch) {
      onSelectSwitch(val);
    }
  };

  // Calculate position of the switch using the animated value
  const animatedSwitchPosition = animatedValue.interpolate({
    inputRange: [0,.8], // 0 for option 2, 1 for option 1
    outputRange: [0, 58], // The position of the active option (assuming each option takes up 58px)
  });

  return (
    <View>
      <View
        style={[
          styles.switchContainer,
          {
            backgroundColor: backgroundColor || 'gray',
            borderRadius: roundCorner ? 25 : 0,
            borderColor: selectionColor,
          },
        ]}>
        <Animated.View
          style={[
            styles.animatedSwitch,
            {
              transform: [{ translateX: animatedSwitchPosition }],
              backgroundColor: selectionColor,
              borderRadius: roundCorner ? 25 : 0,
            },
          ]}
        />

        <TouchableOpacity
          activeOpacity={1}
          onPress={() => {
            if (getSelectionMode !== 0) {
              updatedSwitchData(0);
            }
          }}
          style={[
            styles.switchOption,
            {
              backgroundColor: getSelectionMode === 1 ? selectionColor : 'white',
              borderRadius: roundCorner ? 25 : 0,
              marginRight: 5, // Added margin to create space between toggles
            },
          ]}>
          <Text
            style={{
              color: getSelectionMode === 1 ? 'white' : selectionColor,
            }}>
            {option1}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={1}
          onPress={() => {
            if (getSelectionMode !== 1) {
              updatedSwitchData(1);
            }
          }}
          style={[
            styles.switchOption,
            {
              backgroundColor: getSelectionMode === 0 ? selectionColor : 'white',
              borderRadius: roundCorner ? 25 : 0,
              marginLeft: 5, // Added margin to create space between toggles
            },
          ]}>
          <Text
            style={{
              color: getSelectionMode === 0 ? 'white' : selectionColor,
            }}>
            {option2}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  switchContainer: {
    height: 30,
    width: 130, // Adjust width to ensure proper spacing and smooth animation
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 5,
    position: 'relative', // For absolute positioning of the animated view
  },
  switchOption: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  animatedSwitch: {
    position: 'absolute',
    top: 2, // To align with the switch options
    left: 0, // Starting position
    width: 58, // The width of the animated option
    height: 26, // Height of the animated option (a little smaller than the full switch)
    borderRadius: 25, // To maintain the rounded corners
  },
});

export default CustomSwitch;
