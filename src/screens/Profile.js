import {createStackNavigator} from '@react-navigation/stack';
import * as React from 'react';
import DetailProfile from './DetailProfile';
import {Platform} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import Box from '../components/Box';
import Text from '../components/Text';
import Button from '../components/Button';
import HTML_FILE from '../../resources/sayfa.html';
import BoxCenter from '../components/BoxCenter';
import RadialGradient from 'react-native-radial-gradient';
const isAndroid = Platform.OS === 'android';

const ProfileStack = createStackNavigator();

function ProfileStackScreen() {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name="Profile"
        component={Profile}
        options={() => {
          return {
            headerShown: false,
          };
        }}
      />
      <ProfileStack.Screen name="Details" component={DetailProfile} />
    </ProfileStack.Navigator>
  );
}

function Profile({navigation}) {
  return (
    <Box bg="#F3F3F3" flex={1} px={24} py={24}>
      <Text fontSize={20} fontWeight="bold">
        News
      </Text>

      <Box flexDirection="row" mt={24}>
        <Button
          as={LinearGradient}
          colors={['#FF3E4A', '#CA2D37']}
          py={10}
          px={32}
          borderRadius={6}
          mr={14}>
          <Button>
            <Text color="white" fontWeight="bold">
              Earthquakes
            </Text>
          </Button>
        </Button>
        <Button bg="white" py={10} px={32} borderRadius={6} mr={14}>
          <Text color="black">Fires</Text>
        </Button>
        <Button bg="white" py={10} px={32} borderRadius={6} mr={14}>
          <Text color="black">Floods</Text>
        </Button>
      </Box>
    </Box>
  );
}

export default ProfileStackScreen;
