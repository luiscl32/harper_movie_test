import React from 'react';
import {Text as RNText} from 'react-native';
import {_getFont} from './handler';
import s from './styles';

export default function Text({
  size = 18,
  color = '#000',
  type = 'regular',
  align = 'center',
  mt = 0,
  mb = 0,
  mr = 0,
  ml = 0,
  lineHeight = 1.5,
  letterSpacing = 1,
  numberOfLines = 2,
  children,
}) {
  return (
    <RNText
      allowFontScaling={false}
      numberOfLines={numberOfLines}
      style={s.font(
        size,
        _getFont(type),
        color,
        align,
        mt,
        mb,
        mr,
        ml,
        letterSpacing,
        lineHeight,
      )}>
      {children}
    </RNText>
  );
}
