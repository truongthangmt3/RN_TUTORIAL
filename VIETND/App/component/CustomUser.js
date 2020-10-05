import React, { Component } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'

export default class CustomUser extends Component {
    render() {
        const { Name, image, image_Next } = this.props;
        return (
            <View style={styles.container}>
                <View style={styles.header}>


                    <View style={{ height: 70, width: 40, alignItems: 'center', justifyContent: 'center' }}>
                        <Image
                            source={image}
                            style={styles.img_herder}
                        />
                    </View>


                    <View style={styles.header_text}>
                        <View style={styles.text_name}>
                            <Text>{Name}</Text>
                        </View>
                        <View>
                            <View style={styles.btn_next}>
                                <Image
                                    source={image_Next}
                                    style={styles.img_next}
                                />
                            </View>

                        </View>
                    </View>
                </View>



            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row'
    },
    header: {
        // backgroundColor: 'red',
        height: 70,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',



    },
    header_text: {
        backgroundColor: 'white',
        height: 60, width: '85%',
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 10,
        borderBottomColor: '#D8D8D8',
        borderBottomWidth: 1,
    },
    img_herder: {
        height: 16,
        width: 16,
        marginLeft: 15
    },
    btn_next: {

        height: 35,
        width: 35,
        borderRadius: 17.5,
        backgroundColor: '#D8D8D8',
        alignItems: 'center',
        justifyContent: 'center',



    },
    img_next: {

        height: 16,
        width: 16,
    },
    text_name: {
        flex: 1,
    }

})
