import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../screens/login';
import FeedScreen from '../screens/Feed';

export type RootStackParamList = {
  login: undefined;
  feed: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="feed">
        <Stack.Screen
          name="login"
          component={LoginScreen}
          options={{header: () => null}}
        />
        <Stack.Screen
          name="feed"
          component={FeedScreen}
          options={{header: () => null}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
