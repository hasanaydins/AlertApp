import {createStackNavigator} from '@react-navigation/stack';
import * as React from 'react';
import DetailSearch from './DetailSearch';
import Box from '../components/Box';
import Text from '../components/Text';
import Theme from '../utils/theme';

const SearchStack = createStackNavigator();

function SearchStackScreen() {
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen
        name="Search"
        component={Search}
        options={() => {
          return {
            headerShown: false,
          };
        }}
      />
      <SearchStack.Screen name="Details" component={DetailSearch} />
    </SearchStack.Navigator>
  );
}

function Search({props}) {
  return (
    <Box bg="#F3F3F3" flex={1} px={24} py={24}>
      <Text fontSize={20} fontWeight="bold">
        Send SMS
      </Text>

      <Box
        mt={32}
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center">
        <Text fontSize={16} fontWeight="bold">
          Message Content
        </Text>
        <Text fontSize={14} color={Theme.colors.oneRed}>
          Edit
        </Text>
      </Box>

      <Box mt={18} borderRadius={8} bg="white" p={16}>
        <Text fontSize={16}>
          This is an emergency alert. I need urgent help.
        </Text>
        <Text fontSize={16} mt={8}>
          My Last Location at 23 Oct 2020 13:25: [location]
        </Text>
      </Box>

      <Box
        mt={42}
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center">
        <Text fontSize={16} fontWeight="bold">
          Added Numbers
        </Text>
        <Text fontSize={14} color={Theme.colors.oneRed}>
          Add
        </Text>
      </Box>

      <Box flexDirection="row" alignItems="center" mt={16}>
        <Box borderRadius={9999} size={32} bg="#D6D6D6" />
        <Text fontSize={18} ml={16}>
          Leila Vaughn
        </Text>
      </Box>
      <Box flexDirection="row" alignItems="center" mt={16}>
        <Box borderRadius={9999} size={32} bg="#D6D6D6" />
        <Text fontSize={18} ml={16}>
          Lina Bullock
        </Text>
      </Box>
      <Box flexDirection="row" alignItems="center" mt={16}>
        <Box borderRadius={9999} size={32} bg="#D6D6D6" />
        <Text fontSize={18} ml={16}>
          Nicholas Jensen
        </Text>
      </Box>
      <Box flexDirection="row" alignItems="center" mt={16}>
        <Box borderRadius={9999} size={32} bg="#D6D6D6" />
        <Text fontSize={18} ml={16}>
          Brother
        </Text>
      </Box>
    </Box>
  );
}

export default SearchStackScreen;
