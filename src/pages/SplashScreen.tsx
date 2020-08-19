import React from 'react';
import {View, StyleSheet} from 'react-native';
import Logo from '../components/atoms/Logo';

const SplashScreen: React.FC = () => {
  return (
    <View style={styles.root}>
      <Logo primaryText="COLOR" secondaryText="WORD" size={20} />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
});

export default SplashScreen;
