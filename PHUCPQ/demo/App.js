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
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
const App: () => React$Node = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.serach}>
        <Image style={styles.ic_search} source={require('./asset/ic_search.png')}></Image>
        <Text style={styles.txt_search}>Search</Text>
      </View>
<<<<<<< HEAD
=======
      <View style={styles.header_block}>
        <Text style={styles.dating}>Dating</Text>
        <View style={styles.v_setting}>
          <Image style={styles.img_setting} source={require('./asset/ic_search.png')}></Image>
        </View>
>>>>>>> cdb2704957664c60038ff6b7cb3a8af171318ddb
      </View>
      <View style={styles.v_action_block}>
        {_funcBlock(
          require('./asset/ic_user.png'),
          'Profile',
          _navToProfile,
          true,
          require('./asset/ic_exclamation_mark.png')
        )}
        {_funcBlock(require('./asset/ic_user.png'), 'Like you', _navToLikeYou)}
        {_funcBlock(require('./asset/ic_user.png'), 'Match', _navToMatch)}
      </View>
      <View style={styles.container1}>
        {_funcBlock1(
          require('./asset/ic_background.jpg'),
        )}
      </View>
      <View style={styles.frames}>

      </View>
    </SafeAreaView>
  );
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
_funcBlock = (img, lable, action, isWarning = false, img1) => {
  return (
    <TouchableOpacity
      onPress={() => {
        action();
      }}>
      <View style={styles.action_block}>
        <Image style={styles.img_user} source={img}></Image>
        <Text style={styles.profile}>{lable}</Text>
        {isWarning ? <View style={styles.warning}>
          <Image style={styles.img_exclamation} source={img1}>
          </Image>
        </View> : null}
      </View>
    </TouchableOpacity>
  );
};
_funcBlock1 = (img) => {
  return (
    <TouchableOpacity>
      <View style={styles.img_cover}>
        <Image style={styles.img_representative} source={img} />
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  serach: {
    flex: 0.03,
    flexDirection: 'row',
    backgroundColor: 'red',
  },
  ic_search: {
    width: 13,
    height: 13,
    backgroundColor: 'white',
  },
  txt_search: {
    fontSize: 10,
    color: 'black',
  },
  header_block: {
    flexDirection: 'row',
    marginHorizontal: 20,
    backgroundColor: 'blue',
  },
  v_setting: {
    height: 30,
    width: 30,
    backgroundColor: '#e4e5ea',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dating: {
    flex: 1,
    fontSize: 28,
    fontWeight: 'bold',
  },
  img_setting: {
    height: 24,
    width: 24,
  },
  v_action_block: {
    flexDirection: 'row',
    margin: 20,
    backgroundColor: 'red',
  },
  action_block: {
    marginLeft: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e4e5ea',
    borderRadius: 20,
    padding: 5,
  },
  img_user: {
    width: 24,
    height: 24,
    marginHorizontal: 4,
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
  img_exclamation: {
    width: 20,
    height: 20,
  },
  container1: {
    flex: 0.7,
    height: '70%',
    width: '90%',
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 10,
    backgroundColor: 'white',
    flexDirection: 'column',
    marginLeft: 20,
    elevation: 15, //đổ bóng
  },
  img_representative: {
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
  },
  img_cover: {
    backgroundColor: 'white',
    flex: 0.8,
    height: '80%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  frames: {
    flex: 0.2,
    backgroundColor: 'blue',
  },
  size: {
    fontSize: 20,
  },
});
export default App;
