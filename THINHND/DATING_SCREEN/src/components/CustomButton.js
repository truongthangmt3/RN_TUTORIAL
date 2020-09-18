import React, { Component } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Image,
    TouchableOpacity,
    Dimensions
} from 'react-native';

export default class CustomButton extends Component {

    render() {
        const { img, label, isWarning, action } = this.props
        return (
            <View>
                <TouchableOpacity
                    onPress={() => {
                        action();
                    }}>
                    <View style={styles.action_block}>
                        <Image
                            resizeMode='contain'
                            source={img}
                            style={styles.img_user} />
                        < Text style={styles.profile}>{label}</Text>
                        {isWarning ? <View style={styles.warning}></View> : null}
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({

    action_block: {
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#e4e5ea',
        borderRadius: 20,
        marginLeft: 8,
        padding: 8
    },
    img_user: {
        width: 17,
        height: 17,
        marginHorizontal: 7,
    },
    profile: {
        fontSize: 15,
        fontWeight: '600',
        marginRight: 7
    },
    warning: {
        position: 'absolute',
        backgroundColor: 'red',
        width: 20,
        height: 20,
        right: -5,
        top: -8,
        borderRadius: 10,
    }
})

// import React, { Component } from 'react';
// import { View, Text } from 'react-native';

// export default class CustomButton extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//         };
//     }

//     render() {
//         return (
//             <View>
//                 <Text> CustomButton </Text>
//             </View>
//         );
//     }
// }
