import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters/extend';
import {colors, font} from '../../../config';
import Text from '../text';

const categorySelector = ({categories, active, onSelect, defaultFirst}) => {
  const items = defaultFirst ? [null, ...categories] : [...categories, null];
  return (
    <View style={styles.selector}>
      {items.map(item => (
        <TouchableOpacity
          key={item ? item.toString() : 'all'}
          onPress={() => onSelect(item)}>
          <View
            style={
              active === item ? styles.selectorItemActive : styles.selectorItem
            }>
            <Text
              style={
                active === item
                  ? styles.selectorTextActive
                  : styles.selectorText
              }>
              {item ? item.toUpperCase() : 'ALL'}
            </Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = ScaledSheet.create({
  selector: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.background.inactive,
    borderRadius: 100,
    paddingHorizontal: '5@s',
    paddingVertical: '5@s',
    marginTop: '25@vs',
  },
  selectorItem: {
    borderRadius: 100,
  },
  selectorItemActive: {
    backgroundColor: colors.background.dark,
    borderRadius: 20,
  },
  selectorText: {
    ...font,
    fontSize: '8@s',
    lineHeight: '8@s',
    paddingHorizontal: '9@s',
    paddingVertical: '6@s',
    color: colors.text.accent,
  },
  selectorTextActive: {
    ...font,
    fontSize: '8@s',
    lineHeight: '8@s',
    paddingHorizontal: '9@s',
    paddingVertical: '6@s',
    color: colors.text.bright,
  },
});

export default categorySelector;
