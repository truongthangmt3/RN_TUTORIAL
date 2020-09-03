import React, { Component } from 'react';
import {
    SafeAreaView,
    View,
    Text,
    Image,
    TouchableOpacity,
    ScrollView
} from 'react-native';

import styles from '../common/giaodien_style.js'
export default class GiaoDien extends Component {
    render() {
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
                    {_funcBlock(
                        require('../assets/img/ic_action/ic_Profile.png'),
                        'Profile',
                        _navToProfile,
                        true,
                    )}
                    {_funcBlock(
                        require('../assets/img/ic_action/ic_LikedYou.png'),
                        'Liked You',
                        _navToLikedYou,
                        false
                    )}
                    {_funcBlock(
                        require('../assets/img/ic_action/ic_Matches.png'),
                        'Matches',
                        _navToMatches,
                        false
                    )}
                </View>
                <View style={styles.avatar_view}>
                    <View style={styles.v_avatar}>
                        <Image style={styles.avatar}
                            source={require('../assets/img/image/Hoa.jpg')}
                        />
                        <View style={styles.v_ava_button}>
                            <Image style={styles.ava_button}
                                source={require('../assets/img/ic_cancel.png')}
                            />
                            <Image style={styles.ava_button}
                                source={require('../assets/img/ic_liked.png')}
                            />
                        </View>
                    </View>
                    <View style={styles.v_ava_infor}>
                        <Text style={styles.avatar_name}>
                            Hoa Nguyen Bui, 22
                        </Text>
                        <Text style={styles.avatar_adds}>
                            Hai Duong
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

_navToProfile = () => {
    alert('Profile');
};

_navToLikedYou = () => {
    alert('Liked You');
};

_navToMatches = () => {
    alert('Matches');
};

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

_funcAvaButton = () => {
    return (
        <TouchableOpacity onPress={() => {
            ab_action();
        }}>

        </TouchableOpacity>
    )
}

_funcStory = (
    img,
    name,
    //actionStory
) => {
    return (
        // <TouchableOpacity
        //     onPress={() => {
        //         actionStory();
        //     }}>
        <View style={styles.story}>
            <Image style={styles.story_image}
                source={img} />
            <Text style={styles.story_name}>
                {name}
            </Text>
        </View>
        //</TouchableOpacity>
    );
};

_funcMenu = (
    img,
    actionMenu,
    isNotices = false,
    isChoosed = false,
) => {
    return (
        <TouchableOpacity onPress={() => {
            actionMenu();
        }}>
            <View style={styles.menu_choose}>
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
    alert('Like');
};
_pressNoti = () => {
    alert('Noti');
};
_pressMenu = () => {
    alert('Menu');
}