import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';

export default class CustomButton extends Component {
  render() {
    const {img, label, action, isNotification} = this.props;
    return (
      <View>
        <TouchableOpacity
          onPress={() => {
            action();
          }}>
          <View style={styles.action_block}>
            <Image style={styles.img_user} source={img} />
            <Text style={styles.text_profile}>{label}</Text>
            {isNotification ? (
              <View style={styles.v_notification}>
                <Text style={styles.no_text}>!</Text>
              </View>
            ) : null}
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

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
  text_dating: {
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
  v_notification: {
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
  text_profile: {
    fontSize: 17,
    marginRight: 5,
    fontWeight: 'bold',
  },
  v_avatar: {
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
  v_avatar_profile: {
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
    marginTop: -30,
  },
  avatar_button: {
    width: 60,
    height: 60,
    marginRight: 20,
    resizeMode: 'contain',
  },
  v_infor: {
    marginLeft: 20,
    marginBottom: 30,
  },
  text_nameavatar: {
    fontWeight: 'bold',
    fontSize: 30,
  },
  text_addressavatar: {
    fontSize: 24,
  },
  v_stories: {
    flexDirection: 'column',
  },
  text_suggested: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 10,
  },
  v_story: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  v_ic_sotry: {
    width: 55,
    height: 55,
    borderRadius: 55 / 2,
    borderWidth: 2,
    borderColor: 'purple',
    justifyContent: 'center',
    alignItems: 'center',
  },

  img_story: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
  },
  story_name: {
    marginTop: 5,
  },
  v_menu: {
    marginTop: 10,
    borderTopWidth: 0.3,
    flexDirection: 'row',
  },

  ic_menuview: {
    marginTop: 10,
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
