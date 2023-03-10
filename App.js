import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import AuthNavigator from './src/navigations/AuthNavigator';

import store from './src/redux/Store/store';
import {moviesSlice} from './src/redux/Reducers/MovieSlice';

export default function App() {
  const superUrl = 'http://www.omdbapi.com/?s=super&type=movie&apikey=6049b78c';

  const spiderUrl =
    'http://www.omdbapi.com/?s=spider&type=movie&apikey=6049b78c';

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
      console.log(json);
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
        <AuthNavigator />
      </NavigationContainer>
    </Provider>
  );
}
