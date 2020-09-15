// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow strict-local
//  */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
  Alert
} from 'react-native';

import img from './assest/imgJs.js'

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.v_dating}>
          <Text style={styles.dating}> Dating </Text>
        </View>
        <View style={styles.v_setting}>
          <Image
            style={styles.img_setting}
            resizeMode="cover"
            source={require('./assest/settings.png')} />
        </View>
      </View>

      <View style={styles.v_action_bl}>
        {_funcBlock(
          require('./assest/ic_user.png'),
          'User',
          _navToProfile,
          true)}
        {_funcBlock(
          require('./assest/ic_heart.png'),
          'like You',
          _navToLikeYou)}
        {_funcBlock(
          require('./assest/ic_message.png'),
          'Match',
          _navToMatch)}
      </View>

      <View style={styles.v_body}>
        <View style={styles.body}>
          <Image
            style={styles.body_img}
            resizeMode="cover"
            source={require('./assest/img_anh.jpg')}
          />
          <View style={styles.body_title}>
            <Text style={styles.body_title1}> DAT NGUYEN </Text>
            <Text style={styles.body_title2}> from Ha Noi, Vietnam </Text>
          </View>
        </View>
      </View>

      <View style={styles.title_story}>
        <Text style={styles.name_Story}> Suggested Stories </Text>
      </View>

      <ScrollView
        horizontal={true}
        style={styles.v_listStory}>
        {_funStory(require('./assest/img_gai1.png'), 'Add Story')}
        {_funStory(require('./assest/img_gai1.png'), 'Trang')}
        {_funStory(require('./assest/img_gai1.png'), 'Linh')}
        {_funStory(require('./assest/img_gai1.png'), 'Ngọc')}
        {_funStory(require('./assest/img_gai1.png'), 'Hạnh')}
        {_funStory(require('./assest/img_gai1.png'), 'gai')}
        {_funStory(require('./assest/img_gai1.png'), 'gai')}
        {_funStory(require('./assest/img_gai1.png'), 'gai')}
        {_funStory(require('./assest/img_gai1.png'), 'gai')}
        {_funStory(require('./assest/img_gai1.png'), 'gai')}
        {_funStory(require('./assest/img_gai1.png'), 'gai')}
        {_funStory(require('./assest/img_gai1.png'), 'gai')}
        {_funStory(require('./assest/img_gai1.png'), 'gai')}
      </ScrollView>

      <View style={styles.v_bottom}>
        {_navTab(require('./assest/ic_home.png'))}
        {_navTab(require('./assest/ic_tv.png'))}
        {_navTab(require('./assest/ic_person.png'))}
        {_navTab(require('./assest/ic_heart4.png'))}
        {_navTab(require('./assest/ic_bell.png'))}
        {_navTab(require('./assest/ic_menu.png'))}
      </View>
    </SafeAreaView>
  );
};

_navToProfile = () => {
  Alert.alert('hello')
};

_navToLikeYou = () => {
  alert('Like You');
};

_navToMatch = () => {
  alert('Match');
};

_funcBlock = (img, title, action, isbell = false) => {
  return (
    <TouchableOpacity
      onPress={() => {
        action();
      }}>
      <View style={styles.action_block}>
        <Image
          style={styles.img_action}
          source={img} />
        <Text style={styles.title_action}>{title} </Text>
        {isbell ? <View style={styles.is_bell}><Text>!</Text></View> : null}
      </View>
    </TouchableOpacity>
  );
}

_funStory = (img, label) => {
  return (
    <TouchableOpacity
      onPress={() => {
      }}>
      <View style={styles.v_action_storys}>
        <View style={styles.action_storys}>
          <Image
            style={styles.story_img}
            source={img} />
        </View>
        <Text style={styles.story_title}> {label} </Text>
      </View>
    </TouchableOpacity>
  );
}

_navTab = (img) => {
  return (
    <TouchableOpacity >
      <View style={styles.action_tab} >
        <Image
          source={img}
          style={styles.tab_img} />
      </View>
    </TouchableOpacity>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
    flex: 0.5,
    flexDirection: 'row',
    //backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 10,
  },

  v_dating: {
    flex: 1,
  },

  dating: {
    fontSize: 30,
    fontWeight: 'bold'
  },

  v_setting: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: '#C0C0C0',
    opacity: 0.9,
  },

  img_setting: {
    width: 26,
    height: 26
  },

  v_action_bl: {
    flex: 0.6,
    // backgroundColor: 'red',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  action_block: {
    width: 110,
    height: 30,
    marginLeft: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderRadius: 30,
    backgroundColor: '#C0C0C0',
    opacity: 0.8,
    //backgroundColor: 'pink',
  },

  img_action: {
    width: 20,
    height: 20,
  },

  title_action: {
    fontSize: 17,
    fontWeight: 'bold',
    marginLeft: 5
  },

  is_bell: {
    position: 'absolute',
    backgroundColor: 'red',
    width: 20,
    height: 20,
    right: -5,
    top: -8,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },

  v_body: {
    flex: 5.5,
    backgroundColor: 'white',
    marginHorizontal: 15,
    marginVertical: 10,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 1,
    shadowRadius: 6,
    elevation: 1,

  },
  body: {
    flex: 1,
    marginVertical: 25,

  },

  body_img: {
    width: '100%',
    height: '88%',
  },

  body_title: {
    width: '100%',
    height: '15%',
    marginHorizontal: 20,
    justifyContent: 'center',
  },

  body_title1: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  body_title2: {
  },

  title_story: {
    flex: 0.4,
    marginTop: 10,
    backgroundColor: 'white',
    marginHorizontal: 10,
  },

  name_Story: {
    fontSize: 20,
    fontWeight: 'bold'
  },

  v_listStory: {
    flex: 1.3,
    marginHorizontal: 10,
    // backgroundColor: 'green',
  },

  v_action_storys: {
    marginTop: 2,
    width: 84,
    height: 84,
    flexDirection: 'column',
    // backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },

  action_storys: {
    width: '80%',
    height: '80%',
    backgroundColor: 'blue',
    // marginVertical: 10
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center'
  },

  story_img: {
    width: '94%',
    height: '94%',
    borderRadius: 40,
    borderWidth: 2,
    borderColor: '#fff',
  },

  story_title: {
    fontSize: 17,
  },

  v_bottom: {
    flex: 0.8,
    flexDirection: 'row',
    backgroundColor: 'white',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },

  action_tab: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'red'
  },

  tab_img: {
    width: 25,
    height: 25,
  }

});

// export default App;
// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow strict-local
//  */

// import React from 'react';
// import {
//   SafeAreaView,
//   StyleSheet,
//   ScrollView,
//   View,
//   Text,
//   StatusBar,
//   Image,
//   TouchableOpacity,
//   Dimensions
// } from 'react-native';

// const App = () => {
//   return (
//     <SafeAreaView style={styles.container}>
//       <View style={styles.header_block}>
//         <Text style={styles.text_header}>Dating</Text>
//         <View style={styles.v_setting}>
//           <Image
//             source={require('./assets/images/settings.png')}
//             style={styles.img_setting} />
//         </View>
//       </View>
//       <View style={styles.v_action_block}>
//         {_funcBlock(
//           require('./assets/images/user.png'),
//           'Proflie',
//           _navToProfile,
//           true,
//         )}
//         {_funcBlock(
//           require('./assets/images/heart.png'),
//           'Liked you',
//           _navToLikeYou
//         )}
//         {_funcBlock(
//           require('./assets/images/message.png'),
//           'Matches',
//           _navToProfile,

//         )}
//       </View>
//       <View style={styles.v_image}>
//         <Image
//           resizeMode='cover'
//           source={require('./assets/images/girl.jpg')}
//           style={styles.img_avatar}
//         ></Image>
//         <View style={styles.v_2circle}>
//           {_funcCircle(
//             require('./assets/images/circle_heart.png')
//           )}
//           {_funcCircle(
//             require('./assets/images/delete.png')
//           )}
//         </View>
//         <Text style={styles.txt_name}>Quá»³nh, 20</Text>
//         <Text style={styles.txt_address}>From HaNoi, Vietnam</Text>
//       </View>
//       <View style={styles.line} />
//       <Text style={styles.txt_sugs}>Suggested Stories</Text>
//       <View
//         style={styles.v_container}>
//         <ScrollView
//           horizontal={true}
//           showsHorizontalScrollIndicator={false}>
//           {_funcStory(
//             require('./assets/images/stories.png'),
//             "Add Story"

//           )}
//           {_funcStory(
//             require('./assets/images/girl.jpg'),
//             "Quá»³nh"

//           )}
//           {_funcStory(
//             require('./assets/images/girl.jpg'),
//             "Quá»³nh"

//           )}
//           {_funcStory(
//             require('./assets/images/girl.jpg'),
//             "Quá»³nh"

//           )}
//           {_funcStory(
//             require('./assets/images/girl.jpg'),
//             "Quá»³nh"

//           )}
//           {_funcStory(
//             require('./assets/images/girl.jpg'),
//             "Quá»³nh"

//           )}
//           {_funcStory(
//             require('./assets/images/girl.jpg'),
//             "Quá»³nh"

//           )}
//           {_funcStory(
//             require('./assets/images/girl.jpg'),
//             "Quá»³nh"

//           )}
//         </ScrollView>
//       </View>
//       <View style={styles.line} />
//       <View style={styles.line2} />
//       <View style={{ flexDirection: 'row', marginLeft: 20 }}>
//         {_funTab(
//           require('./assets/images/home.png')
//         )}
//         {_funTab(
//           require('./assets/images/video.png')
//         )}
//         {_funTab(
//           require('./assets/images/people.png')
//         )}
//         {_funTab(
//           require('./assets/images/black_heart.png')
//         )}
//         {_funTab(
//           require('./assets/images/bell.png')
//         )}
//         {_funTab(
//           require('./assets/images/menu.png')
//         )}

//       </View>
//     </SafeAreaView >
//   )
// }
// _funTab = (img) => {
//   return (
//     <Image
//       resizeMode='contain'
//       style={{ width: 25, height: 25, marginTop: 10, marginRight: 45 }}
//       source={img}>

//     </Image>
//   )
// }
// _funcStory = (img, label) => {
//   return (
//     <TouchableOpacity>
//       <View style={styles.v_story}>
//         <View style={styles.v_story2
//         }>
//           <Image

//             source={img}
//             style={styles.img_story}>
//           </Image>
//         </View>
//         <Text style={styles.txt_story}>{label}</Text>
//       </View>
//     </TouchableOpacity>
//   )
// };
// _navToProfile = () => {
//   alert('Profile');
// };

// _navToLikeYou = () => {
//   alert('Like You');
// };

// _navToMatch = () => {
//   alert('Match');
// };
// _funcBlock = (img, label, action, isWarning = false) => {
//   return (
//     <TouchableOpacity
//       onPress={() => {
//         action();
//       }}>
//       <View style={styles.action_block}>
//         <Image
//           resizeMode='contain'
//           source={img}
//           style={styles.img_user} />
//         < Text style={styles.profile}>{label}</Text>
//         {isWarning ? <View style={styles.warning}></View> : null}
//       </View>
//     </TouchableOpacity>
//   )
// }
// _funcCircle = (img) => {
//   return (
//     <Image
//       resizeMode='cover'
//       source={img}
//       style={styles.img_circle} />
//   )
// }
// const { height, width } = Dimensions.get('window');
// const imgWidth = width - 30;
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'white'
//   },
//   header_block: {
//     flexDirection: 'row',
//     marginHorizontal: 20,
//     alignItems: 'center'
//   },
//   text_header: {
//     flex: 1,
//     fontSize: 28,
//     fontWeight: '600'
//   },
//   v_setting: {
//     height: 30,
//     width: 30,
//     borderRadius: 30 / 2,
//     backgroundColor: '#e4e5ea',
//     justifyContent: 'center',
//     alignItems: 'center'
//   },
//   img_setting: {
//     width: 24, height: 24
//   },
//   v_action_block: {
//     flexDirection: 'row',
//     marginTop: 20,
//     marginLeft: 8
//   },
//   action_block: {
//     alignItems: 'center',
//     flexDirection: 'row',
//     backgroundColor: '#e4e5ea',
//     borderRadius: 20,
//     marginLeft: 8,
//     padding: 8
//   },
//   img_user: {
//     width: 17,
//     height: 17,
//     marginHorizontal: 7,
//   },
//   profile: {
//     fontSize: 15,
//     fontWeight: '600',
//     marginRight: 7
//   },
//   v_image: {
//     marginLeft: 15,
//     marginRight: 15,
//     marginTop: 17,
//     backgroundColor: 'white',
//     shadowColor: "#000",
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//     elevation: 15,
//     borderRadius: 10,
//     paddingVertical: 25,
//   },
//   img_avatar: {
//     height: imgWidth + 10,
//     width: imgWidth
//   },
//   v_2circle: {
//     marginTop: -65,
//     flexDirection:
//       'row',
//     zIndex: 2,
//     justifyContent: 'flex-end',
//     shadowColor: "#000",
//     shadowOffset: {
//       width: 0,
//       height: 7,
//     },
//     shadowOpacity: 0.41,
//     shadowRadius: 9.11,
//     marginRight: 5,
//     elevation: 14,
//   },
//   img_circle: {
//     width: 60,
//     height: 60,
//     marginTop: 20,
//     marginRight: 10,
//   },
//   txt_name: {
//     fontSize: 25,
//     fontWeight: '500',
//     marginLeft: 15
//   },
//   txt_address: {
//     fontSize: 16,
//     marginTop: 3,
//     fontWeight: '500',
//     marginLeft: 15,
//     color: 'grey'
//   },
//   line: {
//     marginTop: 15,
//     height: 1,
//     backgroundColor: '#e4e5ea',
//     marginHorizontal: 15
//   },
//   line2: {
//     marginTop: 7,
//     height: 0.5,
//     backgroundColor: '#e4e5ea',

//   },
//   txt_sugs: {
//     fontSize: 20,
//     fontWeight: '600',
//     marginLeft: 15,
//     marginTop: 10
//   },
//   v_container: {
//     flexDirection: 'row',
//     marginTop: 10,
//     marginLeft: 10
//   },
//   v_story: {
//     flexDirection: 'column',
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginRight: 15
//   },
//   v_story2: {
//     width: 65,
//     height: 65,

//     borderRadius: 65 / 2,
//     borderColor: 'purple',
//     borderWidth: 2,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   img_story: {
//     width: 55,
//     height: 55,
//     borderRadius: 55 / 2,
//   },
//   txt_story: {
//     marginTop: 3,
//     fontSize: 13
//   },
//   warning: {
//     position: 'absolute',
//     backgroundColor: 'red',
//     width: 20,
//     height: 20,
//     right: -5,
//     top: -8,
//     borderRadius: 10,
//   }
// })
export default App;