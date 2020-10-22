import React, { Component } from 'react';
import { Text, View, TouchableOpacity, SafeAreaView, Dimensions, Image, StyleSheet } from 'react-native';
import { Avatar, Accessory } from 'react-native-elements';
import UserOptions from '@component/UserOptions';
import AsyncStorage from '@react-native-community/async-storage';
import NavigationUtil from '../navigation/NavigationUtil';
const windowWidth = Dimensions.get('window').width; //414
const windowHeight = Dimensions.get('window').height; //896
import R from '@R';
import { connect } from 'react-redux';
import { getUserInfoAction } from '@action';
import { SCREEN_ROUTER } from '@app/constants/Constant';
import Loading from '@component/Loading';
export class UserScreen extends Component {
  componentDidMount() {
    // alert(JSON.stringify(this.props.userState));
    this.props.getUserInfoAction();
  }
  render() {
    if (this.props.userState.isLoading) return <Loading />;
    return (
      <SafeAreaView style={styles.container}>
        <View style={{ flex: 1, backgroundColor: '#dddddd' }}>
          <View
            style={{
              flexDirection: 'row',
              backgroundColor: 'white',
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 1
              },
              shadowOpacity: 0.16,
              shadowRadius: 1.0,
              elevation: 1
            }}
          >
            <View
              style={{
                marginLeft: windowWidth * 0.05,
                marginTop: windowHeight * 0.02,
                marginBottom: windowHeight * 0.025
              }}
            >
              <Avatar
                size={120}
                titleStyle={{
                  fontSize: 36,
                  color: '#B8CB85',
                  fontWeight: 'bold'
                }}
                rounded
                title="VN"
                overlayContainerStyle={{
                  backgroundColor: '#E2E6B7'
                }}
                activeOpacity={0.7}
              />
            </View>
            <View
              style={{
                flexDirection: 'column',
                marginLeft: '5%',
                marginTop: '8%'
              }}
            >
              <Text style={{ fontSize: 21, fontWeight: 'bold', marginBottom: '5%' }}>
                {this.props.userState.data.fullname}
              </Text>
              <Text style={{ fontSize: 15, marginBottom: '10%' }}>039741253</Text>
              <TouchableOpacity
                onPress={() => {
                  NavigationUtil.navigate(SCREEN_ROUTER.UPDATE_USER_INFO_SCREEN, { data: this.props.userState.data });
                }}
                style={{
                  width: windowWidth * 0.3,
                  height: windowHeight * 0.033,
                  borderWidth: 1,
                  borderColor: '#727C8E',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 24
                }}
              >
                <Text>Chỉnh sửa</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              backgroundColor: 'white',
              marginTop: windowHeight * 0.007,
              paddingBottom: 10
            }}
          >
            <UserOptions label="Tin mua của bạn" img={R.images.icon_buynews} underline />
            <UserOptions
              label="Thông tin cá nhân"
              img={R.images.icon_user}
              underline
              onPress={() => {
                NavigationUtil.navigate(SCREEN_ROUTER.USER_INFO_SCREEN);
              }}
            />
            <UserOptions label="Danh mục của tôi" img={R.images.icon_awesome_list_ul} underline />
            <UserOptions label="Đổi mật khẩu" img={R.images.icon_feather_lock} underline />
            <UserOptions label="Hướng dẫn sử dụng" img={R.images.icon_recipe} underline />
            <UserOptions
              label="Đăng xuất"
              img={R.images.icon_log_out}
              onPress={async () => {
                await AsyncStorage.setItem('token', '');
                NavigationUtil.navigate('login');
              }}
            />
          </View>
          <Text>{JSON.stringify(this.props.userState)}</Text>
        </View>
      </SafeAreaView>
    );
  }
}
const mapStateToProps = state => ({
  userState: state.userReducer
});

const mapDispatchToProps = {
  getUserInfoAction
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserScreen);
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#69AAFF' }
});
