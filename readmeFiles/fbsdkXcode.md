## Instructions for FBSDK setup:
This [video](https://www.youtube.com/watch?v=rAXVKapP5cM&t=441s) shows step-by-step instructions for setting up the facebook-sdk for react-native-iOS. Since, FB keeps on changing the UI of developers site, I am documenting below the fbsdk setup.



1. Create a react-native app using react-native-cli with the following command:
```
react-native init <app-name>
```
  1. Install the npm modules in the package.json using either:
  ```
  cd <app-name> && yarn install or npm install
  ```
  2. Install the **react-native-fbsdk** and link the binary:

  ```
  react-native install react-native-fbsdk
  react-native link react-native-fbsdk  
  ```
2. Now, Create a new app in [developers.facebook.com](https://developers.facebook.com/).
  1. Select **Add a New App** in the right corner.
  2. Fill the display-name, email, category and pass the security-check.

3. Navigate to [iOS-setup ](https://developers.facebook.com/docs/ios/getting-started/) and click **Quick Start for iOS** button.
  1. Select your app and follow the steps shown there.
  2. Download the facebook sdk and store to **~/Documents/**.
  3. Open your ios/<app-name>.xcodeproj in Xcode.
  4. Add the downlaoded frameworks to your Xcode project. This step is a little trickier, watch the [video](https://youtu.be/rAXVKapP5cM?t=4m17s) for a clear understanding.
  5. Make sure you have the frameworks in build phases -> Linked libraries.
  6. Now, Configure your **info.plist** as said or watch the [video](https://youtu.be/rAXVKapP5cM?t=6m10s) for a clear understanding.
  7. Copy your bundle-identifier which is in build settings to developers portal in fb.
  8. The manual code modification to **AppDelegate.m** is the trickiest part. Watch the [video](https://youtu.be/rAXVKapP5cM?t=6m27s) for a clear understanding.
  9. Ufff!! End of Xcode setup.

4. Now, add the javascript code to  your **index.ios.js** as described in this [section](https://github.com/lakshmantgld/react-native-fbsdk-example#facebook-component-in-react-native).
