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
  Image,
  Text,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from 'react-native';
const App: () => React$Node = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.block_search}>
        <Image
          source={require('./assets/ic_search.png')}
          style={styles.img_search}
        />
        <Text style={styles.txt_search}>Search</Text>
      </View>
      <View style={styles.block_Datting}>
        <Text style={styles.dating}>Dating</Text>
        <View style={styles.v_setting}>
          <Image
            style={styles.img_setting}
            source={require('./assets/ic_settings.png')}
          />
        </View>
      </View>
      <View style={styles.v_action_block}>
        {_funcBlock(
          require('./assets/ic_user.png'),
          'Profile',
          _navToProfile,
          true,
          require('./assets/ic_exclamation_mark.png'),
        )}
        {_funcBlock(
          require('./assets/ic_heart.png'),
          'Like you',
          _navToLikeYou,
        )}
        {_funcBlock(require('./assets/ic_mesenger.png'), 'Matches', _navToMatch)}
      </View>
      <View style={styles.background}>
        <View style={styles.boder_background}>
          <ImageBackground
            style={styles.img_backgruond}
            source={require('./assets/ic_background.jpg')}>
            <View style={styles.img_backgrounds}>
              <Image
                style={styles.txt_backgrounds}
                source={require('./assets/ic_heart_64.png')}
              />
            </View>
            <View style={styles.img_backgroundss}>
              <Image
                style={styles.txt_backgroundss}
                source={require('./assets/ic_multiply.png')}
              />
            </View>
          </ImageBackground>
        </View>
        <Text style={styles.txt_size}>Name, 21 </Text>
        <Text style={styles.txt_sizes}>From Hanoi, Vietnam</Text>
      </View>
      <View style={styles.boder_SSG}>
        <Text style={styles.txt_SSG}>Suggested Stories</Text>
      </View>
      <View style={styles.boder_avatar}>
        <ScrollView horizontal>
          {_scrollView(require('./assets/plus1.png'), 'Add Story')}
          {_scrollView(require('./assets/vk.jpg'), 'Quỳnh Như')}
          {_scrollView(require('./assets/banthan.jpg'), 'Quang Phúc')}
          {_scrollView(require('./assets/anhchoi.jpg'), 'My Love')}
          {_scrollView(require('./assets/hinhanh.jpg'), 'Mark ZucK')}
          {_scrollView(require('./assets/plus1.png'), 'Add Story')}
          {_scrollView(require('./assets/plus1.png'), 'Add Story')}
          {_scrollView(require('./assets/plus1.png'), 'Add Story')}

        </ScrollView>
      </View>
      <View style={styles.boder_taskbar}>
        {_Tasbar(require('./assets/ic_home.png'))}
        {_Tasbar(require('./assets/ic_tv1.png'))}
        {_Tasbar(require('./assets/ic_usergroups.png'))}
        {_Tasbar(require('./assets/ic_hear2.png'))}
        {_Tasbar(require('./assets/ic_bell.png'))}
        {_Tasbar(require('./assets/ic_menu.png'))}
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
  alert('Matches');
};

_funcBlock = (img, label, action, isWarning = false, img1) => {
  return (
    <TouchableOpacity
      onPress={() => {
        action();
      }}>
      <View style={styles.action_block}>
        <Image style={styles.img_user} source={img} />
        <Text style={styles.profile}>{label}</Text>
        {isWarning
          ? <View style={styles.warning}><Image style={styles.img_mark} source={img1} /></View>
          : null
        }
      </View>
    </TouchableOpacity>
  );
};
_Tasbar = (img) => {
  return (
    <TouchableOpacity>
      <View style={styles.heart_Taskbar}>
        <Image style={styles.image_Taskbar} source={img} />
      </View>
    </TouchableOpacity>
  );
};
_scrollView = (img, label) => {
  return (
    <TouchableOpacity>
      <View style={styles.heart_avatar}>
        <Image style={styles.img_scrollView} source={img} />
        <Text style={styles.txt_scrollView}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  block_search: {
    flex: 0.03,
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  img_search: {
    width: 13,
    height: 13,
    backgroundColor: 'white',
  },
  txt_search: {
    fontSize: 10,
    color: 'black',
  },
  block_Datting: {
    flexDirection: 'row',
    marginHorizontal: 20,
    backgroundColor: 'white',
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
    backgroundColor: 'white',
    width: 20,
    height: 20,
    right: -5,
    top: -8,
    borderRadius: 10,
    alignItems: 'center',
  },
  img_mark: {
    width: 22,
    height: 22,
  },
  background: {
    flex: 0.8,
    height: '100%',
    width: '90%',
    borderRadius: 15,
    marginBottom: 15,
    backgroundColor: 'white',
    flexDirection: 'column',
    marginLeft: 20,
    elevation: 15,
  },
  boder_background: {
    backgroundColor: 'white',
    flex: 0.8,
    height: '80%',
    width: '100%',
    marginTop: 30,
  },
  img_backgruond: {
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
    elevation: 15,
  },
  txt_background: {
    flex: 0.2,
    backgroundColor: 'white',
    borderRadius: 25,
    marginTop: 10,
  },
  txt_size: {
    marginLeft: 15,
    fontSize: 25,
    fontWeight: 'bold',
  },
  txt_sizes: {
    marginLeft: 15,
    fontSize: 20,
  },
  txt_backgrounds: {
    width: 55,
    height: 55,
  },
  img_backgrounds: {
    width: 55,
    height: 55,
    borderRadius: 40,
    position: 'absolute',
    backgroundColor: 'white',
    marginTop: 280,
    marginLeft: 300,
    alignItems: 'center',
    justifyContent: 'center',
  },

  txt_backgroundss: {
    width: 40,
    height: 40,
  },
  img_backgroundss: {
    width: 55,
    height: 55,
    borderRadius: 40,
    position: 'absolute',
    backgroundColor: 'white',
    marginTop: 280,
    marginLeft: 240,
    alignItems: 'center',
    justifyContent: 'center',
  },
  boder_backgrounds: {
    flex: 0.1,
    backgroundColor: 'white',
  },
  boder_SSG: {
    flex: 0.05,
    backgroundColor: 'white',
  },
  txt_SSG: {
    fontSize: 17,
    color: 'black',
    fontWeight: 'bold',
    borderTopWidth: 0.5,
    marginLeft: 18,
    marginRight: 18,
  },
  boder_avatar: {
    flex: 0.1,
    backgroundColor: 'white',
    flexDirection: 'row',
    marginBottom: 7,
    borderBottomWidth: 0.5,
    marginLeft: 18,
    marginRight: 18,
    justifyContent: 'center',
  },
  boder_taskbar: {
    flex: 0.04,
    backgroundColor: 'white',
    flexDirection: 'row',
    marginBottom: 10,
    borderTopWidth: 0.2,
  },
  heart_Taskbar: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    width: 50,
    height: '100%',
    marginTop: 17,
    marginHorizontal: 10,
  },
  image_Taskbar: {
    width: 28,
    height: 28,
    backgroundColor: 'white',
  },
  heart_avatar: {
    flex: 0.2,
    backgroundColor: 'white',
    width: 100,
    height: '100%',
    flexDirection: 'column',
    marginHorizontal: 1,
  },
  img_scrollView: {
    width: 55,
    height: 55,
    borderRadius: 40,
    position: 'absolute',
    backgroundColor: 'white',
    marginBottom: 40,
  },
  txt_scrollView: {
    fontSize: 10,
    color: 'black',
    marginTop: 50,
    fontWeight: 'bold',
    marginLeft: 5,
  },
});

export default App;
