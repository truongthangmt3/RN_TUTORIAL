import React, { Component } from 'react'
import { SafeAreaView, Text, View, StyleSheet, ActivityIndicator, FlatList, Image, ImageBackground, TouchableOpacity, ListViewComponent } from 'react-native'
import ProductBotton from '../screens/ProductBotton';
import Loading from '../components/Loading'
import axios from 'axios'
import NavigationUtil from '../navigation/NavigationUtil'
import {SCREEN_ROUTER} from '../utils/Contans';

export default class HomeScreen extends Component {
  state = {
    isLoading: false,
    isError: false,
    data: {},
  }
  componentDidMount = async () => {
    // this.setState({
    //   isLoading: false,
    //   isError: false,
    //   data: mockData.homeData.data
    // })
    //goi api cho du lieu tra ve

    // fetch('http://3.0.209.176/api/GetHome')
    //   .then((response) => response.json())
    //   .then(res => {
    //     alert(JSON.stringify(res))
    //   })
    //cach hien dai async await thany doi ham thanh async moi dung duoc
    try {
      const response = await axios.get('http://3.0.209.176/api/GetHome');
      const jsonResponse = response.data
      this.setState({
        isLoading: false,
        isError: false,
        data: jsonResponse.data
      })
    } catch (error) {
      alert(JSON.stringify(error))
      this.setState({
        isLoading: false,
        isError: false,
        data: {},
      })
    }
    //tuy vao du lieu tra ve ma set err hay data
    // setTimeout(() => {
    // }, 500);
    // <View style={styles.container}>
    //   <ActivityIndicator
    //     color='red' />
    // </View>
  }
  render() {
    const { isLoading, isError, data } = this.state
    if (isLoading) {
      return (
        <Loading />

      )
    }
    if (isError) {
      return (
        <View style={styles.container}>
          <Text>Da co loi xay ra</Text>
        </View>
      )
    }
    return (
      <SafeAreaView style={styles.container}>
        <ImageBackground
          source={require('../../img/img_girl.jpg')}
          style={{ height: 250 }}>
          <View style={styles.v_backgroud}>
            <Text style={styles.text_backgroud}>Tôi muốn mua sỉ</Text>
            <View style={styles.v_row}>
              <View style={styles.v_border}>
                <Text style={{ padding: 8, color: '#9999' }}>Danh mục sản phẩm</Text>
              </View>
              <View style={styles.v_nation}>
                <Text style={{ padding: 8 }}>Toàn quốc</Text>
              </View>
            </View>
            <Text style={styles.text_long}>Để tìm kiếm khách hàng được tốt nhất bạn nên đăng ký đúng danh mục sản phẩm!</Text>
            <View style={styles.v_borders}>
              <Text style={styles.text_dang}>Đăng tin</Text>
            </View>
          </View>
        </ImageBackground>
        <View style={styles.title}>
          <Text style={styles.text_title}>Từ khóa tìm kiếm</Text>
        </View>
        <FlatList style={styles.list_post}

          data={this.state.data.listhotkey}
          renderItem={({ item, index }) => {
            
            return (
              <View style={styles.list_hot_key}>
                <TouchableOpacity
                  onPress={() => {
                  
                  }}>
                  <Text>{item.name}</Text>
                </TouchableOpacity>
              </View>
            )
          }}
          
        />
        <FlatList />
        
        <View style={styles.title}>
          <Text style={styles.text_title}>Danh mục sản phẩm cần mua</Text>
          <Text style={styles.text_all}>Tất cả</Text>
        </View>
        <ProductBotton />
        {/* <View style={styles.footer}>
          {_footerBlock(require('../../img/ic_home.png'))}
          {_footerBlock(require('../../img/ic_alarm.png'))}
          {_footerBlock(require('../../img/ic_people.png'))}

        </View> */}
      </SafeAreaView>
    )
  }
}
_footerBlock = (img, isWarning = false) => {
  return (
    <Image source={img} style={styles.img_footer} />
  )
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1
  },
  v_backgroud: {
    padding: 16,
    marginTop: 16
  },
  text_backgroud: {
    fontSize: 24,
    color: 'white'
  },
  v_row: {
    flexDirection: 'row',
    marginTop: 16
  },
  v_border: {
    width: 250,
    height: 40,
    backgroundColor: 'white',
    borderRadius: 20,
    marginRight: 5
  },
  v_nation: {
    width: 100,
    height: 40,
    backgroundColor: 'white',
    borderRadius: 20,
  },
  v_borders: {
    marginLeft: 140,
    marginTop: 16,
    width: 100,
    height: 40,
    backgroundColor: 'red',
    borderRadius: 20,

  },
  text_dang: {
    padding: 8,
    textAlign: 'center',
    color: 'white'
  },
  text_long: {
    color: 'white',
    marginTop: 8
  },
  list_hot_key: {
    borderWidth: 0.5,
    padding: 8,
    borderRadius: 8,
    marginBottom: 2
  },
  title: {
    backgroundColor: '#dddd',
    height: 42,
    padding: 8,
    flexDirection: 'row'
  },
  text_title: {
    fontSize: 18,
    flex: 1,
  },
  text_all: {
    fontSize: 16,
    color: 'green',
    marginRight: 8
  },
  list_post: {
    padding: 16,
  },
  footer: {
    borderTopWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  img_footer: {
    padding: 16,
    margin: 8,
    marginLeft: 4
  }
})