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
    justifyContent: 'flex-start',

    paddingTop: 30,
  },

  movie_list_container: (theme) => ({
    flex: 1,
    width: wp(100),
    height: '100%',
    paddingTop: 40,
    backgroundColor: theme ? c.primary : c.white,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    marginTop: 40,
  }),

  scroll: {
    flex: 1,
    width: '100%',
  },

  btn: {
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-end',
    marginRight: 20,
  },
});
