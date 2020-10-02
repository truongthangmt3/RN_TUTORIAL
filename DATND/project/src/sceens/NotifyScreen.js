import React, { Component } from 'react'
import {
    Text,
    StyleSheet,
    View,
    Image,
    SafeAreaView
} from 'react-native'

import img from '../../assest/image.js'

const BELLDATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
        date: '07/11/2020'
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
        date: '25/6/2020'
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
        date: '6/8/2020'
    },
];
class CustomItem extends Component {
    render() {
        const { img, title, date } = this.props;
        return (
            <View style={styles.item}>
                <View style={styles.img}>
                    <Image
                        source={img}
                    />
                </View>
                <View style={styles.title_date}>
                    <View style={styles.title}>
                        <Text style={{ color: '#515C6F', fontSize: 15 }}>{title}</Text>
                    </View>
                    <View style={styles.date}>
                        <Text style={{ color: '#515C6F' }}>{date}</Text>
                    </View>

                </View>
            </View>
        );
    }
}
export default class NotifyScreen extends Component {
    render() {
        return (
            <SafeAreaView style={styles.bellItem}>
                <View style={styles.thongbao}>
                    <Text style={{ color: '#ffff', fontSize: 20 }}>Thông Báo</Text>
                </View>

                <CustomItem
                    img={img.ic_Ellipse}
                    title="Yêu cẩu thêm danh mục của bạn đã được phê duyêt"
                    date="12/2/2010"
                />
                <CustomItem
                    img={img.ic_path}
                    title="Khách hàng Trần Minh Anh cần mua Nhụy hoa nghệ tây tại Hà Nội"
                    date="12/2/2010"
                />
                <CustomItem
                    img={img.ic_path43}
                    title="Yêu cầu thêm danh mục của bạn bị từ chối"
                    date="12/2/2010"
                />
                <CustomItem
                    img={img.ic_icon}
                    title="Khách hàng Tạ Thị Bưởi tìm kiếm danh mục nước hoa thảo dược"
                    date="12/2/2010"
                />

            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    bellItem: {
        flex: 1,

    },
    thongbao: {
        width: '100%',
        height: 55,
        backgroundColor: '#69AAFF',
        justifyContent: 'center',
        paddingLeft: 10,
        paddingVertical: 15
    },
    item: {
        marginTop: 20,
        width: '100%',
        height: 60,
        flexDirection: 'row',
        paddingHorizontal: 20,

    },
    img: {
        width: 80,
        height: 80,
        //   borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        //backgroundColor: '#8B9DFF'
    },
    title_date: {
        flex: 1,
        height: 80,
        flexDirection: 'column',
        paddingTop: 10,
        paddingHorizontal: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#727C8E'
    },
    title: {
        width: 253,
        height: 41


    },
    date: {
        flex: 1,
        alignItems: 'flex-end'

    },

})
