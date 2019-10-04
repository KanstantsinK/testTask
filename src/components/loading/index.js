import React, {useEffect} from 'react';
import {SafeAreaView, View, Animated, Easing, BackHandler} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters/extend';
import Spinner from '../../assets/spinner';
import {useCloseOnHardwareBackPress} from '../../hooks';
import {Text} from '../common';

const loading = () => {
  const spinValue = new Animated.Value(0);

  useEffect(() =>
    Animated.loop(
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 3000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ).start(),
  );

  useCloseOnHardwareBackPress();

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.spinnerWrapper}>
        <Animated.View
          style={{
            transform: [{rotate: spin}],
          }}>
          <Spinner style={styles.spinner} />
        </Animated.View>
      </View>
      <Text>Loading...</Text>
    </SafeAreaView>
  );
};

const styles = ScaledSheet.create({
  wrapper: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  spinnerWrapper: {
    marginBottom: '113@vs',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default loading;
