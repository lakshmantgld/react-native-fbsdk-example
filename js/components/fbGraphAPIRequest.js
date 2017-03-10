import React, { Component, PropTypes } from 'react';
import { LoginButton, AccessToken, GraphRequestManager, GraphRequest } from 'react-native-fbsdk';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

class FbGraphAPIRequest extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render() {
    return (
      <View style={styles.container}>
      <LoginButton
        publishPermissions={["publish_actions"]}
        onLoginFinished={
          (error, result) => {
            if (error) {
              alert("login has error: " + result.error);
            } else if (result.isCancelled) {
              alert("login is cancelled.");
            } else {
              AccessToken.getCurrentAccessToken().then(
                (data) => {
                  let accessToken = data.accessToken;
                  alert(accessToken.toString());

                  const responseInfoCallback = (error, result) => {
                    if (error) {
                      console.log(error)
                      alert('Error fetching data: ' + error.toString());
                    } else {
                      console.log(result)
                      alert('Success fetching data: ' + result.toString());
                    }
                  }

                  const infoRequest = new GraphRequest(
                    '/me',
                    {
                      accessToken: accessToken,
                      parameters: {
                        fields: {
                          string: 'email,name,first_name,middle_name,last_name'
                        }
                      }
                    },
                    responseInfoCallback
                  );

                  // Start the graph request.
                  new GraphRequestManager().addRequest(infoRequest).start();

                })
            }
          }
        }
        onLogoutFinished={() => alert("logout.")}/>
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

export default FbGraphAPIRequest;
