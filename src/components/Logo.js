import React from 'react';
import {Image, StyleSheet} from 'react-native';
import logo from '../../assets/png/logo.png';

const Logo = () => {
  return <Image style={styles.container} source={logo} />;
};
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});
export default Logo;
