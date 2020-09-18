import React, { Component } from 'react'
import { Text, StyleSheet, View, Image } from 'react-native'

export default class FlItem extends Component {
    render() {
        const { icon, img, name, key } = this.props.item;

        return (
            <View style={styles.flItem} >
                <View style={styles.itemImg}>
                    <Image style={styles.itemImg}
                        source={{ uri: img }}></Image>
                </View>
                <View style={styles.itemName}>
                    <Text style={styles.itemName}>{name}</Text>
                </View>
                <View style={styles.itemIc}>
                    <Image style={styles.itemIc}
                        source={icon}></Image>
                </View>



            </View>
        );
    }
}

const styles = StyleSheet.create({
    flItem: {
        flex: 1,
        // backgroundColor: 'pink',
        marginTop: 10,
        flexDirection: 'row'


    },
    itemImg: {
        flex: 1,
    },
    itemName: {
        flex: 8,

    },

    itemIc: {
        flex: 1,

    },
})
