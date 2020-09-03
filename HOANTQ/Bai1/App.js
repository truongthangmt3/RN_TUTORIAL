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
  View,
  Text,
  Image,
} from 'react-native';
import {
} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.dating}>Dating</Text>
        <View
          style={styles.v_setting}>
          <Image
            source={require('./img/img_girl.jpg')}
            style={styles.img_setting} />
        </View>
      </View>
      <View style={styles.action_block}>
        {_funcBlock(require('./img/ic_user.png'), 'Profile')}
        {_funcBlock(require('./img/ic_heart.png'), 'Liked You')}
        {_funcBlock(require('./img/ic_messa.png'), 'Matches')}
      </View>
      <View style={styles.title_block}>
        <Image
          source={require('./img/img_girl.jpg')}
          style={styles.img_girl} />
        <View style={styles.v_body}>
          <Text style={styles.text_body}>Annalbel, 22</Text>
          <Text>From Bắc Kinh, China</Text>
        </View>
        <View
          style={styles.action_close}>
          <View
            style={styles.v_close}>
            <Image
              source={require('./img/ic_close.png')}
              style={styles.img_close} />
          </View>
        </View>
      </View>
      <View
        style={styles.story}>
        <Text style={styles.text_story}>Suggested Stories</Text>
        <View style={styles.story_block}>
          <Image source={require('./img/ic_plus.png')} style={styles.img_story} />
          <Text>Add Story</Text>
        </View>
      </View>
      <View style={styles.head_footer}>
        <View styles={styles.footer}>
          <Image
            source={require('./img/ic_home.png')}
            style={styles.img_footer} />
        </View>
      </View>
    </View>
  )

};

_funcBlock = (img, label) => {
  return (
    <View style={styles.v_action_block}>
      <Image source={img} style={styles.img_user} />
      <Text
        style={styles.profile}>{label}</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  header: {
    flexDirection: 'row',
    marginHorizontal: 24,
    marginTop: 12
  },
  dating: {
    fontSize: 28,
    fontWeight: "bold",
    flex: 1
  },
  v_setting:
  {
    backgroundColor: '#E6E6FA',
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center'
  },
  img_setting:
  {
    width: 24,
    height: 24
  },
  action_block:
  {
    flexDirection: 'row',
    margin: 20,

  },
  v_action_block:
  {
    flexDirection: 'row',
    backgroundColor: '#e4e5ea',
    justifyContent: "center",
    alignItems: "center",
    padding: 6,
    borderRadius: 20,
    marginHorizontal: 4
  },
  img_user:
  {
    width: 18,
    height: 16,
    marginHorizontal: 6
  },
  profile:
  {
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 5
  },
  title_block:
  {
    marginLeft: 20,
    width: 370,
    height: 440,
    borderRadius: 10,
    backgroundColor: 'white',
    elevation:13
  },
  v_body:
  {
    padding: 16,
    marginLeft: 8
  },
  text_body:
  {
    fontWeight: 'bold',
    fontSize: 24,
  },
  img_girl:
  {
    width: 370,
    height: 300,
    marginTop: 38,
  },
  action_close:
  {
    flexDirection: 'row',
    position: 'absolute'
  },
  v_close:
  {
    backgroundColor: 'white',
    width: 50,
    height: 50,
    borderRadius: 100,
    marginTop: 310,
    marginLeft: 250,
    elevation: 8
  },
  img_close:
  {
    width: 35,
    height: 35,
    marginHorizontal: 8,
    marginTop: 8
  },
  story: {
    margin: 12,
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
  },
  text_story:
  {
    marginTop: 6,
    fontSize: 18,
    fontWeight: 'bold'
  },
  story_block:
  {
    width: 70,
    height: 70,
    backgroundColor: '#e4e5ea',
    borderRadius: 100,
    borderWidth: 3,
    margin: 6,
    borderColor: '#819F',
    marginBottom: 26,
  },
  img_story:
  {
    width: 30,
    height: 30,
    margin: 17.5,
    marginBottom: 20,
    justifyContent: "center"
  },
  head_footer:
  {

    borderTopWidth: 1
  },

  footer: {
    flexDirection: 'row',
    marginHorizontal: 8
  },
  img_footer:
  {
    padding: 16,
    margin: 8,
    marginLeft: 16
  }
});

export default App;
