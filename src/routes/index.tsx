import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Landing from '../pages/Landing';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

const Stack = createStackNavigator();

const Routes: React.FC = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#6548A3' }
    }}
  >
    <Stack.Screen name="Landing" component={Landing} />
    <Stack.Screen name="SignIn" component={SignIn} />
    <Stack.Screen name="SignUp" component={SignUp} />
  </Stack.Navigator>
);

export default Routes;
