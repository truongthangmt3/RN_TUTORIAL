import React, { Component } from 'react'
import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import NavigationUtil from '@app/navigation/NavigationUtil'
import { SCREEN_ROUTER } from '@app/constants/Constant';
import { Header } from "react-native-elements";
import CustomHeader from '@app/components/CustomHeader'
export class UpdateUserInfoScreen extends Component {
    render() {
        return (
            <View style={{ flex: 1 }} >
                <Header
                    containerStyle={{
                        backgroundColor: "#69AAFF",
                        justifyContent: "space-around"
                    }}
                    placement="left"
                    leftComponent={<CustomHeader text="Cập nhật thông tin" />}
                />
            </View>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(UpdateUserInfoScreen)
