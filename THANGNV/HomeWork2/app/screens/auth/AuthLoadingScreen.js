import React, { Component } from 'react'
import {
    Image,
    SafeAreaView,
} from 'react-native'
import NavigationUtil from '@app/navigation/NavigationUtil';
import images from '@app/assets/imagesAsset';
import AsyncStorage from '@react-native-community/async-storage';

export default class AuthLoadingScreen extends Component {

    componentDidMount = async () => {
        // load something and check login
        try {
            const token = await AsyncStorage.getItem("token")
            if (token && token.length > 0) {
                NavigationUtil.navigate("Home");
            } else {
                NavigationUtil.navigate("Login");
            }
        } catch (error) {
            NavigationUtil.navigate("Login");
        }
    }

    render() {
        return (
            <SafeAreaView style={{
                flex: 1,
                justifyContent: 'center',
            }}>
                <Image style={{
                    resizeMode: 'contain',
                    width: 374,
                    alignSelf: 'center'
                }} source={images.img_flashscreen} />
            </SafeAreaView>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

// export default connect(mapStateToProps, mapDispatchToProps)(AuthLoadingScreen)
