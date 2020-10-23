
// import React, { Component } from 'react'
// import { View, Text, TouchableOpacity, TextInput } from 'react-native'
// import PropTypes from 'prop-types'
// import { connect } from 'react-redux'
// import {getIncress} from '@action';
// import {getReduction} from '@action';

// export class HomeScreen extends Component {
//    static propTypes = {
//       prop: PropTypes
//    }

//    render() {
//       return (
//          <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
//             <TouchableOpacity
//             onPress={()=>{
//                this.props.getIncress();
//             }}>
//                <Text>+</Text>
//             </TouchableOpacity>
//          <Text>{JSON.stringify(this.props.homeState)}</Text>
//             <TouchableOpacity
//             onPress={()=>{
//                this.props.getReduction();
//             }}>
//                <Text>-</Text>
//                <TextInput style={{width:150,height:50,backgroundColor:'gray'}}>

//                </TextInput>
//                <TextInput style={{width:150,height:50,backgroundColor:'gray',marginTop:8}}>

//                </TextInput>
//             </TouchableOpacity>
//          </View>
//       )
//    }
// }

// const mapStateToProps = (state) => ({
//    homeState:state.homeReducer
// })

// const mapDispatchToProps = {
//    getIncress,
//    getReduction
// }

// export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)

import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ImageBackground, Image, FlatList,TouchableOpacity } from 'react-native';
import { requestHomeData } from '@api'
import R from '@R'
import Loading from '@component/Loading'
import reactotron from 'reactotron-react-native';
import AsyncStorage from '@react-native-community/async-storage'
import NavigationUtil from '@app/navigation/NavigationUtil';
import { SCREEN_ROUTER } from '@app/constants/Constant';


export default class HomeScreen extends Component {
   state = {
      isLoading: true,
      isError: false,
      data: {}
   }
   componentDidMount = async () => {
      try {
         const response = await requestHomeData()
         const jsonResponse = response.data
         this.setState({
            isLoading: false,
            isError: false,
            data: jsonResponse.data
         })
      } catch (error) {
         reactotron.log(error)
         this.setState({
            isLoading: false,
            isError: false,
            data: {}
         })
      }
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
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
               <Text>Da co loi xay ra</Text>
            </View>
         )
      }
      return (
         <SafeAreaView style={styles.container}>
            <ImageBackground
               source={R.images.img_girl}
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
                     <TouchableOpacity
                     onPress={async ()=>{
                        try {
                           await AsyncStorage.getItem("token", "")
                           NavigationUtil.navigate(SCREEN_ROUTER.LOGIN)
                        } catch (error) {
                           
                        }
                     }}>
                     <Text style={styles.text_dang}>Đăng xuất</Text>
                     </TouchableOpacity>
                  </View>
               </View>
            </ImageBackground>
            <View style={styles.title}>
               <Text style={styles.text_title}>Từ khóa tìm kiếm</Text>
            </View>
            <FlatList style={styles.list_post}

               data={this.state.data.listpost}
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
            {/* <ProductBotton /> */}
           
         </SafeAreaView>
      );
   }
}
_footerBlock = (img, isWarning = false) => {
   return (
     <Image source={img} style={{}} />
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