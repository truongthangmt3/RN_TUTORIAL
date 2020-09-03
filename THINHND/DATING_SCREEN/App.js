/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  Dimensions
} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header_block}>
        <Text style={styles.text_header}>Dating</Text>
        <View style={styles.v_setting}>
          <Image
            source={require('./assets/images/settings.png')}
            style={styles.img_setting} />
        </View>
      </View>
      <View style={styles.v_action_block}>
        {_funcBlock(
          require('./assets/images/user.png'),
          'Proflie',
          _navToProfile,
          true,
        )}
        {_funcBlock(
          require('./assets/images/heart.png'),
          'Liked you',
          _navToLikeYou
        )}
        {_funcBlock(
          require('./assets/images/message.png'),
          'Matches',
          _navToProfile,

        )}
      </View>
      <View style={styles.v_image}>
        <Image
          resizeMode='cover'
          source={require('./assets/images/girl.jpg')}
          style={styles.img_avatar}
        ></Image>
        <View style={styles.v_2circle}>
          {_funcCircle(
            require('./assets/images/circle_heart.png')
          )}
          {_funcCircle(
            require('./assets/images/delete.png')
          )}
        </View>
        <Text style={styles.txt_name}>Quỳnh, 20</Text>
        <Text style={styles.txt_address}>From HaNoi, Vietnam</Text>
      </View>
      <View style={styles.line} />
      <Text style={styles.txt_sugs}>Suggested Stories</Text>
      <View
        style={styles.v_container}>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}>
          {_funcStory(
            require('./assets/images/stories.png'),
            "Add Story"

          )}
          {_funcStory(
            require('./assets/images/girl.jpg'),
            "Quỳnh"

          )}
          {_funcStory(
            require('./assets/images/girl.jpg'),
            "Quỳnh"

          )}
          {_funcStory(
            require('./assets/images/girl.jpg'),
            "Quỳnh"

          )}
          {_funcStory(
            require('./assets/images/girl.jpg'),
            "Quỳnh"

          )}
          {_funcStory(
            require('./assets/images/girl.jpg'),
            "Quỳnh"

          )}
          {_funcStory(
            require('./assets/images/girl.jpg'),
            "Quỳnh"

          )}
          {_funcStory(
            require('./assets/images/girl.jpg'),
            "Quỳnh"

          )}
        </ScrollView>
      </View>
      <View style={styles.line} />
      <View style={styles.line2} />
      <View style={{ flexDirection: 'row', marginLeft: 20 }}>
        {_funTab(
          require('./assets/images/home.png')
        )}
        {_funTab(
          require('./assets/images/video.png')
        )}
        {_funTab(
          require('./assets/images/people.png')
        )}
        {_funTab(
          require('./assets/images/black_heart.png')
        )}
        {_funTab(
          require('./assets/images/bell.png')
        )}
        {_funTab(
          require('./assets/images/menu.png')
        )}

      </View>
    </SafeAreaView >
  )
}
_funTab = (img) => {
  return (
    <Image
      resizeMode='contain'
      style={{ width: 25, height: 25, marginTop: 10, marginRight: 45 }}
      source={img}>

    </Image>
  )
}
_funcStory = (img, label) => {
  return (
    <TouchableOpacity>
      <View style={styles.v_story}>
        <View style={styles.v_story2
        }>
          <Image

            source={img}
            style={styles.img_story}>
          </Image>
        </View>
        <Text style={styles.txt_story}>{label}</Text>
      </View>
    </TouchableOpacity>
  )
};
_navToProfile = () => {
  alert('Profile');
};

_navToLikeYou = () => {
  alert('Like You');
};

_navToMatch = () => {
  alert('Match');
};
_funcBlock = (img, label, action, isWarning = false) => {
  return (
    <TouchableOpacity
      onPress={() => {
        action();
      }}>
      <View style={styles.action_block}>
        <Image
          resizeMode='contain'
          source={img}
          style={styles.img_user} />
        < Text style={styles.profile}>{label}</Text>
        {isWarning ? <View style={styles.warning}></View> : null}
      </View>
    </TouchableOpacity>
  )
}
_funcCircle = (img) => {
  return (
    <Image
      resizeMode='cover'
      source={img}
      style={styles.img_circle} />
  )
}
const { height, width } = Dimensions.get('window');
const imgWidth = width - 30;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  header_block: {
    flexDirection: 'row',
    marginHorizontal: 20,
    alignItems: 'center'
  },
  text_header: {
    flex: 1,
    fontSize: 28,
    fontWeight: '600'
  },
  v_setting: {
    height: 30,
    width: 30,
    borderRadius: 30 / 2,
    backgroundColor: '#e4e5ea',
    justifyContent: 'center',
    alignItems: 'center'
  },
  img_setting: {
    width: 24, height: 24
  },
  v_action_block: {
    flexDirection: 'row',
    marginTop: 20,
    marginLeft: 8
  },
  action_block: {
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#e4e5ea',
    borderRadius: 20,
    marginLeft: 8,
    padding: 8
  },
  img_user: {
    width: 17,
    height: 17,
    marginHorizontal: 7,
  },
  profile: {
    fontSize: 15,
    fontWeight: '600',
    marginRight: 7
  },
  v_image: {
    marginLeft: 15,
    marginRight: 15,
    marginTop: 17,
    backgroundColor: 'white',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 15,
    borderRadius: 10,
    paddingVertical: 25,
  },
  img_avatar: {
    height: imgWidth + 10,
    width: imgWidth
  },
  v_2circle: {
    marginTop: -65,
    flexDirection:
      'row',
    zIndex: 2,
    justifyContent: 'flex-end',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,
    marginRight: 5,
    elevation: 14,
  },
  img_circle: {
    width: 60,
    height: 60,
    marginTop: 20,
    marginRight: 10,
  },
  txt_name: {
    fontSize: 25,
    fontWeight: '500',
    marginLeft: 15
  },
  txt_address: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: '500',
    marginLeft: 15,
    color: 'grey'
  },
  line: {
    marginTop: 15,
    height: 1,
    backgroundColor: '#e4e5ea',
    marginHorizontal: 15
  },
  line2: {
    marginTop: 7,
    height: 0.5,
    backgroundColor: '#e4e5ea',

  },
  txt_sugs: {
    fontSize: 20,
    fontWeight: '600',
    marginLeft: 15,
    marginTop: 10
  },
  v_container: {
    flexDirection: 'row',
    marginTop: 10,
    marginLeft: 10
  },
  v_story: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15
  },
  v_story2: {
    width: 65,
    height: 65,

    borderRadius: 65 / 2,
    borderColor: 'purple',
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img_story: {
    width: 55,
    height: 55,
    borderRadius: 55 / 2,
  },
  txt_story: {
    marginTop: 3,
    fontSize: 13
  },
  warning: {
    position: 'absolute',
    backgroundColor: 'red',
    width: 20,
    height: 20,
    right: -5,
    top: -8,
    borderRadius: 10,
  }
})
export default App;
