import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters/extend';
import {colors, font, shadow} from '../../../config';
import {Text} from '../';

const button = ({text, onPress, style = {}, textStyle = {}, children}) => (
  <TouchableOpacity style={[styles.wrapper]} onPress={onPress}>
    {children ? (
      children
    ) : (
      <View style={[styles.button, style]}>
        <Text style={[styles.text, textStyle]}>{text}</Text>
      </View>
    )}
  </TouchableOpacity>
);

const styles = ScaledSheet.create({
  text: {
    ...font,
    color: colors.button.textActive,
    textAlign: 'center',
    textAlignVertical: 'center',
    elevation: 1,
  },
  wrapper: {
    width: '100%',
  },
  button: {
    backgroundColor: colors.button.backgroundColor,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    shadowColor: 'rgb(58, 209, 191)',
    ...shadow,
  },
});

export default button;
