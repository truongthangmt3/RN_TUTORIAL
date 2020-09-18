/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import CustomButtons from './src/components/CustomButtons';
import Stories from './src/components/Stories';
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import HomeScreen from './screens/HomeScreen';

class App extends Component {
  state = {
    current: 0,
    girl_imgs: [
      'https://scontent.fhan3-1.fna.fbcdn.net/v/t1.0-9/p720x720/103274222_1659047580909233_4920034584545917774_o.jpg?_nc_cat=109&_nc_sid=110474&_nc_ohc=O8ICHQycFt8AX-NiK3W&_nc_ht=scontent.fhan3-1.fna&tp=6&oh=b3828dbc0c3498a7452cfe3e14f02bf3&oe=5F873026',
      'https://znews-photo.zadn.vn/w660/Uploaded/ofh_btgazspf/2020_04_21/72425168_2190164277756889_5548989457421565952_o.jpg',
      'https://photo-1-baomoi.zadn.vn/w1000_r1/2019_10_27_180_32720619/80df5ec1f5811cdf4590.jpg',
      'https://ggstorage.oxii.vn/images/oxii-2019-2-26/728x436/hot-girl-waralee-ngot-hon-duong-trong-bo-anh-sun-set-anh-1_640_435_721.jpg',
      'https://icdn.dantri.com.vn/thumb_w/640/2020/07/21/nhung-hot-girl-viet-chuan-bi-buoc-vao-ky-thi-tot-nghiep-thpt-quoc-gia-nam-naydocx-1595346639604.jpeg',
    ],
  };
  render() {
    const {current, girl_imgs} = this.state;
    return (
      <HomeScreen />
      // <SafeAreaView style={styles.container}>
      //   <View style={styles.search}>
      //     <Image
      //       source={require('./assets/icon_search.png')}
      //       style={styles.searchImage}
      //     />
      //     <Text style={styles.searchText}>Search</Text>
      //   </View>
      //   <View style={styles.header}>
      //     <Text style={styles.headerText}>Dating</Text>
      //     <View style={styles.iconSetting}>
      //       <Image
      //         style={styles.imageSetting}
      //         source={require('./assets/icon_setting.png')}
      //       />
      //     </View>
      //   </View>
      //   <View style={styles.container_action_block}>
      //     <CustomButtons
      //       img={require('./assets/icon_user.png')}
      //       title="Profile"
      //       action={_navToProfile}
      //       isWarning={true}
      //     />
      //     <CustomButtons
      //       img={require('./assets/icon_heart.png')}
      //       title="Liked you"
      //       action={_navToLikedYou}
      //     />
      //     <CustomButtons
      //       img={require('./assets/icon_message.png')}
      //       title="Matches"
      //       action={_navToMatches}
      //     />
      //   </View>
      //   <View style={styles.profileContainer}>
      //     <View>
      //       <Image
      //         style={styles.mainImage}
      //         source={{uri: girl_imgs[current]}}
      //         resizeMode="cover"
      //       />
      //     </View>
      //     <View style={styles.reaction}>
      //       <TouchableOpacity
      //         onPress={() => {
      //           let tmpCurrent = current;
      //           if (tmpCurrent < girl_imgs.length - 1) {
      //             tmpCurrent++;
      //           } else {
      //             tmpCurrent = 0;
      //           }
      //           this.setState({current: tmpCurrent});
      //         }}>
      //         <Image
      //           source={require('./assets/icon_close.png')}
      //           style={{marginRight: 10}}
      //         />
      //       </TouchableOpacity>
      //       <TouchableOpacity
      //         onPress={() => {
      //           let tmpCurrent = current;
      //           if (tmpCurrent < girl_imgs.length - 1) {
      //             tmpCurrent++;
      //           } else {
      //             tmpCurrent = 0;
      //           }
      //           this.setState({current: tmpCurrent});
      //         }}>
      //         <Image source={require('./assets/icon_heart-line.png')} />
      //       </TouchableOpacity>
      //     </View>
      //     <View style={{margin: 20}}>
      //       <Text style={{fontWeight: 'bold', fontSize: 25}}>Hân,22</Text>
      //       <Text style={{fontSize: 15}}>From Hanoi,Vietnam</Text>
      //     </View>
      //   </View>
      //   <View>
      //     <View>
      //       <Text style={styles.suggestedStoriesText}>Suggested Stories</Text>
      //     </View>
      //     <View>
      //       <ScrollView
      //         horizontal={true}
      //         showsHorizontalScrollIndicator={false}
      //         style={{margin: 5}}>
      //         <Stories
      //           isAddStory={true}
      //           img={require('./assets/icon_plus.png')}
      //           name="Add Story"
      //         />
      //         <Stories img={require('./assets/elle.jpg')} name="Elle" />
      //         <Stories img={require('./assets/scarlett.jpg')} name="Scarlett" />
      //         <Stories img={require('./assets/olsen.jpg')} name="Olsen" />
      //         <Stories img={require('./assets/lisa.jpg')} name="Lisa" />
      //       </ScrollView>
      //     </View>
      //   </View>
      //   <View style={styles.taskBarContainer}>
      //     {_taskBarButtons(require('./assets/icon_home.png'))}
      //     {_taskBarButtons(require('./assets/icon_tv.png'))}
      //     {_taskBarButtons(require('./assets/icon_users.png'))}
      //     {_taskBarButtons(require('./assets/icon_heart_taskbar.png'))}
      //     {_taskBarButtons(require('./assets/icon_noti.png'))}
      //     {_taskBarButtons(require('./assets/icon_bar.png'))}
      //   </View>
      // </SafeAreaView>
    );
  }
}
_navToProfile = () => {
  alert('No profile');
};
_navToLikedYou = () => {
  alert('Nobody likes you');
};
_navToMatches = () => {
  alert('Nobody matches you');
};
_stories = (img, name, isAddStory) => {
  return (
    <View style={styles.storiesContainer}>
      {isAddStory ? (
        <View>
          <Image source={img} style={styles.addStory} />
        </View>
      ) : (
        <View style={styles.stories}>
          <Image source={img} style={styles.imageStories} />
        </View>
      )}
      <Text style={styles.nameStories}>{name}</Text>
    </View>
  );
};
_buttons = (img, title, action, isWarning) => {
  return (
    <TouchableOpacity
      onPress={() => {
        action();
      }}>
      <View style={styles.action_block}>
        <Image source={img} style={styles.imagePro} />
        <Text style={styles.textBlock}>{title}</Text>
        {isWarning ? (
          <View style={styles.isWarning}>
            <Text style={{color: 'white', fontWeight: 'bold'}}>!</Text>
          </View>
        ) : null}
      </View>
    </TouchableOpacity>
  );
};
_taskBarButtons = (img) => {
  return (
    <View style={styles.buttonsTaskBar}>
      <Image source={img} style={styles.iconButtonsTaskBar} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#FFFFFF'},
  search: {flexDirection: 'row'},
  searchImage: {height: 13, width: 13},
  searchText: {fontSize: 13, fontWeight: 'bold'},
  header: {
    flexDirection: 'row',
    marginHorizontal: 10,
    marginVertical: 3,
  },
  headerText: {flex: 1, fontSize: 28, fontWeight: 'bold'},
  iconSetting: {
    width: 36,
    height: 36,
    backgroundColor: '#E4E5EB',
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageSetting: {width: 24, height: 24},
  action_block: {
    height: 40,
    width: 110,
    marginLeft: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e4e5ea',
    borderRadius: 40,
    padding: 3,
  },
  imagePro: {width: 20, height: 20, marginHorizontal: 4},
  textBlock: {fontWeight: 'bold', padding: 5, fontSize: 16},
  container_action_block: {flexDirection: 'row', marginTop: 20},
  isWarning: {
    width: 20,
    height: 20,
    backgroundColor: 'red',
    borderRadius: 10,
    position: 'absolute',
    right: -5,
    top: -5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileContainer: {
    backgroundColor: '#FAFAFA',
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    margin: 20,
    width: 380,
    height: 480,
    borderRadius: 15,
  },
  mainImage: {width: 380, height: 360, marginTop: 30},
  reaction: {
    flexDirection: 'row',
    position: 'absolute',
    top: 360,
    left: 230,
  },
  suggestedStoriesText: {
    marginLeft: 20,
    fontWeight: 'bold',
    fontSize: 23,
  },
  stories: {
    width: 68,
    height: 68,
    borderWidth: 3,
    borderColor: '#976AFF',
    borderRadius: 34,
    marginHorizontal: 7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStories: {
    width: 56,
    height: 56,
    borderRadius: 28,
  },
  addStory: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginHorizontal: 6,
  },
  storiesContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 15,
  },
  taskBarContainer: {flex: 1, flexDirection: 'row'},
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
