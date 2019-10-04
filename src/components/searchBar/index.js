import React, {forwardRef, useEffect, createRef} from 'react';
import {View, TextInput} from 'react-native';
import Search from '../../assets/searchActive';
import {ScaledSheet} from 'react-native-size-matters/extend';
import {colors} from '../../config';

const searchBar = ({active, onEdit, value}) => {
  return (
    <View style={styles.wrapper}>
      <TextInput
        autoFocus
        placeholder="Search Value..."
        style={styles.input}
        selectionColor={colors.link.color}
        keyboardType={'decimal-pad'}
        placeholderTextColor={colors.input.placeholderTextGreyed}
        returnKeyType={'done'}
        onChangeText={text => onEdit(text)}
        value={value}
      />
      <Search style={styles.search} />
    </View>
  );
};

const styles = ScaledSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.background.bright,
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 10,
    shadowColor: 'rgb(137,137,137)',
    elevation: 3,
    borderRadius: 8,
    paddingHorizontal: '16@s',
    width: '100%',
    height: '36@s',
  },
  input: {
    width: '100%',
    paddingVertical: '7@vs',
    lineHeight: '14@vs',
    fontSize: '12@vs',
    fontFamily: 'gothamrounded-medium',
    color: colors.text.color,
  },
  search: {
    position: 'relative',
    right: '16@s',
  },
});
export default searchBar;
