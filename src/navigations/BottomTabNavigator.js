import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StyleSheet} from 'react-native';
import {COLORS, ROUTES} from '../constants';
import {Home, Favorites} from '../screens';
import Icon from 'react-native-vector-icons/Entypo';
import CustomTabBar from '../components/CustomTabBar';

const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <Tab.Navigator
      tabBar={props => <CustomTabBar {...props} />}
      screenOptions={({route}) => ({
        headerShown: true,
        tabBarShowLabel: false,
        headerTitleAlign: 'center',
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: 'red',
        },
        tabBarInactiveTintColor: COLORS.white,
        tabBarStyle: styles.tabBarStyle,
        tabBarActiveTintColor: COLORS.white,
        tabBarIcon: ({color}) => {
          let iconName;

          if (route.name === ROUTES.HOME_TAB) {
            iconName = 'home';
          } else if (route.name === ROUTES.Favorites) {
            iconName = 'star';
          }
          return <Icon name={iconName} size={50} color={color} />;
        },
      })}>
      <Tab.Screen name={ROUTES.HOME_TAB} component={Home} />
      <Tab.Screen
        name={ROUTES.Favorites}
        component={Favorites}
        screenOptions={({}) => ({
          headerShown: false,
        })}
      />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;

const styles = StyleSheet.create({
  tabBarStyle: {
    position: 'absolute',
    borderTopWidth: 2,
    borderTopColor: 'grey',
    backgroundColor: 'black',
    height: 90,
  },
});
