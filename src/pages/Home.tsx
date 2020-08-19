import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import Logo from '../components/atoms/Logo';
import SearchBox from '../components/atoms/SearchBox';

const Home: React.FC = (props: object) => {
  const {navigation} = props;
  const [color, setColor] = useState('');
  const onChangeColor = (newColor: string) => setColor(newColor);
  const onSearch = () => navigation.navigate('Color Autumn', {color: color});
  return (
    <View style={styles.root}>
      <Logo
        primaryText="COLOR"
        secondaryText="WORD"
        size={20}
        style={styles.logo}
      />
      <SearchBox
        onChange={onChangeColor}
        value={color}
        onSearh={onSearch}
        placeHolder="Autumn"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: Colors.blackThree,
  },
  logo: {marginBottom: 20},
});

export default Home;
