# React-Native-FBSDK-Example
==============================

[![react-native](https://img.shields.io/badge/react--native-0.42.0-yellow.svg)](https://github.com/facebook/react-native)
[![react-native-fbsdk](https://img.shields.io/badge/react--native--fbsdk-v0.5.0-blue.svg)](https://github.com/facebook/react-native-fbsdk)

Setting up **Facebook SDK** for **RN** apps in **iOS** is not an easy one. There are some manual steps to be configured in Xcode. Since I found it difficult, I have aggregated the steps for setting up the facebook login for react native app.

## Example:

![Login](https://raw.githubusercontent.com/lakshmantgld/react-native-fbsdk-example/master/readmeFiles/Login.png)
![Accept Permission](https://raw.githubusercontent.com/lakshmantgld/react-native-fbsdk-example/master/readmeFiles/Accept%20Permission.png)

## Xcode Setup for FBSDK:

Since this is going to be a long list, I have written it in a [separate Readme](https://github.com/lakshmantgld/react-native-fbsdk-example/blob/master/readmeFiles/fbsdkXcode.md).


## Facebook component in react-native:

You can setup FB login in two ways:

**1. Customized FB Login button** as shown in [js/components/fbLogin.js](https://github.com/lakshmantgld/react-native-fbsdk-example/blob/master/js/components/fbLogin.js):

```js
import { LoginManager } from 'react-native-fbsdk';

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
```

**2. FB's own Login button** as shown in [js/components/fbLoginButton.js](https://github.com/lakshmantgld/react-native-fbsdk-example/blob/master/js/components/fbLoginButton.js):

```js
import { LoginManager } from 'react-native-fbsdk';

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
            alert(data.accessToken.toString())
          }
        )
      }
    }
  }
  onLogoutFinished={() => alert("logout.")}/>
```

**Using GraphAPI:** (AccessToken is required to make GraphAPI requests) as shown in [js/components/fbGraphAPIRequest.js](https://github.com/lakshmantgld/react-native-fbsdk-example/blob/master/js/components/fbGraphAPIRequest.js):

```js
import { LoginButton, AccessToken, GraphRequestManager, GraphRequest } from 'react-native-fbsdk';

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
```

## Contribution:
Issues with setting up fbsdk are welcomed. Also looking for contributor for fbsdk-android.
