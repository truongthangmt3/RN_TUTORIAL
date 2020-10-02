import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

class CustomBottomTab extends Component {
  render() {
    return (
      <View style={styles.v_bottomtab}>
        <CustomOneTab
          imgtab={require('../../assets/images/ImgUserScreen/ic_home.png')}
          labebtab="Trang chủ"
        />
        <CustomOneTab
          imgtab={require('../../assets/images/ImgUserScreen/ic_awesome_users.png')}
          labebtab="KH quan tâm"
        />
        <CustomOneTab
          imgtab={require('../../assets/images/ImgUserScreen/ic_bell.png')}
          labebtab="Thông báo"
        />
        <CustomOneTab
          imgtab={require('../../assets/images/ImgUserScreen/ic_metro_use.png')}
          labebtab="Tài khoản"
          style={{color: '#69AAFF'}}
        />
      </View>
    );
  }
}

class CustomOneTab extends Component {
  render() {
    const {imgtab, labebtab} = this.props;
    return (
      <TouchableOpacity
        style={styles.v_onetab}
        onPress={() => {
          alert('DemoTab');
        }}>
        <Image style={styles.img_tab} source={imgtab} />
        <Text style={styles.t_onetab}>{labebtab}</Text>
      </TouchableOpacity>
    );
  }
}

export default CustomBottomTab;
const styles = StyleSheet.create({
  v_bottomtab: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
  },

  v_onetab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  img_tab: {
    width: 30,
    height: 25,
    resizeMode: 'contain',
    margin: 3,
  },
  t_onetab: {
    fontSize: 11,
    color: '#ABABAB',
  },
});
