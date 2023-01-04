import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {COLORS, ROUTES} from '../constants';
import {Favorites} from '../screens';
import BottomTabNavigator from './BottomTabNavigator';
import Icon from 'react-native-vector-icons/Ionicons';
import CustomDrawer from '../components/CustomDrawer';

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: COLORS.primary,
        drawerActiveTintColor: COLORS.white,
        drawerLabelStyle: {
          marginLeft: -20,
        },
      }}>
      <Drawer.Screen
        name={ROUTES.HOME_DRAWER}
        component={BottomTabNavigator}
        options={{
          title: 'Logout',
          drawerIcon: ({focused, color, size}) => (
            <Icon name="exit" size={18} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
