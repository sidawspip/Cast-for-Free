import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import routeName from './routeName';
import TabNavigation from './TabNavigation';
import ProfileScreen from '@/screens/ProfileScreen';
import { Settings } from 'react-native';
import SettingsScreen from '@/screens/SettingsScreen';

const Stack = createStackNavigator();

const AuthNavigation = () => {
    return (
        <Stack.Navigator
            initialRouteName={routeName.TabNav}
            screenOptions={{
                headerShown: false,
            }}
        >
            
            <Stack.Screen name={routeName.TabNav} component={TabNavigation} />
            <Stack.Screen name={routeName.SettingsScreen} component={SettingsScreen} />
            <Stack.Screen name={routeName.ProfileScreen} component={ProfileScreen} />
        </Stack.Navigator>
    );
};

export default AuthNavigation;
