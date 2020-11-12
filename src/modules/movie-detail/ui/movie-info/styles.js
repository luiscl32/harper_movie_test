import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

export default StyleSheet.create({
  container: {
    width: wp(100),
    height: 'auto',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: 'transparent',
  },

  wrapper: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
