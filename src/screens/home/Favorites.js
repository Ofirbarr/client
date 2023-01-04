import {ImageBackground, Text, View, ScrollView} from 'react-native';
import React, {useEffect} from 'react';
import {COLORS} from '../../constants';
import store from '../../redux/Store/store';
import BigMovies from '../../components/BigMovies';
import SingleFavorite from '../../components/SingleFavorite';
import {useSelector} from 'react-redux';
import {moviesSlice} from '../../redux/Reducers/MovieSlice';

const Favorites = () => {
  const badge = 0;
  const resetNotificationBadge = () => {
    store.dispatch(moviesSlice.actions.setFavoritesNotificationBadge(badge));
  };
  const favoriteMovies = useSelector(state => state.moviesSlice.favorties);

  useEffect(() => {
    resetNotificationBadge();
  }, []);

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
            {favoriteMovies.map((movie, i) => {
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
