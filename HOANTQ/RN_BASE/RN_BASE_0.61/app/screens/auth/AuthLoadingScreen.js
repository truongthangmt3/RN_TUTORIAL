import React, { Component } from 'react'
import {
    View,
    Text,
    SafeAreaView,
    StatusBar,
    ActivityIndicator
} from 'react-native'
import NavigationUtil from '../../navigation/NavigationUtil'
import i18 from '@i18';
import AsyncStorage from '@react-native-community/async-storage'//luu du lieu xuong o cung
import { SCREEN_ROUTER } from '@app/constants/Constant';


// import { connect } from 'react-redux'

export default class AuthLoadingScreen extends Component {

    componentDidMount = async()=> {
        // load something and check login
        
        try {
            const token = await AsyncStorage.getItem('token')
            if (token && token.length >0) {
                NavigationUtil.navigate(SCREEN_ROUTER.MAIN);
            }else{
                NavigationUtil.navigate(SCREEN_ROUTER.LOGIN)
            }

        } catch (error) {
            NavigationUtil.navigate(SCREEN_ROUTER.LOGIN);
        }
    }
    render() {
        return (
            <SafeAreaView style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <View>
                    <ActivityIndicator />
                    <Text>{i18.t('user')}</Text>
                </View>
            </SafeAreaView>
        )
    }

}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

// export default connect(mapStateToProps, mapDispatchToProps)(AuthLoadingScreen)
