import React, { Component } from 'react';
import {
  View,
  SafeAreaView,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import CustomBottom from "./src/components/CustomBottom.js";

class App extends Component {
  state = {
    isWarning: true,
    current: 0,
    girl_imgs: [
      'https://scontent.fhan2-6.fna.fbcdn.net/v/t1.0-9/118523728_1185911541788939_2193424685476308808_n.jpg?_nc_cat=100&_nc_sid=8bfeb9&_nc_ohc=TLqEvraCJfQAX-TaE-0&_nc_ht=scontent.fhan2-6.fna&oh=86695556f87d28223856c3a66176ea4f&oe=5F85B705',
      'https://scontent.fhan2-5.fna.fbcdn.net/v/t1.0-9/118806575_2795679350669072_5788097259853399438_n.jpg?_nc_cat=109&_nc_sid=09cbfe&_nc_ohc=mnGTo0UbJh4AX9Uzsnw&_nc_ht=scontent.fhan2-5.fna&oh=f537f6feaee9314af36285f23ba2ec05&oe=5F871E45',
      'https://scontent.fhan2-4.fna.fbcdn.net/v/t1.0-9/117889929_705849560146970_3986694611233700952_o.jpg?_nc_cat=105&_nc_sid=09cbfe&_nc_ohc=ieABf4D8Cd8AX_iM4W1&_nc_ht=scontent.fhan2-4.fna&oh=0f38680baa16ee29bf6b7004bfe80bdc&oe=5F87E7350',
      'https://scontent.fhan2-1.fna.fbcdn.net/v/t1.0-9/105752566_2761831184048597_8898591049803522363_o.jpg?_nc_cat=101&_nc_sid=09cbfe&_nc_ohc=UBKvHAa-IwAAX_ODnlB&_nc_ht=scontent.fhan2-1.fna&oh=d2f4950ced15de2f2fc0f44e8bb37692&oe=5F86F2EE'
    ]
  }

  render() {
    const { current, girl_imgs } = this.state;
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
            isWarning={null}
          />
          <CustomBottom
            img={require('./assets/ic_action/ic_LikedYou.png')}
            label='Like You'
            action={this._navToLikeYou}
            isWarning={false}
          />
          <CustomBottom
            img={require('./assets/ic_action/ic_Matches.png')}
            label='Match'
            action={this._navToMatch}
            isWarning={false}
          />

        </View>
        <View style={styles.profile}>
          <View>
            <Image style={styles.mainImage}
              source={require('./assets/image/profile.jpg')}
              resizeMode='cover' />
          </View>
          <View style={styles.IC_ON_PROFILE}>
            <TouchableOpacity
              onPress={() => {
                let tmpCurrent = current;
                if (tmpCurrent < girl_imgs.length - 1) {
                  tmpCurrent++;
                } else {
                  tmpCurrent = 0;
                }

                this.setState({
                  current: tmpCurrent
                })
              }}
            >
              <Image source={require('./assets/ic_image/icon_close.png')}
                style={{ marginRight: 10 }} />

              <Image source={require('./assets/ic_image/icon_heart-line.png')}
                style={{ marginRight: 3 }} />
            </TouchableOpacity>
          </View>
          <View style={{ margin: 20 }}>
            <Text style={{ fontWeight: 'bold', fontSize: 25 }}>Hoàng Thị Thuỳ Dương</Text>
            <Text style={{ fontSize: 15 }}>From Hanoi,Vietnam</Text>
          </View>
        </View>
        <Text style={styles.suggestedStoriesText}>Suggested Stories</Text>
        <View style={styles.storiesContainer}>
          {this._addStory(require('./assets/image/icon_plus.png'))}
          {this._stories(require('./assets/image/IM1.jpg'))}
          {this._stories(require('./assets/image/IM2.jpg'))}
          {this._stories(require('./assets/image/IM3.jpg'))}
          {this._stories(require('./assets/image/IM4.jpg'))}
        </View>
        <View style={styles.name}>
          {this._name('Add Story')}
          {this._name('Katie')}
          {this._name('Cholie')}
          {this._name('Mie')}
          {this._name('Xuka')}
        </View>
        <View style={styles.taskBarBlock}>
          {this._taskBarButtons(require('./assets/ic_menu/ic_home.png'))}
          {this._taskBarButtons(require('./assets/ic_menu/ic_watch.png'))}
          {this._taskBarButtons(require('./assets/ic_menu/ic_group.png'))}
          {this._taskBarButtons(require('./assets/ic_menu/ic_like.png'))}
          {this._taskBarButtons(require('./assets/ic_menu/ic_noti.png'))}
          {this._taskBarButtons(require('./assets/ic_menu/ic_menu.png'))}
        </View>
      </SafeAreaView>

    );
  };

  _navToProfile = () => {
    alert('Profile');
    this.setState({
      isWarning: false,
    })
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

export default App;

