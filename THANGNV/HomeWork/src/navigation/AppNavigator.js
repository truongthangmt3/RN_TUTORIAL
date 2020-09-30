import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { SCREEN_ROUTER } from '../utils/Constants';


const AppNav = createSwitchNavigator(
    {
    }
)

const AppNavigator = createStackNavigator(
    {
    },
    {
        headerMode: 'none',
    },
);

export default createAppContainer(AppNavigator);