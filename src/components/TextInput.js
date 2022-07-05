import React from 'react';
import {TextInput as TextInputRn, View, StyleSheet} from 'react-native';
import colors from '../styles/colors';

const TextInput = props => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>{props.icon}</View>
      <TextInputRn
        style={styles.textInput}
        value={props.value}
        onChangeText={props.setValue}
        secureTextEntry={props.secureTextEntry}
        icon={props.icon}
        keyboardType={props.keyboardType}
        placeholder={props.placeholder}
        placeholderTextColor={colors.placeholderText}
        autoCapitalize={props.autoCapitalize}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    backgroundColor: colors.placeholder,
    flexDirection: 'row',
    borderRadius: 10,
  },
  iconContainer: {
    justifyContent: 'center',
    marginRight: 10,
  },
  textInput: {
    color: colors.black,
    fontFamily: 'Ubuntu-Bold',
    width: '100%',
  },
});
export default TextInput;
