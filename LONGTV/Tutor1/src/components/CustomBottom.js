import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native'

export default class CustomBottom extends Component {
    render() {
        const { img, label, action, isWarning } = this.props
        return (
            <View>
                <TouchableOpacity
                    onPress={() => {
                        action();
                    }}>
                    <View style={styles.action_block}>
                        <Image style={styles.img_user} source={img} />
                        <Text style={styles.profile}>{label}</Text>
                        {isWarning ? <View style={styles.warning}></View> : null}
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    header_block: {
        flexDirection: 'row',
        marginHorizontal: 20,
    },
    dating: {
        flex: 1,
        fontSize: 28,
        fontWeight: 'bold',
    },
    v_setting: {
        height: 30,
        width: 30,
        backgroundColor: '#e4e5ea',
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    img_setting: {
        height: 24,
        width: 24,
    },
    v_action_block: {
        flexDirection: 'row',
        margin: 20,
    },
    img_user: {
        width: 24,
        height: 24,
        marginHorizontal: 4,
    },
    action_block: {
        marginLeft: 10,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#e4e5ea',
        borderRadius: 20,
        padding: 5,
    },
    profile: {
        marginRight: 5,
        fontWeight: 'bold',
    },
    warning: {
        position: 'absolute',
        backgroundColor: 'red',
        width: 20,
        height: 20,
        right: -5,
        top: -8,
        borderRadius: 10,
    },
    profile: {
        backgroundColor: '#FAFAFA',
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 0
        }
    },
    mainImage: {
        width: 380, height: 370, margin: 18
    },
    IC_ON_PROFILE: {
        flexDirection: 'row',
        position: 'absolute',
        top: 360,
        left: 230,
    },
    suggestedStoriesText: {
        marginLeft: 20,
        marginTop: 3,
        fontWeight: 'bold',
        fontSize: 23,
    },
    storiesContainer: {
        flex: 1,
        flexDirection: 'row',
        marginVertical: 5,
    },
    stories: {
        flex: 1,
        width: 70,
        height: 70,
        borderWidth: 3,
        borderColor: '#976AFF',
        borderRadius: 35,
        marginHorizontal: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    name: {
        marginHorizontal: 8,
        flexDirection: 'row',
        paddingLeft: 10,
        paddingTop: 8,
    },
    imageStories: {
        width: 60,
        height: 60,
        borderRadius: 30,
    },
    nameStories: {
        flex: 1,
        margin: 7,
        justifyContent: 'center',
        alignItems: 'center',
    },
    taskBarBlock: { flex: 1, flexDirection: 'row' },
    buttonsTaskBar: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    iconButtonsTaskBar: {
        width: 30,
        height: 30,
    },
});

