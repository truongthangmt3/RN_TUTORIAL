import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Image, SafeAreaView, FlatList } from 'react-native';
import ListData from './ListData'


export default class NotificationScreen extends Component {

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.v_header}>
                    <Text style={styles.txt_header}>Earlier</Text>
                </View>
                <FlatList
                    style={styles.container_List}
                    data={ListData}
                    renderItem={({ item, index }) => {
                        return (
                            <FlatListItem item={item} index={index}>

                            </FlatListItem>);
                    }}
                >
                </FlatList>

            </SafeAreaView>
        );
    }
}

class FlatListItem extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>sda</Text>
            </View>

        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',

    },
    container_List: {
        flex: 1,
        marginTop: 13,
        flexDirection: 'column',


    },
    v_header: {
        marginTop: 10,
        marginLeft: 15,


    },
    txt_header: {
        fontSize: 16,
        color: 'black',
        fontWeight: '600',
    }
})
