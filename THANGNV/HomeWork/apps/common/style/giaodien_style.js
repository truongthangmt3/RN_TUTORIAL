import { StyleSheet, Dimensions } from 'react-native';

const screenWidth = Math.round(Dimensions.get('window').width);
const icmenuWidth = screenWidth - 40;

const giaodien_style = StyleSheet.create({
    line: {
        marginTop: 3,
        marginBottom: 3,
        borderBottomWidth: 0.5,
    },
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
    warning: {
        top: -5,
        right: -3,
        width: 15,
        height: 15,
        borderRadius: 10,
        alignItems: 'center',
        position: 'absolute',
        backgroundColor: 'red',
    },
    warning_text: {
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
        shadowColor: '#000',
        shadowOffset: {
            width: 1,
            height: 5,
        },
        shadowOpacity: 0.5,
        shadowRadius: 3.84,
        elevation: 5,
    },
    v_avatar: {
        flex: 6,
        marginTop: 50,
        marginBottom: 50,
        alignItems: 'center',
    },
    avatar: {
        resizeMode: 'cover',
        width: '100%',
        height: '100%',
        position: 'relative',
        marginBottom: -35,
        //zIndex: 0,
    },
    v_ava_button: {
        //zIndex: 1,
        flexDirection: 'row',
        alignSelf: 'flex-end',
        shadowColor: '#000',
        shadowOffset: {
            width: 1,
            height: 5,
        },
        shadowOpacity: 0.5,
        shadowRadius: 3.84,
        elevation: 5,
    },
    ava_button: {
        width: 60,
        height: 60,
        marginRight: 20,
        resizeMode: 'contain',
    },
    v_ava_infor: {
        marginLeft: 20,
        marginBottom: 30,
    },
    avatar_name: {
        fontWeight: 'bold',
        fontSize: 30
    },
    avatar_adds: {
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
        //justifyContent: 'space-between'
    },
    story: {
        alignItems: 'center',
        marginHorizontal: 5
    },
    story_image: {
        width: 50,
        height: 50,
        borderRadius: (50 / 2),
        borderWidth: 2,
        borderColor: 'violet',
    },
    story_name: {
        marginTop: 5
    },
    menu: {
        marginTop: 10,
        borderTopWidth: 0.3,
        flexDirection: 'row',
    },
    menu_choose1: {
        borderTopWidth: 2,
        width: icmenuWidth / 6,
        alignItems: 'center',
        borderColor: '#0078ff',
    },
    menu_choose2: {
        borderTopWidth: 2,
        width: icmenuWidth / 6,
        alignItems: 'center',
        borderColor: '#ffffff',
    },
    menuview_icon: {
        marginTop: 10
    },
    menu_icon: {
        width: 30,
        height: 30,
        resizeMode: 'contain',
    },
    noti: {
        top: 5,
        right: 6,
        width: 20,
        height: 20,
        borderRadius: 10,
        alignItems: 'center',
        position: 'absolute',
        backgroundColor: 'red',
    },
    noti_text: {
        color: 'white',
        fontWeight: 'bold',
    },
});

export default giaodien_style