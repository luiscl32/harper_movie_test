import React from 'react';
import {Pressable} from 'react-native';
import Text from 'shared/text';
import s from './styles';
import {colors as c} from 'theme/colors';
import {ripple_config} from 'utils/ripple-config';

export default function MainButton({
  title,
  align = 'center',
  color = '#2d2d2d',
  textColor = '#fff',
  onPress = () => {},
  radius = 8,
  mt = 20,
  textSize = 16,
}) {
  return (
    <Pressable
      android_ripple={ripple_config}
      style={s.container(align, color, radius, mt)}
      onPress={onPress}>
      <Text
        size={textSize}
        color={`${textColor}`}
        type={'medium'}
        align={'center'}>
        {title}
      </Text>
    </Pressable>
  );
}
