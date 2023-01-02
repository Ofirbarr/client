import {StyleSheet, Text, ImageBackground, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import SmallMovies from '../../components/SmallMovies';

const Home = () => {
  const [superMovies, setSuperMovies] = useState([{}]);
  const [spiderMovies, setSpiderMovies] = useState([{}]);

  const superUrl = 'http://www.omdbapi.com/?s=super&type=movie&apikey=71ec1768';
  const spiderUrl =
    'http://www.omdbapi.com/?s=spider&type=movie&apikey=71ec1768';

  useEffect(() => {
    fetch(superUrl)
      .then(response => response.json())
      .then(json => setSuperMovies(json.Search))
      .catch(error => console.log(error));
    return () => {};
  }, []);
  useEffect(() => {
    fetch(spiderUrl)
      .then(response => response.json())
      .then(json => setSpiderMovies(json.Search))
      .catch(error => console.log(error));
  }, []);

  console.log(superMovies);
  console.log(spiderMovies);
  return (
    <ImageBackground
      source={require('../../assets/bgImg.png')}
      style={{width: '100%', height: '100%', shadowOpacity: -5}}>
      <View style={{flex: 1, backgroundColor: 'rgba(0,0,0,0.7)'}}>
        <View
          style={{
            flex: 1,
            alignItems: 'flex-start',
          }}>
          <Text style={{color: 'white', fontSize: 20}}>Recommended Movies</Text>
          {superMovies.map((movie, i) => {
            return (
              <SmallMovies
                key={i}
                Poster={movie.Poster}
                Title={movie.Title}
                Year={movie.Year}
                Id={movie.imdbID}
                Type={movie.type}
              />
            );
          })}
        </View>
        <View
          style={{
            flex: 1,
            alignItems: 'flex-start',
          }}>
          <Text style={{color: 'white', fontSize: 20}}>Movie Description</Text>
        </View>
        <View
          style={{
            flex: 1,
            alignItems: 'flex-start',
          }}>
          <Text style={{color: 'white', fontSize: 20}}>New Movies</Text>
          {spiderMovies.map((movie, i) => {
            return (
              <SmallMovies
                key={i}
                Poster={movie.Poster}
                Title={movie.Title}
                Year={movie.Year}
                Id={movie.imdbID}
                Type={movie.type}
              />
            );
          })}
        </View>
      </View>
    </ImageBackground>
  );
};

export default Home;
