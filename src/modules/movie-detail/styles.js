import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import c from 'theme/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    width: wp(100),
    height: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: c.primary,
  },
});
