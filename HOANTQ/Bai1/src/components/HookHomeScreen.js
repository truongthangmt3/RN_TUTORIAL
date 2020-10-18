import React, { Component, useState, useEffect } from 'react'
import { SafeAreaView, Text, View, StyleSheet, ActivityIndicator, FlatList, Image, ImageBackground,TouchableOpacity } from 'react-native'
import mockData from '../../mockData.json'
import ProductBotton from '../screens/ProductBotton';
import Loading from './Loading'
import axios from 'axios'
export default HomeScreen = () => {
  const [isLoading, setLoading] = useState();
  const [isError, setError] = useState();
  const [data, setData] = useState();
  useEffect(() => {
    getData();
  }, [])
  getData= async ()=>{
    try {
      const response = await axios.get('http://3.0.209.176/api/GetHome');
      const jsonResponse = response.data
      setLoading(false)
      setError(false)
      setData(jsonResponse.data)
      
    } catch (error) {
      alert(JSON.stringify(error))
      setLoading(false)
      setError(true)
      setData({})
    }
  }
  if (isLoading) {
    return (
      <Loading />
    )
  } else if (isError) {
    return (
      <View style={styles.container}>
        <Text>Da co loi xay ra</Text>
      </View>
    )
  } else {
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

        data={data.listhotkey}
        renderItem={({ item, index }) => {
          return (
            <View style={styles.list_hot_key}>
              <Text>{item.name}</Text>
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

    </SafeAreaView>
  }
  return (

    <View style={styles.container}>
      <Text>Hello Hook</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'green',
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
  }
})