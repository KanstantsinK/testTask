import React from 'react';
import {View} from 'react-native';
import {ScaledSheet, scale} from 'react-native-size-matters/extend';
import MaskedView from '@react-native-community/masked-view';
import LinearGradient from 'react-native-linear-gradient';
import Text from '../text';

const gradientIcon = ({small, category, masked}) => {
  const size = small ? 'small' : 'normal';
  const categoryColors = {
    a: ['#EE70E9', '#8363F9'],
    b: ['#3AD1BF', '#119BD2'],
    c: ['#8E70EE', '#2E84C1'],
  };
  const categoryText = category.toUpperCase();
  const getFontStyles = () =>
    size === 'normal'
      ? {
          fontSize: scale(30),
          height: scale(30),
          includeFontPadding: false,
          marginBottom: -3,
        }
      : {
          fontSize: scale(16),
          height: scale(16),
          includeFontPadding: false,
        };

  const getComponentSize = () =>
    size === 'normal'
      ? {
          height: scale(42),
          width: scale(42),
        }
      : {
          height: scale(24),
          width: scale(24),
        };
  const renderComponent = () => (
    <LinearGradient
      colors={categoryColors[category]}
      start={{x: 0, y: 0.7}}
      end={{x: 1, y: 0}}
      style={[styles.wrapper, getComponentSize()]}>
      <Text style={[styles.text, getFontStyles()]}>{categoryText}</Text>
    </LinearGradient>
  );
  const renderWithMask = () => (
    <MaskedView
      maskElement={
        <View style={[styles.wrapper, getComponentSize()]}>
          <Text style={[styles.text, getFontStyles()]}>{categoryText}</Text>
        </View>
      }>
      <LinearGradient
        colors={categoryColors[category]}
        start={{x: 0, y: 0.7}}
        end={{x: 1, y: 0}}
        style={[styles.wrapper, getComponentSize()]}
      />
    </MaskedView>
  );
  return masked ? renderWithMask() : renderComponent();
};

const styles = ScaledSheet.create({
  wrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
  },
  text: {
    color: 'white',
    textAlignVertical: 'center',
    textAlign: 'center',
    fontFamily: 'gothamrounded-medium',
  },
});
export default gradientIcon;
