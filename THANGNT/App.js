/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  View,
  SafeAreaView,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import img from './assets/imagesAsset';
import CustomButton from './src/components/CustomButton'
import HomeScreen from './src/screens/HomeScreen.js'
import HomeHookScreen from './src/screens/HomeHookScreen'
import data from './mockData.json'

// https://gamek.mediacdn.vn/thumb_w/690/2019/7/8/1-15625474669018688730.jpg



class App extends Component {

  state = {
    isWarning: true,
    current: 0,
    single: true,
    girl_imgs: [
      {
        img_url: 'https://vanhienblog.info/wp-content/uploads/2019/02/anh-gai-xinh-dep-hot-girl-3.jpg',
        name: 'Khả Ngân'
      },
      {
        img_url: 'https://gamek.mediacdn.vn/thumb_w/690/2019/7/8/1-15625474669018688730.jpg',
        name: 'Khả Ngân'
      }, {
        img_url: 'https://vanhienblog.info/wp-content/uploads/2019/02/anh-gai-xinh-dep-hot-girl-3.jpg',
        name: 'Khả Ngân'
      },
      {
        img_url: 'https://thegioicacuocbongda.com/wp-content/uploads/2019/07/ngam-dan-gai-xinh-rmit-nong-bong-mat-9.jpg',
        name: 'Khả Ngân'
      },
      {
        img_url: 'https://media.doisongphapluat.com/684/2020/7/21/gai-xinh-tha-thinh-bang-nu-hon-ngot-ngao-nhieu-nam-sinh-hi-hung-cho-doi-va-cai-ket-cuoi-ra-nuoc-mat-dspl-1.jpg',
        name: 'Khả Ngân'
      }
    ]
  }

  render() {
    const { current, girl_imgs, isWarning } = this.state
    return (
      <HomeScreen />
      // <SafeAreaView style={styles.container}>
      //   <View style={styles.header_block}>
      //     <Text style={styles.dating}>Dating</Text>
      //     <View style={styles.v_setting}>
      //       <Image style={styles.img_setting} source={img.ic_user} />
      //     </View>
      //   </View>
      //   <View style={styles.v_action_block}>
      //       <CustomButton
      //          img = {img.ic_user}
      //          label = 'Profile'
      //          action ={this._navToProfile}
      //          isWarning = {isWarning}
      //        />
      //        <CustomButton
      //        img = {img.ic_user}
      //        label = 'Like you'
      //        action ={_navToLikeYou}
      //        isWarning = {false}
      //      />
      //      <CustomButton
      //      img = {img.ic_user}
      //      label = 'Match'
      //      action ={_navToMatch}
      //      isWarning = {false}
      //    />
      //   </View>
      //   <Image
      //     style={styles.avatar}
      //     source={{uri:girl_imgs[current].img_url}}
      //   />


      //   <Text style={{
      //     fontSize: 30
      //   }}>
      //   {girl_imgs[current].name}
      //   </Text>
      //   <TouchableOpacity
      //     onPress={() => {
      //       let tmpCurrent = current
      //       if (tmpCurrent < girl_imgs.length - 1){
      //           tmpCurrent ++;
      //       }else{
      //         tmpCurrent = 0;
      //       }
      //       this.setState({
      //         current : tmpCurrent
      //       })
      //     }}
      //   >
      //     <Text>Next</Text>
      //   </TouchableOpacity>


      //   <TouchableOpacity
      //   onPress={() => {
      //      let tmpGirlUrl = girl_imgs
      //      tmpGirlUrl[current].name = "Thắng"
      //      this.setState({
      //        ...this.state,
      //       girl_imgs : tmpGirlUrl
      //     })

      //   }}
      // >
      //   <Text>Sửa tên</Text>
      // </TouchableOpacity>


      //   </SafeAreaView>
    );
  }

  _navToProfile = () => {
    alert('Profile');
    this.setState({
      isWarning: false
    })
  };

};

// {_funcBlock(img.ic_user, 'Profile', _navToProfile, true)}
// {_funcBlock(img.ic_user, 'Like you', _navToLikeYou)}
// {_funcBlock(img.ic_user, 'Match', _navToMatch)}



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
  avatar: {
    width: '100%',
    aspectRatio: 1
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
