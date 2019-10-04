import {ScaledSheet} from 'react-native-size-matters/extend';
import {colors} from '../../config';

export const styles = ScaledSheet.create({
  flexWrapper: {
    flex: 1,
  },
  input: {
    height: '48@s',
    backgroundColor: colors.input.backgroundDark,
    borderRadius: 5,
    marginBottom: '12@vs',
    width: '100%',
    paddingHorizontal: '13@s',
    paddingTop: '18@s',
    paddingBottom: '13@s',
    fontSize: '14@s',
    lineHeight: '14@s',
    fontFamily: 'gothamrounded-medium',
  },
  forgotWrapper: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    marginBottom: '99@vs',
  },
  signInWrapper: {
    flexDirection: 'row',
    marginTop: '30@vs',
    marginBottom: '10@vs',
  },
  logo: {
    marginBottom: '98@vs',
  },
  wrapper: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingTop: '150@vs',
    paddingHorizontal: '47@s',
  },
  loginButton: {
    width: '100%',
    height: '48@s',
  },
});
