import {ImageBackground, Text, View, ScrollView} from 'react-native';
import React, {useEffect} from 'react';
import {COLORS} from '../../constants';
import store from '../../redux/Store/store';
import BigMovies from '../../components/BigMovies';
import SingleFavorite from '../../components/SingleFavorite';
import {useDispatch, useSelector} from 'react-redux';
import {moviesSlice} from '../../redux/Reducers/MovieSlice';
import {useFocusEffect, useIsFocused} from '@react-navigation/native';
// const focused = useIsFocused;
const Favorites = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const resetNotificationBadge = () => {
      dispatch(moviesSlice.actions.setFavoritesNotificationBadge(0));
    };
    console.log('hello');
    resetNotificationBadge();
  }, []);

  const favoriteMovies = useSelector(state => state.moviesSlice.favorties);

  // const badge = useSelector(
  //   state => state.moviesSlice.favoritesNotificationBadge,
  // );

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
