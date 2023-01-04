import {View, Text, Image} from 'react-native';
import React, {useEffect} from 'react';
import store from '../redux/Store/store';

const BigMovies = () => {
  const selected = store.getState().moviesSlice.selected;
  const getSelectedMovie = async () => {
    console.log(selected);
    return selected;
  };
  useEffect(() => {
    getSelectedMovie();
  }, []);

  console.log('IN BIG MOVIES');
  return (
    <View style={{flexDirection: 'row'}}>
      <View style={{flex: 1}}>
        <Image
          source={{uri: selected?.Poster}}
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
          <Text style={{color: 'white', fontSize: 24}}>{selected?.Title}</Text>
        </View>
        <View style={{justifyContent: 'center'}}>
          <Text style={{color: 'white', fontSize: 20}}>
            Year:
            {selected?.Year}
          </Text>
          <Text style={{color: 'white', fontSize: 20}}>
            imdbID:
            {selected?.imdbID}
          </Text>
          <Text style={{color: 'white', fontSize: 20}}>
            Type:
            {selected?.Type}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default BigMovies;
