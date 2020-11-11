import {StyleSheet} from 'react-native';
import {colors as c} from 'theme/colors';

export default StyleSheet.create({
  container: (alignS, color, radius, mt) => ({
    width: 'auto',
    heigh: 48,
    padding: 12,
    borderRadius: radius,
    backgroundColor: color,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: mt,
    alignSelf: alignS,
  }),
});
