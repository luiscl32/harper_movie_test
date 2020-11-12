import {StyleSheet} from 'react-native';
import c from 'theme/colors';

export default StyleSheet.create({
  container: {
    width: 160,
    height: 290,
    backgroundColor: 'transparent',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },

  img_container: {
    width: '100%',
    height: 200,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },

  column_wrapper: {
    width: '100%',
    height: 290,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
});
