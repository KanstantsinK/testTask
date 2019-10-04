import React from 'react';
import {ScaledSheet} from 'react-native-size-matters/extend';
import {Button} from '../common';

const helpButton = () => (
  <Button text="?" style={styles.wrapper} textStyle={styles.text} />
);

const styles = ScaledSheet.create({
  wrapper: {
    height: '37@vs',
    width: '37@vs',
    marginLeft: '19@s',
  },
  text: {
    fontSize: '30@vs',
    lineHeight: '30@vs',
    marginBottom: '-8@vs',
  },
});
export default helpButton;
