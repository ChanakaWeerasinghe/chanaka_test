 
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


     ///validations
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
