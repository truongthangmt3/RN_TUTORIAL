import React, { Component } from 'react';
import {
    Text,
    View,
    Alert,
    Image,
    FlatList,
    TextInput,
    StyleSheet,
    SafeAreaView,
    ImageBackground,
    TouchableOpacity,
} from 'react-native';
import reactotron from 'reactotron-react-native';
import FlatListItem from '@app/components/Flatlist';
import Loading from '@app/components/Loading';
import { requestHomeData } from '@api';
import images from '@app/assets/imagesAsset';
import NavigationUtil from '@app/navigation/NavigationUtil';

export default class HomeScreen extends Component {
    state = {
        isLoading: true,
        isError: false,
        data: {},
    };

    componentDidMount = async () => {
        try {
            const response = await requestHomeData()
            const jsonResponse = response.data
            this.setState({
                isLoading: false,
                isError: false,
                data: jsonResponse
            }, () => {
                reactotron.log("API", this.state.data)
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
            )
        }
        if (isError)
            return (
                <Text>
                    Đã có lỗi xảy ra
                </Text>
            )
        return (
            <SafeAreaView style={{
                flex: 1,
                backgroundColor: '#F5F6F8'
            }}>
                <FlatList
                    data={this.state.data.listpost}
                    renderItem={({ item }) => {
                        return (
                            <FlatListItem
                                Namekey={item.namekey}
                                Username={item.username}
                                Province={item.province}
                                Phone={item.phone}
                                Modified_date={item.modified_date}
                            />
                        )
                    }}
                    ListHeaderComponent={() => {
                        return (
                            <View style={{ flex: 1 }}>
                                <View style={{ height: 172 }}>
                                    <ImageBackground
                                        style={{ height: 172 }}
                                        source={images.img_header_background}>
                                        <Text style={styles.headerTitle}>
                                            Tôi muốn mua sỉ
                                    </Text>
                                        <View style={{
                                            flexDirection: 'row',
                                            marginHorizontal: 10
                                        }}>
                                            <TextInput
                                                style={styles.textInput}
                                                placeholder={'Danh mục sản phẩm'}
                                                placeholderTextColor='grey'
                                            />

                                            <TouchableOpacity
                                                onPress={() => { }}
                                                style={styles.dropdownButton}>
                                                <Text style={{
                                                    fontSize: 13, marginLeft: 6, marginRight: 5
                                                }}>Toàn quốc</Text>

                                                <Image style={{
                                                    width: 11, height: 6, marginRight: 5, resizeMode: 'contain',
                                                }} source={images.arrow_back} />
                                            </TouchableOpacity>
                                        </View>

                                        <Text
                                            style={styles.headerNotice}>
                                            Để tìm kiếm khách hàng được tốt nhất bạn nên đăng ký đúng danh mục sản phẩm !
                                        </Text>

                                        <TouchableOpacity onPress={() => {
                                            alert('Press')
                                        }}
                                            style={{
                                                height: 36,
                                                width: 115,
                                                borderRadius: 18,
                                                alignSelf: 'center',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                backgroundColor: '#69AAFF'
                                            }}>
                                            <Text style={{
                                                fontSize: 16,
                                                color: 'white',
                                            }}>
                                                Tìm kiếm
                                            </Text>
                                        </TouchableOpacity>
                                    </ImageBackground>
                                </View>

                                <Text style={{
                                    marginVertical: 8,
                                    marginLeft: 11,
                                    fontSize: 18,
                                }}>
                                    Từ khóa tìm kiếm
                                    </Text>
                                <View style={{
                                    padding: 5,
                                    width: '100%',
                                    flexWrap: 'wrap',
                                    flexDirection: 'row',
                                    backgroundColor: 'white'
                                }}>
                                    {this.state.data.listhotkey.map((item, index) => {
                                        return (
                                            <Text
                                                style={{
                                                    padding: 5,
                                                    borderRadius: 5,
                                                    marginRight: 12,
                                                    borderWidth: 0.4,
                                                    marginVertical: 6,
                                                }}
                                                key={item.name}>
                                                #{item.name}
                                            </Text>
                                        )
                                    })}
                                </View>

                                <View style={{
                                    marginVertical: 11,
                                    flexDirection: 'row',
                                }}>
                                    <Text style={{
                                        fontSize: 18,
                                        marginLeft: 11,
                                    }}>
                                        Danh mục sản phẩm cần mua
                                    </Text>
                                    <TouchableOpacity
                                        onPress={() => { }}
                                        style={{
                                            flex: 1,
                                            marginRight: 20,
                                            alignItems: 'flex-end',
                                        }}>
                                        <Text style={{
                                            fontSize: 18,
                                            color: 'blue',
                                        }}>
                                            Tất cả
                                    </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        )
                    }}
                />
            </SafeAreaView>
        )
    }
}
const styles = StyleSheet.create({
    headerTitle: {
        marginLeft: 11,
        marginTop: 15,
        marginBottom: 8,
        color: 'white',
        fontSize: 20
    },
    textInput: {
        flex: 1,
        height: 36,
        padding: 10,
        opacity: 0.8,
        borderRadius: 18,
        backgroundColor: 'white',
    },
    dropdownButton: {
        height: 36,
        opacity: 0.8,
        marginLeft: 5,
        borderRadius: 18,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    headerNotice: {
        marginVertical: 6,
        marginHorizontal: 15,
        color: 'white',
        fontSize: 12
    },


})