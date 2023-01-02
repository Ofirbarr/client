import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {COLORS, ROUTES} from '../constants';
import DrawerNavigator from './DrawerNavigator';
import Register from '../screens/auth/Register';
import Login from '../screens/auth/Login';

const Stack = createStackNavigator();
// Navigator, Screen, Group

function AuthNavigator() {
  console.log(Stack);
  return (
    <Stack.Navigator screenOptions={{}} initialRouteName={ROUTES.REGISTER}>
      <Stack.Screen
        name={ROUTES.LOGIN}
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={ROUTES.REGISTER}
        component={Register}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={ROUTES.HOME}
        component={DrawerNavigator}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default AuthNavigator;
