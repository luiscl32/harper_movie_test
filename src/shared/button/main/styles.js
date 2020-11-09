import {StyleSheet} from 'react-native';
import {colors as c} from 'theme/colors';

export default StyleSheet.create({
  container: (alignS, color) => ({
    width: 'auto',
    heigh: 48,
    padding: 12,
    borderRadius: 8,
    backgroundColor: color,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    alignSelf: alignS,
  }),
});
