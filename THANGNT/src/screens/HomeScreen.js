import React, { Component } from 'react'
import {
    Text,
    View,
    SafeAreaView,
    StyleSheet,
    ActivityIndicator,
    FlatList,
} from 'react-native'
import mockData from '../../mockData.json'
import axios from 'axios'
import Loading from '../components/Loading'


export default class HomeScreen extends Component {
    state = {
        isLoading: true,
        isError: false,
        data: {},
    }

    componentDidMount = async () => {
        // gọi api và chờ dữ liệu trả về
        // Cach co dien
        // fetch('http://3.0.209.176/api/GetHome')
        //     .then((response) => response.json())
        //     .then(res => {
        //         // alert(JSON.stringify(res))
        //         alert(a)
        //     })

        //cach hien dai tu es6  dùng async await (thay đổi hàm thành async mới dùng được)

        try {
            const response = await axios.get('http://3.0.209.176/api/GetHome');
            const jsonResponse = response.data
            this.setState({
                isLoading: false,
                isError: true,
                data: jsonResponse.data
            })
        } catch (error) {
            alert(JSON.stringify(error))
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
                // <View style={styles.container}>
                //     <ActivityIndicator
                //         color='red' />
                // </View>
            )
        }
        if (isError)
            return (
                <View style={styles.container}>
                    <Text>Đã có lỗi xảy ra</Text>
                </View>
            )
        return (
            <SafeAreaView
                style={styles.container}
            >
                <FlatList
                    style={styles.list_post}
                    data={this.state.data.listpost}
                    renderItem={({ item, index }) => {
                        return (
                            <Text
                                style={{
                                    fontSize: 30
                                }}
                            >{item.namekey}</Text>
                        )
                    }}
                />
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "green"
    },
    list_post: {
        flex: 1,
        backgroundColor: "yellow"
    }
})
function getIMB() {
    for (let i = 0; i < 100; i++) {
        setTimeout(() => {
            console.log(i)
        }, 2000);
    }
    console.log("Chạy xong")
    return Promise.resolve("Đã có kết quả");
}

