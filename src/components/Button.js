import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import colors from '../styles/colors';

const Button = props => {
  const styles = StyleSheet.create({
    container: {
      height: 50,
      backgroundColor: props.bgColor,
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      {props.children}
    </TouchableOpacity>
  );
};

export default Button;
