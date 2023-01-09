import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {BottomTabBar} from '@react-navigation/bottom-tabs';
import {COLORS} from '../constants';
import {Badge} from 'react-native-elements';
import {useSelector} from 'react-redux';

const CustomTabBar = props => {
  let badge = useSelector(
    state => state.moviesSlice.favoritesNotificationBadge,
  );

  return (
    <View>
      <View style={styles.tabBar} />
      <BottomTabBar {...props} />
      {badge != 0 && (
        <View
          style={{
            position: 'absolute',
            width: 30,
            height: 30,
            borderRadius: 500,
            backgroundColor: 'red',
            borderWidth: 1,
            borderColor: 'black',
            bottom: 40,
            right: 65,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{color: 'white'}}>{badge}</Text>
        </View>
      )}
    </View>
  );
};

export default CustomTabBar;

const styles = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    right: 10,
    left: 10,
    bottom: 38,
    height: 30,
    backgroundColor: COLORS.white,
    borderRadius: 10,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2,
    elevation: 3,
  },
});
