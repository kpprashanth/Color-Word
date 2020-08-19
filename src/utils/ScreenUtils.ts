import {DESIGN_WIDTH, DESIGN_HEIGHT} from './constants';
import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export const scaleWidth = (viewWidth: number) => {
  return parseInt((width / DESIGN_WIDTH) * viewWidth + '', 10);
};
export const scaleWidthPx = (viewWidth: number) => {
  return `${parseInt((width / DESIGN_WIDTH) * viewWidth + '', 10)}px`;
};
export const scaleHeight = (viewHeight: number) => {
  return parseInt((height / DESIGN_HEIGHT) * viewHeight + '', 10);
};
export const scalingFactor = () => {
  const scaleFactor = width / DESIGN_WIDTH;
  return scaleFactor < 2.73 ? scaleFactor : 2.73; // 2.73 is used because on iPad-pro (12.9 inch) scaleFactor comes out to be 2.73
};
export const DEVICE_WIDTH = width;
export const DEVICE_HEIGHT = height;
