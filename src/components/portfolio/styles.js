import {Platform} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters/extend';
import {colors, font, fontBold} from '../../config';
export const styles = ScaledSheet.create({
  wrapper: {
    height: '100%',
  },
  portfolioContainer: {
    flex: 1,
  },
  portfolioSection: {
    paddingHorizontal: '36@s',
    paddingTop: '42@vs',
    paddingBottom: '22@vs',
    backgroundColor: 'white',
    shadowOpacity: 0.25,
    shadowColor: 'rgb(206, 206, 206)',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 8,
    elevation: 3,
  },
  portfolioHeader: {
    flexShrink: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  dot: {
    backgroundColor: colors.dot,
    marginLeft: '12@s',
    height: '7@s',
    width: '7@s',
    borderRadius: 30,
    marginRight: '8@s',
  },
  recentValuesSection: {
    paddingHorizontal: '36@s',
    paddingTop: '37@vs',
    paddingBottom: '10@vs',
  },
  recentValuesHeader: {
    flexShrink: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  selectedValueSection: {
    marginTop: '20@vs',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  selectedValueText: {
    fontFamily: fontBold.fontFamily,
    fontSize: Platform.OS === 'ios' ? '60@vs' : '60@s',
    textAlign: 'right',
    letterSpacing: '-3@s',
    marginBottom: Platform.OS === 'ios' ? '-20@vs' : 0,
    color: colors.text.accent,
    includeFontPadding: false,
    textAlignVertical: 'center',
  },
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
  searchButton: {
    backgroundColor: colors.background.dark,
    paddingVertical: '8@vs',
    paddingHorizontal: '11@vs',
    borderRadius: 8,
    marginLeft: 'auto',
  },
});
