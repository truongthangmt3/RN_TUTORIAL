import React, {Component} from 'react';
import {Text, View, Dimensions, Image} from 'react-native';
import {Dropdown} from 'react-native-material-dropdown-v2';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class ProvinceDropdown extends Component {
  render() {
    let data = [
      {
        value: 'Hà Nội',
      },
      {
        value: 'Đà Nẵng',
      },
      {
        value: 'Tp Hồ Chí Minh',
      },
    ];

    return (
      <View>
        <Dropdown
          label="Toàn quốc"
          data={data}
          // inputContainerStyle={{borderBottomWidth: 2}}
          containerStyle={{
            borderWidth: 0.3,
            backgroundColor: 'white',
            width: windowWidth * 0.3,
            height: windowHeight * 0.05,
            borderRadius: 30,
            justifyContent: 'center',
            paddingTop: 16,
          }}
          underlineColor="transparent"></Dropdown>
        <Image
          source={require('../../assets/down-arrow.png')}
          style={{position: 'absolute', right: '10%', top: '38%'}}
        />
      </View>
    );
  }
}
