import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

export default StyleSheet.create({
  container: {
    width: wp(100),
    height: 'auto',
    paddingVertical: 10,
    backgroundColor: 'transparent',
    paddingHorizontal: 30,
  },
  search_container: {
    width: '100%',
    height: 43,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
});
