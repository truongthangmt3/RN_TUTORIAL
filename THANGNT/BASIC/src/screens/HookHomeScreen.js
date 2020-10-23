import React, { Component, useState, useEffect, useRef } from 'react'
import {
    Text,
    View,
    SafeAreaView,
    StyleSheet,
    ActivityIndicator,
    FlatList
} from 'react-native'
import mockData from '../../mockData.json'
import axios from 'axios'
import Loading from '../components/Loading'


export default HomeScreen = () => {
    const [isLoading, setLoading] = useState(true)
    const [isError, setError] = useState(false)
    const [data, setData] = useState({})
    // const [state, setState] = useState({
    //     isLoading: true,
    //     isError: false,
    //     data: {},
    // })

    useEffect(() => {
        getData();
    }, [])

    getData = async () => {
        try {
            const response = await axios.get('http://3.0.209.176/api/GetHome');
            const jsonResponse = response.data
            setData(jsonResponse.data)
            setLoading(false)
            setError(false)

        } catch (error) {
            alert(JSON.stringify(error))
            setLoading(false)
            setError(true)
            setData({})
        }
    }

    if (isLoading) {
        return (
            <Loading />
        )
    } else if (isError) {
        return (
            <View style={styles.container}>
                <Text>Đã có lỗi xảy ra</Text>
            </View>
        )
    } else {
        return <SafeAreaView
            style={styles.container}
        >
            <FlatList
                style={styles.list_post}
                data={data.listpost}
                renderItem={({ item, index }) => {
                    return (
                        <Text
                            style={{
                                fontSize: 30
                            }}
                        >{item.namekey}</Text>
                    )
                }}
                ListHeaderComponent={() => {
                    return (
                        <View style={{ flex: 1 }}>
                            <Text>Từ khóa tìm kiếm</Text>
                            <View style={styles.vContentKeySearch}>
                                {data.listhotkey.map((item, index) => {
                                    return (

                                        <Text
                                            style={{
                                                padding: 5,
                                                borderColor: 'gray',
                                                borderWidth: 1,
                                                margin: 2,
                                                borderRadius: 15

                                            }}
                                            key={item.name}>{item.name}</Text>

                                    )

                                })}
                            </View>
                            <Text>Danh mục cần mua</Text>
                        </View>

                    )
                }}
            />
        </SafeAreaView>

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
function getIMB() {
    for (let i = 0; i < 100; i++) {
        setTimeout(() => {
            console.log(i)
        }, 2000);
    }
    console.log("Chạy xong")
    return Promise.resolve("Đã có kết quả");
}

