import {StyleSheet, ImageBackground, Text, View} from 'react-native';
import React from 'react';
import {COLORS} from '../../constants';

const Favorites = () => {
  return (
    <ImageBackground
      source={require('../../assets/bgImg.png')}
      style={{width: '100%', height: '100%', shadowOpacity: -5}}>
      <View style={{flex: 1, backgroundColor: 'rgba(0,0,0,0.7)'}}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text>Favorites!</Text>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Favorites;
