TouchableOpacity// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow strict-local
//  */

import React, { Component } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    Image,
    TouchableOpacity,
    Alert
} from 'react-native';

import CustomButton from '../components/CustomButon'
import imge from '../../assest/image'
// import HomeScreen from './src/sceens/HomeScreen'

class DatingScreen extends Component {

    state = {
        current: 0,
        girl_gai: [
            {
                Url_girl: 'https://i.pinimg.com/originals/b7/9e/b7/b79eb76281d7b2aed4b2b53164e90043.jpg',
                name: 'hoa'
            },
            {
                Url_girl: 'https://i.pinimg.com/originals/0e/3a/02/0e3a0209ebf915f34279ac867bd2ea26.jpg',
                name: 'hoa'
            },
            {
                Url_girl: 'https://thuthuatnhanh.com/wp-content/uploads/2019/12/anh-gai-xinh-de-thuong-cap-3-580x580.jpg',
                name: 'hoa'
            },



        ]
    }

    render() {
        const { current, girl_gai } = this.state
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.header}>

                    <TouchableOpacity
                        onPress={() => {
                            this.props.navigation.navigate("user");
                        }}>
                        <View style={styles.v_dating}>
                            <Text style={styles.dating}> Dating </Text>
                        </View>
                    </TouchableOpacity>
                    <View style={styles.v_setting}>
                        <Image
                            style={styles.img_setting}
                            resizeMode="cover"
                            source={require('../../assest/settings.png')} />
                    </View>
                </View>

                <View style={styles.v_action_bl}>
                    <CustomButton
                        //  img={require('./assest/ic_add.png')}
                        img={imge.ic_home}
                        title="name"
                        isbell={true}
                        action={_navToLikeYou}
                    />

                    <CustomButton
                        //  img={re[\\\88///fquire('./assest/ic_add.png')}
                        img={imge.ic_home}
                        title="name"
                        isbell={true}
                        action={_navToLikeYou}
                    />
                    {/* {_funcBlock(
            require('./assest/ic_user.png'),
            'User',
            _navToProfile,
            true)} */}
                    {/* {_funcBlock(
            require('./assest/ic_heart.png'),
            'like You',
            _navToLikeYou)}
          {_funcBlock(
            require('./assest/ic_message.png'),
            'Match',
            _navToMatch)} */}
                </View>

                <View style={styles.v_body}>
                    <View style={styles.body}>
                        <Image
                            style={styles.body_img}
                            resizeMode="cover"
                            source={{ uri: girl_gai[current].Url_girl }}
                        />
                        <View style={styles.body_title}>
                            <TouchableOpacity onPress={() => {
                                let tmpCurrent = current;
                                if (tmpCurrent < girl_gai.length - 1) {
                                    tmpCurrent++;
                                } else {
                                    tmpCurrent = 0;
                                }
                                this.setState({
                                    current: tmpCurrent
                                    //girl_gai: 'https://i0.wp.com/danongonline.com.vn/wp-content/uploads/2018/02/anh-girl-xinh-9-1.jpg?fit=624%2C563&ssl=1'

                                })

                            }}>
                                <Text style={styles.body_title1}
                                > DAT NGUYEN </Text>
                            </TouchableOpacity>

                            <Text style={styles.body_title2}> from Ha Noi, Vietnam </Text>
                        </View>
                        <View style={styles.body_ic}>
                            <View style={styles.body_icHeart}>
                                <Image
                                    style={{ width: 40, height: 40, borderRadius: 25 }}
                                    source={imge.ic_heart}
                                >

                                </Image>
                            </View>
                            <View style={styles.body_icClose}>
                                <Image
                                    style={{ width: 40, height: 40, borderRadius: 25 }}
                                    source={imge.ic_close}
                                >

                                </Image>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={styles.title_story}>
                    <Text style={styles.name_Story}> Suggested Stories </Text>
                </View>

                <ScrollView
                    horizontal={true}
                    style={styles.v_listStory}>
                    {_funStory(require('../../assest/img_gai1.png'), 'Add Story')}
                    {_funStory(require('../../assest/img_gai1.png'), 'Trang')}
                    {_funStory(require('../../assest/img_gai1.png'), 'Linh')}
                    {_funStory(require('../../assest/img_gai1.png'), 'Ngọc')}
                    {_funStory(require('../../assest/img_gai1.png'), 'Hạnh')}
                    {_funStory(require('../../assest/img_gai1.png'), 'gai')}
                    {_funStory(require('../../assest/img_gai1.png'), 'gai')}
                    {_funStory(require('../../assest/img_gai1.png'), 'gai')}
                    {_funStory(require('../../assest/img_gai1.png'), 'gai')}
                    {_funStory(require('../../assest/img_gai1.png'), 'gai')}
                    {_funStory(require('../../assest/img_gai1.png'), 'gai')}
                    {_funStory(require('../../assest/img_gai1.png'), 'gai')}
                    {_funStory(require('../../assest/img_gai1.png'), 'gai')}
                </ScrollView>

                <View style={styles.v_bottom}>
                    {_navTab(require('../../assest/ic_home.png'))}
                    {_navTab(require('../../assest/ic_tv.png'))}
                    {_navTab(require('../../assest/ic_person.png'))}
                    {_navTab(require('../../assest/ic_heart4.png'))}
                    {_navTab(require('../../assest/ic_bell.png'))}
                    {_navTab(require('../../assest/ic_menu.png'))}
                </View>
            </SafeAreaView>
        );
    }
};

_navToProfile = () => {
    Alert.alert('hello')
};

_navToLikeYou = () => {
    alert('Like You');
};

_navToMatch = () => {
    alert('Match');
};

// _funcBlock = (img, title, action, isbell = false) => {
//   return (
//     // <TouchableOpacity
//     //   onPress={() => {
//     //     action();
//     //   }}>
//     //   <View style={styles.action_block}>
//     //     <Image
//     //       style={styles.img_action}
//     //       source={img} />
//     //     <Text style={styles.title_action}>{title} </Text>
//     //     {isbell ? <View style={styles.is_bell}><Text>!</Text></View> : null}
//     //   </View>
//     // </TouchableOpacity>

//   //);
// }

_funStory = (img, label) => {
    return (
        <TouchableOpacity
            onPress={() => {
            }}>
            <View style={styles.v_action_storys}>
                <View style={styles.action_storys}>
                    <Image
                        style={styles.story_img}
                        source={img} />
                </View>
                <Text style={styles.story_title}> {label} </Text>
            </View>
        </TouchableOpacity>
    );
}

_navTab = (img) => {
    return (
        <TouchableOpacity >
            <View style={styles.action_tab} >
                <Image
                    source={img}
                    style={styles.tab_img} />
            </View>
        </TouchableOpacity>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    header: {
        flex: 0.5,
        flexDirection: 'row',
        //backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 10,
    },

    v_dating: {
        flex: 1,
    },

    dating: {
        fontSize: 30,
        fontWeight: 'bold'
    },

    v_setting: {
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        backgroundColor: '#C0C0C0',
        opacity: 0.9,
    },

    img_setting: {
        width: 26,
        height: 26
    },

    v_action_bl: {
        flex: 0.6,
        // backgroundColor: 'red',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },

    action_block: {
        width: 110,
        height: 30,
        marginLeft: 10,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        borderRadius: 30,
        backgroundColor: '#C0C0C0',
        opacity: 0.8,
        //backgroundColor: 'pink',
    },

    img_action: {
        width: 20,
        height: 20,
    },

    title_action: {
        fontSize: 17,
        fontWeight: 'bold',
        marginLeft: 5
    },

    is_bell: {
        position: 'absolute',
        backgroundColor: 'red',
        width: 20,
        height: 20,
        right: -5,
        top: -8,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    },

    v_body: {
        flex: 5.5,
        backgroundColor: 'white',
        marginHorizontal: 15,
        marginVertical: 10,
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 1,
        shadowRadius: 6,
        elevation: 1,

    },
    body: {
        flex: 1,
        marginVertical: 25,

    },

    body_img: {
        width: '100%',
        height: '88%',
    },

    body_title: {
        width: '100%',
        height: '15%',
        marginHorizontal: 20,
        justifyContent: 'center',
    },

    body_title1: {
        fontSize: 18,
        fontWeight: 'bold',
    },

    body_title2: {
    },

    body_ic: {
        flexDirection: 'row',
        //backgroundColor: 'red',
        width: 200,
        height: 90,
        top: 340,
        alignItems: 'center',
        justifyContent: 'space-around',
        left: 180,
        position: 'absolute'
    },
    body_icHeart: {
        borderRadius: 50,
        width: 80,
        height: 80,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'pink',


    },
    body_icClose: {
        width: 80,
        height: 80,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'yellow'
    },

    title_story: {
        flex: 0.4,
        marginTop: 10,
        backgroundColor: 'white',
        marginHorizontal: 10,
    },

    name_Story: {
        fontSize: 20,
        fontWeight: 'bold'
    },

    v_listStory: {
        flex: 1.3,
        marginHorizontal: 10,
        // backgroundColor: 'green',
    },

    v_action_storys: {
        marginTop: 2,
        width: 84,
        height: 84,
        flexDirection: 'column',
        // backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
    },

    action_storys: {
        width: '80%',
        height: '80%',
        backgroundColor: 'blue',
        // marginVertical: 10
        borderRadius: 40,
        alignItems: 'center',
        justifyContent: 'center'
    },

    story_img: {
        width: '94%',
        height: '94%',
        borderRadius: 40,
        borderWidth: 2,
        borderColor: '#fff',
    },

    story_title: {
        fontSize: 17,
    },

    v_bottom: {
        flex: 0.8,
        flexDirection: 'row',
        backgroundColor: 'white',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },

    action_tab: {
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: 'red'
    },

    tab_img: {
        width: 25,
        height: 25,
    }

});
export default DatingScreen;