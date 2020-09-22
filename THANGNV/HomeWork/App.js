import React, { Component } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  TextInput,
  FlatList
} from 'react-native';
import Loading from './apps/component/Loading.tsx';
import FlatListItem from './apps/component/FlatListItem';

import styles from './apps/common/style/HomeScreenStyle';
import axios from 'axios';

class HomeScreen extends Component {
  state = {
    isLoading: true,
    isError: false,
    data: {},
  };

  componentDidMount = async () => {
    try {
      const response = await axios.get('http://3.0.209.176/api/GetHome');
      const jsonResponse = response.data
      this.setState({
        isLoading: false,
        isError: false,
        data: jsonResponse.data
      })
    } catch (error) {
      this.setState({
        isLoading: false,
        isError: true,
        data: {}
      })
    }
  }

  renderHeader = () => {
    return (
      <View>
        <ImageBackground
          style={styles.img_background}
          source={require('./apps/assets/img/background.png')}>
          <Text style={styles.t_img}>
            Tôi muốn mua sỉ
            </Text>
          <View style={styles.v_block}>
            <View style={styles.v_option}>
              <TextInput
                style={styles.v_textinput}
                placeholder="Danh mục sản phẩm">
              </TextInput>
              <View style={styles.v_address}>
                <Text>
                  Toàn quốc
                  </Text>
              </View>
            </View>
            <Text style={styles.t_warning}>
              Để tìm kiếm khách hàng được tốt nhất, bạn nên đăng ký đúng danh mục
                  </Text>
            <View style={styles.v_buttonDangtin}>
              <Text style={styles.v_button}>
                Đăng tin
                </Text>
            </View>
          </View>
        </ImageBackground>
        <Text style={{ fontSize: 20, marginLeft: 10, marginVertical: 10 }}>
          Từ khóa tìm kiếm
        </Text>
      </View>
    );
  }

  render() {
    const { data, isLoading, isError } = this.state;
    if (isLoading) {
      return (
        <View style={styles.container}>
          <Loading />
        </View>
      );
    }
    if (isError) {
      return (
        alert('Halo')
      );
    }
    return (
      <SafeAreaView style={styles.container}>
        <FlatList style={styles.list_post}
          data={data.listpost}
          ListHeaderComponent={this.renderHeader}
          renderItem={({ item }) => {
            return (
              <View style={styles.body}>
                <FlatListItem
                  Namekey={item.namekey}
                  Username={item.username}
                  Province={item.province}
                  Phone={item.phone}
                  Modified_date={item.modified_date}
                />
              </View>
            );
          }}
        />
      </SafeAreaView>
    );
  }
}

export default HomeScreen;