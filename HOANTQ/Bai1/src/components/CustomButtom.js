import React, { Component } from 'react'

import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
  } from 'react-native';

export default class CustomButtom extends Component {
    render() {
        const {img,label,isWarning,action} = this.props
        return (
            <View>
                <TouchableOpacity
                    onPress={() => {
                        action();
                    }}>
                    <View style={styles.v_action_block}>
                        <Image source={img} style={styles.img_user} />
                        <Text
                            style={styles.profile}>{label}</Text>
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
      backgroundColor: 'white'
    },
    header: {
      flexDirection: 'row',
      marginHorizontal: 24,
      marginTop: 12
    },
    dating: {
      fontSize: 28,
      fontWeight: "bold",
      flex: 1
    },
    v_setting: {
      backgroundColor: '#E6E6FA',
      width: 32,
      height: 32,
      borderRadius: 16,
      alignItems: 'center',
      justifyContent: 'center'
    },
    img_setting: {
      width: 24,
      height: 24
    },
    action_block: {
      flexDirection: 'row',
      margin: 20,
    },
    v_action_block: {
      flexDirection: 'row',
      backgroundColor: '#e4e5ea',
      justifyContent: "center",
      alignItems: "center",
      padding: 6,
      borderRadius: 20,
      marginHorizontal: 4
    },
    img_user: {
      width: 18,
      height: 16,
      marginHorizontal: 6
    },
    profile: {
      fontSize: 18,
      fontWeight: 'bold',
      marginRight: 5
    },
    warning:{
      position:'absolute',
      width:20,
      height:20,
      borderRadius:10,
      backgroundColor:'red',
      top:-7,
      left:85
    },
    title_block: {
      marginLeft: 20,
      width: 370,
      height: 440,
      borderRadius: 10,
      backgroundColor: 'white',
      elevation: 13
    },
    v_body: {
      padding: 16,
      marginLeft: 8
    },
    text_body: {
      fontWeight: 'bold',
      fontSize: 24,
    },
    img_girl: {
      width: 370,
      height: 300,
      marginTop: 38,
    },
    action_close: {
      flexDirection: 'row',
      position: 'absolute',
      marginTop: 310,
      marginLeft: 240,
    },
    v_close: {
      backgroundColor: 'white',
      width: 50,
      height: 50,
      borderRadius: 100,
      marginLeft: 6,
      elevation:20
      
    },
    img_close: {
      width: 35,
      height: 35,
      marginHorizontal: 8,
      marginTop: 8
    },
    story: {
      margin: 12,
      borderTopWidth: 0.5,
      borderBottomWidth: 0.5,
    },
    text_story: {
      marginTop: 6,
      fontSize: 18,
      fontWeight: 'bold'
    },
    story_block: {
      width: 70,
      height: 70,
      backgroundColor: '#e4e5ea',
      borderRadius: 100,
      borderWidth: 3,
      margin: 5,
      borderColor: '#819F',
      marginBottom: 26,
      alignItems: 'center'
    },
    img_story: {
      width: 30,
      height: 30,
      margin: 17.5,
      marginBottom: 20,
      justifyContent: "center"
    },
    img_story2:
    {
      width: 60,
      height: 60,
      marginTop: 1.5,
      borderRadius: 100,
      marginBottom: 7
  
    },
    footer: {
      borderTopWidth: 1,
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginHorizontal: 8
    },
    img_footer: {
      padding: 16,
      margin: 8,
      marginLeft: 4
    }
  });
