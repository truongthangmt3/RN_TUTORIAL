import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ActivityIndicator,
    ImageBackground,
    Image
} from 'react-native'
import { SCREEN_ROUTE } from '../Util/Costan'
import NavigationUtil from '../navigation/NavigationUtil'
import img from '../../assest/image.js'

export default class SplashScreen extends Component {
    componentDidMount = async () => {
        setTimeout(() => {
            NavigationUtil.navigate(SCREEN_ROUTE.LOGIN)
        }, 2000);



    }
    render() {
        return (
            <ImageBackground
                style={{
                    flex: 1
                }}
                source={img.img_splash}
            >
                <ActivityIndicator
                    color='red'
                />
            </ImageBackground>

        )
    }

}

const styles = StyleSheet.create({})
