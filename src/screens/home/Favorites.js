import {
  StyleSheet,
  ImageBackground,
  Text,
  View,
  ScrollView,
} from 'react-native';
import React, {useEffect} from 'react';
import {COLORS} from '../../constants';
import store from '../../redux/Store/store';
import BigMovies from '../../components/BigMovies';
import SingleFavorite from './SingleFavorite';

const Favorites = () => {
  const favorite = store.getState().moviesSlice.favorties;
  const getFavoriteMovies = async () => {
    console.log(favorite);
    return favorite;
  };

  useEffect(() => {
    getFavoriteMovies();
  }, [favorite]);
  console.log('IN FAVORITES');
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
          <ScrollView nestedScrollEnabled horizontal={false}>
            {favorite.map((movie, i) => {
              return (
                <View
                  key={i}
                  style={{
                    paddingTop: 35,
                    width: 400,
                    heigh: 400,
                    paddingRight: 10,
                    flex: 1,
                  }}>
                  <SingleFavorite
                    favorite={favorite}
                    Poster={movie.Poster}
                    Title={movie.Title}
                    Year={movie.Year}
                    Id={movie.imdbID}
                    Type={movie.Type}
                  />
                </View>
              );
            })}
          </ScrollView>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Favorites;
