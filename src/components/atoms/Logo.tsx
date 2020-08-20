import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {scaleWidth} from '../../utils/ScreenUtils';

export interface Props {
  primaryText: string;
  secondaryText: string;
  size: number;
  style?: object;
}

const applyLetterSpacing = (text: string, spaceCount: number) => {
  return text.split('').join(' '.repeat(spaceCount)) + ' ';
};

const Logo: React.FC<Props> = (props) => {
  const {primaryText, secondaryText, size, style} = props;
  return (
    <View style={[styles.defaultStyle, style]}>
      <Text style={[styles.primaryText, {fontSize: scaleWidth(size)}]}>
        {applyLetterSpacing(primaryText, 3)}
      </Text>
      <Text style={[styles.secondaryText, {fontSize: scaleWidth(size)}]}>
        {applyLetterSpacing(secondaryText, 1)}
      </Text>
    </View>
  );
};

export default Logo;

//Styles
const styles = StyleSheet.create({
  defaultStyle: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  primaryText: {
    fontSize: scaleWidth(20),
  },
  secondaryText: {
    fontSize: scaleWidth(20),
    fontWeight: 'bold',
  },
});
