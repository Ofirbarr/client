import {View, Text, Image} from 'react-native';
import React, {useEffect} from 'react';
import store from '../redux/Store/store';

const SingleFavorite = favorite => {
  //   const favorite = store.getState().moviesSlice.favorties;
  //   console.log(favorite);
  //   const getFavoriteMovie = async () => {
  //     return favorite;
  //   };
  //   useEffect(() => {
  //     getFavoriteMovie();
  //   }, []);

  console.log('IN SINGLE FAV');
  return (
    <View style={{flexDirection: 'row'}}>
      <View style={{flex: 1}}>
        <Image
          source={{uri: favorite?.Poster}}
          //   resizeMode={'cover'}
          style={{width: 180, height: 200}}
        />
      </View>
      <View
        style={{
          backgroundColor: 'gray',
          flex: 1,
          // flexDirection: 'column',
          // justifyContent: 'flex-start',
          // alignItems: 'flex-start',
        }}>
        <View style={{alignItems: 'center', marginBottom: 30}}>
          <Text style={{color: 'white', fontSize: 24}}>{favorite?.Title}</Text>
        </View>
        <View style={{justifyContent: 'center'}}>
          <Text style={{color: 'white', fontSize: 20}}>
            Year:
            {favorite?.Year}
          </Text>
          <Text style={{color: 'white', fontSize: 20}}>
            imdbID:
            {favorite?.Id}
          </Text>
          <Text style={{color: 'white', fontSize: 20}}>
            Type:
            {favorite?.Type}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default SingleFavorite;
