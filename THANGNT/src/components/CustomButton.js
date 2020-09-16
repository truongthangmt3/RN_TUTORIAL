import React, { Component } from 'react'
import {  
    View,
    SafeAreaView,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity
} from 'react-native'

export default class CustomButton extends Component {
    render() {
        const {img,label,isWarning, action} = this.props
        return (
            <View>
            <TouchableOpacity
            onPress={() => {
              action();
            }}>
            <View style={styles.action_block}>
              <Image style={styles.img_user} source={img} />
              <Text style={styles.profile}>{label}</Text>
              {isWarning ? <View style={styles.warning}></View> : null}
            </View>
          </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
    },
    header_block: {
      flexDirection: 'row',
      marginHorizontal: 20,
    },
    dating: {
      flex: 1,
      fontSize: 28,
      fontWeight: 'bold',
    },
    v_setting: {
      height: 30,
      width: 30,
      backgroundColor: '#e4e5ea',
      borderRadius: 15,
      alignItems: 'center',
      justifyContent: 'center',
    },
    img_setting: {
      height: 24,
      width: 24,
    },
    v_action_block: {
      flexDirection: 'row',
      margin: 20,
    },
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
      backgroundColor: 'red',
      width: 20,
      height: 20,
      right: -5,
      top: -8,
      borderRadius: 10,
    },
  });
