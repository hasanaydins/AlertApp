import {createStackNavigator} from '@react-navigation/stack';
import * as React from 'react';
import DetailHome from './DetailHome';
import Box from '../components/Box';
import Button from '../components/Button';
import Text from '../components/Text';
import SvgBookmark from '../components/icons/Bookmark';
import SvgLogoshadow from '../components/icons/Logoshadow';
import SvgLogopress from '../components/icons/Logopress';
import SvgMenu from '../components/icons/Menu';

import RadialGradient from 'react-native-radial-gradient';
import {useState} from 'react';

const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator /* headerMode='none'*/>
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={() => {
          return {
            headerShown: false,
          };
        }}
      />
      <HomeStack.Screen
        name="Details"
        component={DetailHome}
        options={() => {
          return {
            title: 'sdadad',
            headerStyle: {
              backgroundColor: 'orange',
              shadowColor: 'transparent',
            },
            headerLeft: () => <SvgBookmark />,
            headerRight: () => <SvgBookmark />,
          };
        }}
      />
    </HomeStack.Navigator>
  );
}

function HomeScreen({navigation}) {
  const [isPlaying, setisPlaying] = useState(false);

  return (
    <Box
      as={RadialGradient}
      flex={1}
      colors={['#FF2F54', '#C82731']}
      stops={[0.1, 1.0]}
      alignItems="center"
      justifyContent="center"
      center={[200, 300]}
      radius={350}>
      <Text
        position="absolute"
        color="white"
        top="25%"
        fontWeight="bold"
        fontSize={16}>
        Press alert button to bell.
      </Text>

      <Button onPress={() => setisPlaying(!isPlaying)}>
        {isPlaying ? <SvgLogopress /> : <SvgLogoshadow />}
      </Button>

      <Box bottom="23%" position="absolute" width="75%">
        <Text color="white" fontWeight="400" fontSize={16} textAlign="center">
          Or press the menu button to customize the alert sound.
        </Text>
      </Box>

      <Button alignSelf='flex-end' mr='12%' position='absolute' bottom='14%'>
        <SvgMenu color="white" width={34}/>
      </Button>
    </Box>
  );
}

export default HomeStackScreen;
