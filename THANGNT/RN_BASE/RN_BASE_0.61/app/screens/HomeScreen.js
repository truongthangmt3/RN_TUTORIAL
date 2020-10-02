import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { requestHomeData } from '@api'
import reactotron from 'reactotron-react-native';
import Loading from '@component/Loading'
import { SCREEN_ROUTER } from '@constant'
import R from '@R'


export default class HomeScreen extends Component {
    state = {
        isLoading: true,
        isError: false,
        data: {},
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
                isError: true,
                data: {}
            })
        }
    }

    // new branch

    render() {

        const { isLoading, isError, data } = this.state
        if (isLoading) {
            return (
                <Loading />
            )
        }

        return (
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Text
                    style={{
                        fontFamily: R.fonts.roboto_bolditalic
                    }}
                >Hello</Text>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    vContentKeySearch: {
        flexWrap: "wrap",
        padding: 5,
        flexDirection: "row",
        width: '100%',
        backgroundColor: "white"
    },
    container: {
        flex: 1,
        backgroundColor: "green"
    },
    list_post: {
        flex: 1,
        backgroundColor: "yellow"
    }
})
