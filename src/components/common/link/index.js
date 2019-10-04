import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters/extend';
import {colors, font} from '../../../config';

const link = ({text, action}) => (
  <TouchableOpacity>
    <Text style={styles.link} onPress={action}>
      {text}
    </Text>
  </TouchableOpacity>
);

const styles = ScaledSheet.create({
  link: {
    ...font,
    color: colors.link.color,
  },
});

export default link;
