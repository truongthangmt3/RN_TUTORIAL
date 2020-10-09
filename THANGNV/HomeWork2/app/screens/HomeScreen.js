import React, { Component } from 'react';
import {
    Text,
    View,
    SafeAreaView,
    FlatList,
    TextInput,
    ImageBackground,
    TouchableOpacity,
    Alert,
    Image
} from 'react-native';
import theme from '@theme';
import R from '@R';
import reactotron from 'reactotron-react-native';
import FlatListItem from '@app/components/Flatlist';
import Loading from '@app/components/Loading';
import WHeader from '@app/components/WHeader';
import { requestHomeData } from '@api';
import images from '@app/assets/imagesAsset';

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
                                <View style={{
                                    height: 172,
                                }}>
                                    <ImageBackground
                                        style={{
                                            height: 172,
                                        }}
                                        source={images.img_header_background}
                                    >
                                        <Text style={{
                                            marginLeft: 11,
                                            marginTop: 15,
                                            marginBottom: 8,
                                            color: 'white',
                                            fontSize: 20
                                        }}>
                                            Tôi muốn mua sỉ
                                    </Text>
                                        <View style={{
                                            flexDirection: 'row',
                                            marginHorizontal: 10
                                        }}>
                                            <TextInput
                                                style={{
                                                    flex: 1,
                                                    height: 36,
                                                    backgroundColor: 'white',
                                                    opacity: 0.8,
                                                    borderRadius: 18,
                                                    padding: 10,
                                                }}
                                                placeholder={'Danh mục sản phẩm'}
                                                placeholderTextColor='grey'
                                            />

                                            <TouchableOpacity
                                                onPress={() => { }}
                                                style={{
                                                    flexDirection: 'row',
                                                    backgroundColor: 'white',
                                                    opacity: 0.8,
                                                    borderRadius: 18,
                                                    height: 36,
                                                    justifyContent: 'center',
                                                    alignItems: 'center',
                                                    marginLeft: 5
                                                }}>
                                                <Text style={{
                                                    fontSize: 13,
                                                    marginLeft: 6,
                                                    marginRight: 5
                                                }}>
                                                    Toàn quốc
                                                </Text>
                                                <Image style={{
                                                    width: 11,
                                                    height: 6,
                                                    resizeMode: 'contain',
                                                    marginRight: 5
                                                }} source={images.arrow_back} />
                                            </TouchableOpacity>
                                        </View>

                                        <Text
                                            style={{
                                                marginVertical: 6,
                                                marginHorizontal: 15,
                                                color: 'white',
                                                fontSize: 12
                                            }}>
                                            Để tìm kiếm khách hàng được tốt nhất bạn nên đăng ký đúng danh mục sản phẩm !
                                        </Text>

                                        <TouchableOpacity onPress={() => { }}
                                            style={{
                                                alignSelf: 'center',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                height: 36,
                                                width: 115,
                                                borderRadius: 18,
                                                backgroundColor: '#69AAFF'
                                            }}>
                                            <Text style={{
                                                color: 'white',
                                                fontSize: 16
                                            }}>
                                                Đăng tin
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
                                    flexWrap: 'wrap',
                                    padding: 5,
                                    flexDirection: 'row',
                                    width: '100%',
                                    backgroundColor: 'white'
                                }}>
                                    {this.state.data.listhotkey.map((item, index) => {
                                        return (
                                            <Text
                                                style={{
                                                    padding: 5,
                                                    borderWidth: 0.4,
                                                    borderRadius: 5,
                                                    marginRight: 12,
                                                    marginVertical: 6,
                                                }}
                                                key={item.name}>
                                                #{item.name}
                                            </Text>
                                        )
                                    })}
                                </View>

                                <View style={{
                                    flexDirection: 'row',
                                    marginVertical: 11,
                                }}>
                                    <Text style={{
                                        marginLeft: 11,
                                        fontSize: 18,
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
                                            color: 'blue',
                                            fontSize: 18
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
