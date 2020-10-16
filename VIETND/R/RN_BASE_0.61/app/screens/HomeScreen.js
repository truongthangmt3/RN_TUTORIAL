import React, { Component } from 'react';
import { View, Text, SafeAreaView, StyleSheet, ActivityIndicator, FlatList, Image, ImageBackground, TextInput, TouchableOpacity } from 'react-native';
import axios from 'axios';
import R from '@R';
import { requestHomeData } from '@api'
// import Loading from '@component/Loading';
import Loading from '@component/Loading';
export default class HomeScreen extends Component {
    state = {
        isLoading: true,
        isError: false,
        data: {},
    }
    componentDidMount = async () => {
        try {
            const response = await requestHomeData()
            // response.log("API",response)
            const jsonResponse = response.data
            //response.log("API", jsonResponse)

            this.setState({
                isLoading: false,
                isError: false,
                data: jsonResponse
            }, () => {
                //reactotron.log("API", jsonResponse)
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

    render() {
        const { isLoading, isError, data } = this.state
        if (isLoading) {
            return (
                <Loading />
            );

        }
        return (
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                data={this.state.data.listpost}
                    renderItem={({ item, index }) => {
                    return (
                        <Text>{item.namekey}</Text>
                    );
                }}

            </View>
        );
        // return (
        //     <SafeAreaView style={styles.container}>


        //         <FlatList style={styles.list_post}
        //             data={this.state.data.listpost}

        //         />
        //     </SafeAreaView>
        // )
    }
}
const styles = StyleSheet.create({

})