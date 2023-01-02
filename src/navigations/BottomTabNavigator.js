import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  StyleSheet,
  Platform,
  TouchableOpacity,
  Image,
  View,
  Text,
} from 'react-native';
import {Icons} from '../components/Icons';
import {COLORS, ROUTES} from '../constants';
import {Home, Favorites} from '../screens';
import Icon from 'react-native-vector-icons/Entypo';
import CustomTabBarButton from '../components/CustomTabBarButton';
import CustomTabBar from '../components/CustomTabBar';
import {useNavigation} from '@react-navigation/native';
import HomeIcon from '../components/HomeIcon';

const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
  const navigation = useNavigation();

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
        tabBarIcon: ({color, size, focused}) => {
          let iconName;

          if (route.name === ROUTES.HOME_TAB) {
            iconName = 'home';
          } else if (route.name === ROUTES.Favorites) {
            iconName = 'star';
          }
          return <Icon name={iconName} size={50} color={color} />;
        },
      })}>
      <Tab.Screen
        name={ROUTES.HOME_TAB}
        component={Home}
        // tabBarIcon={HomeIcon}
        // options={{
        //   tabBarButton: props => <CustomTabBarButton route="home" {...props} />,
        // }}
      />
      <Tab.Screen
        name={ROUTES.Favorites}
        component={Favorites}
        screenOptions={({}) => ({
          headerShown: false,
        })}
        // options={{
        //   tabBarButton: props => <CustomTabBarButton {...props} />,
        // }}
      />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;

const styles = StyleSheet.create({
  tabBarStyle: {
    position: 'absolute',
    // backgroundColor: COLORS.transparent,
    borderTopWidth: 2,
    borderTopColor: 'grey',
    backgroundColor: 'black',
    height: 90,
  },
});
