import {View, Image} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import store from '../redux/Store/store';
import {moviesSlice} from '../redux/Reducers/MovieSlice';
import {useSelector} from 'react-redux';

const SmallMovies = props => {
  const badge = useSelector(
    state => state.moviesSlice.favoritesNotificationBadge,
  );
  const addToFavorites = () => {
    store.dispatch(moviesSlice.actions.setFavorites(props));
    store.dispatch(
      moviesSlice.actions.setFavoritesNotificationBadge(badge + 1),
    );
    console.log(props);
  };
  const description = async () => {
    store.dispatch(moviesSlice.actions.setSelected(props));
    const selected = store.getState().moviesSlice.selected;
    console.log({selected});
  };

  return (
    <View style={{display: 'flex', flexDirection: 'column'}}>
      <TouchableOpacity onPress={() => description()}>
        <Image
          source={{uri: props.Poster}}
          resizeMode={'cover'}
          style={{width: 125, height: 150}}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: 'gray',
          width: 125,
          height: 30,
          alignItems: 'center',
        }}
        onPress={() => addToFavorites()}>
        <Image
          style={{width: 30, height: 30}}
          source={require('../assets/favorite.png')}></Image>
      </TouchableOpacity>
    </View>
  );
};

export default SmallMovies;
