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
  _Image,
  TouchableOpacity,
  ScrollView,
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
            source={require('./img/ic_setting.png')}
            style={styles.img_setting} />
        </View>
      </View>
      <View style={styles.action_block}>
        {_funcBlock(require('./img/ic_user.png'), 'Profile', _navProfile,true)}
        {_funcBlock(require('./img/ic_heart.png'), 'Liked You', _navLikedYou)}
        {_funcBlock(require('./img/ic_messa.png'), 'Matches', _navMatches)}
      </View>
      <View style={styles.title_block}>
        <Image
          source={require('./img/img_girl.jpg')}
          style={styles.img_girl} />
        <View style={styles.v_body}>
          <Text style={styles.text_body}>Annalbel, 22</Text>
          <Text>From Bắc Kinh, China</Text>
        </View>
        <View style={styles.action_close}>

          {_arrayClose(require('./img/ic_close.png'))}
          {_arrayClose(require('./img/ic_heart.png'))}

        </View>
      </View>
      <View
        style={styles.story}>
        <Text style={styles.text_story}>Suggested Stories</Text>
        <View style={{ flexDirection: 'row' }}>
          <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={true}>
          {_bodyplus(require('./img/ic_plus.png'), 'Add Story')}
          {_bodygirl(require('./img/img_ly.jpg'), 'Ly')}
          {_bodygirl(require('./img/img_nguyet.jpg'), 'Nguyệt')}
          {_bodygirl(require('./img/img_trinh.jpg'), 'Trinh')}
          {_bodygirl(require('./img/img_hang.jpg'), 'Hằng')}
          {_bodygirl(require('./img/img_trinh.jpg'), 'Thắm')}
          {_bodygirl(require('./img/img_hang.jpg'), 'Nhung')}
          </ScrollView>
        </View>
      </View>

      <View style={styles.footer}>
        {_footerBlock(require('./img/ic_home.png'))}
        {_footerBlock(require('./img/ic_tv.png'))}
        {_footerBlock(require('./img/ic_people.png'))}
        {_footerBlock(require('./img/ic_heart.png'))}
        {_footerBlock(require('./img/ic_alarm.png'))}
        {_footerBlock(require('./img/ic_menu.png'))}
      </View>
    </View>
  )
};
_funcBlock = (img, label, action,isWarning = false) => {
  return (
    <TouchableOpacity
      onPress={() => {
        action()
      }}>
      <View style={styles.v_action_block}>
        <Image source={img} style={styles.img_user} />
        <Text
          style={styles.profile}>{label}</Text>
          {isWarning ? <View style={styles.warning}></View> :null}
      </View>
    </TouchableOpacity>
  )
}
_arrayClose = (img) => {
  return (
    <View style={styles.v_close}>
      <Image
        source={img}
        style={styles.img_close} />
    </View>
  )
};
_bodyplus = (img, label) => {
  return (
    <View style={styles.story_block}>
      <Image source={img} style={styles.img_story} />
      <Text>{label}</Text>
    </View>
  )
}
_bodygirl = (img, label) => {
  return (
    <View style={styles.story_block}>
      <Image source={img} style={styles.img_story2} />
      <Text>{label}</Text>
    </View>
  )
}
_footerBlock = (img, isWarning = false) => {
  return (
    <Image source={img} style={styles.img_footer} />
  )
};
_navProfile = () => {
  alert = ('Profile');
}
_navLikedYou = () => {
  alert = ('Liked You');
}
_navMatches = () => {
  alert = ('Matches');
}
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
  v_setting: {
    backgroundColor: '#E6E6FA',
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center'
  },
  img_setting: {
    width: 24,
    height: 24
  },
  action_block: {
    flexDirection: 'row',
    margin: 20,
  },
  v_action_block: {
    flexDirection: 'row',
    backgroundColor: '#e4e5ea',
    justifyContent: "center",
    alignItems: "center",
    padding: 6,
    borderRadius: 20,
    marginHorizontal: 4
  },
  img_user: {
    width: 18,
    height: 16,
    marginHorizontal: 6
  },
  profile: {
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 5
  },
  warning:{
    position:'absolute',
    width:20,
    height:20,
    borderRadius:10,
    backgroundColor:'red',
    top:-7,
    left:85
  },
  title_block: {
    marginLeft: 20,
    width: 370,
    height: 440,
    borderRadius: 10,
    backgroundColor: 'white',
    elevation: 13
  },
  v_body: {
    padding: 16,
    marginLeft: 8
  },
  text_body: {
    fontWeight: 'bold',
    fontSize: 24,
  },
  img_girl: {
    width: 370,
    height: 300,
    marginTop: 38,
  },
  action_close: {
    flexDirection: 'row',
    position: 'absolute',
    marginTop: 310,
    marginLeft: 240,
  },
  v_close: {
    backgroundColor: 'white',
    width: 50,
    height: 50,
    borderRadius: 100,
    marginLeft: 6,
    elevation:20
    
  },
  img_close: {
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
  text_story: {
    marginTop: 6,
    fontSize: 18,
    fontWeight: 'bold'
  },
  story_block: {
    width: 70,
    height: 70,
    backgroundColor: '#e4e5ea',
    borderRadius: 100,
    borderWidth: 3,
    margin: 5,
    borderColor: '#819F',
    marginBottom: 26,
    alignItems: 'center'
  },
  img_story: {
    width: 30,
    height: 30,
    margin: 17.5,
    marginBottom: 20,
    justifyContent: "center"
  },
  img_story2:
  {
    width: 60,
    height: 60,
    marginTop: 1.5,
    borderRadius: 100,
    marginBottom: 7

  },
  footer: {
    borderTopWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: 8
  },
  img_footer: {
    padding: 16,
    margin: 8,
    marginLeft: 4
  }
});

export default App;
