import React from 'react';
import {
  View,
  SafeAreaView,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import CustomBottom from "./src/components/CustomBottom.js";

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

        <CustomBottom
          img={require('./assets/ic_action/ic_Profile.png')}
          label='Profile'
          action={this._navToProfile}
          isWarning={true}
        />
        <CustomBottom
          img={require('./assets/ic_action/ic_LikedYou.png')}
          label='Like You'
          action={this._navToLikeYou}
          isWarning={true}
        />
        <CustomBottom
          img={require('./assets/ic_action/ic_Matches.png')}
          label='Match'
          action={this._navToMatch}
          isWarning={true}
        />

      </View>
      <View style={styles.profile}>
        <View>
          <Image style={styles.mainImage}
            source={require('./assets/image/profile.jpg')}
            resizeMode='cover' />
        </View>
        <View style={styles.IC_ON_PROFILE}>
          <Image source={require('./assets/ic_image/icon_close.png')}
            style={{ marginRight: 10 }} />
          <Image source={require('./assets/ic_image/icon_heart-line.png')}
            style={{ marginRight: 5 }} />
        </View>
        <View style={{ margin: 20 }}>
          <Text style={{ fontWeight: 'bold', fontSize: 25 }}>Hoàng Thị Thuỳ Dương</Text>
          <Text style={{ fontSize: 15 }}>From Hanoi,Vietnam</Text>
        </View>
      </View>
      <Text style={styles.suggestedStoriesText}>Suggested Stories</Text>
      <View style={styles.storiesContainer}>
        {_addStory(require('./assets/image/icon_plus.png'))}
        {_stories(require('./assets/image/IM1.jpg'))}
        {_stories(require('./assets/image/IM2.jpg'))}
        {_stories(require('./assets/image/IM3.jpg'))}
        {_stories(require('./assets/image/IM4.jpg'))}
      </View>
      <View style={styles.name}>
        {_name('Add Story')}
        {_name('Katie')}
        {_name('Cholie')}
        {_name('Mie')}
        {_name('Xuka')}
      </View>
      <View style={styles.taskBarBlock}>
        {_taskBarButtons(require('./assets/ic_menu/ic_home.png'))}
        {_taskBarButtons(require('./assets/ic_menu/ic_watch.png'))}
        {_taskBarButtons(require('./assets/ic_menu/ic_group.png'))}
        {_taskBarButtons(require('./assets/ic_menu/ic_like.png'))}
        {_taskBarButtons(require('./assets/ic_menu/ic_noti.png'))}
        {_taskBarButtons(require('./assets/ic_menu/ic_menu.png'))}
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

_addStory = (img) => {
  return (
    <View style={styles.stories}>
      <Image source={img} />
    </View>
  );
};
_stories = (img) => {
  return (
    <View style={styles.stories}>
      <Image source={img} style={styles.imageStories} />
    </View>
  );
};

_name = (name) => {
  return <Text style={styles.nameStories}>{name}</Text>;
};
_taskBarButtons = (img) => {
  return (
    <View style={styles.buttonsTaskBar}>
      <Image source={img} style={styles.iconButtonsTaskBar} />
    </View>
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

export default App;

