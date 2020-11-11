import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

export default StyleSheet.create({
  container: {
    width: wp(100),
    height: 'auto',
    marginTop: 20,
    backgroundColor: 'transparent',
    paddingHorizontal: 20,
  },

  wrapper: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  filler: {
    flex: 1,
    width: '100%',
  },

  rating_container: {
    width: 100,
    height: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    marginRight: 20,
  },

  starIcon: {
    width: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 1,
  },
});
