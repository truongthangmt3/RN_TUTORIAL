import { SCREEN_ROUTER } from '@app/constants/Constant';
import UpdateUserInfoScreen from '@screen/UpdateUserInfoScreen';
import UserInfoScreen from '@screen/UserInfoScreen';

export default {
    [SCREEN_ROUTER.UPDATE_USER_INFO]: UpdateUserInfoScreen,
    [SCREEN_ROUTER.USER_INFO_SCREEN]: UserInfoScreen,
};