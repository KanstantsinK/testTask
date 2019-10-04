import React from 'react';
import {ScaledSheet, verticalScale} from 'react-native-size-matters/extend';
import Notifications from '../../assets/notifications';
import {Button} from '../common';

const notificationIndicator = () => (
  <Button>
    <Notifications
      height={verticalScale(28)}
      width={verticalScale(23)}
      style={styles.notificationIcon}
    />
  </Button>
);

const styles = ScaledSheet.create({
  notificationIcon: {
    height: '37@vs',
    width: '37@vs',
    marginRight: '19@s',
  },
});

export default notificationIndicator;
