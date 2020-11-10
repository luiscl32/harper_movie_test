import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

export default StyleSheet.create({
  container: {
    width: wp(100),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
});
