import React from 'react';
import {Text} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters/extend';
import {colors, font} from '../../../config';

const text = props => (
  <Text style={styles.text} {...props}>
    {props.children}
  </Text>
);

export default text;

const styles = ScaledSheet.create({
  text: {
    ...font,
    color: colors.text.color,
    textAlign: 'center',
  },
});
