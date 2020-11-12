import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: (color) => ({
    width: '100%',
    paddingHorizontal: 10,
    backgroundColor: color,
  }),

  input: (color) => ({
    width: '100%',
    height: 43,
    color: color,
  }),
});
