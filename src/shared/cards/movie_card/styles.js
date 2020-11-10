import {StyleSheet} from 'react-native';
import c from 'theme/colors';

export default StyleSheet.create({
  btn_container: {
    width: 160,
    height: 270,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 0,
  },

  container: {
    width: 160,
    height: 270,
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
    backgroundColor: c.light_gray,
  },

  img: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },

  column_wrapper: {
    width: '100%',
    height: 270,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },

  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  star_container: {
    width: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-start',
  },

  starIcon: {
    width: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    marginHorizontal: 1,
  },
});
