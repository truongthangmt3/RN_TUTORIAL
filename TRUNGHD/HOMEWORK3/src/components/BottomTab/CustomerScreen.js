import React, {Component} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import CustomBlockHeader from '../CustomComponent/CustomBlockHeader';
import CustomBottomTab from '../CustomComponent/CustomBottomTab';

export class CustomerScreen extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <CustomBlockHeader text="Thông báo" />
        <CustomerItem
          item="Iphone X xuất xứ Hồng Kông còn bảo hành 6 tháng"
          imgphone={require('../../assets/images/ImgCustomerScreen/ic_phone.png')}
          phonenumber="0987654321"
          imgaddress={require('../../assets/images/ImgCustomerScreen/ic_location.png')}
          address="Toàn quốc"
          imguser={require('../../assets/images/ImgCustomerScreen/ic_user.png')}
          username="Hà Đức Trung"
        />
        <CustomerItem
          item="Iphone X xuất xứ Hồng Kông còn bảo hành 6 tháng"
          imgphone={require('../../assets/images/ImgCustomerScreen/ic_phone.png')}
          phonenumber="0987654321"
          imgaddress={require('../../assets/images/ImgCustomerScreen/ic_location.png')}
          address="Toàn quốc"
          imguser={require('../../assets/images/ImgCustomerScreen/ic_user.png')}
          username="Hà Đức Trung"
        />
        <CustomerItem
          item="Iphone X xuất xứ Hồng Kông còn bảo hành 6 tháng"
          imgphone={require('../../assets/images/ImgCustomerScreen/ic_phone.png')}
          phonenumber="0987654321"
          imgaddress={require('../../assets/images/ImgCustomerScreen/ic_location.png')}
          address="Toàn quốc"
          imguser={require('../../assets/images/ImgCustomerScreen/ic_user.png')}
          username="Hà Đức Trung"
        />
        <CustomerItem
          item="Iphone X xuất xứ Hồng Kông còn bảo hành 6 tháng"
          imgphone={require('../../assets/images/ImgCustomerScreen/ic_phone.png')}
          phonenumber="0987654321"
          imgaddress={require('../../assets/images/ImgCustomerScreen/ic_location.png')}
          address="Toàn quốc"
          imguser={require('../../assets/images/ImgCustomerScreen/ic_user.png')}
          username="Hà Đức Trung"
        />
        <View style={styles.v_bottomtab}>
          <CustomBottomTab />
        </View>
      </SafeAreaView>
    );
  }
}

class CustomerItem extends Component {
  render() {
    const {
      item,
      imgphone,
      phonenumber,
      imgaddress,
      address,
      imguser,
      username,
    } = this.props;
    return (
      <View style={styles.v_item}>
        <View style={styles.v_inforitem}>
          <Text style={styles.t_item}>{item}</Text>
          <View style={styles.v_contacts}>
            <View style={styles.v_phonenumber}>
              <Image style={styles.img_phonenumber} source={imgphone} />
              <Text>{phonenumber}</Text>
            </View>
            <View style={styles.v_address}>
              <Image style={styles.img_phonenumber} source={imgaddress} />
              <Text>{address}</Text>
            </View>
          </View>
          <View style={styles.v_address}>
            <Image style={styles.img_phonenumber} source={imguser} />
            <Text style={styles.t_customer}>{username}</Text>
          </View>
        </View>
        <View style={styles.v_optionitem}>
          <CustomOneOption
            imgoption={require('../../assets/images/ImgCustomerScreen/ic_messenger.png')}
            nameoption="Chat"
          />
          <CustomOneOption
            imgoption={require('../../assets/images/ImgCustomerScreen/ic_zalo.png')}
            nameoption="Zalo"
          />
          <CustomOneOption
            imgoption={require('../../assets/images/ImgCustomerScreen/ic_phoneblue.png')}
            nameoption="Gọi điện"
          />
        </View>
      </View>
    );
  }
}

class CustomOneOption extends Component {
  render() {
    const {imgoption, nameoption} = this.props;
    return (
      <View style={styles.v_oneoption}>
        <Image style={styles.img_oneoption} source={imgoption} />
        <Text style={styles.t_oneoption}>{nameoption}</Text>
      </View>
    );
  }
}

export default CustomerScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F6F8',
  },
  v_blockheader: {
    //flex: 1,
    backgroundColor: '#69AAFF',
    justifyContent: 'center',
    height: 55,
    padding: 10,
  },
  t_blockheader: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: 10,
  },

  v_bottomtab: {
    flex: 1,
    backgroundColor: 'green',
  },
  v_item: {
    backgroundColor: '#FFFFFF',
    height: 161,
    marginTop: 10,
    padding: 5,
  },
  v_inforitem: {
    marginHorizontal: 25,
  },
  t_item: {
    fontSize: 16,
    fontWeight: 'bold',
    padding: 5,
  },
  v_contacts: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  v_phonenumber: {
    flex: 1,
    flexDirection: 'row',
  },
  t_phonenumber: {
    fontSize: 13,
  },
  img_phonenumber: {
    width: 15,
    height: 15,
    marginRight: 8,
    resizeMode: 'contain',
  },
  v_address: {
    flexDirection: 'row',
  },
  t_address: {
    fontSize: 13,
    fontWeight: 'bold',
  },
  t_customer: {
    fontSize: 14,
    fontWeight: '700',
  },
  v_optionitem: {
    flexDirection: 'row',
    padding: 5,
  },
  v_oneoption: {
    flex: 1,
    marginTop: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  img_oneoption: {
    width: 22,
    height: 22,
    resizeMode: 'contain',
  },
  t_oneoption: {
    color: '#69AAFF',
    fontSize: 10,
  },
});
