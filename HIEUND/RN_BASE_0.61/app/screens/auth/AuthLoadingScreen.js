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
import AsyncStorage from '@react-native-community/async-storage'
// import { connect } from 'react-redux'

export default class AuthLoadingScreen extends Component {

    componentDidMount = async () =>{
        // load something and check login
        try{
            const token = await AsyncStorage.getItem("token");
            if(token && token.length>0){
                NavigationUtil.navigate("home");
            }
            else{
                NavigationUtil.navigate("login");
            }
        }
        catch(error){
            NavigationUtil.navigate("login")
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
