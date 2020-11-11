import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import c from 'theme/colors';

export default StyleSheet.create({
  container: {
    width: wp(100),
    height: hp(40),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: c.secondary,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    overflow: 'hidden',
  },

  backgroundImage: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    resizeMode: 'contain',
  },

  header: {
    width: '100%',
    height: 43,
    backgroundColor: 'transparent',
    marginTop: 30,
    paddingHorizontal: 10,
  },

  filler: {
    flex: 1,
  },

  wrapper: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  icon: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
