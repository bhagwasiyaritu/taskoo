import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { Splash } from '../screens/splash';
import { routes } from '../utils/routes';
import { Intro } from '../screens/intro';

const Stack = createNativeStackNavigator();

export const Routes = () => {
  return (
    <Stack.Navigator initialRouteName={routes.intro}>
      <Stack.Screen
        name={routes.splash}
        component={Splash}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={routes.intro}
        component={Intro}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};