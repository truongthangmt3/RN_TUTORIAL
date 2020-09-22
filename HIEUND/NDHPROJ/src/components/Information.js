import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';
import {Avatar, Accessory} from 'react-native-elements';

export default class Information extends Component {
  render() {
    const {goods, name, phoneNumber, location, time} = this.props;
    return (
      <View style={{marginBottom: '2%', backgroundColor: 'white'}}>
        <Text
          style={{
            fontSize: 18,
            margin: '3%',
          }}>
          {goods}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            marginHorizontal: '3%',
          }}>
          <Avatar
            size={40}
            titleStyle={{fontSize: 15, color: 'black'}}
            rounded
            title="VN"
            overlayContainerStyle={{backgroundColor: '#69ABFE'}}
            activeOpacity={0.7}
          />
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              marginHorizontal: '2%',
              marginBottom: '2.5%',
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: '2.5%',
              }}>
              <Text style={{fontSize: 15}}>{name}</Text>
              <View
                style={{
                  flexDirection: 'row',
                }}>
                <Image
                  source={require('../../assets/icon_location.png')}
                  style={{marginRight: '3%'}}
                />
                <Text>{location}</Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text>{phoneNumber}</Text>
              <View
                style={{
                  flexDirection: 'row',
                }}>
                <Image
                  source={require('../../assets/icon_clock.png')}
                  style={{marginRight: '3%'}}
                />
                <Text>{time}</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
