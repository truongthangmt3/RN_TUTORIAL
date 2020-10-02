import React, { Component } from 'react'
import 'react-native-gesture-handler';
import AppNavigator from './src/navigation/AppNavigator'
import NavigationUtil from './src/navigation/NavigationUtil';





class App extends Component {
    render() {
        return (
            <AppNavigator
                ref={ref => NavigationUtil.setTopLevelNavigator(ref)}
            />
        );
    }
};


export default App;


// const Tab = createBottomTabNavigator();

// const Home = () => {
//     return (
//         <View style={{ width: '100%', height: 100 }}><Text>Hello</Text></View>
//     )
// }

// const Details = () => {
//     return (
//         <View style={styles.container}><Text>Details</Text></View>
//     )
// }

// const Prifile = () => {
//     return (
//         <View style={styles.container}><Text>Prifile</Text></View>
//     )
// }
// const App = () => {
//     return (
//         <View></View>
        //    <NavigationContainer>
        //       <Tab.Navigator
        //         tabBarOptions={{
        //           labelStyle: {
        //             //  color: 'red'
        //             fontSize: 20,


        //           },
        //           activeTintColor: 'yellow',//khi nhan
        //           inactiveTintColor: 'black',     //khi ko nhan 
        //         }}
        //       //tabBar={() => <Home />} //muon truyen component vao thi dung tabBar
        //       >
        //         <Tab.Screen name='Home' component={HomeScreen}
        //           options={{
        //             tabBarLabel: 'Homehhhhh',
        //             //tabBar tabBarIcon: () => <View><Image style={{ width: 40, height: 40 }} source={require('./assest/ic_user.png')} /></View>
        //           }}
        //         />
        //         <Tab.Screen name='Detail' component={DatingScreen}
        //           options={{
        //             tabBarLabel: 'Detailll',
        //             // tabBarIcon: () => <Ionicons name='md-menu' size={30} />
        //           }}
        //         />
        //         {/* <Tab.Screen name='Hook' component={HookHomeScreen}
        //           options={{
        //             tabBarLabel: 'Hook'
        //           }}
        //         /> */}
        //       </Tab.Navigator>
        //     </NavigationContainer>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center'
//     }

// })
// export default App


