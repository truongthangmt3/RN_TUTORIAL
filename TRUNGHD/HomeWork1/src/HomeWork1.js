import React, { Component } from 'react';
import {
    SafeAreaView,
    View,
    Text,
    Image,
    TouchableOpacity,
    ScrollView,
    StyleSheet,
    Dimensions
} from 'react-native';

const scrwidth = Dimensions.get('window').width;

export default class Rework extends Component {
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
                            source={require('../assets/ic_setting.png')}
                        />
                    </View>
                </View>
                <View style={styles.v_action_block}>
                    {_funcBlock(
                        require('../assets/ic_profile.png'),
                        'Profile',
                        _func_ClickToProfile,
                        true,
                    )}
                    {_funcBlock(
                        require('../assets/thangprofile.png'),
                        'Liked You',
                        _func_ClickToLikedYou,
                        true,
                    )}
                    {_funcBlock(
                        require('../assets/ic_match.png'),
                        'Matches',
                        _func_ClickToMatches,
                        true,
                    )}
                </View>
                <View style={styles.avatar_view}>
                    <View style={styles.v_avatar}>
                        <Image style={styles.v_img_avatar}
                            source={require('../assets/img_avatar.jpg')}
                        />
                        <View style={styles.v_avatar_button}>
                            <Image style={styles.avatar_button}
                                source={require('../assets/ic_cancel.png')}
                            />
                            <Image style={styles.avatar_button}
                                source={require('../assets/ic_heart.png')}
                            />
                        </View>
                    </View>
                    <View style={styles.v_avatar_infor}>
                        <Text style={styles.text_nameavatar}>
                            Name, 18
                        </Text>
                        <Text style={styles.text_addressavatar}>
                            Hanoi
                        </Text>
                    </View>
                </View>
                <View style={styles.boder_line} />
                <View style={styles.v_stories}>
                    <Text style={styles.sug_text}>
                        Suggested Stories
                    </Text>
                    <View style={styles.v_story}>
                        <ScrollView
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}>
                            {_funcStory(
                                require('../assets/ic_addstory.png'),
                                'Add Stories'
                            )}
                            {_funcStory(
                                require('../assets/ic_story_thinh.png'),
                                'Thinh'
                            )}

                            {_funcStory(
                                require('../assets/thangprofile.png'),
                                'Name'
                            )}

                            {_funcStory(
                                require('../assets/ic_story2.png'),
                                'Name'
                            )}
                            {_funcStory(
                                require('../assets/ic_story3.png'),
                                'Name'
                            )}
                            {_funcStory(
                                require('../assets/ic_story4.png'),
                                'Name'
                            )}
                        </ScrollView>
                    </View>
                </View>
                <View style={styles.boder_line} />
                <View style={styles.v_menu}>
                    {_funcMenu
                        (require('../assets/ic_home.png'),
                    )}
                    {_funcMenu
                        (require('../assets/ic_video.png'),

                    )}
                    {_funcMenu
                        (require('../assets/ic_group.png'),
                    )}
                    {_funcMenu
                        (require('../assets/ic_likedyou.png'),
                    )}
                    {_funcMenu
                        (require('../assets/ic_notification.png'),
                            false
                        )}
                    {_funcMenu
                        (require('../assets/ic_menu.png'),
                    )}
                </View>
            </SafeAreaView>
        );
    }
}

_func_ClickToProfile = () => {
    alert('Profile');
};

_func_ClickToLikedYou = () => {
    alert('Liked You');
};

_func_ClickToMatches = () => {
    alert('Matches');
};

_funcBlock = (
    img,
    label,
    action,
    isNotification = false) => {
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
                {isNotification ? <View style={styles.notification}>
                    <Text style={styles.no_text}>
                        !
                    </Text>
                </View> : null}
            </View>
        </TouchableOpacity>
    );
};

_funcStory = (
    img,
    name
) => {
    return (
        <View style={styles.story}>
            <View style={styles.v_ic_sotry}>
                <Image style={styles.img_story}
                    source={img} />
            </View>
            <Text style={styles.story_name}>
                {name}
            </Text>
        </View>
    );
};

_funcMenu = (
    img,
) => {
    return (
        <TouchableOpacity onPress={() => {
        }}>
            <View style={styles.menu_option}>
                <View style={styles.ic_menuview}>
                    <Image style={styles.ic_menu}
                        source={img}
                    />
                </View>
            </View>
        </TouchableOpacity>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft: 20,
        marginRight: 20,
        backgroundColor: 'white',
    },
    header_block: {
        flexDirection: 'row',
    },
    dating: {
        flex: 1,
        fontSize: 28,
        fontWeight: 'bold',
    },
    v_setting: {
        height: 40,
        width: 40,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#e4e5ea',
    },
    img_setting: {
        height: 25,
        width: 25,
    },
    v_action_block: {
        marginTop: 20,
        marginRight: 20,
        marginBottom: 20,
        flexDirection: 'row',
    },
    img_user: {
        width: 20,
        height: 20,
        marginHorizontal: 5,
    },
    notification: {
        top: -5,
        right: -3,
        width: 15,
        height: 15,
        borderRadius: 10,
        alignItems: 'center',
        position: 'absolute',
        backgroundColor: 'red',
    },
    text_notification: {
        color: 'white',
        fontWeight: 'bold',
    },
    action_block: {
        padding: 5,
        marginLeft: 5,
        borderRadius: 20,
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#e4e5ea',
    },
    profile: {
        fontSize: 17,
        marginRight: 5,
        fontWeight: 'bold',
    },
    avatar_view: {
        flex: 1,
        marginTop: 15,
        marginBottom: 15,
        borderRadius: 10,
        backgroundColor: '#ffffff',
        shadowColor: '#000000',
        shadowOffset: {
            width: 1,
            height: 5,
        },
        shadowOpacity: 0.5,
        shadowRadius: 3.84,
        elevation: 9,
    },
    v_avatar: {
        flex: 6,
        marginTop: 50,
        marginBottom: 50,
        alignItems: 'center',
    },
    v_img_avatar: {
        resizeMode: 'cover',
        width: '100%',
        height: '100%',
        zIndex: 1,
    },
    v_avatar_button: {
        zIndex: 2,
        flexDirection: 'row',
        alignSelf: 'flex-end',
        shadowColor: '#000',
        shadowOffset: {
            width: 1,
            height: 5,
        },
        shadowOpacity: 0.5,
        shadowRadius: 3.84,
        elevation: 9,
        marginTop: -30
    },
    avatar_button: {
        width: 60,
        height: 60,
        marginRight: 20,
        resizeMode: 'contain',
    },
    v_avatar_infor: {
        marginLeft: 20,
        marginBottom: 30,
    },
    text_nameavatar: {
        fontWeight: 'bold',
        fontSize: 30
    },
    text_addressavatar: {
        fontSize: 24
    },
    v_stories: {
        flexDirection: 'column',
    },
    sug_text: {
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 10
    },
    v_story: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    story: {
        alignItems: 'center',
        marginHorizontal: 5,
        width: scrwidth / 5,
    },

    v_ic_sotry: {
        width: 55,
        height: 55,
        borderRadius: (55 / 2),
        borderWidth: 2,
        borderColor: 'purple',
        justifyContent: 'center',
        alignItems: 'center',
    },

    img_story: {
        width: 50,
        height: 50,
        borderRadius: (50 / 2),
    },
    story_name: {
        marginTop: 5
    },
    v_menu: {
        marginTop: 10,
        borderTopWidth: 0.3,
        flexDirection: 'row',
    },
    menu_option: {
        width: scrwidth / 6,
        justifyContent: 'center',
    },
    ic_menuview: {
        marginTop: 10
    },
    ic_menu: {
        width: 30,
        height: 30,
        resizeMode: 'contain',
    },
    boder_line: {
        marginTop: 3,
        marginBottom: 3,
        borderBottomWidth: 0.5,
    },
});
