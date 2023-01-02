import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Image,
  View,
  Dimensions,
  TouchableOpacity,
  Text,
} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {COLORS, IMGS, ROUTES} from '../constants';
import {useNavigation} from '@react-navigation/native';

const {width} = Dimensions.get('screen');

const CustomDrawer = props => {
  const navigation = useNavigation();
  const logout = () => {
    navigation.navigate(ROUTES.LOGIN);
  };

  return (
    <DrawerContentScrollView {...props}>
      <View style={{width: '100%', height: '100%'}}>
        <TouchableOpacity
          style={{marginTop: '250%', left: '5%'}}
          onPress={() => logout()}>
          <Text style={{fontSize: 20}}>Logout</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  userImg: {
    width: 110,
    height: 110,
    borderRadius: 110 / 2,
    position: 'absolute',
    left: width / 2 - 110,
    bottom: -110 / 2,
    borderWidth: 4,
    borderColor: COLORS.white,
  },
  drawerListWrapper: {
    marginTop: 65,
  },
});
