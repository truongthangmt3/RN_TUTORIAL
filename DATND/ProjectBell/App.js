/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  FlatList,
  Image
} from 'react-native';
import flatListData from './data/FlData';
import FlItem from './component/FlItem';
import CustomTab from './component/CustomTabs';
import icon from './assets/imge';

// class FlItem extends Component {

//   render() {
//     const { icon, img, name, key } = this.props.item;

//     return (
//       <View style={styles.flItem} >
//         <Image style={styles.itemImg}
//           source={{ uri: img }}></Image>
//         <Text style={styles.itemName}>{name}</Text>
//         <Image style={styles.itemIc}
//           source={icon}></Image>
//       </View>
//     );
//   }

// }

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.body}>
        <ScrollView style={styles.scroll}>
          <Text style={styles.Earlier}>
            Earlier
         </Text>
          <FlatList
            // ref={"flatList"}
            data={flatListData}
            renderItem={({ item, index }) => {
              return (<FlItem item={item} index={index}></FlItem>);
            }}

          />
        </ScrollView>
      </View>
      <View style={styles.nav_tabs}>
        {/* <CustomTab img={icon.ic_home} /> */}

        <CustomTab img={require('./assets/ic-menu.png')} />

        <CustomTab img={require('./assets/ic-menu.png')} />

        <CustomTab img={require('./assets/ic-menu.png')} />

        <CustomTab img={require('./assets/ic-menu.png')} />
        <CustomTab img={require('./assets/ic-menu.png')} />
        <CustomTab img={require('./assets/ic-menu.png')} />



      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: 'blue'

  },
  Earlier: {

  },
  body: {
    flex: 9.5,
    backgroundColor: 'green'
  },
  // scroll: {
  //   flex: 2,
  //   backgroundColor: 'pink'

  // },


  nav_tabs: {
    flex: 0.6,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: 'red'
  },


});


export default App;
