/**
 * Sample React Native Navigator
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import * as React from 'react';
import {StyleSheet, Text, Image, Platform} from 'react-native';
import Home from '../../src/pages/Home';
import ColorGrid from '../../src/pages/ColorGrid';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import 'react-native-gesture-handler';
import Logo from '../../src/components/atoms/Logo';
import {scaleWidth} from '../../src/utils/ScreenUtils';

const Navigator: React.FC = () => {
  const Stack: any = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ColorAutumn">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Color Autumn"
          component={ColorGrid}
          options={{
            headerTitle: (props) =>
              Platform.OS === 'android' && (
                <Text style={styles.headerBackTitleStyle}>B A C K</Text>
              ),
            headerBackTitle: 'B A C K',
            headerBackImage: () => (
              <Image
                style={styles.searchIcon}
                source={require('../../src/assets/images/icons/back-icon.png')}
              />
            ),
            headerBackTitleStyle: styles.headerBackTitleStyle,
            headerRight: () => (
              <Logo
                primaryText="COLOR"
                secondaryText="AUTUMN"
                size={10}
                style={styles.headerRight}
              />
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
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

export default Navigator;
