import React, {Component} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ActivityIndicator,
  FlatList,
  TextInput,
  ImageBackground,
  Dimensions,
} from 'react-native';
import mockData from '../data/mockData.json';
const scrWidth = Dimensions.get('window').width;
const scrHeight = Dimensions.get('window').height;

class HomeScreen extends Component {
  // constructor(props) {
  //     super(props);
  //     state = {
  //         data: mockData,
  //     };
  // }

  state = {
    isLoading: true,
    isError: false,
    data1: {},
  };

  componentDidMount() {
    // setTimeout(() => {
    this.setState({
      isLoading: false,
      isError: false,
      data1: mockData.homeData.data,
    });
    // }, 2000);
  }

  render() {
    const {isLoading, isError, data1} = this.state;
    if (isLoading) {
      return (
        <View style={styles.container}>
          <ActivityIndicator color="blue" />
        </View>
      );
    }
    if (isError) {
      return (
        <View style={styles.container}>
          <Text>Error</Text>
        </View>
      );
    }
    return (
      <SafeAreaView style={styles.container}>
        <View>
          <ImageBackground
            style={styles.img_background}
            source={require('../assets/img_background.jpeg')}>
            <Text style={styles.t_img}>Hello</Text>
            <View style={styles.v_block}>
              <View style={styles.v_option}>
                <TextInput
                  style={styles.v_textinput}
                  placeholder="Danh mục sản phẩm"></TextInput>

                <View style={styles.v_address}>
                  <Text>Toàn quốc</Text>
                </View>
              </View>
              <Text style={styles.t_warning}>
                there is a line text here!there is a line text here!there is a
                line text here!there is a line text here!
              </Text>
              <View style={styles.v_buttonDangtin}>
                <Text style={styles.v_button}>Dang tin</Text>
              </View>
            </View>
          </ImageBackground>
          <View style={styles.v_blocksearch}>
            <View style={styles.v_textsearch}>
              <Text style={styles.t_search}>Tu khoa tim kiem</Text>
            </View>
            <View>
              <FlatList
                contentContainerStyle={{alignSelf: 'flex-start'}}
                numColumns={data1.listpost.length / 4}
                data={this.state.data1.listpost}
                renderItem={({item, index}) => {
                  return (
                    <View style={styles.v_flatlistsearch}>
                      <View style={styles.v_itemflatlist}>
                        <Text style={styles.t_nameitem}>#{item.namekey}</Text>
                      </View>
                    </View>
                  );
                }}
              />
            </View>
          </View>
        </View>
        <View style={styles.v_sanpham}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View style={{flex: 1}}>
              <Text style={styles.t_sanphamcanmua}>
                Danh muc san pham can mua
              </Text>
            </View>
            <View>
              <Text style={styles.t_sanphamcanmua}>Tat ca</Text>
            </View>
          </View>
          <FlatList
            data={this.state.data1.listpost}
            renderItem={({item, index}) => {
              return <CustomItem item={item} index={index} />;
            }}
          />
        </View>
      </SafeAreaView>
    );
  }
}

class CustomItem extends Component {
  render() {
    return (
      <View style={styles.v_itemdanhmucsanpham}>
        <Text style={{fontSize: 20}}>{this.props.item.namekey}</Text>
        <View style={styles.v_infor}>
          <View style={styles.v_inforname}>
            <View style={styles.v_iconname}>
              <Text>TH</Text>
            </View>
            <View style={styles.v_inforp}>
              <Text>{this.props.item.username}</Text>
              <Text>{this.props.item.phone}</Text>
            </View>
          </View>
          <View style={styles.v_addressp}>
            <Text>{this.props.item.address}</Text>
            <Text>{this.props.item.created_date}</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  v_option: {
    flexDirection: 'row',
  },
  img_background: {
    width: scrWidth,
    height: scrHeight / 3,
    //justifyContent: 'center',
    //alignItems: 'center',
  },

  v_block: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  v_textinput: {
    flex: 1,
    backgroundColor: 'white',
    height: 40,
    borderRadius: 25,
    margin: 20,
    padding: 10,
  },
  v_address: {
    backgroundColor: 'white',
    height: 40,
    width: 100,
    borderRadius: 25,
    marginTop: 20,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  t_img: {
    fontSize: 25,
    color: 'white',
    marginLeft: 20,
    marginTop: 30,
  },

  t_warning: {
    color: 'white',
    marginLeft: 20,
  },

  v_button: {
    color: 'white',
  },
  v_buttonDangtin: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
    height: 40,
    width: 100,
    borderRadius: 20,
    marginTop: 25,
  },

  v_blocksearch: {
    //backgroundColor: 'yellow',
  },

  v_textsearch: {
    backgroundColor: '#DCDCDC',
    padding: 5,
  },
  t_search: {
    fontSize: 25,
  },

  v_flatlistsearch: {
    padding: 15,
  },

  v_itemflatlist: {
    borderWidth: 1,
    borderColor: 'black',
    // justifyContent: 'center',
    //alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
  },

  t_nameitem: {
    color: 'black',
    fontSize: 15,
  },
  v_sanpham: {
    width: '100%',
    height: '100%',
    padding: 10,
    // backgroundColor: '#DCDCDC',
  },

  v_itemdanhmucsanpham: {
    flex: 1,
    backgroundColor: 'white',
  },

  v_infor: {
    //flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  v_inforname: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  t_sanphamcanmua: {
    fontSize: 20,
  },
  v_iconname: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  },

  v_inforp: {
    backgroundColor: 'white',
    margin: 10,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },

  t_inforp: {
    fontSize: 25,
    color: 'white',
  },

  v_addressp: {
    backgroundColor: 'white',
    margin: 15,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
});

export default HomeScreen;
