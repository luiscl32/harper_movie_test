import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import c from 'theme/colors';

export default StyleSheet.create({
  main: {
    flex: 1,
    width: wp(100),
    backgroundColor: c.secondary,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },

  movie_list_container: {
    flex: 1,
    width: wp(100),
    height: '100%',
    paddingVertical: 20,
    backgroundColor: c.primary,
    borderTopRightRadius: 18,
    borderTopLeftRadius: 18,
    position: 'absolute',
    top: hp(25),
  },
});
