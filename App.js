import React, {useEffect} from 'react';
import {SafeAreaView, Text} from 'react-native';
import {DrawerActions, NavigationContainer} from '@react-navigation/native';
import {Provider, useDispatch, useSelector} from 'react-redux';
import AuthNavigator from './src/navigations/AuthNavigator';

import store from './src/redux/Store/store';
import {moviesSlice} from './src/redux/Reducers/MovieSlice';

export default function App() {
  const superUrl = 'http://www.omdbapi.com/?s=super&type=movie&apikey=71ec1768';

  const spiderUrl =
    'http://www.omdbapi.com/?s=spider&type=movie&apikey=71ec1768';

  const getSuperMovies = async () => {
    try {
      const response = await fetch(superUrl);
      const json = await response.json();
      store.dispatch(moviesSlice.actions.setSuperMovies(json.Search));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getSuperMovies();
  }, []);
  const getSpiderMovies = async () => {
    try {
      const response = await fetch(spiderUrl);
      const json = await response.json();
      store.dispatch(moviesSlice.actions.setSpiderMovies(json.Search));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getSpiderMovies();
  }, []);

  return (
    <Provider store={store}>
      <NavigationContainer>
        {/* {isAuthenticated ? AuthNavigator : DrawerNavigator } */}
        <AuthNavigator />
      </NavigationContainer>
    </Provider>
  );
}
