
import HomeScreen from '../screens/HomeScreen';
import UserSceen from '../screens/UserSceen';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { SCREEN_ROUTER } from '../utils/Constant';


const AppNavigator = createStackNavigator({
    [SCREEN_ROUTER.HOME]: HomeScreen,
    [SCREEN_ROUTER.USER]: UserSceen,
}, {
    headerMode: 'none',
})

export default createAppContainer(AppNavigator);