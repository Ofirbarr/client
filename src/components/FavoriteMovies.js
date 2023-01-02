import {View, Text, Image} from 'react-native';
import React from 'react';

const FavoriteMovies = props => {
  return (
    <View
      style={{
        width: '80%',
        height: '80%',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
      }}>
      <View>
        <Image
          source={props.Poster}
          style={{width: '100%', height: '100%', zIndex: 999}}
        />
      </View>
      <View
        style={{
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
        }}>
        <Text>{props.Type}</Text>
        <Text>{props.Title}</Text>
        <Text>{props.Id}</Text>
        <Text>{props.Year}</Text>
      </View>
    </View>
  );
};

export default FavoriteMovies;
