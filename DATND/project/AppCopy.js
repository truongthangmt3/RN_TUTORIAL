// import React, { useState } from 'react'
// import { StyleSheet, Text, View, Picker } from 'react-native'
// import HomeScreen from './src/sceens/HomeScreen'
// import DatingScreen from './src/sceens/DatingScreen'
// import moduleName from '@react-navigation/native'

// export default function AppCopy() {
//     const [selectedValue, setSelectedValue] = useState("java");
//     return (

//         <Picker
//             selectedValue={selectedValue}
//             style={{ height: 50, width: 150 }}
//             onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
//         >
//             <Picker.Item label="Java" value="java" />
//             <Picker.Item label="JavaScript" value="js" />
//             <Picker.Item label="JavaScript" value="js1" />
//             <Picker.Item label="JavaScript" value="js2" />
//             <Picker.Item label="JavaScript" value="js3" />
//         </Picker>

//     )
// }

// const styles = StyleSheet.create({})

import React, { Component } from 'react'
import { Text, Modal, Dimensions, TouchableWithoutFeedback, StyleSheet, View } from 'react-native'

export default class AppCopy extends Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false
        }
        show = () => {
            this.setState({ show: true })

        }
        close = () => {
            this.setState({ show: false })
        }
    }

    render() {
        return (
            <Modal
                animationType={'fade'}
                transparent={true}
                visible={show}
                onRequestClose={this.close}
            >

            </Modal>
        )
    }
}

const styles = StyleSheet.create({})


