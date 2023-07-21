import {StyleSheet, Text} from 'react-native';
import React from 'react';
import {colors} from '../../utils/colors';

export const CommonHeading = ({heading, style}) => {
  return <Text style={[styles.text, style]}>{heading}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    color: colors.darkBlue,
    fontFamily:"Poppins-ExtraBold",
  },
});
