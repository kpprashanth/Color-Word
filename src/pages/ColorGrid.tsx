import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Text,
  ActivityIndicator,
} from 'react-native';
import ColorCard from '../components/molecules/ColorCard';
import {Colors} from '../assets/theme';
import SearchBox from '../components/atoms/SearchBox';
import axios from 'axios';
import {scaleWidth} from '../utils/ScreenUtils';

export interface Props {
  color: string;
}
const ColorGrid: React.FC<Props> = (props) => {
  const {route} = props;
  const colorWord: string = route.params.color;

  const [color, setColor] = useState(colorWord);
  const [loader, setLoader] = useState(false);
  const [colorList, setColorList] = useState([]);
  const colums: number = 2;

  const onChangeColor = (newColor: string) => setColor(newColor);
  const onSearch = (color: string) => {
    setLoader(true);
    axios
      .get(`http://www.colr.org/json/tag/${color}`)
      .then(function (response) {
        // Parse Colors
        let relatedColors: object[] = [];
        response.data.colors &&
          response.data.colors.map((newColor: object, index: number) => {
            relatedColors.push({id: index, color: `#${newColor['hex']}`});
          });
        setColorList(relatedColors);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
        setLoader(false);
      });
  };
  useEffect(() => {
    onSearch(colorWord);
  }, [colorWord]);

  const renderItem = ({item}) => {
    return (
      <ColorCard
        color={item.color}
        style={{backgroundColor: item.color, margin: scaleWidth(15)}}
      />
    );
  };

  const renderElement = () => {
    if (loader) {
      return (
        <ActivityIndicator
          size="large"
          animating={loader}
          color="red"
          style={styles.loader}
        />
      );
    } else {
      if (colorList.length > 0) {
        return (
          <FlatList
            data={colorList}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            numColumns={colums}
            contentContainerStyle={styles.list}
          />
        );
      } else {
        return (
          <View style={styles.loader}>
            <Text>Nothing To Display</Text>
          </View>
        );
      }
    }
  };

  return (
    <View style={styles.root}>
      {renderElement()}
      <SearchBox
        style={styles.searchBox}
        onChange={onChangeColor}
        value={color}
        onSearh={() => onSearch(color)}
        placeHolder="Search for new word"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.blackThree,
  },
  loader: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.blackThree,
  },
  searchBox: {
    position: 'absolute',
    bottom: 30,
    alignSelf: 'center',
  },
  list: {
    alignItems: 'center',
  },
});

export default ColorGrid;
