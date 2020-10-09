import React, { Component } from 'react'
import {
    Image,
    SafeAreaView,
} from 'react-native'
import NavigationUtil from '../../navigation/NavigationUtil';
import images from '@app/assets/imagesAsset';

export default class AuthLoadingScreen extends Component {

    componentDidMount() {
        // load something and check login
        setTimeout(() => {
            NavigationUtil.navigate("Login");
            //NavigationUtil.navigate("Register")
            //NavigationUtil.navigate("CheckPW")
        }, 1000);
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
