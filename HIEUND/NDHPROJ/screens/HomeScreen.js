import React, {Component} from 'react';
import {AppRegistry} from 'react-native';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  FlatList,
  Dimensions,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import axios from 'axios';
import Loading from '../src/components/Loading';
import ProvinceDropdown from '../src/components/ProvinceDropdown';
import Headers from '../src/components/Headers';
import Information from '.././src/components/Information';
import TaskBarButtons from '.././src/components/TaskBarButtons';
import NavigationUtil from '../src/navigation/NavigationUtil';
import {SCREEN_ROUTER} from '../utils/Constants.js';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class HomeScreen extends Component {
  state = {
    isLoading: true,
    isError: false,
    name: '',
    data: {},
  };
  componentDidMount = async () => {
    // goi api va cho du lieu tra ve
    //cach co dien
    // fetch('http://3.0.209.176/api/GetHome')
    //   .then((response) => response.json())
    //   .then((res) => {
    //     alert(JSON.stringify(res));
    //   });
    //cach hien dai tu ES6 dung async va await (thay doi ham thanh async)
    try {
      const response = await axios.get('http://3.0.209.176/api/GetHome');
      const jsonResponse = response.data;
      // alert(JSON.stringify(jsonResponse));
      this.setState({
        isLoading: false,
        isError: false,
        // data: jsonResponse.data.listpost,
        data: jsonResponse.data,
      });
    } catch (error) {
      this.setState({
        isLoading: false,
        isError: true,
        data: {},
      });
    }
  };
  // componentDidMount() {
  //   // setTimeout(() => {
  //   this.setState({
  //     isLoading: false,
  //     isError: false,
  //     data: mockData.homeData.data.listpost,
  //   });
  //   // }, 500);
  // }
  render() {
    const {isLoading, isError, data, name} = this.state;
    if (isLoading) {
      return <Loading />;
    }
    if (isError) {
      return (
        <View style={styles.container}>
          <Text>FAILED</Text>
        </View>
      );
    }
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView style={{backgroundColor: '#F4F7F8'}}>
          <ImageBackground
            source={require('../assets/header.jpg')}
            style={{
              width: windowWidth,
              height: windowHeight * 0.28,
            }}>
            <Text
              style={{
                fontSize: 25,
                color: 'white',
                marginTop: '5%',
                marginLeft: '3%',
              }}>
              Tôi muốn mua sỉ
            </Text>
            <View style={styles.header}>
              <TextInput
                style={styles.text_input}
                placeholder="Danh mục sản phẩm"
                value={name}
                onChangeText={(text) =>
                  this.setState({name: text})
                }></TextInput>
              <ProvinceDropdown />
            </View>
            <Text style={{fontSize: 14, marginLeft: '4%', color: 'white'}}>
              Để tìm kiếm khách hàng được tốt nhất bạn nên đăng ký đúng danh mục
              sản phẩm !
            </Text>
            <TouchableOpacity style={styles.add_news}>
              <Text style={{color: 'white'}}>Đăng tin</Text>
            </TouchableOpacity>
          </ImageBackground>
          <Headers text="Từ khoá tìm kiếm" />
          <FlatList
            style={styles.list_post}
            data={this.state.data.listpost}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    // this.props.navigation.navigate('user');
                    NavigationUtil.navigate(SCREEN_ROUTER.USER);
                  }}
                  style={styles.items}>
                  <Text style={{fontSize: 16}}>{'#' + item.namekey}</Text>
                </TouchableOpacity>
              );
            }}
            contentContainerStyle={{
              flexDirection: 'row',
              flexWrap: 'wrap',
            }}
          />
          <Headers text="Danh mục sản phẩm cần mua" all />
          <FlatList
            data={this.state.data.listpost}
            renderItem={({item, index}) => {
              return (
                <Information
                  goods={item.namekey}
                  name={item.username}
                  phoneNumber={item.phone}
                  location={item.address}
                  time={item.created_date}
                />
              );
            }}
          />
        </ScrollView>
        {/* <View style={{backgroundColor: '#F4F7F8', flexDirection: 'row'}}>
          <TaskBarButtons icon="home" label="Trang chủ" />
          <TaskBarButtons icon="users" label="KH quan tâm" />
          <TaskBarButtons icon="message" label="Tin nhắn" />
          <TaskBarButtons icon="bell" label="Thông báo" />
          <TaskBarButtons icon="user" label="Người dùng" />
        </View> */}
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#69AAFF',
  },
  add_news: {
    borderColor: 'red',
    width: windowWidth * 0.35,
    height: windowHeight * 0.05,
    marginHorizontal: '35%',
    marginVertical: '4%',
    borderRadius: 30,
    backgroundColor: '#69AAFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  list_post: {
    marginVertical: '3%',
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    marginVertical: 10,
    marginHorizontal: 5,
    justifyContent: 'space-between',
  },
  text_input: {
    borderWidth: 0.3,
    height: windowHeight * 0.05,
    width: '65%',
    borderRadius: 30,
    marginHorizontal: '1%',
    backgroundColor: 'white',
    paddingHorizontal: 10,
  },
  items: {
    borderWidth: 0.5,
    borderRadius: 7,
    borderColor: 'black',
    marginLeft: 10,
    height: windowHeight * 0.04,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 5,
    marginVertical: 5,
  },
});
