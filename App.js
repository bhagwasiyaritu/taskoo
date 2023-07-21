import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Routes} from './app/navigation/Routes';
import {SafeAreaView, StatusBar} from 'react-native';
import {styles} from './app/utils/commonStyle';

export default function App() {
  return (
    <SafeAreaView style={styles.universalContainer}>
      <StatusBar hidden />
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </SafeAreaView>
  );
}
