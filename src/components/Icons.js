import {View, Text} from 'react-native';
import React from 'react';
import {HomeIcon} from './HomeIcon';
import {FavoritesIcon} from './FavoritesIcons';

const Icons = name => {
  return <View>{(name = 'home' ? <HomeIcon /> : <FavoritesIcon />)}</View>;
};

export default Icons;
