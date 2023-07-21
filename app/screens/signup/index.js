import {View, Text} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { colors } from '../../utils/colors';

export const Signup = () => {
  return (
    <LinearGradient
      style={styles.container}
      colors={[
        colors.purpleBackground,
        colors.white,
        colors.purpleBackground,
      ]}></LinearGradient>
  );
};
