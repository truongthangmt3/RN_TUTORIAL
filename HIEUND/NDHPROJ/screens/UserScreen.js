import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
  Image,
} from 'react-native';
import {Avatar, Accessory} from 'react-native-elements';
import UserOptions from '../src/components/UserOptions';
const windowWidth = Dimensions.get('window').width; //414
const windowHeight = Dimensions.get('window').height; //896
export default class UserScreen extends Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: '#4F7FBE'}}>
        <View style={{flex: 1, backgroundColor: '#F5F6F8'}}>
          <View
            style={{
              flexDirection: 'row',
              backgroundColor: '#FFFFFF',
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 1,
              },
              shadowOpacity: 0.16,
              shadowRadius: 1.0,
              elevation: 1,
            }}>
            <View
              style={{
                marginLeft: windowWidth * 0.05,
                marginTop: windowHeight * 0.02,
                marginBottom: windowHeight * 0.025,
              }}>
              <Avatar
                size={120}
                titleStyle={{
                  fontSize: 36,
                  color: '#B8CB85',
                  fontWeight: 'bold',
                }}
                rounded
                title="VN"
                overlayContainerStyle={{
                  backgroundColor: '#E2E6B7',
                }}
                activeOpacity={0.7}
              />
            </View>
            <View
              style={{
                flexDirection: 'column',
                marginLeft: '5%',
                marginTop: '8%',
              }}>
              <Text
                style={{fontSize: 21, fontWeight: 'bold', marginBottom: '5%'}}>
                Trần Văn Kim Cương
              </Text>
              <Text style={{fontSize: 15, marginBottom: '10%'}}>039741253</Text>
              <TouchableOpacity
                style={{
                  width: windowWidth * 0.3,
                  height: windowHeight * 0.033,
                  borderWidth: 1,
                  borderColor: '#727C8E',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 24,
                }}>
                <Text>Chỉnh sửa</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{backgroundColor: 'white', marginTop: windowHeight * 0.007}}>
            <UserOptions
              label="Tin mua của bạn"
              img={require('../assets/muasi_icon/icon_buynews.png')}
            />
            <UserOptions
              label="Thông tin cá nhân"
              img={require('../assets/muasi_icon/icon_user.png')}
            />
            <UserOptions
              label="Danh mục của tôi"
              img={require('../assets/muasi_icon/icon_awesome_list_ul.png')}
            />
            <UserOptions
              label="Đổi mật khẩu"
              img={require('../assets/muasi_icon/icon_feather_lock.png')}
            />
            <UserOptions
              label="Hướng dẫn sử dụng"
              img={require('../assets/muasi_icon/icon_recipe.png')}
            />
            <UserOptions
              label="Đăng xuất"
              img={require('../assets/muasi_icon/icon_log_out.png')}
            />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
