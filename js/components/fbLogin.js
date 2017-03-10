import React, { Component, PropTypes } from 'react';
import { LoginManager } from 'react-native-fbsdk';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

class FbLogin extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  _fbAuth() {
    LoginManager.logInWithReadPermissions(['public_profile']).then(function(result) {
      if (result.isCancelled) {
        console.log("Login Cancelled");
      } else {
        console.log("Login Success permission granted:" + result.grantedPermissions);
      }
    }, function(error) {
       console.log("some error occurred!!");
    })
  }

  render() {
    return (
      <View style={styles.container}>
       <TouchableOpacity onPress={this._fbAuth}>
         <Text>
           Login With Facebook
         </Text>
       </TouchableOpacity>
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
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default FbLogin;
