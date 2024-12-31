import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigation from './AuthNavigation';
import SelectionModeProvider from '@/hooks/SelectionModeContext';


const Routes = () => {
    return (
      <SelectionModeProvider>
            <AuthNavigation />
      </SelectionModeProvider>
    );
};

export default Routes;
