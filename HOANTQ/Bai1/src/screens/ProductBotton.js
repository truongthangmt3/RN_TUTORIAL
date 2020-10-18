import React, { Component } from 'react'
import { Text, View, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native'
import mockData from '../../mockData.json';
import axios from 'axios'
export default class ProductBotton extends Component {
  state = {
    data: {},
    isLoading: false,
    isError: false,
  }
  componentDidMount = async ()=> {
    // this.setState({
    //   data: mockData.homeData.data
    // })
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
  }
  render() {
    const { data } = this.state
    return (
      <FlatList style={{ backgroundColor: '#dddd' }}
        data={this.state.data.listpost}
        renderItem={({ item, index }) => {
          return (
            <View style={styles.container}>
              <Text style={styles.text_title}>{item.namekey}</Text>
              <View style={styles.view_title}>
                <View
                  style={styles.view_round}>
                </View>
                <View style={styles.view_name}>
                  <Text>{item.username} </Text>
                  <Text>{item.phone}</Text>
                </View>
                <View style={styles.view_map}>
                  <Image source={require('../../img/ic_map.png')}
                    style={{ width: 16, height: 16 }} />
                </View>
                <View style={styles.view_address}>
                  <Text>{item.address}</Text>
                  <Text>{item.created_date}</Text>
                </View>

              </View>
            </View>
          )

        }}
      />
    )
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 24,
    marginBottom: 16,
    elevation: 2
  },
  text_title: {
    fontSize: 20
  },
  view_title: {
    flexDirection: 'row',
    justifyContent: "center",
    marginTop: 10
  },
  view_round: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#a8d4ff',
  },
  view_name: {
    marginLeft: 8,
    flex: 1,
    padding: 4
  },
  view_map: {
    flexDirection: 'row'
  },
  view_address: {
    flex: 1,
    padding: 4
  }
})