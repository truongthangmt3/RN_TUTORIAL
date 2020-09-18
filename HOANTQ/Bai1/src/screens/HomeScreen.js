import React, { Component } from 'react'
import { SafeAreaView, Text, View, StyleSheet, ActivityIndicator, FlatList, Image } from 'react-native'
import mockData from '../../mockData.json'
import ProductBotton from '../screens/ProductBotton';
export default class HomeScreen extends Component {
  state = {
    isLoading: true,
    isError: false,
    data: mockData,
  }
  componentDidMount() {
    // setTimeout(() => {
    this.setState({
      isLoading: false,
      isError: false,
      data: mockData.homeData.data
    })
    // }, 500);
  }
  render() {
    const { isLoading, isError, data } = this.state
    if (isLoading) {
      return (
        <View style={styles.container}>
          <ActivityIndicator
            color='red' />
        </View>
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
        <View>
          <Image source={require('../../img/img_girl.jpg')} style={{height:200}}/>
        </View>
        <View style={styles.title}>
          <Text style={styles.text_title}>Từ khóa tìm kiếm</Text>
        </View>
        <FlatList style={styles.list_post}
          
          data={this.state.data.listhotkey}
          renderItem={({ item, index }) => {
            return (
              <View style={styles.list_hot_key}>
                <Text>{item.name}</Text>
              </View>
            )
          }}
        />
        <FlatList/>
        <View style={styles.title}>
          <Text style={styles.text_title}>Danh mục sản phẩm cần mua</Text>
          <Text style={styles.text_all}>Tất cả</Text>
        </View>
        <ProductBotton/>
        <View>
          
        </View>
      </SafeAreaView>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1
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