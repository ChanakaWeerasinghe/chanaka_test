  // /**
  //  * Sample React Native App
  //  * https://github.com/facebook/react-native
  //  *
  //  * @format
  //  * @flow
  //  */
  //
  // import React, {Component} from 'react';
  // import {Platform, StyleSheet, Text, View} from 'react-native';
  //
  // const instructions = Platform.select({
  //   ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  //   android:
  //     'Double tap R on your keyboard to reload,\n' +
  //     'Shake or press menu button for dev menu',
  // });
  //
  // type Props = {};
  // export default class App extends Component<Props> {
  //   render() {
  //     return (
  //       <View style={styles.container}>
  //         <Text style={styles.welcome}>Welcome to React Native!</Text>
  //         <Text style={styles.instructions}>To get started, edit App.js</Text>
  //         <Text style={styles.instructions}>{instructions}</Text>
  //       </View>
  //     );
  //   }
  // }
  //
  // const styles = StyleSheet.create({
  //   container: {
  //     flex: 1,
  //     justifyContent: 'center',
  //     alignItems: 'center',
  //     backgroundColor: '#F5FCFF',
  //   },
  //   welcome: {
  //     fontSize: 20,
  //     textAlign: 'center',
  //     margin: 10,
  //   },
  //   instructions: {
  //     textAlign: 'center',
  //     color: '#333333',
  //     marginBottom: 5,
  //   },
  // });
  import * as React from 'react';
  import { Text, View, StyleSheet,TextInput,Button,Alert,TouchableOpacity } from 'react-native';
  // import { Constants } from 'expo';

  // You can import from local files
  // import AssetExample from './components/AssetExample';

  // or any pure javascript modules available in npm
  // import { Card } from 'react-native-paper';

  export default class App extends React.Component {

     state = {
        email: '',
        password: ''
     }
     handleEmail = (text) => {
        this.setState({ email: text })
     }
     handlePassword = (text) => {
        this.setState({ password: text })
     }
     login = (email, pass) => {

       let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
  if(reg.test(email) === false)
    {
  alert("Email is Not Correct");
  this.setState({email:email})
  return false;
    }
  else {
    this.setState({email:email})
    console.log("Email is Correct");
  }
        alert('email: ' + email + ' password: ' + pass)
     }
     render() {
        return (
           <View style = {styles.container}>

             <Text style={styles.titleText} >
           Sign In
          </Text>
              <TextInput style = {styles.input}
                 underlineColorAndroid = "transparent"
                 placeholder = "Email"
                 placeholderTextColor = "#9a73ef"
                 autoCapitalize = "none"
                 onChangeText = {this.handleEmail}/>

              <TextInput style = {styles.input}
                 underlineColorAndroid = "transparent"
                 placeholder = "Password"
                 placeholderTextColor = "#9a73ef"
                 autoCapitalize = "none"
                 onChangeText = {this.handlePassword}/>

              <TouchableOpacity
                 style = {styles.submitButton}
                 onPress = {
                    () => this.login(this.state.email, this.state.password)
                 }>
                 <Text style = {styles.submitButtonText}> Submit </Text>
              </TouchableOpacity>
           </View>
        )
     }
  }


  const styles = StyleSheet.create({
     container: {
        paddingTop: 23
     },
     input: {
        margin: 15,
        height: 40,
        borderColor: '#7a42f4',
        borderWidth: 1
     },
     submitButton: {
        backgroundColor: '#7a42f4',
        padding: 10,
        margin: 15,
        height: 40,
     },
     submitButtonText:{
        color: 'white'
     },
      baseText: {
      fontFamily: 'Cochin',
    },
    titleText: {
      fontSize: 20
      },
  })
