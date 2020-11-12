import {StyleSheet} from 'react-native';
import c from 'theme/colors';

export default StyleSheet.create({
  btn_container: {
    width: 160,
    height: 290,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 0,
  },

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

  text_container: {
    width: '100%',
    height: 30,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginVertical: 10,
    paddingHorizontal: 3,
  },

  star_container: {
    width: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-start',
    marginTop: 10,
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
