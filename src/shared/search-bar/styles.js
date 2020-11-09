import {StyleSheet} from 'react-native';
import c from 'theme/colors';

export default StyleSheet.create({
  container: {
    width: '100%',
    height: 43,
    borderRadius: 30,
    backgroundColor: c.sky_blue,
    overflow: 'hidden',
    paddingHorizontal: 5,
  },

  wrapper: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },

  icon_container: {
    flex: 0.5,
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },

  input_container: {
    flex: 4,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
});
