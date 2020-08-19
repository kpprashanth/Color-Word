import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Colors} from '../../assets/theme';
import {scaleWidth} from '../../utils/ScreenUtils';

export interface Props {
  color: string;
  style?: object;
}

const ColorCard: React.FC<Props> = (props) => {
  const {color, style} = props;

  return (
    <View style={[styles.root, style]}>
      <View style={styles.textContainer}>
        <Text> {color}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    width: scaleWidth(140),
    height: scaleWidth(120),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 5,
    borderRadius: scaleWidth(10),
    elevation: 6,
    flexDirection: 'column',
    alignItems: 'center',
    margin: scaleWidth(5),
  },
  textContainer: {
    backgroundColor: Colors.white,
    borderBottomRightRadius: scaleWidth(10),
    borderBottomLeftRadius: scaleWidth(10),
    marginTop: 'auto',
    width: '100%',
    padding: scaleWidth(10),
    alignItems: 'center',
  },
});

export default ColorCard;
