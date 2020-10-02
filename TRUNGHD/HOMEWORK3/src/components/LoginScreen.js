import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Image,
  TextInput,
} from 'react-native';
import NavigationUtil from '../navigation/NavigationUtil';
import {SCREEN_ROUTER} from '../utils/constant';

export default class LoginScreen extends Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //     };
  //   }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.v_logo}>
          <Image
            style={styles.img_logo}
            source={require('../assets/images/ImgLoginScreen/img_logo.png')}
          />
        </View>

        <View>
          <View style={styles.v_subinput}>
            <TextInput
              style={styles.t_input}
              placeholder="Số điện thoại"
              keyboardType="number-pad"
              autoFocus={true}
            />
            <View style={styles.v_lineinput} />
            <TextInput style={styles.t_input} placeholder="Mật khẩu" />
          </View>
          <TouchableOpacity
            onPress={() => {
              alert('Forgot password!!!');
            }}>
            <Text style={styles.t_quenmatkhau}>Quên mật khẩu?</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.v_buttonDangnhap}
          onPress={() => {
            NavigationUtil.navigate(SCREEN_ROUTER.HOME_SCREEN);
          }}>
          <View style={styles.v_textdangnhap}>
            <Text style={styles.t_dangnhap}>Đăng nhập</Text>
          </View>

          <Image
            style={styles.v_icdangnhap}
            source={require('../assets/images/ImgLoginScreen/ic_dangnhap.png')}
          />
        </TouchableOpacity>
        <View style={styles.v_dangki}>
          <Text style={styles.t_chuacotaikhoan}>Bạn chưa có tài khoản? </Text>
          <TouchableOpacity
            onPress={() => {
              alert('? "Đăng ký" or "Đăng kí" ?');
            }}>
            <Text style={styles.t_dangki}>Đăng ký</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F6F8',
    alignItems: 'center',
  },

  v_logo: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 104,
  },
  img_logo: {
    height: 126,
    width: 313,
  },
  v_blockinput: {
    justifyContent: 'center',
    alignItems: 'center',

    backgroundColor: 'blue',
  },
  v_subinput: {
    marginTop: 68,
    backgroundColor: '#FFFFFF',
    width: 325,
    height: 118,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  t_input: {
    flex: 1,
    padding: 10,
    fontSize: 14,
  },
  t_quenmatkhau: {
    textDecorationLine: 'underline',
    alignSelf: 'flex-end',
    marginTop: 9,
  },
  v_lineinput: {
    borderWidth: 1,
    borderColor: '#F5F6F8',
  },

  v_buttonDangnhap: {
    width: 330,
    height: 46,
    backgroundColor: '#8D8D8D',
    borderRadius: 23,
    marginTop: 93,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  v_textdangnhap: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  t_dangnhap: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'white',
  },
  v_icdangnhap: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  v_dangki: {
    flexDirection: 'row',
    marginTop: 12,
  },
  t_chuacotaikhoan: {
    fontSize: 12,
    color: '#515C6F',
  },
  t_dangki: {
    fontSize: 12,
    color: '#FF3030',
  },
});
