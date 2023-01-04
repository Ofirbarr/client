import {
  Text,
  ImageBackground,
  View,
  ScrollView,
  SafeAreaView,
  TextInput,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import store from '../../redux/Store/store';
import SmallMovies from '../../components/SmallMovies';
import BigMovies from '../../components/BigMovies';
import {useDispatch, useSelector} from 'react-redux';
import {setFilter} from '../../redux/Reducers/MovieSlice';

const Home = () => {
  const {height, width} = Dimensions.get('window');

  const selectedMovie = useSelector(state => state.moviesSlice.selected);

  const dispatch = useDispatch();

  const filter = useSelector(state => state.moviesSlice.filter);
  const superMovies = store.getState().moviesSlice.superMovies;
  const spiderMovies = store.getState().moviesSlice.spiderMovies;

  // const searchUrl = `http://www.omdbapi.com/?s=${filter}&type=movie&apikey=71ec1768`;

  // let search = [];
  // let selected;
  // const getSelectedMovie = async () => {
  //   selected = store.getState().moviesSlice.selected;
  //   return selected;
  // };

  // const searchMovie = async () => {
  //   try {
  //     const response = await fetch(searchUrl);
  //     const json = await response.json();
  //     search.push(json.Search);
  //     console.log(search);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  // useEffect(() => {
  //   searchMovie();
  // }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      <ImageBackground
        source={require('../../assets/bgImg.png')}
        style={{width: '100%', height: '100%', shadowOpacity: -5}}>
        <View style={{flex: 1, backgroundColor: 'rgba(0,0,0,0.7)'}}>
          <TextInput
            placeholder="Search for a movie"
            onChange={e => dispatch(setFilter(e.target.value))}
            value={filter}
            style={{
              width: width * 0.9,
              height: height * 0.06,
              border: 'solid',
              borderColor: 'black',
              borderWidth: 2,
              backgroundColor: 'white',
              fontSize: 20,
            }}
            onSubmitEditing={() => {
              Keyboard.dismiss();
            }}
          />
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'flex-start',
            }}>
            <Text style={{color: 'white', fontSize: 20, position: 'absolute'}}>
              Recommended Movies
            </Text>
            <ScrollView nestedScrollEnabled horizontal={true}>
              {superMovies.map((movie, i) => {
                return (
                  <View key={i} style={{paddingTop: 35, paddingRight: 10}}>
                    <SmallMovies
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
          <View
            style={{
              flex: 1,
            }}>
            <View>
              <Text
                style={{color: 'white', fontSize: 20, position: 'absolute'}}>
                Movie Description
              </Text>
            </View>
            {selectedMovie && (
              <View style={{paddingTop: 25, paddingRight: 10}}>
                <BigMovies
                  Poster={selectedMovie.Poster}
                  Title={selectedMovie.Title}
                  Year={selectedMovie.Year}
                  Id={selectedMovie.imdbID}
                  Type={selectedMovie.Type}
                />
              </View>
            )}
          </View>

          <View
            style={{
              flex: 1,
              alignItems: 'flex-start',
            }}>
            <Text style={{color: 'white', fontSize: 20}}>New Movies</Text>
            <ScrollView nestedScrollEnabled horizontal={true}>
              {spiderMovies.map((movie, i) => {
                return (
                  <View key={i} style={{paddingTop: 10, paddingRight: 10}}>
                    <SmallMovies
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
    </SafeAreaView>
  );
};

export default Home;
