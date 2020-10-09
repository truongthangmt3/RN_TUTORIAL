import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Alert, Image } from 'react-native';
import { connect } from 'react-redux'
import { getUserInfo } from '@action'
export class UserScreen extends Component {

    async componentDidMount() {
        alert(JSON.stringify(this.props.userState))
    }

    render() {
        return (
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Text>

                </Text>
                <TouchableOpacity
                    onPress={() => {
                        this.props.getUserInfo("send data to reducer")
                    }}>
                    <Text>
                        Call Action
                        </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const mapStateToProps = (state) => ({
    userState: state.userReducer
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(UserScreen)