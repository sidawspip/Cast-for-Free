// TabNavigation.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '@/screens/HomeScreen/HomeScreen';
import CastScreen from '@/screens/CastScreen';
import { MaterialIcons } from '@expo/vector-icons';
import routeName from './routeName';
import ProfileScreen from '@/screens/ProfileScreen';
import CustomSwitch from '@/components/Switch';
import { useSelectionMode } from '@/hooks/SelectionModeContext';



const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  const { selectionMode, setSelectionMode } = useSelectionMode(); // Use context

  const handleSwitchChange = (newSelection:any) => {
    setSelectionMode(newSelection); // Update selection mode
  };

  return (
    <Tab.Navigator
      initialRouteName={routeName.HomeScreen}
      screenOptions={{
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          backgroundColor: '#fff',
          borderTopWidth: 0,
          elevation: 10,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
        },
      }}
    >
      <Tab.Screen
        name={routeName.HomeScreen}
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="home" size={size} color={color} />
          ),
          headerTitle: () => (
            <CustomSwitch
              selectionMode={selectionMode}
              onSelectSwitch={handleSwitchChange}
              option1="Wired"
              option2="Wireless"
              selectionColor="#4E54C8"
            />
          ),
          tabBarLabel: 'Home',
          headerRight: ({ navigation }:any) => (
            <MaterialIcons
              name="settings"
              size={24}
              color="black"
              style={{ marginRight: 15 }}
              onPress={() => navigation.navigate(routeName.SettingsScreen)}
            />
          ),
        }}
      />
      <Tab.Screen
        name={routeName.CastScreen}
        component={CastScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="cast" size={size} color={color} />
          ),
          tabBarLabel: ' Cast',
        }}
      />
      <Tab.Screen
        name={routeName.ProfileScreen}
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="person" size={size} color={color} />
          ),
          tabBarLabel: 'Profile',
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;