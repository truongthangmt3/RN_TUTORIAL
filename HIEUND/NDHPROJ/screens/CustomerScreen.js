import React, {Component} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  Dimensions,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Header} from 'react-native-elements';
import RightHeaderCustom from '../src/components/RightHeaderCustom';
import GoodsInfo from '../src/components/GoodsInfo';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default class CustomerScreen extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <Header
          containerStyle={{
            backgroundColor: '#69AAFF',
            justifyContent: 'space-around',
          }}
          placement="left"
          leftComponent={{
            text: 'Khách hàng quan tâm',
            style: {color: '#fff', fontSize: 20},
          }}
          rightComponent={<RightHeaderCustom />}
        />
        <ScrollView style={{flex: 1, backgroundColor: '#F5F6F8'}}>
          <GoodsInfo />
          <GoodsInfo />
          <GoodsInfo />
          <GoodsInfo />
          <GoodsInfo />
        </ScrollView>
      </View>
    );
  }
}
