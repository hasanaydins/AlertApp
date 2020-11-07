import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { Button, Text } from 'react-native';
import DetailHome from './DetailHome';
import BoxCenter from '../components/BoxCenter';
import SvgBookmark from '../components/icons/Bookmark';

const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator /* headerMode='none'*/>
      <HomeStack.Screen
        name='Home'
        component={HomeScreen}
        options={() => {
          return {
            headerShown: false,
          };
        }}
      />
      <HomeStack.Screen
        name='Details'
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

function HomeScreen({ navigation }) {
  return (
    <BoxCenter>
      <Text mb={40}>Home screen</Text>
      <Button
        title='Go to Details'
        onPress={() => {
          /* 1. Navigate to the Details route with params */
          navigation.navigate('Details', {
            paramID: 86,
            paramDesc: 'anything you want here',
            paramHeader: 'Custom profile header',
          });
        }}
      />
    </BoxCenter>
  );
}

export default HomeStackScreen;
