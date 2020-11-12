import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import c from 'theme/colors';

export default StyleSheet.create({
  container: {
    width: wp(100),
    height: 'auto',

    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: 'transparent',
  },

  wrapper: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  actor_container: {
    width: 60,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },

  actor_photo: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: c.light_gray,
    overflow: 'hidden',
  },

  photo: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});
