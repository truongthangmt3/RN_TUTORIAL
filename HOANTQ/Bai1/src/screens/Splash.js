import React, { Component } from 'react'
import { Text, View ,ActivityIndicator} from 'react-native'
import Loading from '../components/Loading'
import NavigationUtil from '../navigation/NavigationUtil'
import {SCREEN_ROUTER} from '../utils/Contans'

export default class Splash extends Component {
   componentDidMount= async ()=>{
       setTimeout(() => {
           NavigationUtil.navigate(SCREEN_ROUTER.LOGIN)
       }, 1000);
   }
    render() {
        return (
            <View style={{
                flex:1,
                alignContent:'center',
                justifyContent:'center',
            }}>
              <Loading/>
            </View>
        )
    }
}
