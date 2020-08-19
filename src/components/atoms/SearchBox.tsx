import React from 'react';
import {
  TextInput,
  StyleSheet,
  View,
  Image,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import {Colors, Fonts} from '../../assets/theme';
import {scaleWidth} from '../../utils/ScreenUtils';

export interface Props {
  onChange(text: string): any;
  value: string;
  onSearh(): any;
  style?: object;
  placeHolder?: string;
}

const SearchBox: React.FC<Props> = (props) => {
  const {onChange, value, onSearh, style, placeHolder} = props;

  return (
    <View style={[styles.root, style]}>
      <TextInput
        style={styles.textInput}
        placeholder={placeHolder}
        value={value}
        onChangeText={(text: string) => onChange(text)}
      />
      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={onSearh}>
          <Image
            style={styles.searchIcon}
            source={require('../../assets/images/icons/search-icon.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    width: scaleWidth(267),
    height: scaleWidth(46),
    backgroundColor: Colors.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 5,
    borderRadius: scaleWidth(50),
    elevation: 6,
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    height: scaleWidth(46),
    backgroundColor: '#402C92',
    marginLeft: 'auto',
    borderTopRightRadius: scaleWidth(50),
    borderBottomRightRadius: scaleWidth(50),
    justifyContent: 'center',
  },
  searchIcon: {
    width: 25,
    height: 25,
    margin: scaleWidth(10),
  },
  textInput: {
    marginLeft: scaleWidth(20),
    fontSize: Fonts.Size.Large,
  },
});

export default SearchBox;
