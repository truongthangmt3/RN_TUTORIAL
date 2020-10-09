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
  View,
  Image,
  Text,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from 'react-native';
import CustomButton from './src/Component/CustomButton';
import imagesAsset from './assets/imagesAsset';
class App extends Component {
  state = {
    current: 0,
    girl_imgs: [
      'https://scontent.fhan3-1.fna.fbcdn.net/v/t1.0-9/79293454_178967619969727_3230712943087714304_o.jpg?_nc_cat=110&_nc_sid=85a577&_nc_ohc=QWlGa2gJybcAX8Y0OMy&_nc_ht=scontent.fhan3-1.fna&oh=16a85ba4013de21751ca5cacb78fedea&oe=5F85D2A7',
      'https://photo-1-baomoi.zadn.vn/w1000_r1/2019_10_27_180_32720619/80df5ec1f5811cdf4590.jpg',
      'https://1.bp.blogspot.com/-4TgBUPlEtnI/XK7tFFsiuSI/AAAAAAAABhQ/yws_XM0EmkMbrMQkoYnlJjZP-37_q9olQCLcBGAs/s1600/EmXinh2k__anh-girl-xinh%2B%25281%2529.jpg'
    ],
  };
  render() {
    const { current, girl_imgs } = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.block_search}>
          <Image
            source={imagesAsset.ic_search}
            style={styles.img_search}
          />
          <Text style={styles.txt_search}>Search</Text>
        </View>
        <View style={styles.block_Datting}>
          <Text style={styles.dating}>Dating</Text>
          <View style={styles.v_setting}>
            <Image
              style={styles.img_setting}
              source={imagesAsset.ic_setting}
            />
          </View>
        </View>
        <View style={styles.v_action_block}>
          <CustomButton
            img={imagesAsset.ic_user}
            label='Profile'
            action={_navToProfile}
            isWarning={true}
            img1={imagesAsset.ic_exclamation_mark}
          />
          <CustomButton
            img={imagesAsset.ic_heart}
            label='Like you'
            action={_navToLikeYou}
          />
          <CustomButton
            img={imagesAsset.ic_message}
            label='Matches'
            action={_navToMatch}
          />
        </View>
        <View style={styles.background}>
          <View style={styles.boder_background}>
            <ImageBackground
              style={styles.img_backgruond}
              source={{ uri: girl_imgs[current] }}>
              <View style={styles.img_backgroundss}>
                <Image
                  style={styles.txt_backgroundss}
                  source={imagesAsset.ic_multiply}
                />
              </View>
              <View style={styles.img_backgrounds}>
                <TouchableOpacity
                  onPress={() => {
                    let tmpCurrent = current;
                    if (tmpCurrent < girl_imgs.length - 1) {
                      tmpCurrent++;
                    } else {
                      tmpCurrent = 0;
                    }
                    this.setState({
                      current: tmpCurrent,
                    });
                  }}>
                  <Image
                    style={styles.txt_backgrounds}
                    source={imagesAsset.ic_heart_64}
                  />
                </TouchableOpacity>
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
          <ScrollView horizontal={true}>
            {_scrollView(imagesAsset.ic_plus1, 'Add Story')}
            {_scrollView(imagesAsset.img_vk, 'Quỳnh Như')}
            {_scrollView(imagesAsset.img_banthan, 'Quang Phúc')}
            {_scrollView(imagesAsset.img_anhchoi, 'My Love')}
            {_scrollView(imagesAsset.img_hinhanh, 'Mark ZucK')}
            {_scrollView(imagesAsset.ic_plus1, 'Add Story')}
            {_scrollView(imagesAsset.ic_plus1, 'Add Story')}
            {_scrollView(imagesAsset.ic_plus1, 'Add Story')}
          </ScrollView>
        </View>
        <View style={styles.boder_taskbar}>
          {_Tasbar(imagesAsset.ic_home)}
          {_Tasbar(imagesAsset.ic_tv1)}
          {_Tasbar(imagesAsset.ic_usergroups)}
          {_Tasbar(imagesAsset.ic_hear2)}
          {_Tasbar(imagesAsset.ic_bell)}
          {_Tasbar(imagesAsset.ic_menu)}
        </View>
      </SafeAreaView>
    );
  }
}

_navToProfile = () => {
  alert('Profile');
};

_navToLikeYou = () => {
  alert('Like You');
};

_navToMatch = () => {
  alert('Matches');
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
        <View style={styles.heart_imgavatar}>
          <Image style={styles.img_scrollView} source={img} />
        </View>
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
    flex: 0.09,
    flexDirection: 'row',
    backgroundColor: 'white',
    marginLeft: 8,
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
    margin: 10,
    backgroundColor: 'white'
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
    flex: 2,
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
    flex: 0.9,
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
    marginTop: 330,
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
    marginTop: 330,
    marginLeft: 240,
    alignItems: 'center',
    justifyContent: 'center',
  },
  boder_backgrounds: {
    flex: 0.1,
    backgroundColor: 'white',
  },
  boder_SSG: {
    flex: 0.1,
    backgroundColor: 'white',
  },
  txt_SSG: {
    fontSize: 17,
    color: 'black',
    fontWeight: 'bold',
    borderTopWidth: 0.5,
    marginLeft: 22,
    marginRight: 22,
  },
  boder_avatar: {
    flex: 0.3,
    backgroundColor: 'white',
    flexDirection: 'row',
    borderBottomWidth: 0.5,
    marginBottom: 5,
    marginLeft: 22,
    marginRight: 22,
  },
  heart_avatar: {
    backgroundColor: 'white',
    width: 78,
    height: '100%',
  },
  heart_imgavatar: {
    flex: 0.01,
    width: 55,
    height: 55,
    borderRadius: 40,
    position: 'absolute',
    backgroundColor: 'white',
    borderColor: 'blue',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img_scrollView: {
    flex: 0.01,
    width: 50,
    height: 50,
    borderRadius: 40,
    position: 'absolute',
    backgroundColor: 'white',
  },
  txt_scrollView: {
    fontSize: 10,
    color: 'black',
    marginTop: 55,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  boder_taskbar: {
    flex: 0.07,
    backgroundColor: 'white',
    flexDirection: 'row',
    marginBottom: 15,
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
});

export default App;
