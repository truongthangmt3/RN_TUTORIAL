import React, {Component} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Keyboard,
  StyleSheet,
  Text,
} from 'react-native';

// import R from '@R';
// import Icon from './Icon';

import {Header} from 'react-native-elements';
import NavigationUtil from '../navigation/NavigationUtil';

export default function JSHeader({
  color,
  back,
  titleHeader,
  rightComponent,
  leftComponent,
  onBack,
  height,
}) {
  return (
    <Header
      // placement="center"
      containerStyle={{
        backgroundColor: 'blue',
        borderBottomColor: 'blue',
        zIndex: 3,
        height: height || 80,
      }}
      leftComponent={
        leftComponent
        // leftComponent || (
        //   <View>
        //     {back && (
        //       <TouchableOpacity
        //         style={styles.leftComp}
        //         onPress={onBack || NavigationUtil.goBack}>
        //         <Icon.Ionicons
        //           name="chevron-back"
        //           size={35}
        //           color="white"
        //         />
        //       </TouchableOpacity>
        //     )}
        //   </View>
        // )
      }
      centerComponent={
        <Text
          style={[
            {
              fontSize: 18,
            },
            {color: color || 'white'},
          ]}>
          Khách hàng quan tâm
        </Text>
      }
      rightComponent={rightComponent && rightComponent}
      statusBarProps={{
        barStyle: 'light-content',
        translucent: true,
        backgroundColor: 'transparent',
      }}
    />
  );
}

const styles = StyleSheet.create({
  leftComp: {
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  rightComp: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    alignSelf: 'center',
  },
});
