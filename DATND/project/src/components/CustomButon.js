import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

export default class CustomButon extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const { img, title, isbell, action } = this.props;
        return (
            <View>
                <TouchableOpacity
                    onPress={() => {
                        action();
                    }}>
                    <View style={styles.action_block}>
                        <Image
                            style={styles.img_action}
                            source={img} />
                        <Text style={styles.title_action}>{title} </Text>
                        {isbell ? <View style={styles.is_bell}><Text>!</Text></View> : null}
                    </View>
                </TouchableOpacity>
            </View>
        );
    }

}
const styles = StyleSheet.create({
    action_block: {
        width: 110,
        height: 30,
        marginLeft: 10,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        borderRadius: 30,
        backgroundColor: '#C0C0C0',
        opacity: 0.8,
        //backgroundColor: 'pink',
    },
})
