import {createStackNavigator} from '@react-navigation/stack';
import * as React from 'react';
import DetailSearch from './DetailSearch';
import Box from '../components/Box';
import Text from "../components/Text";
const SearchStack = createStackNavigator();

function SearchStackScreen() {
  return (
    <SearchStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <SearchStack.Screen name="Search" component={Search} />
      <SearchStack.Screen name="Details" component={DetailSearch} />
    </SearchStack.Navigator>
  );
}

function Search({props}) {


  return (
    <Box style={{flex: 1}}>
        <Text>sdds</Text>
    </Box>
  );
}

export default SearchStackScreen;
