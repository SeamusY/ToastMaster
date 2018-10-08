import React, {Component} from 'react';
import {Text, View, TextInput, StyleSheet, Button, Alert} from 'react-native';

class Login extends Component<{},{}> {
  constructor(props:any){
    super(props)
    this.state={
      username:"",
      password:""
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Logo</Text>
        <TextInput placeholder="Username" onChange={(username)=>this.setState(username)}/>
        <TextInput placeholder="Password" onChange={(password)=>this.setState(password)}/>
        <Button title="Login" onPress={()=> alert("HI")}/>
      </View>
    );
  }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    }
  });

export default Login; 