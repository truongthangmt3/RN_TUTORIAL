import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
export class CustomButton extends Component {
    render() {
        const { img, label, isWarning, action, img1 } = this.props;
        return (
            <View>
                <TouchableOpacity
                    onPress={() => {
                        action();
                    }}>
                    <View style={styles.action_block}>
                        <Image style={styles.img_user} source={img} />
                        <Text style={styles.profile}>{label}</Text>
                        {isWarning
                            ? <View style={styles.warning}><Image style={styles.img_mark} source={img1} /></View>
                            : null
                        }
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    img_user: {
        width: 24,
        height: 24,
        marginHorizontal: 4,
    },
    action_block: {
        marginLeft: 10,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#e4e5ea',
        borderRadius: 20,
        padding: 5,
    },
    profile: {
        marginRight: 5,
        fontWeight: 'bold',
    },
    warning: {
        position: 'absolute',
        backgroundColor: 'white',
        width: 20,
        height: 20,
        right: -5,
        top: -8,
        borderRadius: 10,
        alignItems: 'center',
    },
    img_mark: {
        width: 22,
        height: 22,
    },
});
export default CustomButton;
