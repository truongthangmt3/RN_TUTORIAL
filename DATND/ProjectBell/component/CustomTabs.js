import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity, Image } from 'react-native'

export default class CustomTabs extends Component {
    render() {
        return (
            <TouchableOpacity >
                <View style={styles.Tab_Ic}>

                    <Image source={this.props.img} style={{ width: 40, height: 40 }}></Image>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({

})
