import React, { Component, useState, useEffect } from 'react'
import {
    Text,
    View,
    SafeAreaView,
    StyleSheet,
    ActivityIndicator,
    FlatList,
    TouchableOpacity,
} from 'react-native'
import mockData from '../../mockData.json'
import axios from 'axios'
import Loading from '../components/Loading'


export default HomeScreen = () => {
    const [apiState, setApiState] = useState({
        isLoading: true,
        isError: false,
    })
    const [data, setData] = useState({})
    const [abc, setABC] = useState("ABC")

    useEffect(() => {
        getData();
    }, []);

    getData = async () => {
        console.log("Chạy");

        try {
            const response = await axios.get('http://3.0.209.176/api/GetHome');
            const jsonResponse = response.data
            setData(jsonResponse.data)
            setApiState({
                isLoading: false,
                isError: false
            })
        } catch (error) {
            console.log(error);
        }
    }


    const renderABC = () => {
        setABC(new Date().getTime());
    }

    if (apiState.isLoading) {
        return (
            <Loading />
        )
    } else if (apiState.isError) {
        return <Text>Đã có lỗi xảy ra</Text>
    } else {
        return (
            <View
                style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                <TouchableOpacity
                    onPress={renderABC}
                    children={<Text children={abc} />}
                />
                {/* {renderABC()} */}
                {/* <Text>
                    {JSON.stringify(data)}
                </Text> */}

            </View>
        )
    }

}