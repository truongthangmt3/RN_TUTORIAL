import React, { Component } from 'react';
import {
    SafeAreaView,
    View,
    Text,
    Image,
    TouchableOpacity,
    ScrollView
} from 'react-native';

import styles from '../common/style/giaodien_style';
import CustomButton from '../component/CustomButton';

import user_data from '../data/user';

export default class GiaoDien extends Component {
    state = {
        current: 0,
        user_image: [
            require('../assets/img/image/Annie.jpg'),
            require('../assets/img/image/Hoa.jpg'),
            require('../assets/img/image/Hoai.jpg'),
            require('../assets/img/image/Nhien.jpg'),
            require('../assets/img/image/Huyen.jpg'),
            require('../assets/img/image/Huong.jpg'),
            require('../assets/img/image/Phuong.jpg'),
            require('../assets/img/image/Trongveostudio.jpg')
        ],
        user_name: [
            'Annie', 'Hoa', 'Hoai', 'Nhien', 'Huyen', 'Huong', 'Phuong', 'Trongveostudio',
        ],
        user_age: [
            '22', '23', '24', '25', '26', '27', '28', '29'
        ],
        user_adds: [
            'Ho Chi Minh', 'Hai Duong', 'Nghe An', 'Gia Lai', 'Thanh Hoa', 'Ha Noi', 'Hai Duong', 'Da Nang'
        ]
    }
    render() {
        const { current, user_image, user_name, user_adds, user_data, user_age } = this.state
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.header_block}>
                    <Text style={styles.dating}>
                        Dating
                    </Text>
                    <View style={styles.v_setting}>
                        <Image
                            style={styles.img_setting}
                            source={require('../assets/img/ic_setting.png')}
                        />
                    </View>
                </View>
                <View style={styles.v_action_block}>
                    <CustomButton img={require('../assets/img/ic_action/ic_Profile.png')}
                        label='Profile'
                        action={_navToProfile}
                        isWarning={true}
                    />
                    <CustomButton img={require('../assets/img/ic_action/ic_LikedYou.png')}
                        label='Liked You'
                        action={_navToLikedYou}
                        isWarning={false}
                    />
                    <CustomButton img={require('../assets/img/ic_action/ic_Matches.png')}
                        label='Matches'
                        action={_navToMatches}
                        isWarning={false}
                    />
                </View>
                <View style={styles.avatar_view}>
                    <View style={styles.v_avatar}>
                        <Image style={styles.avatar}
                            source={user_image[current]}
                        />
                        <View style={styles.v_ava_button}>
                            <TouchableOpacity onPress={() => {
                                let tmpCurrent = current
                                if (tmpCurrent < user_image.length - 1) {
                                    tmpCurrent++;
                                } else {
                                    tmpCurrent = 0;
                                }
                                this.setState({
                                    current: tmpCurrent
                                })
                            }}>
                                {_funcAvaButton(
                                    require('../assets/img/ic_cancel.png'),
                                )}
                            </TouchableOpacity>

                            {_funcAvaButton(
                                require('../assets/img/ic_liked.png'),
                                _pressLiked
                            )}
                        </View>
                        {/* <Text style={styles.avatar_name}>
                            {user_name[current]}, {user_age[current]}
                        </Text>
                        <Text style={styles.avatar_adds}>
                            {user_adds[current]}
                        </Text> */}
                    </View>
                    <View style={styles.v_ava_infor}>
                        <Text style={styles.avatar_name}>
                            {user_name[current]}, {user_age[current]}
                        </Text>
                        <Text style={styles.avatar_adds}>
                            {user_adds[current]}
                        </Text>
                    </View>
                </View>
                <View style={styles.line} />
                <View style={styles.v_stories}>
                    <Text style={styles.sug_text}>
                        Suggested Stories
                    </Text>
                    <View style={styles.v_story}>
                        <ScrollView
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}>
                            {_funcStory(
                                require('../assets/img/ic_add_stories.png'),
                                'Add Stories'
                            )}
                            {_funcStory(
                                require('../assets/img/image/Annie.jpg'),
                                'Annie'
                            )}
                            {_funcStory(
                                require('../assets/img/image/Hoa.jpg'),
                                'Hoa'
                            )}
                            {_funcStory(
                                require('../assets/img/image/Hoai.jpg'),
                                'Hoài'
                            )}
                            {_funcStory(
                                require('../assets/img/image/Huong.jpg'),
                                'Hương'
                            )}
                            {_funcStory(
                                require('../assets/img/image/Huyen.jpg'),
                                'Huyền'
                            )}
                            {_funcStory(
                                require('../assets/img/image/Luly.jpg'),
                                'Phương'
                            )}
                            {_funcStory(
                                require('../assets/img/image/Nhien.jpg'),
                                'Nhiên'
                            )}
                            {_funcStory(
                                require('../assets/img/image/Phuong.jpg'),
                                'Phượng'
                            )}
                            {_funcStory(
                                require('../assets/img/image/Trongveostudio.jpg'),
                                'Name'
                            )}
                        </ScrollView>
                    </View>
                </View>
                <View style={styles.line} />
                <View style={styles.menu}>
                    {_funcMenu
                        (require('../assets/img/ic_menu/ic_home.png'),
                            _pressHome,
                            false
                        )}
                    {_funcMenu
                        (require('../assets/img/ic_menu/ic_watch.png'),
                            _pressWatch,
                            true
                        )}
                    {_funcMenu
                        (require('../assets/img/ic_menu/ic_group.png'),
                            _pressGroup,
                            true
                        )}
                    {_funcMenu
                        (require('../assets/img/ic_menu/ic_like.png'),
                            _pressLike,
                            false
                        )}
                    {_funcMenu
                        (require('../assets/img/ic_menu/ic_noti.png'),
                            _pressNoti,
                            false
                        )}
                    {_funcMenu
                        (require('../assets/img/ic_menu/ic_menu.png'),
                            _pressMenu,
                            false
                        )}
                </View>
            </SafeAreaView>
        );
    }
}

_funcBlock = (
    img,
    label,
    action,
    isWarning = false) => {
    return (
        <TouchableOpacity
            onPress={() => {
                action();
            }}>
            <View style={styles.action_block}>
                <Image style={styles.img_user}
                    source={img}
                />
                <Text style={styles.profile}>
                    {label}
                </Text>
                {isWarning ? <View style={styles.warning}>
                    <Text style={styles.warning_text}>
                        !
                    </Text>
                </View> : null}
            </View>
        </TouchableOpacity>
    );
};

_navToProfile = () => {
    alert('Profile');
};

_navToLikedYou = () => {
    alert('Liked You');
};

_navToMatches = () => {
    alert('Matches');
};

_funcAvaButton = (
    img,
) => {
    return (
        <Image style={styles.ava_button}
            source={img} />
    )
}

_pressLiked = () => {
    alert('Next');
};

_funcStory = (
    img,
    name,
) => {
    return (
        <View style={styles.story}>
            <Image style={styles.story_image}
                source={img} />
            <Text style={styles.story_name}>
                {name}
            </Text>
        </View>
    );
};

_funcMenu = (
    img,
    actionMenu,
    isNotices = false,
) => {
    return (
        <TouchableOpacity onPress={() => {
            actionMenu();
        }}>
            {
                <View style={styles.menu_choose1}>
                    <View style={styles.menuview_icon}>
                        <Image style={styles.menu_icon}
                            source={img}
                        />
                    </View>
                    {isNotices ? <View style={styles.noti}>
                        <Text style={styles.noti_text}>
                            9
                    </Text>
                    </View> : null}
                </View>
            }
        </TouchableOpacity>
    );
};

_pressHome = () => {
    alert('Home');
};
_pressWatch = () => {
    alert('Watch');
};
_pressGroup = () => {
    alert('Group');
};
_pressLike = () => {
    alert('Home');
};
_pressNoti = () => {
    alert('Watch');
};
_pressMenu = () => {
    alert('Group');
};