import React, {useCallback} from 'react';
import {FlatList, View, TouchableOpacity} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {Text, GradientIcon} from '../../common';
import {colors, font} from '../../../config';
import {getCategory} from '../../../utils';

const portfolioList = ({data = {}, onPress, selected}) => {
  const isSelected = key => selected === key;
  const listItem = ({item, index}) => (
    <TouchableOpacity onPress={() => onPress(item)}>
      <View
        style={
          isSelected(item.key) ? styles.itemWrapperSelected : styles.itemWrapper
        }>
        <View style={styles.iconBackground}>
          <GradientIcon
            category={getCategory(item.key)}
            small
            masked={isSelected(item.key)}
          />
        </View>
        <Text style={isSelected(item.key) ? styles.textActive : styles.text}>
          {item.balance}
        </Text>
        <Text style={isSelected(item.key) ? styles.nonceActive : styles.nonce}>
          {(index + 1).toString().padStart(6, '0')}
        </Text>
      </View>
    </TouchableOpacity>
  );

  const separator = () => <View style={styles.separator} />;

  return (
    <FlatList
      ItemSeparatorComponent={separator}
      contentContainerStyle={styles.wrapper}
      data={data}
      renderItem={listItem}
    />
  );
};

const styles = ScaledSheet.create({
  itemWrapper: {
    paddingVertical: '18@s',
    paddingHorizontal: '35@s',
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemWrapperSelected: {
    paddingVertical: '18@s',
    paddingHorizontal: '35@s',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.background.dark,
  },
  text: {
    ...font,
    fontSize: '12@vs',
    lineHeight: '12@vs',
    marginLeft: '20@s',
    color: colors.text.inactive,
  },
  textActive: {
    ...font,
    fontSize: '12@vs',
    lineHeight: '12@vs',
    marginLeft: '20@s',
    color: colors.text.bright,
  },
  nonce: {
    ...font,
    fontSize: '12@vs',
    lineHeight: '12@vs',
    marginLeft: 'auto',
    color: colors.text.inactive,
  },
  nonceActive: {
    ...font,
    fontSize: '12@vs',
    lineHeight: '12@vs',
    marginLeft: 'auto',
    color: colors.text.bright,
  },
  separator: {
    borderBottomWidth: '0.5@s',
    borderColor: colors.separator,
  },
  iconBackground: {
    backgroundColor: colors.background.bright,
    borderRadius: 20,
  },
});

export default portfolioList;
