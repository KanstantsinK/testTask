import React, {useEffect} from 'react';
import {BackHandler} from 'react-native';

const useCloseOnHardwareBackPress = () => {
  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      () => {
        BackHandler.exitApp();
        return true;
      },
    );
    return () => backHandler.remove();
  }, []);
};

export default useCloseOnHardwareBackPress;
