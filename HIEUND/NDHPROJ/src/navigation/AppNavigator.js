import HomeScreen from '../.././screens/HomeScreen';
import UserScreen from '../.././screens/UserScreen';
import SplashScreen from '../.././screens/SplashScreen';
import LoginScreen from '../.././screens/LoginScreen';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {SCREEN_ROUTER} from '../../utils/Constants';

const AppNav = createSwitchNavigator({
  [SCREEN_ROUTER.SPLASH]: SplashScreen,
  [SCREEN_ROUTER.LoginScreen]: LoginScreen,
});

const AppNavigator = createStackNavigator(
  {
    [SCREEN_ROUTER.HOME]: HomeScreen,
    [SCREEN_ROUTER.USER]: UserScreen,
  },
  {headerMode: 'none'},
);
export default createAppContainer(AppNavigator);
