/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  View,
  SafeAreaView,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header_block}>
        <Text style={styles.dating}>Dating</Text>
        <View style={styles.v_setting}>
          <Image
            style={styles.img_setting}
            source={require('./assets/ic_setting.png')}
          />
        </View>
      </View>
      <View style={styles.v_action_block}>
        {_funcBlock(
          require('./assets/ic_user.png'),
          'Profile',
          _navToProfile,
          true,
        )}
        {_funcBlock(require('./assets/ic_user.png'), 'Like you', _navToLikeYou)}
        {_funcBlock(require('./assets/ic_user.png'), 'Match', _navToMatch)}
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

_funcBlock = (img, label, action, isWarning = false) => {
  return (
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
  );
};

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
});

export default App;
