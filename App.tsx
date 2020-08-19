/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import * as React from 'react';
import {StyleSheet, View, Text, Image, Platform} from 'react-native';
import {Colors} from './src/assets/theme';
import Home from './src/pages/Home';
import ColorGrid from './src/pages/ColorGrid';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import 'react-native-gesture-handler';
import Logo from './src/components/atoms/Logo';
import {scaleWidth} from './src/utils/ScreenUtils';
import SplashScreen from 'react-native-splash-screen';
import Navigator from './src/navigations';

export interface Props {
  name: string;
  enthusiasmLevel?: number;
}

const App: React.FC<Props> = () => {
  React.useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <View style={styles.container}>
      <Navigator />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    margin: 0,
  },
  headerRight: {marginRight: 10, alignItems: 'flex-end'},
  searchIcon: {
    width: 40,
    height: 40,
    marginRight: scaleWidth(10),
  },
  headerBackTitleStyle: {
    color: 'black',
    fontWeight: 'bold',
  },
});

export default App;
