import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import c from 'theme/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    width: wp(100),
    backgroundColor: c.dark_gray,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
