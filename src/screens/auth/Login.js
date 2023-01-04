import {StatusCodes} from 'http-status-codes';
import React from 'react';
import {ROUTES} from '../../constants';
import {Controller, useForm} from 'react-hook-form';
import {useNavigation} from '@react-navigation/native';
import {
  Dimensions,
  ImageBackground,
  Keyboard,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import store from '../../redux/Store/store';

const Login = () => {
  const {height, width} = Dimensions.get('window');
  const navigation = useNavigation();

  const {
    control,
    handleSubmit,
    formState: {errors, isSubmitted, isValid},
  } = useForm({
    criteriaMode: 'all',
    mode: 'onChange',
    defaultValues: {
      username: '',
      password: '',
    },
  });
  const onSubmit = data => {
    console.log({data});
    store.dispatch(userSlice.actions.setIsLoggedIn(true));
    navigation.navigate(ROUTES.HOME);
  };
  return (
    <ImageBackground
      source={require('../../assets/bgImg.png')}
      style={{width: '100%', height: '100%', shadowOpacity: -5}}>
      <View style={{flex: 1, backgroundColor: 'rgba(0,0,0,0.7)'}}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: 65,
                color: 'red',
                fontWeight: 'bold',
                marginBottom: 50,
                marginTop: 50,
              }}>
              Menora Flix
            </Text>
          </View>
          <View style={{left: '5%'}}>
            <Text style={{color: 'white', fontSize: 30, marginBottom: 30}}>
              Login
            </Text>
            <View>
              <Controller
                control={control}
                rules={{
                  required: true,
                  minLength: 8,
                  pattern: /[A-z]/,
                }}
                render={({field: {onChange, onBlur, value}}) => (
                  <TextInput
                    placeholder="Username"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value.toLowerCase()}
                    placeholderTextColor={errors.username && 'grey'}
                    style={{
                      width: width * 0.9,
                      height: height * 0.07,
                      border: 'solid',
                      borderColor: 'black',
                      borderWidth: 2,
                      backgroundColor: '#444',
                      marginBottom: 20,
                      paddingBottom: 30,
                    }}
                    onSubmitEditing={() => {
                      Keyboard.dismiss();
                    }}
                  />
                )}
                name="username"
              />
              {errors.username && (
                <Text
                  style={{
                    fontSize: 15,
                    color: 'red',
                    position: 'absolute',
                    top: height * 0.066,
                    left: 15,
                  }}>
                  Minimum 8 Letters.
                </Text>
              )}
              <Controller
                control={control}
                rules={{
                  required: true,
                  minLength: 6,
                  pattern: /\S/,
                }}
                render={({field: {onChange, onBlur, value}}) => (
                  <TextInput
                    secureTextEntry={true}
                    placeholder="password"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value.toLowerCase()}
                    placeholderTextColor={errors.password && 'grey'}
                    style={{
                      width: width * 0.9,
                      height: height * 0.07,
                      border: 'solid',
                      borderColor: 'black',
                      borderWidth: 2,
                      backgroundColor: '#444',
                      paddingBottom: 30,
                    }}
                    onSubmitEditing={() => {
                      Keyboard.dismiss();
                    }}
                  />
                )}
                name="password"
              />
              {errors.password && (
                <Text
                  style={{
                    fontSize: 15,
                    color: 'red',
                    position: 'absolute',
                    top: height * 0.17,
                    left: 20,
                  }}>
                  Minimum 6 Characters.
                </Text>
              )}
            </View>
            <TouchableOpacity onPress={handleSubmit(onSubmit)}>
              <View
                style={{
                  justifyContent: 'center',
                  width: width * 0.9,
                  height: height * 0.08,
                  marginTop: 60,
                  borderColor: 'red',
                  borderWidth: 2,
                  backgroundColor: 'red',
                  borderRadius: 25,
                }}>
                <Text
                  style={{
                    color: 'white',
                    textAlign: 'center',
                    fontSize: 20,
                  }}>
                  Login
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Login;
