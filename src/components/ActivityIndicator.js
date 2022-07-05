import React from 'react';
import {
  ActivityIndicator as ActivityIndicatorRn,
  StyleSheet,
} from 'react-native';
import colors from '../styles/colors';

const ActivityIndicator = () => {
  return (
    <ActivityIndicatorRn
      style={styles.container}
      color={colors.black}
      size="large"
    />
  );
};
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    zIndex: 1,
  },
});

export default ActivityIndicator;
