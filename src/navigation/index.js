import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Login from '../components/login';
import Portfolio from '../components/portfolio';
import Loading from '../components/loading';
import Logo from '../assets/logo';
import HelpButton from '../components/helpButton';
import NotificationIndicator from '../components/notificationIndicator';
import {scale, verticalScale} from 'react-native-size-matters/extend';
const mainStack = createStackNavigator(
  {
    Home: {
      screen: Login,
      navigationOptions: {
        header: null,
      },
    },
    Loading: {
      screen: Loading,
      navigationOptions: {
        header: null,
      },
    },
    Portfolio: {
      screen: Portfolio,
      navigationOptions: {
        headerStyle: {
          height: verticalScale(90),
        },
        headerLeft: <HelpButton />,
        headerTitle: (
          <Logo height={verticalScale(35.6)} width={verticalScale(50)} />
        ),
        headerRight: <NotificationIndicator />,
        headerTitleContainerStyle: {
          alignItems: 'center',
          justifyContent: 'center',
        },
      },
    },
  },
  {
    defaultNavigationOptions: {
      gesturesEnabled: false,
    },
  },
);

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: Login,
      navigationOptions: {
        header: null,
      },
    },
    Loading: {
      screen: Loading,
      navigationOptions: {
        header: null,
      },
    },
    Portfolio: {
      screen: Portfolio,
      navigationOptions: {
        headerStyle: {
          height: verticalScale(90),
        },
        headerLeft: <HelpButton />,
        headerTitle: (
          <Logo height={verticalScale(35.6)} width={verticalScale(50)} />
        ),
        headerRight: <NotificationIndicator />,
        headerTitleContainerStyle: {
          alignItems: 'center',
          justifyContent: 'center',
        },
      },
    },
  },
  {
    defaultNavigationOptions: {
      gesturesEnabled: false,
    },
  },
);

export default createAppContainer(AppNavigator);
