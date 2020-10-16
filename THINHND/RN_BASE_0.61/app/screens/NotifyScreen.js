// import React, { Component } from "react";
// import { Text, SafeAreaView } from "react-native";

// export class NotifyScreen extends Component {
//   render() {
//     return (
//       <SafeAreaView>
//         <Text> NotifyScreen </Text>
//       </SafeAreaView>
//     );
//   }
// }

// export default NotifyScreen;

import React, { Component } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import CustomBlockHeader from "./CustomComponent/CustomBlockHeader";

import R from "@R";

export default class NotificationScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <CustomBlockHeader text="Thông báo" />
        <CustomOnenotify
          icon={R.images.ic_pheduyet}
          text="This is a notification"
          date="1/12020"
        />
        <View style={styles.v_line} />
        <CustomOnenotify
          icon={R.images.ic_tuchoi}
          text="This is a notification"
          date="1/12020"
        />
        <View style={styles.v_line} />
        <CustomOnenotify
          icon={R.images.ic_timkiem}
          text="This is a notification"
          date="1/12020"
        />
        <View style={styles.v_line} />
        <CustomOnenotify
          icon={R.images.ic_canmua}
          text="This is a notification"
          date="1/12020"
        />
        <View style={styles.v_line} />
        <View style={styles.v_blockemty} />
      </SafeAreaView>
    );
  }
}

class CustomOnenotify extends Component {
  render() {
    const { icon, text, date } = this.props;
    return (
      <View style={styles.v_onenotify}>
        <Image style={styles.v_iconnotify} source={icon} />
        <View>
          <Text style={styles.t_notify}>{text}</Text>
          <View style={styles.v_textdate}>
            <Text style={styles.t_date}>{date}</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  v_blockheader: {
    flex: 1,
    backgroundColor: "#69AAFF",
    justifyContent: "center"
  },
  t_blockheader: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 20,
    marginLeft: 10
  },
  v_notice: {
    flex: 4,
    padding: 10
  },
  v_onenotify: {
    flex: 1,
    flexDirection: "row",
    marginLeft: 20,
    marginRight: 35,
    marginTop: 15,
    alignItems: "center"
  },
  v_iconnotify: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 20,
    resizeMode: "cover"
  },
  t_notify: {
    flex: 1,
    fontSize: 15,
    flexWrap: "wrap",
    marginRight: 35
  },
  v_line: {
    height: 1,
    width: 262,
    marginLeft: 88,
    backgroundColor: "#727C8E"
  },
  v_textdate: {
    width: 262
  },
  t_date: {
    color: "#515C6F",
    fontWeight: "200",
    alignSelf: "flex-end",
    fontSize: 14
  },
  v_blockemty: {
    flex: 4
  },
  v_bottomtab: {
    flex: 1
  }
});
