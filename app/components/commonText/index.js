import {StyleSheet, Text} from 'react-native';
import React from 'react';
import {colors} from '../../utils/colors';

export const CommonText = ({text, style}) => {
  return <Text style={[styles.text, style]}>{text}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    color: colors.black,
    fontFamily:"Poppins-Bold",
  },
});
