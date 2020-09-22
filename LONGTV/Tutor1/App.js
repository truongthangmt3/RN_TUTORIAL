/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Image,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import CustomButton from './src/component/CustomButton.js';
import HomeScreen from './src/screens/HomeScreen.js';
class App extends Component {

  render() {
    // const { current, girl_imgs, isWarning } = this.state
    return (
      <HomeScreen />
      // <SafeAreaView style={styles.container}>
      //   <View style={styles.title}>
      //     <Text style={styles.dating}>Dating</Text>
      //     <View style={styles.title_boder} >
      //       <Image
      //         style={styles.img_setting}
      //         source={require('./assets/ic_setting.png')}
      //       />
      //     </View>
      //   </View>
      //   <View style={styles.hearder}>
      //     <CustomButton
      //       img={require('./assets/ic_user.png')}
      //       label='Pofile'
      //       isWarning={true}
      //       action={_navToProfile}
      //     />
      //     <CustomButton
      //       img={require('./assets/ic_heart.png')}
      //       label='Like you'
      //       action={_navToLikeYou}
      //     />
      //     <CustomButton
      //       img={require('./assets/ic_message.png')}
      //       label='Matching'
      //       action={_navToMatch}
      //     />
      //   </View>
      //   {/* {_funcBlock_notification(require('./assets/ic_user.png'), 'Pofile', _navToProfile)}
      //   {_funcBlock(require('./assets/ic_heart.png'), 'Like you', _navToLikeYou)}
      //   {_funcBlock(require('./assets/ic_message.png'), 'Matching', _navToMatch)} */}
      //   <View style={styles.body}>
      //     <Image
      //       style={styles.img_gai}
      //       source={{ uri: girl_imgs }}
      //     />

      //     <View style={styles.text_allbody}>
      //       <Text style={styles.text_body2}>Phương ,22</Text>
      //       <Text style={styles.text_body3}>From Hà Nội, Việt Nam</Text>
      //     </View>
      //     <View style={styles.icon}>
      //       <View style={styles.icon_dis} >
      //         <Image
      //           style={styles.img_dis}
      //           source={require('./assets/ic_dis.png')}
      //         />
      //       </View>
      //       <View style={styles.icon_like} >

      //         <TouchableOpacity
      //           onPress={() => {
      //             <Image
      //               source={{ uri: 'https://i.pinimg.com/564x/bf/c0/8c/bfc08cb0db5e48c2130e2a1aad7538f1.jpg' }}

      //             />

      //             // let nextCurrent = current
      //             // if (nextCurrent < girl_imgs.length - 1) {
      //             //   nextCurrent++;
      //             // } else {
      //             //   nextCurrent = 0;
      //             // }
      //             // this.setState({
      //             //   current: nextCurrent
      //             // })
      //           }}>
      //           <Image
      //             style={styles.img_like}
      //             source={require('./assets/ic_like.png')}
      //           />
      //         </TouchableOpacity>

      //       </View>
      //     </View>
      //   </View>

      //   <View >

      //     <View style={styles.boder_radius}>
      //       <Text style={styles.body_tow}> Suggeste Storiess</Text>
      //       <ScrollView horizontal={true}>

      //         {_funcbody_2(require('./assets/ic_add.png'), 'Add Story')}
      //         {_funcbody(require('./assets/img_gai.jpg'), 'Linh',)}
      //         {_funcbody(require('./assets/img_gai2.jpg'), 'Hoa',)}
      //         {_funcbody(require('./assets/img_gai3.jpg'), 'Phương',)}
      //         {_funcbody(require('./assets/img_gai4.jpg'), 'Đạt',)}
      //         {_funcbody(require('./assets/img_gai5.jpeg'), 'Thảo',)}
      //         {_funcbody(require('./assets/img_gai.jpg'), 'Hương',)}
      //       </ScrollView>
      //     </View>
      //     <View style={styles.footer}>
      //       {_funcfooter(require('./assets/ic_home.png'), _buttonfooter)}
      //       {_funcfooter(require('./assets/ic_video.png'), _buttonfooter)}
      //       {_funcfooter(require('./assets/ic_friend.png'), _buttonfooter)}
      //       {_funcfooter(require('./assets/ic_heart.png'), _buttonfooter)}
      //       {_funcfooter(require('./assets/ic_bell.png'), _buttonfooter)}
      //       {_funcfooter(require('./assets/ic_humberger.png'), _buttonfooter)}

      //     </View>
      //   </View>
      // </SafeAreaView >
    );
  }
};
// _funcBlock = (img, label, action) => {
//   return (
//     <TouchableOpacity
//       onPress={() => {
//         action();
//       }}>
//       <View style={styles.action_block}>
//         <Image style={styles.img_header} source={img} />
//         <Text style={styles.text_hearder}>{label}</Text>
//         {/* {isWarning ? <View style={styles.warning}></View> : null} */}
//       </View>

//     </TouchableOpacity>
//   );
// };
// _funcBlock_notification = (img, label, action, isWarning = true) => {
//   return (
//     <TouchableOpacity
//       onPress={() => {
//         action();
//       }}>
//       <View style={styles.action_block}>
//         <Image style={styles.img_header} source={img} />
//         <Text style={styles.text_hearder}>{label}</Text>
//         {isWarning ? <View style={styles.warning}>
//           <Text style={styles.notification}>!</Text>
//         </View> : null}
//       </View>

//     </TouchableOpacity>
//   );
// };
// _funcbody = (img, label,) => {
//   return (
//     <TouchableOpacity
//       onPress={() => {
//         action();
//       }}>
//       <View style={styles.scrollView_boder}>

//         <View style={styles.scrollView_boder2} >
//           <View style={styles.scrollView_boder3}>
//             <Image style={styles.scrollView_img} source={img} />
//           </View>
//         </View>
//         {/* <View style={styles.scrollView_boder2} >
//           <Image style={styles.scrollView_img} source={img} />
//         </View> */}
//         <Text style={styles.text_scrollView}>{label}</Text>
//       </View>
//     </TouchableOpacity>
//   );
// };
// _funcbody_2 = (img, label,) => {
//   return (
//     <TouchableOpacity
//       onPress={() => {
//         action();
//       }}>
//       <View style={styles.scrollView_boder}>
//         <View style={styles.scrollView_boder2} >
//           <View style={styles.scrollView_boder3}>
//             <View style={styles.add_img}>
//               <Image style={styles.scrollView_img_2} source={img} />
//             </View>
//           </View>

//         </View>
//         <Text style={styles.text_scrollView}>{label}</Text>
//       </View>
//     </TouchableOpacity>
//   );
// };
// _funcfooter = (img) => {
//   return (
//     <TouchableOpacity
//       onPress={() => {
//         action();
//       }}>
//       <View >
//         <Image style={styles.img_footer} source={img} />
//       </View>
//     </TouchableOpacity>
//   );
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

// _buttonfooter = () => {
//   alert('ok');
// };

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: 'white',

  // },
  // title: {
  //   backgroundColor: 'white',
  //   flexDirection: 'row',
  //   marginHorizontal: 20,

  // },
  // dating: {
  //   flex: 1,
  //   fontSize: 25,
  //   fontWeight: 'bold',
  // },
  // title_boder: {
  //   height: 30,
  //   width: 30,
  //   backgroundColor: '#e4e5ea',
  //   borderRadius: 15,
  //   alignItems: 'center',
  //   justifyContent: 'center',

  // },
  // img_setting: {
  //   height: 20,
  //   width: 20,

  // },
  // img_header: {
  //   height: 18,
  //   width: 18,
  //   marginLeft: 3,
  // },
  // hearder: {
  //   margin: 5,
  //   marginTop: 10,
  //   flexDirection: 'row',
  //   justifyContent: 'flex-start',

  // },
  // text_hearder: {
  //   marginLeft: 5,
  //   fontWeight: 'bold',
  //   fontSize: 15,
  // },
  // action_block: {
  //   marginLeft: 10,
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   backgroundColor: '#e4e5ea',
  //   borderRadius: 20,
  //   padding: 5,
  // },
  // warning: {
  //   // position: 'absolute',
  //   backgroundColor: 'red',
  //   width: 18,
  //   height: 18,
  //   right: -11,
  //   top: -11,
  //   borderRadius: 9,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  // notification: {
  //   color: 'white',
  //   fontSize: 12,
  // },
  // body: {
  //   marginHorizontal: 10,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   flex: 1,
  //   marginTop: 15,
  //   marginBottom: 15,
  //   borderRadius: 15,
  //   backgroundColor: '#ffffff',
  //   shadowColor: '#000',
  //   shadowOffset: {
  //     width: 1,
  //     height: 5,
  //   },
  //   shadowOpacity: 0.5,
  //   shadowRadius: 3.84,
  //   elevation: 5,
  // },
  // img_gai: {
  //   resizeMode: 'cover',
  //   width: 393,
  //   height: 350,
  // },


  // icon: {
  //   flexDirection: 'row',
  //   position: 'absolute',
  //   left: 230,
  //   top: 345,
  //   height: 70,
  //   width: 160,
  // },
  // icon_like: {
  //   height: 65,
  //   width: 65,
  //   marginLeft: 10,
  //   backgroundColor: '#A901DB',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   borderRadius: 32.5,
  //   backgroundColor: '#AC58FA',
  //   shadowColor: '#000',
  //   shadowOffset: {
  //     width: 1,
  //     height: 5,
  //   },
  //   shadowOpacity: 0.3,
  //   shadowRadius: 3.84,
  //   elevation: 5,
  // },
  // icon_dis: {
  //   height: 65,
  //   width: 65,
  //   backgroundColor: 'white',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   borderRadius: 32.5,
  //   backgroundColor: '#ffffff',
  //   shadowColor: '#000',
  //   shadowOffset: {
  //     width: 1,
  //     height: 5,
  //   },
  //   shadowOpacity: 0.3,
  //   shadowRadius: 3.84,
  //   elevation: 5,
  // },
  // img_like: {
  //   height: 30,
  //   width: 30,
  // },
  // img_dis: {
  //   height: 30,
  //   width: 30,
  // },
  // text_allbody: {
  //   marginTop: 17,
  // },
  // text_body2: {
  //   marginTop: 10,
  //   fontSize: 22,
  //   fontWeight: 'bold',
  //   marginRight: 210,
  // },

  // text_body3: {
  //   marginRight: 210,
  //   marginTop: 5,
  //   fontSize: 15,
  // },
  // body_tow: {
  //   marginLeft: 5,
  //   fontSize: 23,
  //   fontWeight: 'bold',
  // },
  // scrollView_boder: {
  //   marginTop: 5,
  //   backgroundColor: 'white',
  //   height: 100,
  //   width: 100,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  // scrollView_boder3: {
  //   backgroundColor: 'white',
  //   height: 65,
  //   width: 65,
  //   borderRadius: 35,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  // scrollView_boder2: {
  //   backgroundColor: '#A901DB',
  //   height: 70,
  //   width: 70,
  //   borderRadius: 35,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  // scrollView_img: {
  //   height: 60,
  //   width: 60,
  //   borderRadius: 30,
  //   resizeMode: 'cover',
  // },
  // scrollView_img_2: {
  //   height: 25,
  //   width: 25,
  //   borderRadius: 30,
  //   resizeMode: 'cover',
  // },
  // add_img: {
  //   height: 60,
  //   width: 60,
  //   borderRadius: 30,
  //   backgroundColor: '#BDBDBD',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  // text_scrollView: {
  //   marginTop: 5,
  //   // fontWeight: 'bold',
  // },
  // boder_radius: {
  //   marginHorizontal: 5,
  //   height: 150,
  //   width: 500,
  //   backgroundColor: '#ffffff',
  //   shadowColor: '#000',
  //   shadowOffset: {
  //     width: 1,
  //     height: 5,
  //   },
  //   shadowOpacity: 0.1,
  //   shadowRadius: 2.84,
  //   elevation: 5,

  // },
  // footer: {
  //   marginHorizontal: 10,
  //   height: 60,
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   justifyContent: 'space-between',
  // },
  // img_footer: {
  //   marginHorizontal: 5,
  //   height: 30,
  //   width: 30,
  // },
});

export default App;
