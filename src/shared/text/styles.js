import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  font: (size, type, color, align, mt, mb, mr, ml, letterSpacing) => ({
    fontSize: size,
    color: color,
    fontFamily: type,
    textAlign: align,
    marginTop: mt,
    marginBottom: mb,
    marginRight: mr,
    marginLeft: ml,
    letterSpacing: letterSpacing,
  }),
});
