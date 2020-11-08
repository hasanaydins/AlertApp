import {createStackNavigator} from '@react-navigation/stack';
import * as React from 'react';
import DetailProfile from './DetailProfile';
import {Platform} from 'react-native';

import {WebView} from 'react-native-webview';
import Box from '../components/Box';
import Text from '../components/Text';
import Button from '../components/Button';
import HTML_FILE from '../../resources/sayfa.html';
import BoxCenter from '../components/BoxCenter';
const isAndroid = Platform.OS === 'android';

const ProfileStack = createStackNavigator();

function ProfileStackScreen() {
  return (
    <ProfileStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <ProfileStack.Screen name="Profile" component={Profile} />
      <ProfileStack.Screen name="Details" component={DetailProfile} />
    </ProfileStack.Navigator>
  );
}

function Profile({navigation}) {
  {
    // Load HTML from a local file
    if (isAndroid) {
      return (
        <Box flex={1}>
          <WebView
            style={{flex: 1}}
            originWhitelist={['*']}
            source={{ uri: 'file:///android_asset/sayfa.html' }}
            javaScriptEnabled={true}
            domStorageEnabled={true}
          />
        </Box>
      );
    } else {
      return (
        <Box flex={1}>
          <WebView
            style={{flex: 1}}
            originWhitelist={['*']}
            source={HTML_FILE}
            javaScriptEnabled={true}
            domStorageEnabled={true}
          />
        </Box>
      );
    }
  }
}

export default ProfileStackScreen;
