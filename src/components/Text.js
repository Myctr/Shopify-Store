import React from 'react';
import {Text as TextRn, StyleSheet} from 'react-native';

const Text = props => {
  const styles = StyleSheet.create({
    container: {
      fontFamily: props.fontFamily,
      color: props.color,
      fontSize: props.fontSize,
      lineHeight: props.lineHeight,
    },
  });
  return <TextRn style={styles.container}>{props.children}</TextRn>;
};

export default Text;
